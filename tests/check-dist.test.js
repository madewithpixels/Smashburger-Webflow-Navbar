import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { copyFile, lstat, mkdir, mkdtemp, readdir, readFile, readlink, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import test from 'node:test';

const projectRoot = resolve(import.meta.dirname, '..');
const originalBytes = Buffer.from([0, 255, 13, 10, 42]);

// Independent tree readback includes empty directories, binary files and links.
async function tree(directory, relative = '', entries = {}) {
  const path = join(directory, relative);
  const stat = await lstat(path);
  if (stat.isSymbolicLink()) entries[relative] = ['link', await readlink(path)];
  else if (stat.isDirectory()) {
    entries[relative] = ['directory'];
    for (const name of (await readdir(path)).sort()) await tree(directory, join(relative, name), entries);
  } else entries[relative] = ['file', await readFile(path)];
  return entries;
}

async function fixture(t, build) {
  const root = await mkdtemp(join(tmpdir(), 'smashburger-check-dist-test-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const directory of ['scripts', 'candidate/dist', 'candidate/webflow', 'candidate/demo', 'candidate/authored/empty', 'temporary', 'unrelated']) {
    await mkdir(join(root, directory), { recursive: true });
  }
  for (const name of ['check-dist.mjs', 'build-paths.mjs']) {
    await copyFile(join(projectRoot, 'scripts', name), join(root, 'scripts', name));
  }
  await writeFile(join(root, 'candidate/dist/output.bin'), originalBytes);
  await writeFile(join(root, 'candidate/authored/keep me.txt'), 'Authored content\r\n');
  await writeFile(join(root, 'unrelated/protected.bin'), originalBytes);
  await writeFile(join(root, 'scripts/build-all.mjs'), `
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { outputRoot } from './build-paths.mjs';
${build}
`);
  return {
    root,
    run: (script = 'check-dist.mjs') => {
      const result = spawnSync(process.execPath, [join('scripts', script)], {
        cwd: root, encoding: 'utf8', timeout: 10000,
        env: { ...process.env, TMPDIR: join(root, 'temporary'),
          // The verifier must override inherited build-output settings too.
          SMASHBURGER_BUILD_OUTPUT_ROOT: script === 'check-dist.mjs' ? join(root, 'unrelated') : '' }
      });
      assert.ifError(result.error);
      assert.equal(result.signal, null, result.stderr);
      return result;
    }
  };
}

async function verify(t, build, expectedStatus, message, prepare) {
  const f = await fixture(t, build);
  if (prepare) await prepare(f.root);
  const before = await tree(f.root);
  const result = f.run();
  assert.equal(result.status, expectedStatus, result.stderr);
  assert.match(result.stdout + result.stderr, message);
  // Covers the complete original fixture and removal of every scratch output.
  assert.deepEqual(await tree(f.root), before);
  return f;
}

test('candidate verification passes matching output without changing any bytes or paths', { timeout: 15000 }, async t => {
  const f = await verify(t,
    `await writeFile(resolve(outputRoot, 'dist/output.bin'), Buffer.from([0, 255, 13, 10, 42]));`,
    0, /reproducible.*preserved/);
  const before = await tree(f.root);
  assert.equal(f.run().status, 0, 'repeat verification must also pass');
  assert.deepEqual(await tree(f.root), before);
});

test('candidate verification rejects stale bytes and preserves authored files', { timeout: 15000 }, async t => {
  await verify(t, `await writeFile(resolve(outputRoot, 'dist/output.bin'), 'fresh build');`,
    1, /differs[\s\S]*dist\/output.bin[\s\S]*npm run build/);
});

test('candidate verification rejects newly generated files and empty directories without leaving them behind', { timeout: 15000 }, async t => {
  await verify(t, `
await mkdir(resolve(outputRoot, 'new/nested/empty'), { recursive: true });
await writeFile(resolve(outputRoot, 'new/nested/output.bin'), 'new');`, 1, /differs[\s\S]*new\/nested\/output.bin/);
});

test('candidate verification detects removed files and directories without removing originals', { timeout: 15000 }, async t => {
  await verify(t, `await rm(resolve(outputRoot, 'authored'), { recursive: true });`,
    1, /differs[\s\S]*authored\/keep me.txt/);
});

test('candidate verification preserves the entire tree after a partial build fails', { timeout: 15000 }, async t => {
  await verify(t, `
await writeFile(resolve(outputRoot, 'dist/output.bin'), 'partial build');
await rm(resolve(outputRoot, 'authored'), { recursive: true });
await mkdir(resolve(outputRoot, 'partial/nested'), { recursive: true });
await writeFile(resolve(outputRoot, 'partial/nested/new.bin'), 'partial');
console.error('induced fixture failure');
process.exitCode = 7;`, 7, /induced fixture failure[\s\S]*build failed.*preserved/);
});

test('candidate verification fails safely when the build child is terminated', { timeout: 15000 }, async t => {
  await verify(t, `
await writeFile(resolve(outputRoot, 'dist/output.bin'), 'partial build');
process.kill(process.pid, 'SIGTERM');`, 1, /build failed \(SIGTERM\).*preserved/);
});

test('candidate verification reports missing candidates without creating the original tree', { timeout: 15000 }, async t => {
  await verify(t, `await writeFile(resolve(outputRoot, 'dist/output.bin'), 'new build');`,
    1, /differs/, root => rm(join(root, 'candidate'), { recursive: true }));
});

test('candidate verification rejects links before a build could write through them', { timeout: 15000 }, async t => {
  await verify(t, `throw new Error('build must not run');`, 1, /Unsupported candidate entry/, root =>
    symlink(join(root, 'unrelated/protected.bin'), join(root, 'candidate/dist/link.bin')));
});

test('deliberate build still refreshes the default candidate output', { timeout: 15000 }, async t => {
  const f = await fixture(t, `
await writeFile(resolve(outputRoot, 'dist/output.bin'), 'deliberate build');
await writeFile(resolve(outputRoot, 'webflow/new.html'), 'new candidate');`);
  assert.equal(f.run('build-all.mjs').status, 0);
  assert.equal(await readFile(join(f.root, 'candidate/dist/output.bin'), 'utf8'), 'deliberate build');
  assert.equal(await readFile(join(f.root, 'candidate/webflow/new.html'), 'utf8'), 'new candidate');
  assert.equal(await readFile(join(f.root, 'candidate/authored/keep me.txt'), 'utf8'), 'Authored content\r\n');
  assert.deepEqual(await readFile(join(f.root, 'unrelated/protected.bin')), originalBytes);
});
