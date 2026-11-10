// One read-only local gate for candidate reproducibility, contracts and hashes.
import { createHash } from 'node:crypto';
import { readdir, readFile, stat } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { resolve, relative, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const failures = [];
function run(label, args, env = process.env) {
  console.log(`\n== ${label} ==`);
  const result = spawnSync(process.execPath, args, { cwd: root, stdio: 'inherit', env });
  if (result.error || result.status !== 0) {
    failures.push(`${label}${result.signal ? ` (${result.signal})` : ''}`);
    if (result.error) console.error(result.error.message);
  }
}
async function files(directory) {
  const result = [];
  for (const name of (await readdir(directory)).sort()) {
    const path = join(directory, name);
    const info = await stat(path);
    if (info.isDirectory()) result.push(...await files(path));
    else result.push(path);
  }
  return result;
}

try {
  const pkg = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'));
  const commit = spawnSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' });
  if (commit.status !== 0) throw new Error('Could not read the local Git commit.');
  console.log(`Release-candidate verification · v${pkg.version} · ${commit.stdout.trim()}`);

  // This rebuilds in a temporary copy and reports every path whose bytes differ.
  run('Candidate rebuild and byte comparison', ['scripts/check-dist.mjs']);
  // Includes v0.2.6 Git-blob hashes, stable-file protection, runtime/API tokens,
  // class namespace rules, loader metadata contracts and Library JS parity.
  run('Protected releases and retained contracts', ['scripts/check-class-namespace.mjs']);
  // Reconstruct the alias-expanded Library CSS and compare exact output bytes.
  run('Library CSS alias expansion', ['scripts/compare-library-embed-css.mjs']);
  // Exercise the existing source and candidate delivery contracts without a
  // build into candidate/; candidate artifacts remain untouched by this suite.
  run('Local source and candidate tests', ['--test', '--test-concurrency=1', '--test-reporter=spec'], {
    ...process.env, SMASHBURGER_CANDIDATE: '1'
  });

  console.log('\n== Artifact SHA-256 ==');
  for (const path of await files(resolve(root, 'candidate'))) {
    const rel = relative(root, path).split('\\').join('/');
    console.log(`${digest(await readFile(path))}  ${rel}`);
  }
  const baseline = JSON.parse(await readFile(resolve(root, 'compatibility/v0.2.6-baseline.json'), 'utf8'));
  console.log('\n== Protected v0.2.6 SHA-256 (expected Git baseline) ==');
  for (const [path, hash] of Object.entries(baseline.sha256).sort(([a], [b]) => a.localeCompare(b))) {
    console.log(`${hash}  ${path}`);
  }
  if (failures.length) {
    console.error(`\nFAILED: ${failures.length} check group(s): ${failures.join('; ')}`);
    process.exitCode = 1;
  } else console.log('\nPASS: all local candidate checks passed. This is not Webflow rollout or release approval.');
} catch (error) {
  console.error(`Release-candidate verification could not complete: ${error.message}`);
  process.exitCode = 1;
}
