import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = fileURLToPath(new URL('..', import.meta.url));
const script = join(root, 'scripts/write-release-summary.mjs');
const checkedCommit = '0123456789abcdef0123456789abcdef01234567';
const steps = [
  ['Check out the commit being verified', 'CHECKOUT'],
  ['Set up Node.js 22 and npm cache', 'NODE_SETUP'],
  ['Install locked project dependencies', 'DEPENDENCY_INSTALL'],
  ['Source test suite', 'SOURCE_TESTS'],
  ['Maintained JavaScript syntax', 'SOURCE_SYNTAX'],
  ['Candidate rebuild and generated-file comparison', 'CANDIDATE_REBUILD'],
  ['Candidate runtime behavior and contracts', 'CANDIDATE_RUNTIME'],
];

async function runSummary(outcomes) {
  const directory = await mkdtemp(join(tmpdir(), 'smashburger-release-summary-'));
  const summaryPath = join(directory, 'summary.md');
  try {
    const env = { ...process.env };
    for (const [, key] of steps) delete env[key];
    Object.assign(env, outcomes, {
      GITHUB_STEP_SUMMARY: summaryPath,
      CHECKED_COMMIT: checkedCommit,
    });
    const result = spawnSync(process.execPath, [script], { cwd: root, env, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    return await readFile(summaryPath, 'utf8');
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

function assertCompleteResults(summary, expected) {
  for (const [name, outcome] of expected) {
    assert.ok(summary.includes(`- ${name}: ${outcome}`), `missing result: ${name}: ${outcome}`);
  }
  const resultRows = summary.split('\n').filter(line => line.startsWith('- ') && /: (passed|failed|not run|cancelled|skipped)$/.test(line));
  assert.equal(resultRows.length, steps.length, 'summary should list every workflow step exactly once');
}

test('setup failure shows dependent checks as not run and retains revision and package version', async () => {
  const summary = await runSummary({
    CHECKOUT: 'success',
    NODE_SETUP: 'success',
    DEPENDENCY_INSTALL: 'failure',
    SOURCE_TESTS: 'skipped',
    SOURCE_SYNTAX: 'skipped',
    CANDIDATE_REBUILD: 'skipped',
    CANDIDATE_RUNTIME: 'skipped',
  });
  const pkg = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'));
  assert.ok(summary.includes(`- Checked commit: \`${checkedCommit}\``));
  assert.ok(summary.includes(`- Package version: \`${pkg.version}\``));
  assert.ok(summary.includes('- Failing step: Install locked project dependencies'));
  assertCompleteResults(summary, [
    ['Check out the commit being verified', 'passed'],
    ['Set up Node.js 22 and npm cache', 'passed'],
    ['Install locked project dependencies', 'failed'],
    ['Source test suite', 'not run'],
    ['Maintained JavaScript syntax', 'not run'],
    ['Candidate rebuild and generated-file comparison', 'not run'],
    ['Candidate runtime behavior and contracts', 'not run'],
  ]);
});

test('failed tests remain visible when independent checks pass', async () => {
  const summary = await runSummary({
    CHECKOUT: 'success',
    NODE_SETUP: 'success',
    DEPENDENCY_INSTALL: 'success',
    SOURCE_TESTS: 'failure',
    SOURCE_SYNTAX: 'success',
    CANDIDATE_REBUILD: 'success',
    CANDIDATE_RUNTIME: 'success',
  });
  assert.ok(summary.includes(`- Checked commit: \`${checkedCommit}\``));
  assert.ok(summary.includes('- Failing step: Source test suite'));
  assert.ok(summary.includes('- Completed checks: Check out the commit being verified; Set up Node.js 22 and npm cache; Install locked project dependencies; Maintained JavaScript syntax; Candidate rebuild and generated-file comparison; Candidate runtime behavior and contracts'));
  assertCompleteResults(summary, steps.map(([name, key]) => [name, key === 'SOURCE_TESTS' ? 'failed' : 'passed']));
});

test('cancelled and unavailable outcomes remain distinguishable from passes', async () => {
  const summary = await runSummary({
    CHECKOUT: 'success',
    NODE_SETUP: 'cancelled',
    DEPENDENCY_INSTALL: 'skipped',
    SOURCE_TESTS: 'skipped',
    SOURCE_SYNTAX: 'skipped',
    CANDIDATE_REBUILD: 'skipped',
  });
  assert.ok(summary.includes(`- Checked commit: \`${checkedCommit}\``));
  assert.ok(summary.includes('- Package version:'));
  assert.ok(summary.includes('- Failing steps: none'));
  assertCompleteResults(summary, [
    ['Check out the commit being verified', 'passed'],
    ['Set up Node.js 22 and npm cache', 'cancelled'],
    ['Install locked project dependencies', 'not run'],
    ['Source test suite', 'not run'],
    ['Maintained JavaScript syntax', 'not run'],
    ['Candidate rebuild and generated-file comparison', 'not run'],
    ['Candidate runtime behavior and contracts', 'not run'],
  ]);
});
