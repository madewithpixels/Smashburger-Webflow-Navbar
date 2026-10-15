// Rebuild the candidate and compare its bytes, leaving the immutable release alone.
import { spawnSync } from 'node:child_process';
import { readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
async function snapshot(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async entry => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? snapshot(path) : [[path, await readFile(path)]];
  }));
  return files.flat();
}
const originals = await snapshot(resolve(root, 'candidate'));
const result = spawnSync(process.execPath, ['scripts/build-all.mjs'], { cwd: root, stdio: 'inherit' });
if (result.status !== 0) process.exitCode = result.status ?? 1;
else {
  const rebuilt = await snapshot(resolve(root, 'candidate'));
  const before = new Map(originals);
  const changed = rebuilt.filter(([path, bytes]) => !before.get(path)?.equals(bytes));
  if (changed.length || originals.length !== rebuilt.length) {
    process.stderr.write('Candidate output differs from the pre-build files; review and commit the refreshed candidate.\n');
    process.exitCode = 1;
  } else console.log('Candidate output is reproducible; legacy release files were not touched.');
}
