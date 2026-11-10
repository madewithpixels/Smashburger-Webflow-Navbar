# Release workflow troubleshooting

10 November 2026 — brief #432, serving R-125.

Use the failure notice to identify the first setup problem and every failed
check. The workflow summary lists each step as passed, failed or not run. A
check marked not run was skipped or never reached; it is not a pass. After a
check failure, the later independent checks now still run when locked
dependencies were installed successfully. Any failed check keeps the workflow
failed. If dependency installation fails, the checks remain skipped because
their required packages may not be available.

## Workflow steps and local equivalents

| Workflow step | What it protects | Local equivalent and scope | What it cannot establish |
| --- | --- | --- | --- |
| Check out the commit being verified (`actions/checkout@v4`, full history) | Checks out the exact commit and makes historical Git blobs available to hash checks. | Work from the intended local commit; `git rev-parse HEAD`. The protected-file check reads local Git history. | That a hosted runner checked the same commit, or that the worktree has no uncommitted changes. |
| Set up Node.js 22 and npm cache (`actions/setup-node@v4`) | Provides the workflow's Node version and npm cache. | `node --version` and `npm --version` report the local toolchain. | Matching hosted-runner OS, cache state or Node version unless the local version is checked. |
| Install locked project dependencies (`npm ci --no-audit --no-fund`) | Installs exact lockfile dependencies without audit/funding network requests. | Use the already-installed dependencies. Confirm `node_modules` exists and `npm ls --depth=0` if setup needs diagnosis. Do not install or change dependencies during this review. | That a local install reproduces the hosted runner or its cache. |
| Run the source test suite (`npm test -- --test-reporter=dot`) | Regression coverage across maintained source and legacy compatibility behavior. | `npm test -- --test-reporter=spec` (same npm test script and serial suite, readable local reporter). | Browser, Webflow, CDN, release approval or hosted runner behavior. |
| Check maintained JavaScript syntax (`npm run check`) | Node syntax validity of `src/navbar-light.js`. | `npm run check`. | Runtime behavior or syntax in generated, embedded or saved Webflow code. |
| Rebuild candidate and compare generated files (`npm run check:dist`) | Rebuilds in a temporary copy and refuses path or byte drift while preserving current candidate files. | `npm run check:dist`; if it reports differences, inspect them and deliberately run `npm run build` only when refreshing output is intended. | That generated files were published or loaded by a site. |
| Check candidate runtime behavior and contracts (`npm run test:candidate`) | Builds an isolated candidate, checks namespace/protected files, then runs serial source and candidate tests. | `npm run test:candidate`. | A hosted check, Webflow Designer/Preview behavior, published page behavior or CDN bytes. |
| Summarise release checks (`node scripts/write-release-summary.mjs`, always) | Records commit, package version and each step outcome in the workflow summary. | The summary script requires workflow-provided `GITHUB_STEP_SUMMARY` and outcome variables; see its local simulated use in the 10 November status record. | GitHub's expression evaluation, email delivery, or whether the hosted summary rendered correctly. |

`npm run check:release` is the consolidated local diagnostic. It runs candidate
rebuild comparison, protected-release and retained-contract checks, Library CSS
alias expansion, and the serial source/candidate test suite. It collects
non-zero check-group results and continues to later groups, then exits non-zero
if any group failed. It also prints candidate hashes and expected protected
v0.2.6 hashes. It does not reproduce workflow checkout, Node setup, dependency
installation, email or hosted execution. Its test suite overlaps the separate
workflow source-test and candidate-runtime checks, so those repeated local
passes are not separate release approvals.

## Reading a failure notice

1. Match the named failed or not-run step in the workflow summary to the table
   above. The failure notice says which step stopped or failed; it does not
   contain enough evidence by itself to diagnose a source defect.
2. Check the local commit and dependency availability before comparing results.
   A different commit or local toolchain can explain different output.
3. Run the matching local command first. Then run `npm run check:release` for
   the consolidated output and complete local test suite.
4. Read the first specific error, then note all other failed groups. A later
   local pass means only that the current local files passed that check; it
   does not overturn a failure on another commit or prove a hosted rerun.
5. If the summary says a check was not run, do not infer success. If checkout,
   Node setup or dependency installation failed, resolve that setup problem
   before interpreting skipped checks.

## Limits

These commands verify local source, generated files, hashes, contracts and
automated tests. They do not establish release approval, tag creation, CDN
publication or bytes, Webflow changes, browser behavior, or Michael's
acceptance. No GitHub workflow or failure email was accessed for this review.
