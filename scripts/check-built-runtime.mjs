// Build only the isolated candidate; the legacy distribution is never overwritten.
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
for (const args of [
  ['scripts/build-all.mjs'],
  ['scripts/check-class-namespace.mjs'],
  // Match npm test discovery so maintained-source regressions cannot be omitted.
  // Serial files avoid contention against the existing subprocess/event timeouts.
  ['--test', '--test-concurrency=1']
]) {
  const result = spawnSync(process.execPath, args, {
    cwd: root, stdio: 'inherit',
    env: { ...process.env, SMASHBURGER_FRESH_BUILD: '1', SMASHBURGER_CANDIDATE: '1' }
  });
  if (result.status !== 0) { process.exitCode = result.status ?? 1; break; }
}
