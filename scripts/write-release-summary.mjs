import { appendFile, readFile } from 'node:fs/promises';

const checks = [
  ['Check out the commit being verified', process.env.CHECKOUT],
  ['Set up Node.js 22 and npm cache', process.env.NODE_SETUP],
  ['Install locked project dependencies', process.env.DEPENDENCY_INSTALL],
  ['Source test suite', process.env.SOURCE_TESTS],
  ['Maintained JavaScript syntax', process.env.SOURCE_SYNTAX],
  ['Candidate rebuild and generated-file comparison', process.env.CANDIDATE_REBUILD],
  ['Candidate runtime behavior and contracts', process.env.CANDIDATE_RUNTIME],
];

const summaryPath = process.env.GITHUB_STEP_SUMMARY;
if (!summaryPath) throw new Error('GITHUB_STEP_SUMMARY is required.');

let version = 'unavailable';
try {
  const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
  version = pkg.version;
} catch {
  // Keep the summary useful even if checkout or package metadata is unavailable.
}

const outcome = value => value === 'success' ? 'passed' : value === 'failure' ? 'failed' : value || 'not run';
const completed = checks.filter(([, value]) => value === 'success');
const failed = checks.filter(([, value]) => value === 'failure');
const rows = checks.map(([name, value]) => `- ${name}: ${outcome(value)}`);
const lines = [
  '## Release checks',
  '',
  `- Checked commit: \`${process.env.CHECKED_COMMIT || 'unavailable'}\``,
  `- Package version: \`${version}\``,
  `- Completed checks: ${completed.length ? completed.map(([name]) => name).join('; ') : 'none'}`,
  `- Failing step${failed.length === 1 ? '' : 's'}: ${failed.length ? failed.map(([name]) => name).join('; ') : 'none'}`,
  '',
  ...rows,
  '',
];

await appendFile(summaryPath, `${lines.join('\n')}\n`, 'utf8');
