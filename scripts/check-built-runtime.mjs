// Build only the isolated candidate; the legacy distribution is never overwritten.
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
for (const args of [
  ['scripts/build-all.mjs'],
  ['scripts/check-class-namespace.mjs'],
  ['--test', 'tests/runtime-delivery.test.js', 'tests/runtime-scroll-lock.test.js', 'tests/dist.test.js', 'tests/demo.test.js', 'tests/class-namespace.test.js', 'tests/lite-candidate.test.js', 'tests/library-verification.test.js', 'tests/migration-rollback.test.js']
]) {
  const result = spawnSync(process.execPath, args, {
    cwd: root, stdio: 'inherit',
    env: { ...process.env, SMASHBURGER_FRESH_BUILD: '1', SMASHBURGER_CANDIDATE: '1' }
  });
  if (result.status !== 0) { process.exitCode = result.status ?? 1; break; }
}
