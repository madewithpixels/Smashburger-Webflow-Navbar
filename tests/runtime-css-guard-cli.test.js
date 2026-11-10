import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = fileURLToPath(new URL('..', import.meta.url));
const guard = join(root, 'scripts/check-runtime-style-specificity.mjs');

test('direct runtime CSS guard reports clean deliveries and rejects a planted author override', async () => {
  const output = await mkdtemp(join(tmpdir(), 'smashburger-runtime-css-'));
  try {
    const dist = join(output, 'dist');
    const webflow = join(output, 'webflow');
    const library = join(webflow, 'library');
    await Promise.all([mkdir(dist, { recursive: true }), mkdir(library, { recursive: true })]);
    const source = await readFile(join(root, 'src/navbar-light.css'), 'utf8');
    await writeFile(join(dist, 'navbar-light.css'), source);
    await writeFile(join(dist, 'navbar-light.min.css'), source);
    for (const path of [
      join(webflow, 'navbar-light-embed.html'),
      join(webflow, 'navbar-light-cdn-loader.html'),
      join(library, 'navbar-light-embed.html'),
      join(library, 'navbar-light-cdn-candidate-loader.html')
    ]) await writeFile(path, '<!-- no inline runtime CSS -->');

    const env = { ...process.env, SMASHBURGER_BUILD_OUTPUT_ROOT: output };
    const clean = spawnSync(process.execPath, [guard], { cwd: root, env, encoding: 'utf8' });
    assert.equal(clean.status, 0, clean.stderr);
    assert.match(clean.stdout, /Runtime author-style specificity guard passed/);

    await writeFile(join(dist, 'navbar-light.css'), `${source}\n[data-mwp-navbar][data-layout="overlay"] [data-mwp-panel]{display:grid}`);
    const planted = spawnSync(process.execPath, [guard], { cwd: root, env, encoding: 'utf8' });
    assert.equal(planted.status, 1, planted.stdout);
    assert.match(planted.stderr, /Runtime CSS specificity guard failed/);
    assert.match(planted.stderr, /candidate readable CSS: display/);
  } finally {
    await rm(output, { recursive: true, force: true });
  }
});
