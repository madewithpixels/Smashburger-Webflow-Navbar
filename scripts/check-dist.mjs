// Verify in a disposable copy: stale output and failed builds never refresh candidate/.
import { spawnSync } from 'node:child_process';
import { cp, lstat, mkdir, mkdtemp, readdir, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
async function snapshot(directory, relative = '', files = new Map()) {
  let stat;
  try { stat = await lstat(resolve(directory, relative)); }
  catch (error) {
    if (!relative && error.code === 'ENOENT') return files;
    throw error;
  }
  // A copied link could send build writes back into the real tree. Fail safely.
  if (stat.isSymbolicLink() || (!stat.isDirectory() && !stat.isFile())) {
    throw new Error(`Unsupported candidate entry: ${relative || '.'}; expected a regular file or directory.`);
  }
  files.set(relative, stat.isDirectory() ? null : await readFile(resolve(directory, relative)));
  if (stat.isDirectory()) {
    for (const name of (await readdir(resolve(directory, relative))).sort()) {
      await snapshot(directory, join(relative, name), files);
    }
  }
  return files;
}

let temporary;
try {
  const candidate = resolve(root, 'candidate');
  const originals = await snapshot(candidate);
  temporary = await mkdtemp(join(tmpdir(), 'smashburger-check-dist-'));
  const output = join(temporary, 'candidate');
  // Retain authored, non-generated candidate files in the comparison as before.
  if (originals.size) await cp(candidate, output, { recursive: true });
  else await mkdir(output);
  const result = spawnSync(process.execPath, ['scripts/build-all.mjs'], {
    cwd: root, stdio: 'inherit',
    env: { ...process.env, SMASHBURGER_BUILD_OUTPUT_ROOT: output }
  });
  if (result.error || result.status !== 0) {
    process.stderr.write(`Candidate build failed${result.signal ? ` (${result.signal})` : ''}; existing candidate files were preserved.\n`);
    if (result.error) process.stderr.write(`${result.error.message}\n`);
    process.exitCode = result.status || 1;
  } else {
    const rebuilt = await snapshot(output);
    const changed = [...new Set([...originals.keys(), ...rebuilt.keys()])].filter(path => {
      if (!originals.has(path) || !rebuilt.has(path)) return true;
      const before = originals.get(path);
      const after = rebuilt.get(path);
      return before === null ? after !== null : after === null || !before.equals(after);
    });
    if (changed.length) {
      process.stderr.write('Candidate output differs from the pre-build files; existing candidate files were preserved.\n');
      for (const path of changed) process.stderr.write(`  ${path || '.'}\n`);
      process.stderr.write('Run npm run build deliberately to refresh candidate output, then review the changes.\n');
      process.exitCode = 1;
    } else console.log('Candidate output is reproducible; existing candidate files were preserved.');
  }
} catch (error) {
  process.stderr.write(`Candidate verification failed: ${error.message}\n`);
  process.exitCode = 1;
} finally {
  if (temporary) await rm(temporary, { recursive: true, force: true });
}
