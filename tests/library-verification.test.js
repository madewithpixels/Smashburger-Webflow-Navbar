import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import test from 'node:test';
import { JSDOM } from 'jsdom';
import { assertLibraryVerificationLoader, createLibraryVerificationLoader,
  readPinnedArtifact, verificationCommit } from '../scripts/library-verification.mjs';

const root = resolve(import.meta.dirname, '..');
const loaderPath = 'candidate/webflow/library/navbar-light-cdn-candidate-loader.html';
const read = path => readFile(resolve(root, path), 'utf8');
const hash = bytes => `sha384-${createHash('sha384').update(bytes).digest('base64')}`;

test('Library verification loader authenticates both exact pinned Git blobs', async () => {
  assert.equal(verificationCommit, 'ddb83c79934914ef0f03f3f012ee2743154153f7');
  const loader = await read(loaderPath);
  assertLibraryVerificationLoader(loader);
  const dom = new JSDOM(loader);
  try {
    for (const [kind, extension, attribute] of [['css', 'css', 'href'], ['javascript', 'js', 'src']]) {
      const node = dom.window.document.querySelector(`[data-mwp-navbar-light-cdn="${kind}"]`);
      const path = `candidate/dist/navbar-light.min.${extension}`;
      const bytes = execFileSync('git', ['show', `${verificationCommit}:${path}`], {
        cwd: root, env: { ...process.env, GIT_NO_LAZY_FETCH: '1', GIT_NO_REPLACE_OBJECTS: '1' }
      });
      assert.equal(node.getAttribute('integrity'), hash(bytes));
      assert.ok(node.getAttribute(attribute).endsWith(`@${verificationCommit}/${path}`));
    }
    assert.ok(loader.endsWith(createLibraryVerificationLoader('0.3.0-rc.1')));
    assert.match(loader, /Predates the overlapping-overlay scroll-lock fix/);
  } finally {
    dom.window.close();
  }
});

for (const kind of ['css', 'javascript']) {
  test(`Library verification rejects a deliberately mismatched ${kind} integrity value`, async () => {
    const dom = new JSDOM(await read(loaderPath));
    try {
      dom.window.document.querySelector(`[data-mwp-navbar-light-cdn="${kind}"]`)
        .setAttribute('integrity', `sha384-${Buffer.alloc(48).toString('base64')}`);
      assert.throws(() => assertLibraryVerificationLoader(dom.serialize()),
        new RegExp(`Library verification ${kind}: integrity does not match pinned Git bytes`));
    } finally {
      dom.window.close();
    }
  });
}

test('illustrative loader remains tied to current candidate bytes and proposed tag URLs', async () => {
  const proposal = await read('candidate/webflow/navbar-light-cdn-loader.html');
  const dom = new JSDOM(proposal);
  try {
    for (const [kind, extension, attribute] of [['css', 'css', 'href'], ['javascript', 'js', 'src']]) {
      const node = dom.window.document.querySelector(`[data-mwp-navbar-light-cdn="${kind}"]`);
      assert.equal(node.getAttribute('integrity'), hash(await readFile(resolve(root, `candidate/dist/navbar-light.min.${extension}`))));
      assert.ok(node.getAttribute(attribute).endsWith(`@v0.3.0-rc.1/dist/navbar-light.min.${extension}`));
    }
    assert.match(proposal, /Do not install in Webflow/);
    assert.ok(!proposal.includes(verificationCommit));
    // Reproduce the original bug by putting today's JS hash on the older pin.
    const pinned = new JSDOM(await read(loaderPath));
    try {
      pinned.window.document.querySelector('script').setAttribute('integrity',
        dom.window.document.querySelector('script').getAttribute('integrity'));
      assert.throws(() => assertLibraryVerificationLoader(pinned.serialize()), /javascript: integrity does not match/);
    } finally {
      pinned.window.close();
    }
  } finally {
    dom.window.close();
  }
});

test('missing pinned artifact reports the local Git path without a fallback', () => {
  assert.throws(() => readPinnedArtifact('candidate/dist/not-an-artifact.js'), error => {
    assert.ok(error.message.includes(`${verificationCommit}:candidate/dist/not-an-artifact.js`));
    assert.match(error.message, /unavailable in local Git objects/);
    assert.match(error.message, /No network or current-source fallback/);
    return true;
  });
});

test('Library build fails before writing outputs when pinned Git objects are unavailable', async () => {
  const emptyObjects = await mkdtemp(resolve(tmpdir(), 'smashburger-empty-objects-'));
  const paths = [loaderPath, 'candidate/webflow/library/navbar-light-embed.html',
    'candidate/webflow/library/navbar-light-canvas-embed.html'];
  const before = await Promise.all(paths.map(read));
  try {
    const result = spawnSync(process.execPath, ['scripts/build-webflow-library-candidates.mjs'], {
      cwd: root, encoding: 'utf8', timeout: 10000,
      env: { ...process.env, GIT_OBJECT_DIRECTORY: emptyObjects,
        GIT_ALTERNATE_OBJECT_DIRECTORIES: '', GIT_NO_LAZY_FETCH: '1' }
    });
    assert.equal(result.error, undefined);
    assert.equal(result.status, 1);
    assert.match(result.stderr, /Library verification artifact unavailable in local Git objects/);
    assert.ok(result.stderr.includes(`${verificationCommit}:candidate/dist/navbar-light.min.css`));
    assert.deepEqual(await Promise.all(paths.map(read)), before);
  } finally {
    await rm(emptyObjects, { recursive: true, force: true });
  }
});
