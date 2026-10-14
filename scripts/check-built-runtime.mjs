// Build and exercise fresh generated files, then restore immutable committed outputs.
import { readFile, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const generated = [
  'demo/navbar-light.browser.js',
  'webflow/navbar-light-embed.html',
  'webflow/navbar-light-cdn-loader.html',
  'webflow/navbar-light-canvas-embed.html',
  ...['navbar-light.css', 'navbar-light.min.css', 'navbar-light.js', 'navbar-light.min.js']
    .flatMap(name => [`dist/${name}`, `dist/${name}.map`])
];
// Require existing outputs before building, so restoration never removes unrelated files.
const originals = await Promise.all(generated.map(path => readFile(new URL(`../${path}`, import.meta.url))));
try {
  for (const args of [['scripts/build-all.mjs'], ['--test', 'tests/runtime-delivery.test.js', 'tests/dist.test.js', 'tests/demo.test.js']]) {
    const result = spawnSync(process.execPath, args, {
      cwd: root, stdio: 'inherit', env: { ...process.env, SMASHBURGER_FRESH_BUILD: '1' }
    });
    if (result.status !== 0) { process.exitCode = result.status ?? 1; break; }
  }
} finally {
  await Promise.all(generated.map((path, index) => writeFile(new URL(`../${path}`, import.meta.url), originals[index])));
  console.log('Restored all 12 pre-build generated files; no release bytes retained or published.');
}
