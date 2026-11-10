# SmashBurger — Status

## 10 November 2026 — Single-menu short-height fixture prepared — Codex (night shift)

**Changed (R-269):** Prepared an offline Full-width fixture so a daytime check can observe the short-height menu without the stacked rows on the published test page.

**Outputs:** The fixture uses one native menu, ten navigation links, presets off, and the checked-in candidate CSS and JavaScript. The last link is Contact us and points to a visible destination section. Its use note gives 471 × 500 and 471 × 900 CSS pixel viewports and asks the observer to record last-link reachability, panel scrolling and keyboard focus. No runtime or CSS fix was made.

**Checked how:** Read the HTML structure and relative asset paths; confirmed one root, one details/summary trigger and one adjacent navigation panel with a single link tree. Confirmed the contact destination is present. Existing candidate asset files have no working-tree changes. Existing fixtures were not equivalent: the Full-width example has stacked menus, and the single-menu native example lacks the candidate assets and long content. `git diff --check` passed. No browser check was run.

**Still open:** The rendered fixture has not been opened or observed. Whether the final link is reachable and the panel scrolls at either viewport remains unknown. R-269 runtime and CSS changes require a separate brief if a rendered observation demonstrates a failure.

**Needs Michael:** Nothing for this prepared local fixture.

**Next useful action:** Open the fixture in daytime Chrome at the two noted CSS viewport sizes and record the single-menu observations.

**Reviewed at commit:** `e6d1b89` — checked the local record, candidate assets, existing fixtures and recent history before preparing this page.

## 10 November 2026 — Repeated candidate Embed check added — Codex (night shift)

**Changed (R-272):** Added one offline regression that loads two copies of the checked-in candidate Embed as separate inline script blocks in the same JSDOM page, with a separate native menu in each root.

**Outputs:** Both menus initialise, receive distinct panel relationships and retain their own runtime instances. Opening the first menu emits one open lifecycle and leaves the second menu closed without events. Inline and JSDOM script errors are captured and must be absent. The test executes the actual candidate Embed twice; it does not compare script strings. Repeated evaluation is therefore exercised for both top-level redeclaration errors and duplicate event binding/initialisation.

**Checked how:** `node --test tests/repeated-embed.test.js` passed (1 test, 0 failures). JSDOM external resource fetching is disabled by omitting its `resources` option. `git diff --check` passed. The repeated test inputs are the same checked-in candidate file, so the saved Library parity check was not needed. No generator, delivery file, dependency, browser, Webflow page or published page changed.

**Still open:** Webflow Preview's general `CompilationError: Invalid source code` remains a separate, unidentified compiler issue; the saved capture does not name a duplicate declaration or script. The published-page Console check was not run. Neither is explained or cleared by this local regression. Michael's acceptance remains pending.

**Needs Michael:** Nothing to finish this local regression brief.

**Next useful action:** In a separately authorised daytime check, capture the Preview compiler result and published-page Console independently, without attributing either to repeated script names unless the evidence names them.

**Handoff:** The Preview capture from 10 November records the general `webflow.js:501` error and the limits of that observation. It is not evidence of a duplicate-script failure. The published-page Console remains uninspected.

**Reviewed at commit:** `3dda43b` — checked the current candidate Embed, existing Lite repeat-initialisation coverage, R-272 records and recent local history before adding this distinct repeated-script case.

## 10 November 2026 — R-271 resize evidence gaps closed locally — Codex (night shift)

**Changed (R-271):** Added distinct local cases for an open menu surviving a same-breakpoint handler call and for two native Summary activations opening then closing the menu. Updated the resize coverage map with the exact evidence and harness behavior.

**Outputs:** Both local evidence gaps now have named passing cases. No runtime, released file, pin or dependency changed. This records test evidence only; it does not change R-271 acceptance or its staging evidence.

**Checked how:** At baseline `571778b`, `node --test --test-name-pattern='keeps an open collapsed menu|native Summary activation twice' tests/navbar-light.test.js` passed both selected tests (2 pass, 0 fail). The breakpoint case calls the maintained handler directly, keeps the menu open, verifies both links and accessible panel state, and checks focus remains on its link. The Summary case uses two JSDOM `summary.click()` activations and waits for the closed lifecycle event; native Details activation is modelled by this harness. No browser or staging checks were run.

**Still open:** Voice Focus and madewithpixels staging behavior and Michael's acceptance remain open.

**Needs Michael:** Nothing to finish this local evidence work.

**Next useful action:** Check the menu on both staging pages during daytime, including same-breakpoint resizing and a second Summary activation.

**Reviewed at commit:** `571778b` — checked the coverage map, maintained handler, test cases and recent local project records before adding these focused cases.

## 10 November 2026 — Next night-shift briefs prepared — Codex

**Changed (R-115, R-121, R-124, R-181, R-183, R-269, R-271, R-272):** Prepared seven independent local briefs covering resize, repeated Embeds, a short-height fixture, rollback version evidence, README install pointers, authored Grid and Lite loader protection.

**Outputs:** [Copy-ready night-shift briefs](webflow/smashburger-night-shift-briefs-2026-11-10.md), ordered with the strongest work first. The briefs have not been queued or run.

**Checked how:** Compared the Boss inbox, recent shift results, roadmap dependencies, named test gaps, source paths and the two locally tagged loaders. The only commits since the prior reviewed baseline were the testing proposal and its checklist formatting.

**Still open:** The briefs' implementation and all separate live, release and acceptance checks.

**Needs Michael:** No product decision is needed for the local work in these briefs.

**Next useful action:** Paste the briefs into Boss in the listed order with repository access only.

**Reviewed at commit:** `b52712d`.

## 10 November 2026 — Risk-weighted testing proposal — Codex

**Changed (R-269, R-121, R-125, R-181, R-182, R-183, R-185):** Prepared a guide for choosing focused development checks, when to broaden them, and which checks belong at release, rollout and recovery.

**Outputs:** [Testing priorities proposal and brief template](webflow/testing-priorities-proposal-2026-11-10.md). No code, tests, workflow, roadmap state, Boss tasks or release policy changed.

**Checked how:** Compared the project rules and accepted decisions with the recent shift evidence, workflow, local commands and Webflow trial records. Checked the proposal's source links and the diff. The commit after the previous reviewed baseline was the recorded release-workflow correction; the recorded 680-pass suite belongs to the preceding revision. No tests, hosted run or Webflow checks were performed for this proposal.

**Still open:** The reviewed records do not provide a hosted run link and result for the correction. The outstanding R-269 comparisons, Lite clone checks and separate release and recovery gates remain as recorded.

**Needs Michael:** Nothing to finish this proposal. Any change to required checks or release policy remains his decision.

**Next useful action:** Use the template in the next development brief to name its first check, when to broaden it and what should be handed off.

**Reviewed at commit:** `33ce14b` — checked the project records, workflow and recent local evidence before drafting.

## 10 November 2026 — Release workflow troubleshooting path — Codex (night shift)

**Changed (R-125):** Mapped every release-workflow step to its purpose, local equivalent and evidence limits. The workflow now continues independent checks after a check failure when dependency setup succeeded; any failed check still fails the job. Added guidance for reading failed and skipped steps alongside local results.

**Outputs:** README links to the troubleshooting guide. The guide explains setup failures, matching local invocations, the consolidated `check:release` output, and why a local pass cannot confirm a hosted run, email, release, CDN delivery, Webflow behavior or acceptance. Checkout, Node setup and dependency installation remain prerequisites. No gate, permission or dependency was weakened or changed. No Webflow content was changed.

**Checked how:** Ruby parsed the workflow YAML; `node --check scripts/write-release-summary.mjs` and `git diff --check` passed. `npm run check:release` exited 0 at `fd15e9337f635ae56418270333d0420ca6987deb`: candidate rebuild and byte comparison passed; 17 protected historical files and stable v0.2.9 files matched; the Library CSS diagnostic still reports one trailing whitespace byte, with content matching after trim; the serial suite reported 695 tests, 680 passed, 0 failed and 15 TODO. This run does not execute GitHub Actions condition evaluation or establish hosted behavior. No GitHub access or failure email was used.

**Still open:** Hosted workflow and email rendering have not been checked. R-125 remains subject to Michael's reordered R-270 and R-271 work and its separately gated release steps.

**Needs Michael:** Nothing for these local changes. No release or hosted rerun is requested by this brief.

**Next useful action:** After R-270 and R-271, use the guide to compare any future release-check notice with local results; inspect hosted summary and email only under an authorised future check.

**Reviewed at commit:** `fd15e93` — checked the workflow, local check scripts, package commands, README and R-125 records before changing the troubleshooting path.

## 10 November 2026 — Lite readiness gates reconciled — Codex (night shift)

**Changed (R-181, R-182, R-183, R-185):** Added criterion-by-criterion links to existing local evidence and explicitly marked where Webflow evidence is missing. Corrected the distinction between R-183's local instruction-integrity evidence and the still-unbuilt released loader. Replaced no settled decision and recorded no Acceptance.

**Outputs:** R-181 and R-182 have local source and DOM preparation, but no verified rendered page, native component, Canvas edit or clone. R-183 has only a local check that instructions reject the unreleased loader; its runtime release and loader remain prerequisites. R-185 has a checklist and empty capture template, but no clone-flow observations; Evidence remains none. The 16 October site listing is historical and does not establish present access to a blank project. The roadmap now maps each R-185 criterion to a capture step and states the narrowest useful next local action for each item.

**Checked how:** Compared the four roadmap entries with the named local examples, workbench, runtime evidence, native build sheet, integrity script, trial sheet, clone-flow capture sheet and status entries dated 10 October/16 October through 10 November. Reviewed the proposed roadmap diff for link and claim accuracy. No tests, browser checks or Webflow checks were run; no Webflow project was opened or changed. The existing local pass claims are cited as prior evidence, not rerun results.

**Still open:** Released `sb-nav` runtime selection and authorisation, Webflow component/loader construction, rendered and Canvas checks, and the blank-project clone trial. There is no evidence that a blank test project is currently available.

**Needs Michael:** No decision is needed to make this evidence map. A later authorised release and accessible blank project are prerequisites for the Webflow-specific work.

**Next useful action:** When a released `sb-nav` runtime and blank test project are available under an authorised brief, build the exact pinned loader/component and fill the clone-flow capture sheet from actual observations.

**Reviewed at commit:** `73ebfbf` — checked the four Lite roadmap entries and their linked local source, documentation, integrity checks and status evidence before updating the readiness map.

## 10 November 2026 — Candidate-to-release evidence pack — Codex (night shift)

**Changed (R-121, R-125, R-126):** Added a refreshable, local-only evidence pack for the current `0.3.0-rc.1` candidate.

**Outputs:** The pack records the checked commit, 19 candidate file hashes, exact illustrative loader metadata, protected-file result, test gate and its known Library CSS whitespace diagnostic. It links each result to its check or source and separates release promotion, Library sharing, consumer update, cloned rollback and archive gates. Earlier release and Library evidence was retained unchanged. No tag, publishing, CDN read, Webflow change, Library share or release claim was made.

**Checked how:** `npm run check:release` exited 0 at `6cc44f62b9f527aab7d31d700c614937623f7602`. Candidate rebuild matched current files; all 17 protected v0.2.6 files matched their Git baseline; stable files matched v0.2.9. The Library CSS content matched after trimming trailing whitespace only (29,071 versus 29,070 bytes). The candidate hash inventory and CSS/JavaScript SHA-384 values were independently read from local files. These checks do not establish hosted workflow, CDN, browser, Webflow or approval evidence.

**Still open:** Release version/tag approval and release URL verification; the exact five-resource Library share review and backed-up consumer checks; real cloned rollback; independent old pinned URL verification before any archive; Michael's review. Candidate remains unreleased.

**Needs Michael:** Nothing blocks refreshing this local evidence pack. Release and sharing approvals remain separate future decisions.

**Next useful action:** Review [the candidate-to-release evidence pack](webflow/candidate-release-evidence-pack-2026-11-10.md) when considering a later release candidate; refresh it from the next complete local gate before any promotion proposal.

**Reviewed at commit:** `6cc44f6` — checked the current candidate gate, generated files, existing release records, Library sharing record and R-121/R-125/R-126 evidence before adding this pack.

## 10 November 2026 — Lite examples and blank-project trial preparation — Codex (night shift)

**Changed (R-181, R-182, R-185):** Added a short trial sheet that separates local preparation from the checks that require a blank Webflow project. Extended the Lite integrity gate to include the sheet and validate its required checklist sections and local links. Corrected R-185's Evidence to `none`: the blank-project clone flow has not been performed, and an access listing or local preparation does not verify it.

**Outputs:** The sheet maps existing local example and workbench evidence to the remaining clone, Navigator, Canvas editing, four-breakpoint, keyboard/focus, fallback, assets, overflow and console checks. The examples and workbench remain review references, not a native Webflow component or clonable. No runtime or Webflow content changed.

**Checked how:** `npm run check:lite` passed for all 7 files. `node --test tests/lite-candidate.test.js` passed 6/6 using the existing JSDOM fixtures. `git diff --check` passed. The tests establish local source integrity and simulated runtime behavior only.

**Still open:** A released `sb-nav` runtime and its exact loader must be selected before construction. The blank-project clone, Canvas edits, rendered breakpoint behavior, native keyboard use, live asset loading, overflow and browser console remain unchecked.

**Needs Michael:** Nothing for this local preparation.

**Next useful action:** When the released Lite setup and a blank test project are available, follow the trial sheet and record observed results in the clone-flow capture sheet.

**Reviewed at commit:** a2bf169 — checked the current Lite examples, workbench, guides, integrity gate, tests and roadmap before adding the trial preparation.

## 10 November 2026 — R-269 CSS guard stress check — Codex (night shift)

**Changed (R-269):** Extended the CSS guard's list of layout properties so it also checks Flex direction and wrapping, Grid placement, alignment shorthands and separate row/column gaps. Added focused checks showing that high-specificity rules using these properties are refused while zero-specificity defaults remain allowed.

**Outputs:** The review found that existing local tests already covered host styles, stale Grid tracks, authored Flex and Grid, presets off and all five layouts. The guard itself had a narrower property list than those layout risks required. The new cases close that confirmed local gap. The [guard limits and risk review](webflow/r269-styling-guard-limits-2026-11-10.md) records what is covered and what the guard cannot establish. No Webflow content, dependencies or generated release files changed.

**Checked how:** `node --test tests/runtime-styling-contract.test.js` passed all 6 tests. `npm run check:runtime-css` passed against current source and generated CSS deliveries. `git diff --check` passed. These checks exercise local CSS and JSDOM fixtures only.

**Still open:** This does not prove Designer Style-panel editing, Canvas layout, Preview rendering, published rendering, exact page CSS or parity with the files checked locally. The browser-only R-269 checks remain open as listed in the coverage map.

**Needs Michael:** Nothing for this local guard change.

**Next useful action:** Continue the separately authorised R-269 Designer, Preview and published-page comparisons on the disposable test site.

**Reviewed at commit:** acd5c73 — checked the current project records, guard, CSS contract tests and R-269 coverage map before this change.

## 10 November 2026 — Candidate runtime contract audit — Codex (night shift)

**Changed (R-121, R-125):** Documented the candidate’s public runtime contract and compared maintained source, generated candidate deliveries, stable v0.2.9 and protected v0.2.6 files. Added candidate-delivery regression coverage for `.sb-nav-panel` discovery when its data hook is absent.

**Outputs:** The contract note records classes and runtime hooks, configuration attributes and CSS properties, bubbling lifecycle events and payload, public JavaScript names, accessibility state, loader metadata and version expectations. It distinguishes the intended class migration from known retained v0.2.9 behavior defects exercised as TODO cases, and states that local records do not establish current consumer behavior. No product decision was required.

**Checked how:** `SMASHBURGER_CANDIDATE=1 node --test tests/class-namespace.test.js tests/runtime-delivery.test.js tests/destroy-delivery.test.js tests/configuration-delivery.test.js tests/escape-delivery.test.js tests/close-focus-delivery.test.js` passed: 602 tests, 587 passed, 0 failed, 15 expected TODO. The namespace check verified 17 protected historical files and stable files against v0.2.9. `git diff --check` passed. These checks are local; no Webflow, CDN, browser or live consumer check was made.

**Still open:** No product question blocks the class migration contract. Current Designer, Preview, published-site and consumer behavior remain unverified by this local audit.

**Needs Michael:** Nothing.

**Next useful action:** Continue the already ordered roadmap gates; use the contract note if a later authorised candidate or consumer comparison needs its hook inventory.

**Reviewed at commit:** 5d4e78a — checked source, generated candidate files, release records, compatibility manifests and focused regression tests before recording the audit.

## 10 November 2026 — Release check summaries identify failures — Codex (night shift)

**Changed (R-125):** Named each release-workflow step so the Actions run and its failure notice identify the check or setup stage that stopped.

**Outputs:** The workflow now adds a concise job summary with the checked commit, package version, completed steps, every step outcome and any failed step names. The summary script reads only package metadata and explicit step outcomes; it does not print environment secrets or raw logs. Dependency installation uses the existing lockfile without audit/funding network requests. No dependency files changed.

**Checked how:** Ruby's YAML parser accepted the workflow. `node --check scripts/write-release-summary.mjs` and `git diff --check` passed. Ran the summary script locally with all-success outcomes and with a source-syntax failure followed by skipped checks; both summaries showed the commit/version and correct completion, failure and skipped states. These simulations validate summary generation, not GitHub Actions expression evaluation or hosted-run behavior. No GitHub access or remote run was performed. `actionlint` is not installed, so no Actions-specific linter was available.

**Still open:** A hosted workflow run has not confirmed the summary appears in GitHub Actions or that the changed npm test reporter behaves in the runner environment.

**Needs Michael:** Nothing for this local workflow change.

**Next useful action:** Review the summary on a future authorised release-check run.

**Reviewed at commit:** f7bd786 — checked the workflow, package commands and local check scripts before updating the failure report.

## 10 November 2026 — Unified release-candidate gate verified — Codex (night shift)

**Changed (R-121, R-125):** Verified the documented one-command local gate against the current candidate. The earlier Lite workbench assertion is now fixed, so the complete gate finishes successfully.

**Outputs:** `npm run check:release` reports version `0.3.0-rc.1`, checked commit `2c03961e730846dc430ee0fb258c358ddc026f9a`, candidate artifact SHA-256 values and the expected hashes for all 17 protected v0.2.6 files. It checks rebuild byte parity, retained v0.2.9 files, runtime/API contracts, namespace rules, loader metadata, Library JavaScript parity and Library CSS alias expansion. The candidate rebuild left existing files unchanged. The Library CSS content matches after trimming one trailing whitespace byte; the gate reports this difference and exits successfully. No release or Webflow rollout is approved by this result.

**Checked how:** `npm run check:release` exited 0. Candidate rebuild and protected release/runtime checks passed. The serial suite reported 693 tests: 678 passed, 0 failed and 15 TODO. The CSS comparison reported expected SHA-256 `34f7067b9edd436bf570d603267112a685d8bebde4bc0b3c66b3aca5e20aa3f7` and Library SHA-256 `e6ae0212a34a2cebd3add1312ed29a6f7419220ec00ce1175075f56e9bb63d52`; only one final whitespace byte differs. All evidence is local; no browser or Webflow checks were made.

**Still open:** R-121's wider Webflow/Library/clonable work and R-125's separately gated release steps remain open. Michael reordered R-270 and R-271 ahead of R-125; this local gate does not perform or replace them.

**Needs Michael:** Nothing for this local verification gate.

**Next useful action:** Continue with the roadmap's ordered prerequisites. Keep live checks and release approval separate from this local result.

**Reviewed at commit:** 2c03961 — checked the current project records and ran the unified local candidate gate.

## 10 November 2026 — Release-check Lite assertion fixed — Codex (night shift)

**Changed (R-125, R-182):** The release-check failure was the Lite workbench source missing the exact “Backdrop reference” heading text required by its test. Added that wording to the existing static backdrop sample heading; kept the sample non-interactive and preserved its explanatory accessible label. This is the same issue noted in the previous status entry.

**Outputs:** The workbench now names the backdrop reference required by the Lite workbench specification and local assertion. No released file, runtime, generated delivery, dependency or Webflow site was changed. The email screenshot was not attached or otherwise available in this session, so I cannot confirm its visible text or details. Local reproduction identifies the failing assertion independently. A failure notice alone establishes that a workflow run failed; it does not establish this local cause or that the correction passes.

**Checked how:** Reproduced the workflow's `npm test` locally before the correction: 282 tests, 254 passes, the single failure at `tests/lite-candidate.test.js:177` (`workbench.includes('Backdrop reference')`) and 27 TODOs. The separate actual-workbench behavior test passed. After the correction, the focused failing test passed; the workflow `npm test` rerun exited 0; the full candidate runtime suite passed (693/693); `npm run check`, `npm run check:dist`, `npm run test:candidate`, `npm run check:lite` (6/6) and `git diff --check` passed. The test suite still reports expected TODO cases concerning known defects in retained v0.2.9 files; those files were preserved. `npm ci` was not run because this brief forbids dependency installation. These are local checks only; no GitHub or remote workflow was inspected.

**Still open:** Remote workflow verification remains unperformed and requires a later authorised push/run; this session did not inspect GitHub. The email screenshot itself could not be assessed because it was not provided here.

**Needs Michael:** Nothing for the local correction.

**Next useful action:** Review the next release-check run after it is available.

**Reviewed at commit:** 67c452e — checked the current project record, local workflow and workbench test/source before this correction.

## 10 November 2026 — R-269 local coverage mapped — Codex (night shift)

**Changed (R-269):** Mapped the local checks to the styling and behavior criteria they represent, and separated those results from the remaining Webflow and browser checks.

**Outputs:** The [coverage map](webflow/r269-local-coverage-map-2026-11-10.md) links the five-layout Flex/Grid cascade, preset gates, CSS specificity guard and generated deliveries, states, Canvas helper, motion, trigger/close behavior and fallback to named tests and source. It lists the Designer, Preview, published, viewport, motion, fallback and real-site upgrade/rollback checks that remain open. No missing local test was identified; no CSS or Webflow content was changed.

**Checked how:** Read the R-269 exit criteria, relevant source and candidate generation guard, existing local tests and current evidence notes. `git diff --check` passed. No test suite or browser/Webflow check was run for this documentation map; prior logged test results are linked as context, not rerun evidence.

**Still open:** All explicitly listed Designer, Preview and published cases remain open until checked on the exact candidate and recorded with page, component, state and viewport. Michael's historical reports remain identified as his observations, not independent Codex checks.

**Needs Michael:** Nothing for this local coverage map.

**Next useful action:** Use the map during the already-authorised disposable-site comparison and record each browser result separately from local test evidence.

**Reviewed at commit:** f5378fe — checked the current project record, R-269 criteria, local source/tests and evidence before writing the map.

## 10 November 2026 — Lite local integrity gate — Codex (night shift)

**Changed (R-181, R-182, R-183, R-185):** Added one local command that checks the Lite review examples, workbench and instructions and reports pass/fail by file with specific failures.

**Outputs:** The gate checks the plain and styled examples' single named native navigation trees, link destinations, trigger and navigation names, presets-off values, and absence of duplicate/Library variant or unlink-generated `.always*` classes. It checks local links, static labels and page-scoped selectors in the workbench, plus the unreleased-loader boundary in the safe-editing guide and native build sheet. The build sheet now records that both local review examples currently use presets off. No Webflow component, loader installation or release change was made.

**Checked how:** `npm run check:lite` passed all six Lite files with zero failures. `node --check scripts/check-lite-integrity.mjs` and `git diff --check` passed. The checks read local source and documentation only; they do not verify browser rendering, Webflow Canvas or clone flow.

**Still open:** R-181 and R-182 still need their separate browser/Canvas checks. R-183 still awaits an approved released runtime before a loader can be built or installed. R-185 clone-flow evidence remains unperformed.

**Needs Michael:** Nothing for this local gate.

**Next useful action:** Run the gate alongside future Lite edits; resume Canvas and clone-flow work only when its runtime and test-project gates are met.

**Reviewed at commit:** 04ba15a — checked the current project record and local Lite sources before adding this gate.

## 10 November 2026 — Offline migration fixture coverage strengthened — Codex (night shift)

**Changed (R-115, R-121):** Added explicit fixture coverage for preserving author-owned responsive and focus styles, a Webflow-style numbered class collision, and an unsupported legacy-looking class token.

**Outputs:** The rehearsal report now distinguishes these locally covered fixture cases from the still-unrun cloned-Webflow upgrade and rollback. The migration continues to rename only the documented class tokens, and rollback restores the full recorded fixture serialisation exactly.

**Checked how:** `node --test tests/migration-rollback.test.js` passed 6/6. Each of the three local delivery forms still completes two conversion/rollback cycles and runs the legacy and candidate contracts. The new CSS assertions check text preservation only; they do not render responsive or focus behavior. No Webflow page, component or style was changed. No released file or tag was changed.

**Still open:** R-115's cloned-Webflow semantic-version upgrade, explicit rollback and restored-page checks remain unrun. R-121 remains in progress for Webflow component, Library and clonable rollout. Fixture checks do not prove Designer, Preview or published behavior.

**Needs Michael:** Nothing is needed for this local fixture extension.

**Next useful action:** When a future brief authorises a named cloned test site and backup, use the existing checklist to run and record its upgrade and rollback.

**Reviewed at commit:** 6e321ff — checked the clean checkout and project record before extending the local rehearsal.

## 10 November 2026 — Unified local release-candidate gate — Codex (night shift)

**Changed (R-121, R-125):** Added one documented command that rebuilds the candidate in a disposable folder, compares every generated path and byte, checks the protected release files and retained runtime hooks, compares the aliased Library CSS, and runs source and candidate tests.

**Outputs:** `npm run check:release` prints the package version, checked Git commit, candidate artifact SHA-256 values and expected v0.2.6 protected-file hashes. It leaves the checked candidate and released files untouched. The gate does not establish release readiness or Webflow rollout.

**Checked how:** The candidate rebuild matched every existing candidate byte. The class namespace, retained runtime/API hooks and 17 protected historical files passed; stable files matched v0.2.9. Library CSS content matched after trimming one trailing whitespace byte. The full local suite reported 677 passes, 1 failure and 15 existing TODOs: the Lite workbench test expects a missing “Backdrop reference” label (`tests/lite-candidate.test.js`). This is a separate Lite workbench issue, not a candidate artifact mismatch. `git diff --check` passed. Local automated checks only; no browser or Webflow behavior was checked.

**Still open:** R-121 remains in progress pending the wider Webflow Library and rollout work. The single Lite workbench test failure remains open under the Lite work. The requested Webflow backups remain outstanding; they were not attempted under this run's local-repository-only limit.

**Needs Michael:** If the requested backups are still required, authorise a separate Webflow-enabled follow-up for the missing brief #321 after backup and the brief #419 before and after backups.

**Next useful action:** Resolve the Lite workbench label mismatch under its own brief, then rerun `npm run check:release`. Keep release approval and Webflow rollout as separate gates.

**Reviewed at commit:** a9d3c5d — checked the checkout and project record before adding this gate.

## 10 November 2026 — Built-in look removed from both Lite examples — Codex (night shift)

**Changed (R-181):** Turned the runtime's built-in visual presets off in the styled local example, matching the plain example.

**Outputs:** Both example headers now use `data-presets="false"`. The styled example therefore presents its own authored styling without the additional built-in look. No Webflow page was changed.

**Checked how:** Inspected both example header elements and confirmed each has the same preset-off attribute. This is source-level evidence only; no browser rendering, Webflow Canvas, Preview or published behavior was checked. No tests were run.

**Still open:** R-181 remains in progress; browser rendering, Webflow Canvas and clone-flow checks are outstanding under the wider Lite work.

**Needs Michael:** Nothing for this source change.

**Next useful action:** Continue the separately authorised Lite example and clone-flow checks when the named test environment is available.

**Reviewed at commit:** 0fd0bb8 — checked the current project records and local example source before this change.

## 10 November 2026 — Presets-off icon source trace — Codex (night shift)

**Changed (R-269):** Traced how the candidate handles default social and contact image icons when layout presets are off.

**Outputs:** The [asset/style trace](webflow/r269-dark-social-icons-trace-2026-11-10.md) identifies the concrete mechanism: preset-off excludes the CSS treatment that paints a copy of each image silhouette in the link's text colour, leaving the image's own colours to show. The checked-in evidence contains default asset IDs, but not the image bytes or SVG fills, so it cannot confirm the exact source colour of the icons in the supplied screenshot.

**Checked how:** Read the maintained and generated candidate CSS, the local Webflow component evidence and the preset behavior note. Confirmed the candidate CSS carries the same gate. No browser or Webflow readback was performed for this trace; no colors or site content were changed. No tests were run.

**Still open:** Exact selected icon asset contents and any per-image authored styles in the supplied Preview instance need visual/source confirmation in that same instance. The local trace does not establish rendered contrast or prove the screenshot's exact pixels.

**Needs Michael:** Nothing for this local source trace.

**Next useful action:** Read the selected icon assets and their computed image styles on the same Preview instance before considering any contrast change.

**Reviewed at commit:** b4b4cde — checked current project records and the local candidate/source evidence before this trace.

## 10 November 2026 — Short-height candidate CSS source review — Codex (night shift)

**Changed (R-269):** Recorded source-level height, overflow and positioning rules for Dropdown, Full-width, Left, Right and Overlay.

**Outputs:** The [short-height CSS source note](webflow/r269-short-height-css-source-2026-11-10.md) cites the maintained CSS lines and separates the shared header-adjusted panel cap from the full-viewport fixed drawer/overlay rules. It identifies the later single-menu browser observations needed to check actual scrolling and content reachability.

**Checked how:** Read the maintained stylesheet and its generated candidate distribution. Traced the shared collapsed-panel declarations and each layout's height, overflow and fixed-position rules. This is CSS-source evidence only; no browser, Preview, Webflow or published behavior was checked. No tests were run.

**Still open:** Whether each exact candidate menu scrolls as expected at short viewport heights, with one identifiable instance, remains a later browser check.

**Needs Michael:** Nothing for this source review.

**Next useful action:** Use the source note to guide the remaining R-269 short-height browser check on the authorised disposable test site.

**Reviewed at commit:** bc019a9 — checked the current project records and candidate source before this review.

## 10 November 2026 — Real-site upgrade and rollback checklist prepared — Codex (night shift)

**Changed (R-115):** Prepared a blank evidence checklist for a future authorised trial on one named cloned staging or test site.

**Outputs:** The [checklist](webflow/r115-cloned-site-upgrade-rollback-checklist.md) links to the existing [offline migration and rollback rehearsal](webflow/offline-migration-rollback-2026-10-16.md). It records exact old and new runtime versions and delivery files, clone/page identity, a confirmed pre-change backup, component state, authored styles, upgrade and rollback outcomes, and restored-page checks. It states that real-site upgrade and rollback remain untested until performed on a named, backed-up cloned site.

**Checked how:** Read the current project record and offline rehearsal, then reviewed the checklist against the requested evidence fields and stop conditions. Confirmed the links resolve and the results are blank/not run. No Webflow site or browser was opened; no site was changed or published. No tests were run.

**Still open:** The actual semantic-version upgrade, rollback and restored-page checks remain untested until an authorised trial is performed on a named, backed-up cloned site.

**Needs Michael:** Nothing is needed to prepare this local checklist.

**Next useful action:** Use the checklist only when a future brief authorises a named cloned staging or test site and its pre-change backup is confirmed.

**Reviewed at commit:** 49cd870 — checked the current project records and offline rehearsal before drafting this checklist.

## 10 November 2026 — Windows spoken-output protocol clarified — Codex (night shift)

**Changed (R-244):** Made the future Windows spoken-output check repeatable without presenting expected behavior as an NVDA result.

**Outputs:** The existing run sheet now records the exact component and runtime version, browser and version, viewport, zoom/scaling and tester details. Each step separates the expected behavior from blank fields for exact NVDA speech, focus target and result. It specifies the collapsed and expanded trigger states, omission of closed submenu links, authored nested-link order and two-stage Escape focus return. Historical VoiceOver evidence is identified as context only.

**Checked how:** Compared the protocol with the accessibility requirements in README, SCOPE and R-243–R-244, then reviewed the revised fields. `git diff --check` passed. No Windows or NVDA session was run; all actual speech and result fields remain blank.

**Still open:** Spoken-output behavior on Windows remains untested until a tester runs this protocol against an identified published page and exact component/runtime version.

**Needs Michael:** Nothing to prepare the protocol.

**Next useful action:** Use the run sheet when the Windows tester and the exact published Tablet page are available.

**Reviewed at commit:** 0d24860 — checked current project records and the existing R-244 run sheet before this update.

## 10 November 2026 — Lite clone-flow capture sheet prepared — Codex (night shift)

**Changed (R-185):** Prepared a repeatable record for a future blank-project clone check.

**Outputs:** The sheet has fields for project and page identity, observed component structure, Canvas edits, Desktop, Tablet, Mobile landscape and Mobile portrait, keyboard and focus, no-script fallback, assets, horizontal overflow and Console messages. It provides explicit values for unknowns, skipped checks and failures, and says that the sheet itself is not clone-flow evidence.

**Checked how:** Compared the fields with R-185, the accepted Lite scope and the native build sheet. Reviewed that observations remain blank and that template preparation is distinguished from performed checks. `git diff --check` passed. No Webflow project or browser was opened; no clone-flow behavior was checked.

**Still open:** The blank-project clone attempt and all runtime, Canvas and browser checks remain to be performed in an accessible blank test project.

**Needs Michael:** Nothing to prepare the template.

**Next useful action:** Use the capture sheet when the released Lite setup and blank test project are ready for the clone-flow check.

**Reviewed at commit:** 21450f3 — checked the current project records and Lite build evidence before drafting the template.

## 10 November 2026 — Workbench references labelled as static — Codex (night shift)

**Changed (R-182):** Clarified what the local closed/open workbench samples and backdrop represent.

**Outputs:** The closed sample is labelled as a static authoring reference; the open sample as a static forced-open authoring reference; and the backdrop as a non-interactive static sample. The page and native build sheet state that these references do not verify menu interaction or runtime behavior, nor backdrop activation, dismissal or scroll locking. No Webflow page or runtime code changed.

**Checked how:** Read the page, build sheet, R-182 and the current project record; reviewed the changed wording and ran `git diff --check`. Source wording only: no browser rendering, Webflow Canvas, Preview or published behavior was checked.

**Still open:** Browser rendering and Webflow Canvas editing remain unverified under the wider Lite work.

**Needs Michael:** Nothing for this wording update.

**Next useful action:** Continue the remaining Lite workbench and clone-flow checks.

**Reviewed at commit:** 8862ba0 — checked the workbench page, native build sheet and project records before this wording update.

## 10 November 2026 — Workbench styling contained — Codex (night shift)

**Changed (R-182):** Scoped the local workbench page styling so it cannot target the Lite example pages if the stylesheet is reused or combined.

**Outputs:** The workbench body now carries a page-specific class. Its `body`, direct-child `main`, `article`, `.workbench-example` and `.backdrop-swatch` rules all require that page scope. The [selector review](webflow/r182-workbench-css-containment-2026-11-10.md) lists the workbench, Lite example and candidate runtime selectors inspected. No runtime CSS, generated delivery files or released assets changed.

**Checked how:** Compared both Lite page stylesheets and markup with candidate runtime CSS, then reviewed the changed selectors and file list. `git diff --check` passed. Source inspection only; no browser rendering was checked.

**Still open:** Browser rendering and Webflow Canvas editing remain unverified under the wider Lite work.

**Needs Michael:** Nothing for this local correction.

**Next useful action:** Continue the remaining Lite workbench and clone-flow checks.

**Reviewed at commit:** c1ab040 — checked the current CSS, example markup and candidate runtime selectors before this correction.

## 10 November 2026 — Lite example navigation names clarified — Codex (night shift)

**Changed (R-181):** Gave the plain, styled and static workbench examples distinct navigation and trigger names.

**Outputs:** Each sample has one clearly named navigation landmark and a trigger named for its example. The review examples' backdrops remain decorative; the workbench backdrop swatch remains a labelled image. The existing Details, Summary and adjacent panel structure is retained because the local runtime and no-script fallback rely on that sibling relationship. Findings and limits are recorded in the [navigation review](webflow/r181-navigation-semantics-2026-11-10.md).

**Checked how:** Read the local example markup and existing structure checks; confirmed distinct names and backdrop treatment in source. `git diff --check` passed. No browser or screen-reader announcement, Webflow Canvas, or published behavior was checked.

**Still open:** Browser and assistive-technology behavior remain unverified as part of the wider Lite work.

**Needs Michael:** Nothing for this local correction.

**Next useful action:** Continue the remaining Lite example and clone-flow checks.

**Reviewed at commit:** e84ea28 — checked the current examples and project record before this review.

## 10 November 2026 — Lite example destinations clarified — Codex (night shift)

**Changed (R-181):** Made the local plain and styled examples’ menu destinations explicit and consistent.

**Outputs:** Both menus now use “Plain example”, “Styled example” and “Workbench references”, with each link targeting its matching section heading. The home links and navigation labels remain generic. Each menu still has one native link tree. No Webflow page or product branding changed.

**Checked how:** Inspected the two menu trees and all fragment targets in the example HTML; each target ID is present and matches its label. `git diff --check` passed. This was source inspection only; no browser, Webflow or published-page behavior was checked.

**Still open:** Browser rendering, Webflow Canvas and clone-flow checks remain open under R-181.

**Needs Michael:** Nothing for this local copy change.

**Next useful action:** Continue the separate R-181 example-navigation review.

**Reviewed at commit:** 10e6901 — checked the updated example copy and fragment destinations.

## 10 November 2026 — Published and Preview compared at 667 px — Codex (night shift)

**Changed (R-269):** Recorded a width-matched visual comparison of the bottom menu in saved Home Preview and the published Disposable SB Home page.

**Outputs:** Both bottom menus show the same Full-width panel arrangement, primary links, More row, outlined VIEW RELEASE button, social/contact links and very dark icons against the black panel. Each page has three stacked menu instances. The published bottom row is identifiable by position and content only; the browser page gives it no unique label. Its visible layout presets setting remains unknown. Earlier published-state records disagree about whether presets were on or off, and the comparison cannot resolve whether publication predates the saved settings.

**Checked how:** Chrome showed 667 CSS px in both the saved Preview Canvas and the published page's Responsive width control. The published bottom menu was opened for comparison. Height was not independently read back; this is width-matched visual evidence only. No screenshots were saved, and no computed styles, Console, link destinations or single-menu behavior were checked. No page content was edited or saved, and nothing was published or shared.

**Still open:** Exact published instance identity and preset value; matched viewport height; single-menu rendering and remaining R-269 checks.

**Needs Michael:** Nothing to complete this comparison.

**Next useful action:** Continue the remaining R-269 browser checks with a uniquely identifiable menu instance where the saved and published settings can be matched.

**Reviewed at commit:** b89b6a4 — checked current R-269 records and performed the Chrome comparison at 667 CSS px.

## 10 November 2026 — Preview error observed in Chrome — Codex (night shift)

**Changed (R-272):** Recorded the available Preview Console evidence and the limits of the browser capture. No page content, code, Preview setting or publishing state was changed.

**Outputs:** The saved Home page in Designer Preview showed Webflow's general `CompilationError: Invalid source code`, with stack locations at `webflow.js:501:37415` and `webflow.js:501:37229`. No duplicate-script or duplicate-declaration message appeared. The candidate version and any request tied to the compiler error were not identifiable. An earlier, separate PayPal SDK script request showed HTTP 400 in the Console; DevTools said that request was unavailable in Network, and no evidence connects it to the compiler error.

**Checked how:** Opened the exact Disposable SB Home Preview in Chrome, enabled Console log preservation, cleared old entries and reloaded once. The page showed “Compiling custom code…” and then redirected to GoDaddy sign-in. The exact general compiler error and source links were visible in the Console before that reload, but the cleared-log run did not reproduce it. The available viewport controls showed iPad Pro 13 emulation at 1376 × 1032 CSS px and 75% device-toolbar zoom; the Webflow Canvas viewport had initially read 2044 px. No screenshot or response excerpt was saved.

**Still open:** Fresh reproduction, candidate/version and instance identification, the failing submitted source, a page-specific compiler location and any directly related script request or response. The duplicate-script hypothesis remains unconfirmed. See [the capture record](webflow/r272-preview-error-capture-2026-11-10.md).

**Needs Michael:** Nothing for this capture record.

**Next useful action:** When the Disposable SB test site opens without redirecting to sign-in, repeat the cleared-Console Preview capture and inspect only requests demonstrably tied to that compiler error.

**Reviewed at commit:** d821bc6 — checked the current project record, R-272 capture card, saved Preview page state and Console evidence before recording this observation.

## 10 November 2026 — Minified Library Embed CSS compared — Codex (night shift)

**Changed (R-269):** Added a reproducible local comparison for the minified Library Embed CSS.

**Outputs:** The maintained CSS and readable candidate Embed CSS match exactly after trimming outer whitespace. The minified Library Embed has candidate variant aliases; after applying the Library builder's alias expansion and CSS minification, its complete CSS matches the generated result apart from a trailing newline. No selector or declaration differences remain in that comparison, including layout, visual presets and state rules.

**Checked how:** Ran `node scripts/compare-library-embed-css.mjs`. It compares the complete CSS blocks and prints character counts and SHA-256 values. No source, generated artifact, Webflow content or release was changed. No browser or Webflow behavior was checked.

**Still open:** The result verifies checked-in generated CSS only. It does not establish the current saved Webflow Embed bytes or Designer, Preview or published rendering and cascade behavior.

**Needs Michael:** Nothing to unblock this local comparison.

**Next useful action:** Continue the separately authorised R-269 staging comparisons; use the exact saved page and browser evidence to assess rendered layout and appearance.

**Reviewed at commit:** 7ca4d9c — checked the current project records and the three CSS artifacts before comparison.

## 10 November 2026 — R-271 sign-off location clarified — Codex (night shift)

**Changed (R-271):** Named the Voice Focus and madewithpixels staging pages in the sign-off instructions and clarified the menu button check.

**Outputs:** Michael can now find the two staging pages to try the resize and menu-closing outcome. State and Evidence are unchanged; Acceptance remains pending.

**Checked how:** Compared the R-271 instruction with the recorded staging-site evidence and D-095's outcome sign-off rule. Read the updated entry and checked the diff. No browser checks or tests were needed for this wording change.

**Still open:** Michael's sign-off remains pending. Fresh consumer-page checks remain open as recorded in the roadmap.

**Needs Michael:** Review the named staging pages and decide whether to sign off the outcome.

**Next useful action:** Try the R-271 checks on the Voice Focus and madewithpixels staging pages.

**Reviewed at commit:** f945390 — checked the current roadmap and project record before this wording update.

## 10 November 2026 — Preview error capture card — Codex (night shift)

**Changed (R-272):** Prepared the local capture card for the next authorised browser investigation.

**Outputs:** The short sequence records whether the page is saved Designer, Preview or published, and captures the exact Console message, source location and any related script request or response. It includes fields for page, candidate version, viewport and exact error text. It keeps Webflow's general compilation error separate from the unconfirmed duplicate-script hypothesis.

**Checked how:** Compared the card with R-272, the 10 November Preview record and the local source review. Checked that it asks for browser evidence and labels missing source/request details explicitly. No browser, Webflow or runtime check was made; the local source review is not treated as a runtime diagnosis.

**Still open:** The failing Preview input, page-specific compiler location and any related script request or response have not yet been captured.

**Needs Michael:** Nothing to prepare the card.

**Next useful action:** Use the card during the next authorised daytime Chrome investigation on the exact Disposable SB test page.

**Reviewed at commit:** 2c6f6f4 — checked the current R-272 and Preview records before drafting the card.

## 10 November 2026 — Local schema evidence indexed — Codex (night shift)

**Changed (R-261):** Indexed the checked-in source schema snapshots and historical destination comparison.

**Outputs:** The index identifies which recorded source fields are available and which destination details need a fresh Webflow read. It separates dated checked-in snapshots from current saved component state and makes no claim about files outside the inspection.

**Checked how:** Read the two 15 October Library JSON snapshots, the Library candidate report, the historical POC acceptance and copy-paste records, the destination test-page snapshot, and the 16 October combined-candidate review. Inspected snapshot keys, edition/variant counts and image-property IDs/defaults. No Webflow or browser read was made.

**Still open:** The exact current source/destination linked schemas, destination property/default rows, and destination-local icon asset-ID crosswalk require a later Webflow read.

**Needs Michael:** Nothing; this local evidence index completes the brief's inventory.

**Next useful action:** Use the index to guide a separately authorised read-only Webflow comparison for the exact R-261 source and destination.

**Reviewed at commit:** a9642f5 — checked the project records and named local evidence files before this update.

## 10 November 2026 — R-270 trigger source map — Codex (night shift)

**Changed (R-270):** Mapped local trigger and close-control styling, dimensions and timing against the earlier browser note.

**Outputs:** The ordinary trigger's source rules define behavior but no colour or box dimensions. A preset close-control rule gives Left, Right and Overlay layouts a 44px minimum and dark surface/text/border colours during opening, open and closing. Panel and icon durations are defined separately; no trigger background transition is specified. Earlier Voice Focus and madewithpixels measurements remain explicitly consumer-site browser evidence.

**Checked how:** Read the maintained CSS and JavaScript, checked the candidate generated CSS and main Embed, and compared them with the 4 November R-270 browser note. No Webflow or browser check was made tonight.

**Still open:** Current consumer rendering, state-specific colours and dimensions, computed trigger transition timing, and whether the close-control minimum is overridden remain browser-only checks.

**Needs Michael:** Nothing to unblock this local source map.

**Next useful action:** Use the authorised Chrome checks to compare trigger box and computed colour/timing in closed, hover, keyboard focus, open and closing states on each named consumer page.

**Reviewed at commit:** 8005010 — checked current project records, the R-270 browser note, and maintained and checked-in release sources before this update.

## 10 November 2026 — Duplicate-style evidence template — Codex (night shift)

**Changed (R-268):** Added a reusable evidence record for the controlled duplicate-style check.

**Outputs:** The template captures each matching style record by stable ID, selector and local/Library origin; before/after declarations by breakpoint and pseudo-state; actual element assignments; intended local and same-name imported records; rendered evidence; the linked sibling; and the named recovery point with independent recovery checks. It directs the later checker to the existing preflight and keeps this blank template distinct from test evidence.

**Checked how:** Compared the fields with R-268's exit criteria, the incident record and the duplicate-class write preflight. `git diff --check` passed. No Webflow, Designer, Preview, published-page or write check was run.

**Still open:** The controlled R-268 regression test and all site-level evidence remain unrun.

**Needs Michael:** Nothing to unblock this local template.

**Next useful action:** Use the template during the separately authorised R-268 check on its exact backed-up fixture.

**Reviewed at commit:** 0eb082a — checked the current project record and duplicate-class preflight before this update.

## 10 November 2026 — Clarified older-style upgrade and rollback guidance — Codex (night shift)

**Changed (R-269):** Updated the local candidate upgrade guide for installations that rely on v0.2.6's forced layout or visual defaults.

**Outputs:** The guide now distinguishes v0.2.6 source behavior from current candidate defaults, lists the Webflow layout, geometry, visual and motion values an author may need to save before upgrading, and gives a whole-set rollback check for component, styles and runtime. It links the candidate stylesheet, immutable v0.2.6 stylesheet, dated source comparison and prior rollback records. It says explicitly that source and bounded site observations do not prove behavior for each installation.

**Checked how:** Compared the guide with the current CSS ownership map, candidate stylesheet and Embed, v0.2.6 release record, offline rollback note and release preflight. `git diff --check` passed. No tests, Webflow, Designer, Preview, published-page or installation check was run.

**Still open:** Designer saved styles, Canvas rendering, Preview, published behavior and a real Webflow upgrade/rollback remain unverified for installations covered by this guide.

**Needs Michael:** Nothing to unblock this documentation update.

**Next useful action:** Use the guide in the separately authorised backed-up disposable-site comparison; do not infer consumer readiness from this documentation change.

**Reviewed at commit:** af169fb — checked the current source, candidate records and project documentation before this update.

## 10 November 2026 — Runtime class styling-hook audit — Codex (night shift)

**Changed (R-268, R-269):** Audited class-based selectors in maintained runtime CSS and JavaScript, plus the checked-in candidate delivery copies.

**Outputs:** The findings note classifies `.sb-nav-inner` as structural positioning, `.sb-nav-submenu-list` as structural layout with open-state visibility, `.sb-nav-panel` as a JavaScript structure fallback, and `.w-embed` as a Designer placeholder rule. None uses the three class names in the recorded R-268 style-write incident. The overlap is limited to the general risk of name-based Webflow style writes; this audit gives no evidence that changing runtime selectors would solve it. The note names the controlled follow-up and its evidence limits.

**Checked how:** Read the maintained CSS and JavaScript and compared the matching candidate distribution and generated Embed selectors. Read the R-268 incident record and roadmap exit criteria. No Webflow, browser, rendering or test check was made.

**Still open:** The controlled R-268 style-targeting regression test has not run. Any removal of legacy `.sb-nav-*` selectors requires evidence that supported legacy markup carries the equivalent data hooks.

**Needs Michael:** Nothing to unblock this local source audit.

**Next useful action:** Run the authorised R-268 controlled test against an exact pinned candidate, recording stable style IDs and element assignments before and after each write.

**Reviewed at commit:** c864f9a — reviewed current project records, source selectors, generated candidate selectors and the incident record before this audit.

## 10 November 2026 — Presets-off source audit — Codex (night shift)

**Changed (R-269):** Audited the maintained candidate CSS, readable generated CSS and main generated Embed for visual declarations across the root, panel, links, contact links, CTA, trigger and backdrop.

**Outputs:** Presets-off gates panel and overlay colours, borders, shadows, overlay type, link appearance, decorative spacing, contact separators and icon tinting. The CTA has no runtime style rule; the closed trigger has behavior rules only. Drawer close-button appearance is gated. Backdrop surface is gated while its position and visibility behavior remain unconditional. Unconditional layout rules remain for collapse, panel geometry and full-width grid tracks; the audit lists them without claiming rendered effects. No source/generated gating discrepancy was found.

**Checked how:** Read numbered declarations in `src/navbar-light.css`, `candidate/dist/navbar-light.css` and `candidate/webflow/navbar-light-embed.html`. No browser, Webflow or rendering check was made.

**Still open:** This source audit cannot establish Designer, Preview or published rendering. The broader R-269 comparisons and authored-style cases remain open as recorded below.

**Needs Michael:** Nothing to unblock this local audit.

**Next useful action:** Continue the remaining R-269 comparison work from its current authorised checklist.

**Reviewed at commit:** 7e74359 — reviewed project records and candidate source before this audit.

## 10 November 2026 — Menu button finding accepted; runtime style ownership mapped — Codex (night shift)

- 10 November 2026 — Accepted by Michael in boss: R-270 (checked: Looked at brief #318's result).

**Changed (R-269):** Recorded the source-level ownership map for Dropdown, Full-width, Left, Right and Overlay, including the shared closed/open/closing rules and the Designer-owned properties.

**Outputs:** The maintained CSS and the main candidate Embed contain the same CSS text. Candidate output styling is predominantly low-specificity structural defaults; surface, colour, borders, shadows, spacing and overlay typography are behind the presets switch. Runtime state rules still control visibility, pointer access, transforms and transitions. Full-width has a runtime grid layout and mobile one-column rule; left/right/overlay receive fixed placement and motion. The note records the separate serialization limits for the minified Library Embed and older 0.2.9 Embed.

**Checked how:** Compared numbered source and candidate CSS, inspected the style block in the generated candidate Embed, and checked the five layout selector groups plus state, backdrop, close-trigger and motion rules. Compared Webflow evidence only as historical reported observations; no Webflow or browser check was made in this session.

**Still open:** The minified Library Embed has not had a complete normalized selector/declaration comparison against source. This note cannot establish the saved Designer styles, Preview rendering or published behavior for each layout. Prior reports cover some staging observations but do not identify every layout-instance-width combination.

**Needs Michael:** Nothing to unblock this local comparison.

**Next useful action:** Continue the separately queued presets-off audit, then use the existing authorised staging comparison to capture matched Designer, Preview and published evidence for each layout.

**Reviewed at commit:** a8be015 — checked current records and source baseline before this update.

## 10 November 2026 — Sign-off wording for menu findings and release — Codex (night shift)

**Changed (R-270, R-271, R-125):** Added plain Try instructions to the menu button finding and menu resize fix. The release step is now grouped under the menu fix outcome, which lists it as covered. State and Evidence were left unchanged; the release step is not separately accepted.

**Outputs:** The two outcome items now tell Michael what to try on the staging pages. The earlier release item is identified as a covered step rather than a separate sign-off.

**Checked how:** Compared the three roadmap entries with their existing evidence and the D-095 sign-off rule. Read the edited entries and checked the diff; no tests or browser checks were needed for this wording-only update.

**Still open:** Michael’s sign-off remains pending for the two outcome items. Consumer-site checks described in the existing evidence remain open.

**Needs Michael:** Nothing to unblock this documentation update.

**Next useful action:** Michael can try the two menu checks on the staging pages and sign off the outcomes in Boss.

**Reviewed at commit:** 2ee2615 — reviewed the current roadmap, project records and Git baseline before this update.

## 10 November 2026 — Saved Preview, backup and staging comparison — Codex

**Changed (R-269):** With Michael’s instruction to keep working in Chrome and permission to back up and publish, I backed up the current saved site and published it to the Webflow staging subdomain. No page structure, style or Library content was edited or shared.

**Outputs:** Michael supplied a Designer Preview screenshot of the selected third candidate open at 667 px. All menu links and the CTA are visible in the screenshot. The social icons appear much darker than their labels against the black panel. Screenshot height is not separately recorded. In the Webflow Designer Backups list, I confirmed `R-269 before publishing current saved state` (1 page, 137 styles, 226 elements). The Publish dialog showed only `disposable-sb-test-site.webflow.io` selected and the custom-domain option disabled. After publishing and refreshing the staging page, its third row matched the saved library component by class, reported Full-width and `data-presets=False`, and was open. At 2044 × 1076 CSS pixels, computed styles showed a transparent panel with pale 1 px border and 12 px radius; pale 12.8 px links with 10 px / 12 px padding; and a pale 12 px CTA with a pale border. This confirms the current saved presets-off value reached staging, but the 2044 px style read is not a matched-width comparison with the 667 px Preview screenshot.

**Checked how:** Read Michael’s supplied screenshot and the Webflow Designer Preview. In Chrome, used Designer Settings → Backups and confirmed the named backup in the list. Checked the Publish destinations, published to the Webflow subdomain, refreshed the published page and inspected the third component’s DOM attributes and computed panel, link and CTA styles. No Console logs were read and no screenshot file was saved.

**Still open:** Compare the published component visually at 667 px with the supplied Preview screenshot; its height remains unknown. Check one identifiable menu at short viewport height, the remaining authored-style cases and the published Console. The general Preview compilation error remains unexplained. R-269 remains in progress and Michael’s acceptance remains unchanged.

**Needs Michael:** Nothing for this comparison.

**Next useful action:** Continue the browser comparison at a measured 667 px published viewport, then check short-height behavior with one identifiable menu and the remaining authored styles.

**Reviewed at commit:** 6538140 — reviewed current project records and the R-269 comparison checklist before this Chrome pass.

**Handoff:** The candidate’s current settings are now published to `disposable-sb-test-site.webflow.io`; the Webflow backup is named above. The staging page was inspected at 2044 × 1076 CSS pixels. The exact-width comparison, single-menu short-height check, remaining authored-style cases and Console read remain open. No Library share occurred.

## 10 November 2026 — Published styling, short-height and keyboard comparison — Codex

**Changed (R-269):** No Webflow content, styles, publication or Library share changed. Recorded a bounded read-only comparison of the published test page.

**Outputs:** At a measured CSS viewport of 1280 × 720, the published Home page showed three expanded menu rows. Their top edges were at 0, 91 and 183 px; the first two published roots report Dropdown and the third Full-width. The panel, first link and CTA computed styles matched across the rows: transparent panel with a pale 1 px border and 12 px radius; 12.8 px links with 10 px / 12 px padding; and a 12 px CTA with a pale border. This is a published-page read, not proof that the stacked desktop appearance is intended.

At 471 × 900, opening the top and middle rows showed their panels partly hidden behind later rows; opening the bottom row showed its full-width panel and all links. Michael has confirmed that lower rows covering upper panels is expected on this multi-menu fixture, so no stacking fix is needed.

At 471 × 500, the bottom full-width panel began at y=216 px and extended to y=610 px. Its CTA was visible, but its social and contact links fell below the viewport. The panel reported `overflow-y: auto` but had equal scroll and client heights; a wheel attempt did not move it. This is evidence about the stacked fixture only and does not establish how a single isolated menu behaves at short heights.

On the top trigger at 471 × 900, Tab moved focus from the brand link to the trigger with a visible focus indicator. Space opened the menu while focus stayed on the trigger. Escape closed it and retained focus there. After reopening, Tab moved focus to Home; Escape closed the menu and returned focus to the trigger.

The current saved Home Preview readback has three roots: a standalone menu, a root marked `data-unlink-candidate`, and a `SmashBurger 0.3.0-rc.1 candidate` component instance. The selected component instance currently reads Layout Full-width, Layout presets Off and Canvas-open Off. The published third row is the same component: its DOM class is `mwp-component-library--sb-nav` and its variant is Mobile landscape. It is Full-width in the published page, but the published markup reports presets enabled. Site metadata says it was last updated at 12:49 UTC and last published at 12:01 UTC, so the published page predates the current saved site. This does not establish when or why the presets value changed. I did not change these values.

**Checked how:** Read the live Home page in the in-app browser, measured its CSS viewport and menu rectangles, inspected computed styles and accessibility state, and performed the short-height wheel and keyboard checks. Read the saved Home page tree and component-instance props through Webflow MCP. Matched the published third row to the candidate by its `mwp-component-library--sb-nav` class and Mobile landscape variant. Confirmed site `lastUpdated` and `lastPublished` metadata. The component-instance visual snapshot and library component tree were unavailable through the Webflow tools, so I could not capture a matching saved Preview screenshot. No Console logs were read. No local screenshot files were saved.

**Still open:** Compare the current saved component instance visually with the published row at matched sizes. Webflow's component snapshot and tree-readback routes do not support this library component, so the exact saved Preview rendering remains unverified. The published page predates the current saved site and cannot verify the current presets-off state. Check short-height behavior with one identifiable menu, presets-off rendering, the remaining authored-style cases and Console. The general Preview compilation error is still unexplained.

**Needs Michael:** Please share a screenshot of the selected candidate in the saved Home Preview with its menu open and the viewport size noted. This is the missing visual evidence for comparing the current presets-off state; Webflow's connected tools cannot render this library component.

**Next useful action:** Compare the saved Preview screenshot from Michael with the matched published third row; do not change props or publish.

**Reviewed at commit:** ae92420 — checked the current status and roadmap before confirming the saved and published component identity.

**Handoff:** The in-app browser remains on `disposable-sb-test-site.webflow.io` at its default viewport with all three menus closed. The Webflow Designer remains on the saved Home Preview with the candidate component instance selected. No page structure, styles, Library share or published content changed.

## 10 November 2026 — Published mobile menu and keyboard check — Codex

**Changed (R-269, R-272):** No Webflow changes. The published test page remains as published to its Webflow subdomain.

**Outputs:** On the published Home page, the in-app browser screenshot measured 605 × 900 pixels; the CSS viewport width was not read. It showed three collapsed MENU buttons. Opening the bottom row exposed its full panel and all listed links. Opening the middle row showed its panel, but the first Home link was present in the accessibility tree and not visible in the screenshot; it appears to be obscured by the row below. Opening the top row left the panel's upper content visibly hidden behind the rows beneath it. Row-to-component identities remain unknown. On the top row, Space opened the menu; Escape closed it and focus remained on the same trigger. These are checks of the published page, separate from Michael's earlier Preview reports.

**Checked how:** Opened each published MENU button separately in Codex's in-app browser and reviewed its accessibility tree and screenshot. Used Space and Escape on the top trigger, then verified the resulting expanded/collapsed state and focused element. Left all menus closed. No Console was read.

**Still open:** Compare the saved styling with the published page; check another mobile width, short height, presets-off and Console. The earlier general Preview compilation error remains unexplained.

**Needs Michael:** Nothing for this check.

**Next useful action:** Continue with the remaining styling and runtime checks without treating the stacked test menus as a defect.

**Reviewed at commit:** 37e04fd — reviewed the latest pushed nightshift records and R-269 checklist before the published-page checks.

**Handoff:** The staging page is open in Codex's in-app browser with all three menus closed. Do not change page structure, publish again or share the Library during the comparison.

**Clarification from Michael:** The page deliberately contains multiple menu instances. Lower rows cover panels from rows above because of their position in the same page's DOM; that stacking is expected and is not a defect to fix.

## 10 November 2026 — Published-page check card — Codex (night shift)

**Changed (R-269):** Prepared a focused checklist for the next authorised browser session. No site, page or menu was changed.

**Outputs:** The checklist separates Michael's reported 667 px and Tablet/Mobile layout observations from the published Home-page evidence. It records the published baseline of three expanded navigation rows at 1280 × 720, while marking their menu identities and intended appearance unknown. It covers appearance across Canvas, Preview and the published page; presets off; short viewport height; keyboard opening; Escape closing; and focus return. Each check asks for the page, menu identity and measured viewport where known, plus screenshots or interaction evidence. Unknown width and instance identity are explicit.

**Checked how:** Read the current R-269 STATUS and ROADMAP evidence, the published-page record and the local brief draft. No Webflow, browser, network or tests were used, as required by brief #387. No site changes, publication or Library sharing were made.

**Still open:** All new published-page appearance, presets-off, short-height and keyboard/focus checks remain outstanding. The checklist does not count earlier Preview checks or Michael's reports as published results.

**Needs Michael:** Nothing for preparing the checklist.

**Next useful action:** Use the checklist in one authorised browser session on the Disposable SB test site's Home page and record results by layer, menu instance and viewport.

**Reviewed at commit:** e008273 — checked current project records and R-269 evidence before preparing the checklist.

**Handoff:** The next authorised browser session should start with the checklist and the 10 November published baseline. Match the three published rows to the saved Home page's menu roots before attributing results; keep unknown identities and widths labelled unknown. Do not infer acceptance from the checklist or the earlier reports.

## 10 November 2026 — Local Preview error source review — Codex (night shift)

**Changed (R-272):** No source or generated code changed. Added this evidence note only.

**Outputs:** Confirmed source facts: `scripts/build-webflow-embed.mjs` reads `src/navbar-light.js`, removes the `export` prefix from the class and initializer declarations (lines 8–11), minifies that browser source (lines 14–18), and wraps it in `(() => { ... })()` (line 19) before writing the style and script tags (lines 21–22). The generated candidate at `candidate/webflow/navbar-light-embed.html` ends its script body with the same closure (lines 720–723; minified body at line 721). The module has two exported declarations (`src/navbar-light.js`, lines 127 and 486); the builder removes those prefixes and appends assignments for `NavbarLight` and `initNavbarLight` on `globalThis`. The closure keeps ordinary declarations, including `const` and the class, local to each Embed execution. I found no concrete syntax or scope defect in this wrapper path that explains Webflow's general “CompilationError: Invalid source code”.

**Possible causes, not established:** A compiler limitation or a difference in Webflow's transformed Preview input could still be involved. This source review cannot determine whether Webflow parses the complete Embed, injects or combines other code, or fails on a runtime-only condition. The `globalThis` exports are intentional shared properties; they do not by themselves show a duplicate top-level lexical declaration.

**Checked how:** Read the local builder, source and generated candidate Embed with line numbers; searched the relevant files for script tags, module imports/exports and closing-script text; reviewed the prior R-272 Preview evidence and local Git history. No Webflow, browser, network, tests or code execution was used.

**Still open:** The exact failing Preview input and compiler diagnostic/source location, and whether the current candidate Embed reproduces the error in Webflow Preview.

**Needs Michael:** Nothing for this local source review.

**Next useful action:** In an authorised browser session, capture the failing Preview request and source location, then compare the exact submitted script with this local candidate.

**Reviewed at commit:** e5f9c8b — checked current project records, source, generated Embed and relevant history.

## 10 November 2026 — Test site published to staging — Codex

**Changed (R-269, R-272):** With Michael's permission, published the Disposable SB test site to its Webflow subdomain only. The site has no custom domains. No styles, page content, Library share or other domains were changed.

**Outputs:** Webflow reports the site published at 10 November 2026, 12:01 UTC. The staging Home page loads. At the 1280 × 720 browser viewport, a screenshot shows three expanded navigation rows stacked vertically; the accessibility tree exposes three menu navigation rows with links. This does not verify mobile layout, menu interactions or keyboard behavior on the published page. I also drafted two local-only nightshift briefs for R-269 and R-272 in [the brief drafts](webflow/nightshift-brief-drafts-2026-11-10.md); the connected Boss tools do not expose a create-brief action, so they have not been queued.

**Checked how:** Read the exact site's publish targets before publishing; `customDomains` was empty. After publishing, read site metadata showing the updated `lastPublished` and `fullSiteCompiledAt`, then opened the staging URL and inspected its accessibility tree. No console log was read.

**Still open:** Compare the three expanded rows with the intended published desktop layout, then check the newly published page's responsive layouts, keyboard/focus behavior and console. The screenshot is one desktop viewport only.

**Needs Michael:** The two nightshift briefs are ready in the local draft file. Queueing them requires the normal Boss brief-creation route, which is not available through this session's Boss tools.

**Next useful action:** Queue the two prepared briefs through the normal Boss brief-creation route, then continue a bounded visual and keyboard check on the published staging page.

**Reviewed at commit:** b942c44 — checked the current project record before publishing and recording the result.

**Handoff:** The exact Disposable SB test site is published to `disposable-sb-test-site.webflow.io` only. No custom domains are configured. Do not publish elsewhere or share the Library without separate authority.

## 10 November 2026 — Tablet and mobile layout checks — Codex

**Changed (R-269):** No Webflow changes. The candidate page and its layout settings were left as they were after the prior checks.

**Outputs:** Michael reports that all five layouts—Dropdown, Full-width, Left, Right and Overlay—open cleanly at Tablet and Mobile sizes in the disposable test site. This is his visual report; exact pixel widths and the menu instance used for each layout were not specified. It does not establish behavior on the published page.

**Checked how:** Recorded Michael's report in chat. I did not independently operate the Designer Preview. No new backup was made, following Michael's instruction for this session.

**Still open:** Compare Designer and Preview styling with the current published page; check presets-off, short-height, keyboard/focus and any remaining authored-style cases. The staging site was published on 10 November; open-menu, responsive, keyboard/focus and console behavior on that publish have not been checked. The earlier general Preview compilation error remains unexplained.

**Needs Michael:** Nothing for the reported Tablet and Mobile layout checks.

**Next useful action:** Continue the remaining appearance, keyboard/focus and published-page checks without changing the saved layout settings.

**Reviewed at commit:** a395206 — reviewed the current status and roadmap before recording Michael's new report.

**Handoff:** Layout state remains as previously recorded: the unlinked bottom menu is Dropdown, and the still-linked second menu is Right. No styles, page content, Library share or publication changed.

## 10 November 2026 — Dropdown and Full-width Preview checks — Codex

**Changed (R-269, R-272):** Temporarily set the saved candidate instance to Full-width and then Left. Restored its original Dropdown layout; Layout presets remain On and Canvas-open Off. No styles, page content, component definition, Library share or publication changed.

**Outputs:** In the saved Home page's 667 px Designer Preview, Michael reports that the unlinked bottom candidate opens and closes cleanly in Dropdown, Full-width and Left. The separate, still-linked second menu is set to Right; Michael reports it opens without clipping but sits underneath the bottom menu. These are his visual observations. The current Preview rendered three collapsed menu triggers with custom code enabled. The published site is still the 5 November version. Michael's phone review also reports that the upper expanded menu is cut off by menus beneath it while the lower menu works well; he chose to keep the updated version for further checks (brief #370).

**Checked how:** Reconnected Webflow MCP to the exact Disposable SB test site. Read the saved component instance and its five supported Layout values. Changed the bottom candidate's Layout property to Full-width and then Left through Webflow MCP, reading the values back each time; restored Dropdown and confirmed presets On and Canvas-open Off. Preview was at 667 px. Codex could not click within Webflow's separate-origin Preview frame; Michael performed and reported the Dropdown, Full-width, Left, Right and Overlay visual checks. No Console was read. No new backup was made, following Michael's instruction for this session.

**Still open:** Presets-off, short-height, keyboard/focus, and detailed Style-panel versus Preview/published comparisons remain open. The general Preview compilation error reported in an earlier check remains unexplained; this run does not establish a duplicate-script error or prove its absence. The published page remains at 5 November.

**Needs Michael:** Nothing for the layout comparison; Michael reports Overlay on the second, still-linked menu is good and restored Right afterwards.

**Next useful action:** Continue with the remaining presets-off, short-height, keyboard/focus, and Style-panel versus Preview/published checks. Keep the unlinked bottom candidate in Dropdown and the second linked menu in Right.

**Handoff:** Codex's in-app Designer is on the Disposable SB Home Preview at 667 px. The unlinked bottom candidate is in Dropdown; presets are On and Canvas-open is Off. The still-linked second menu is restored to Right after its Overlay check. Michael reports Overlay is good. Do not share the Library or publish.

**Reviewed at commit:** 6a07a1b — checked the saved Home page, current Preview, component props, site publication date and project records.

**Correction:** The Right-layout observation above concerns the second, still-linked menu, not the unlinked bottom candidate. The bottom candidate's confirmed open layouts are Dropdown, Full-width and Left.

## 10 November 2026 — Phone comparison decision recorded — Codex (night shift)

**Changed (R-269):** Kept the updated menu on the disposable test page for further checks, following Michael's choice in brief #370. No Webflow content or published page was changed in this session.

**Outputs:** Michael's phone review found that at mobile width the upper expanded menu is cut off by the menus beneath it; the lower menu works well. The updated menu remains the chosen test version despite that finding.

**Checked how:** Read Michael's brief answer in the boss inbox and checked the current project status and R-269 record. I did not open a browser or phone page; tonight's limits allow local repository work only. The phone finding is Michael's report, not an independent check by Codex.

**Still open:** R-269's remaining visual comparisons and the reported mobile overlap need follow-up in the authorised Webflow/browser session. This record does not establish current published-page behaviour beyond Michael's report.

**Needs Michael:** Nothing for brief #370; Michael has supplied the phone finding and selected Keep it for further checks.

**Next useful action:** Continue the remaining R-269 checks in an authorised browser session, keeping the updated test menu in place.

**Reviewed at commit:** 5df7c36 — checked the current status, roadmap, decision record and brief answer before this entry.

## 10 November 2026 — Component layout property check — Codex

**Changed (R-269, R-272):** Temporarily changed the saved Home page's embedded SmashBurger instance from Dropdown to Full width and turned on its Canvas-open helper. Both values were restored (`Layout=dropdown`, Canvas helper Off). No styles, component definition, Library share or published content changed.

**Outputs:** The instance Properties panel shows the Mobile landscape variant, Dropdown layout, 24 rem panel width, Layout presets On and Canvas-open Off. At 667 px, setting Layout to Full width changed the property readback, but the open panel did not appear in the Canvas even with Canvas-open On. Preview loaded and its accessibility tree showed three collapsed menu triggers. A click on the selected menu in Preview failed because its content is in a separate-origin frame, so no open-panel rendering was verified. This check does not prove that Full width or the other four layouts render correctly.

**Checked how:** Read the instance Properties panel, switched to the Mobile (L) breakpoint at 667 px, temporarily set Full width and Canvas-open On, then restored Dropdown and Canvas-open Off. The component property now reads Dropdown, presets On and Canvas-open Off. Tried the selected component's Preview trigger once; it was unavailable to the browser control. No new backup was made, following Michael's instruction for this session.

**Still open:** Verify open-panel rendering for all five layouts, presets off, styles across Designer Canvas and Preview, open/close and keyboard/focus behavior, short-height behavior and the current published page. The Preview click limitation and the generic compilation error reported earlier remain unresolved.

**Needs Michael:** Nothing.

**Next useful action:** Continue from this saved component instance and find a supported way to open its menu in Preview or a current rendered test page; keep the Library share and publish gates closed.

**Handoff:** Codex's in-app Designer is on the Disposable SB Home Canvas at 667 px with the SmashBurger instance selected. Its Layout is restored to Dropdown; Layout presets are On and Canvas-open is Off. No dialog is open. Read this entry and R-269/R-272 first.

**Reviewed at commit:** 659fc6f — checked the current Designer and project records before this entry.

## 10 November 2026 — Presets-off and candidate Style-panel check — Codex

**Changed (R-269, R-272):** No lasting site change. Temporarily set the unlinked menu's `data-presets` to `false` for a Canvas look, then restored it to `true`. No styles or page content were edited.

**Outputs:** At 999 px (Desktop), the candidate menu remained visible with its links and outlined CTA while presets were off; the screenshot showed no obvious appearance change from the preceding presets-on view. Read-only Style-panel checks showed: the panel is a Flex child with left/center alignment, 0.125 rem gap, 0.25 rem vertical padding, transparent background and 0.75 rem radius; the secondary links are a Flex child with left/stretch alignment, 0.5 rem gap, transparent background and inherited colour; the CTA uses inline Flex, centered content, 2.75 rem minimum height, bold text, 99 rem radius, a 1 px border, 1 rem side padding and inherited colour. This is Designer Canvas and saved Style-panel evidence; it does not prove computed styles or Preview/published rendering.

**Checked how:** Compared the Canvas at 999 px before and during the temporary presets-off setting. Settings read back `data-presets=true`, `data-canvas-open=false` and `data-collapse=tablet` after restoration. The Designer remained active. No new backup was made, following Michael's instruction for this session.

**Still open:** The five-layout presets-off comparison, the other authored elements, open/close and keyboard/focus behavior, short-height checks, and current published-page comparison. The general Preview compilation error remains unexplained; no duplicate-name error has been confirmed.

**Needs Michael:** Nothing.

**Next useful action:** Map which layout variants are available in this exact saved page, then continue the bounded comparison without sharing the Library or publishing.

**Handoff:** Codex's in-app Designer remains on the Disposable SB Home Canvas at 999 px with the unlinked menu selected and Navigator open. All temporary settings are restored. Read this entry and R-269/R-272 first. Do not publish or share the Library.

**Reviewed at commit:** 659fc6f — checked project records and the saved Designer Canvas before this entry.

## 10 November 2026 — Designer and Preview layout checks — Codex

**Changed (R-269, R-272):** Added a reversible layout-attribute check on the unlinked candidate in the saved Home page. No style, page content, component definition, Library share or published content was changed.

**Outputs:** At 820 px in Designer Preview, the standalone and nested Library menus were expanded while the unlinked candidate was collapsed. Temporarily changing only the candidate's `data-collapse` from `tablet` to `mobile-landscape` made it expand at 820 px; restoring `tablet` made it collapse again. Temporarily setting `data-canvas-open=true` displayed its panel in Designer Canvas. Both temporary attributes were restored; Settings read `data-canvas-open=false` and `data-collapse=tablet` afterwards. Read-only Style-panel inspection of the unlinked candidate's inner wrapper showed Flex, space-between on X, centred on Y, 0.75 rem gap, 4.5 rem minimum height, transparent background and 1.5 rem side padding.

**Checked how:** The active Designer session showed Michael as active. Checked the Settings and Style panels and Canvas at 820 px (Tablet). Preview showed all three sets of navigation links. Style values were read only; no styles were written. No new backup was made; Michael confirmed a backup had just been taken and asked us not to take another after each task.

**Still open:** Compare all five layouts and presets-off styling across Designer Canvas, Preview and the published page; check open/close, keyboard, focus and short-height behavior; investigate the general Preview compilation error, which is not specific evidence of duplicate script names. The published page is still the 5 November version. The menu trigger's earlier alert was dismissed, but its text was not captured.

**Needs Michael:** Nothing.

**Next useful action:** Continue the saved candidate's Canvas-open styling check, then compare Preview and the published test page where authorised. Keep the Library share and publish gates closed.

**Handoff:** Codex's in-app browser remains on the Disposable SB Designer Canvas at 820 px with the unlinked candidate selected. Its temporary settings are restored (`data-canvas-open=false`, `data-collapse=tablet`). Read this entry and R-269/R-272 first. Do not share the Library or publish. No new backup is needed unless a later step specifically requires one.

**Reviewed at commit:** ed9ebee — checked the saved page, Designer Canvas and current project records.

## 10 November 2026 — Record queued candidate task — Codex

**Changed (brief #366):** Added R-272 for Michael's queued task to update the shared candidate and check the disposable staging page.

**Outputs:** The roadmap keeps the task's acceptance open. It records the earlier local candidate match and the zero-message published-page Console result, including the 5 November publication limit.

**Checked how:** Compared the Boss inbox wording with the existing R-269 evidence and the 10 November status entry. No Webflow site was opened or changed in this brief.

**Still open:** Check the current saved Designer page or Preview for the duplicate script-name error, and confirm any shared candidate update that is still needed.

**Needs Michael:** Nothing.

**Next useful action:** Continue the R-269 comparison in Designer and Preview on the backed-up Disposable SB test site; keep the Library share and publish gates closed.

**Reviewed at commit:** 9fd984c — checked the task against the existing candidate evidence and current roadmap.

## 10 November 2026 — Candidate embed and staging script check — Codex

**Changed (brief #321, R-269):** Updated the local Webflow Embed generator so each copy keeps its JavaScript names private. Rebuilt the candidate files. The saved self-contained Library candidate already had this wrapper, so it needed no Webflow edit.

**Outputs:** The generated Library candidate Embed now matches the saved `SmashBurger 0.3.0-rc.1 candidate` code exactly. No Library share, test-page edit or publish was made. The staging page's visible layout shows three navbar rows.

**Checked how:** `npm run test:candidate` passed 693/693 checks. Reloaded the published Disposable SB test site with Chrome DevTools open; the Console showed zero messages. The site was last published on 5 November, so this is evidence for the published version, not proof of the current saved Designer version or of R-269's layout styling.

**Still open:** The Designer, Preview and five-layout styling comparison for R-269. The three visible navbar rows on the published test page are also unexplained. No layout styling, menu behavior or mobile comparison was checked in this brief.

**Needs Michael:** Nothing for brief #321.

**Next useful action:** Continue the R-269 comparison in Designer and Preview on the backed-up Disposable SB test site. Keep the separate Library share and publish gates closed.

**Handoff:** `Disposable SB test site` has a confirmed brief #321 backup named `Backup` from 10 November at 09:33. `MWP Component Library` has a confirmed `boss · brief #321 · before` backup from 10 November at 09:42. No page, component or style content changed in either site.

**Reviewed at commit:** 22c7d6d — project records and the 5 November baseline were checked before this work.

## 5 November 2026 — Shared candidate and staging check held — Codex (night shift)

**Changed (brief #321):** No shared Webflow candidate or staging page changed. The local candidate remains as it was.

**Outputs:** Confirmed the local candidate and its generated files are reproducible. No duplicate script-name result is claimed for the disposable staging page.

**Checked how:** `npm run test:candidate` passed all 693 checks with zero failures. It checks local source and generated deliveries, namespace and compatibility contracts, author-style CSS rules and simulated runtime cases. The exact Webflow staging page was not opened; these local checks do not establish its script-name behavior.

**Still open:** Updating the shared Webflow candidate and checking the disposable staging page require Webflow access. The project's current record says the exact disposable site is absent from the Webflow connection and has no confirmed before backup. Tonight's hard limits prohibit Webflow/Designer changes and browser use, so neither action was attempted.

**Needs Michael:** The already-open request to make the exact test site available and confirm its before backup remains the next owner step; no duplicate request was raised.

**Next useful action:** When the exact site is available through the Webflow connection and its before backup is confirmed, resume the shared-candidate update and staging-page duplicate-script-name check under an authorised brief.

**Reviewed at commit:** 633a52c — local candidate verification was run against this baseline.

## 5 November 2026 — Local icon matrix HTTP access blocker — Codex (night shift)

**Changed (R-037):** The existing visual-matrix page was regenerated with 120 cases. No runtime code, released asset or Webflow content changed.

**Outputs:** Recorded the local HTTP access failure in the [R-037 evidence note](webflow/icon-geometry-regression-2026-10-31.md). Node returned `listen EPERM` while binding `127.0.0.1:8765`, before Chrome was opened. No screenshot was produced.

**Checked how:** `npm run test:icon-visual` reported 120 cases generated. The local HTTP server attempt failed with `listen EPERM`. Chrome rendering and all 120 PASS results were not checked; the prior file-URL rejection remains a separate earlier attempt and is not treated as a result for this brief.

**Still open:** Chrome could not receive the page because local HTTP serving was denied. The matrix PASS/FAIL result and screenshot are absent. DPR labels are simulated; they do not emulate separate browser DPR settings or prove physical pixel rasterisation. Webflow consumer, linked candidate, versioned distribution and physical Retina-display checks remain separate.

**Needs Michael:** Nothing; the exact local access blocker is documented for brief #319.

**Next useful action:** Retry the rendered check when local HTTP serving is available to the session.

**Handoff:** This brief stopped at local server bind failure, before opening Chrome. No Chrome tab was created.

**Reviewed at commit:** 9450951 — project records and the generated icon matrix were checked against this baseline.

## 5 November 2026 — Checked reduced motion and all five candidate layouts — Codex (night shift)

**Changed (R-269):** No source, generated candidate, Webflow page, component, class, CMS item, custom code or publishing setting changed. The local checks found no specific defect to fix.

**Outputs:** Reduced-motion timing and the five layouts (Dropdown, Full-width, Left, Right and Overlay) pass in the source, candidate distribution, minified candidate and self-contained Embed. The candidate remains unreleased. The check confirms code and simulated behaviour, not how the layouts look in a rendered browser.

**Checked how:** `npm run test:candidate` passed all 693 checks. Its matrix opens and Escape-closes all 35 combinations of five layouts and seven motion modes, and checks reduced-motion opening and closing waits in all four deliveries. The CSS contract checks also confirm that authored panel layout styles can override defaults in all five layouts. These are local automated checks; they do not check a real operating-system motion setting, browser rendering, Webflow Designer, Preview or a published page.

**Still open:** R-269's exact candidate comparison in Designer, Preview and the authorised test page remains blocked because Disposable SB test site is not available to the Webflow MCP connection and lacks a confirmed before backup. Rendered-browser visual evidence and Michael's acceptance also remain open.

**Needs Michael:** Nothing for this local check.

**Next useful action:** After the exact test site is available through Webflow MCP and its before backup is confirmed, resume the bounded R-269 site comparison. Do not claim rendered or live results from this local suite.

**Handoff:** This local check adds no source changes. Continue the exact-site gate above before any Webflow comparison; earlier backups for a different test site do not cover Disposable SB test site.

**Reviewed at commit:** d2caaa0 — local candidate verification was run against this baseline.

## 4 November 2026 — Repaired the release checks after the stable update — Codex

**Changed (R-125, R-271):** Corrected checks that still expected the old working files and compressed JavaScript address. The historical v0.2.6 hashes are now checked against their recorded Git revision; the current stable files must match the v0.2.9 tag exactly. GitHub now fetches the history needed to read those releases and the existing Library verification pin. Corrected the uninstalled Library verification loader's integrity value to authenticate the uncompressed file its URL actually requests.

**Outputs:** Updated the verification scripts, their existing assertions, the generated Library verification snippet and GitHub workflow. No release tag or consumer-site code changed.

**Checked how:** The syntax check, candidate reproducibility and namespace checks pass. The full unit suite passes: 282 cases, 255 passed, zero failed and 27 existing expected failures for documented stable-release defects. The freshly built candidate suite passes all 693 cases with zero expected or unexpected failures. The online GitHub run is pending the corrective push; its result will be reported in this session and Boss.

**Still open:** The existing stable-release expected failures are retained and executed; this change does not repair those runtime defects. Browser/site checks and Michael's acceptance remain separate.

**Needs Michael:** Nothing for this check repair.

**Next useful action:** Confirm the corrected GitHub run completes successfully, then continue the existing Voice Focus browser check.


## 4 November 2026 — Merged the v0.2.9 fixes and updated Voice Focus — Codex

**Changed (R-125, R-271):** Merged the v0.2.9 release history into `main`, preserving the `0.3.0-rc.1` candidate under its separate build path. The stable top-level files now represent v0.2.9. Updated the Voice Focus Header's existing CDN Embed from v0.2.7 to v0.2.9.

**Outputs:** The exact v0.2.9 CSS and JavaScript links are in the [release verification](webflow/v0.2.9-release-verification.md). Voice Focus published to `voice-focus.webflow.io`; no custom domains were selected. MWP staging remains on v0.2.9. The shared Library component was not updated.

**Checked how:** Read the Voice Focus Header code back through Webflow MCP and confirmed the exact URLs, SRI values and `crossorigin` attributes. Webflow reports the staging publish completed. Preserved the main candidate package version and generated its build separately.

**Still open:** Not checked: the published Voice Focus page HTML or the menu interaction in a browser after this update. Automated tests were not rerun after merging. Michael's acceptance is pending.

**Needs Michael:** Open the Voice Focus staging homepage, reload, and check that the menu opens with one click, stays open, and closes with Escape, a second click and a link.

**Next useful action:** After Michael's browser check, record any issue against the exact viewport and browser; keep R-269 separate from this release.

**Stage:** Stable v0.2.9 is merged into main and published to MWP and Voice Focus staging. The `0.3.0-rc.1` candidate remains unreleased. R-269 still needs its separate site comparison.
**Last updated:** 4 November 2026 — Codex
**Reviewed at commit:** 7d53e11 — release-check repair verified against the merged v0.2.9 baseline while preserving the 0.3 candidate.
**Next action:** Michael: check the Voice Focus staging menu in the browser; the published code is updated but its interaction has not been checked after this release.
**Needs Michael:** Check the menu on [Voice Focus staging](https://voice-focus.webflow.io/). Separately, continue the R-269 comparison when the disposable site's required access is available.

## 4 November 2026 — Checked trigger timing and released the resize fix — Codex

**Changed (R-270, R-271):** The Voice Focus trigger colour takes 180 ms to fade while its panel takes 280 ms to close. On madewithpixels the trigger colour changes immediately while the configured panel close takes 220 ms. I changed no Webflow styles or content. I fixed the same-breakpoint resize behavior in a v0.2.7 patch based on v0.2.6 and published its new tag.

**Outputs:** The v0.2.7 CDN links and integrity values are in the [evidence note](webflow/evidence/r270-r271-v027-2026-11-04.md). Both CDN assets match the tested release files. The 0.3 class-migration candidate and the R-269 test site remain unchanged.

**Checked how:** Read computed styles on the published Voice Focus page at 511 px and madewithpixels at 2044 px. Ran all 43 local tests; the same-breakpoint resize, real breakpoint change, Escape, second click and link-close checks passed. Fetched both CDN files and compared them byte for byte with the release assets. The madewithpixels menu closed within 40 ms after a trigger click, but I did not capture the resize event itself.

**Still open:** Not checked: the full responsive and open/closing/closed visual matrix; live v0.2.7 behavior in either consumer; 1440 px and 1024 px open/resize checks; or the requested tablet/phone behavior after updating the sites. Michael's acceptance is pending.

**Needs Michael:** Replace the CSS and JavaScript URLs in the existing SmashBurger snippets on madewithpixels and Voice Focus with the v0.2.7 links in the evidence note, then run the live checks there. No site was changed or published in this session.

**Next useful action:** After Michael updates the two installed snippets, check the menu at 1440 px and 1024 px, send Escape, click the trigger again, follow a link, dispatch a same-size resize, cross a real breakpoint, and confirm tablet/phone behavior.

## 4 November 2026 — Exact R-269 test URL checked; comparison stopped — Codex (night shift)

**Changed (R-269):** No page, component, class, CMS item, custom code or publishing setting changed. The exact brief URL opened Designer for **Disposable SB test site**. Its Webflow dashboard Backups page showed “No versions exist for this site”, so the required before backup could not be confirmed. The earlier backup evidence belongs to the differently named **New Smashburger Test** and was not treated as this site's backup.

**Outputs:** Added the exact-site result and backup record to the [brief 286 evidence](webflow/evidence/brief-286-r269-access-block-2026-11-04.md). Created **boss · brief #286 · after** from Designer Settings → Backups and confirmed it in the dashboard list (1 page, 0 styles, 1 element). Boss recorded it as confirmed, route Designer.

**Checked how:** Opened https://disposable-sb-test-site.design.webflow.com/ in signed-in Chrome. The dashboard identifies the site as Disposable SB test site at webflow.com/dashboard/sites/disposable-sb-test-site/backups; it reported no existing versions before the after backup. Webflow MCP list_sites returned 16 sites and omitted the site. No snapshot could be exported. No structural change was attempted.

**Still open:** Designer Canvas, Preview and published comparisons; candidate verification; screenshots and computed styles; the layout, size, behavior, keyboard/focus, reduced-motion, short-height scrolling, no-script, upgrade and rollback checks remain unchecked. The exact candidate hashes in the prior evidence apply to its recorded baseline, not a fresh inspection of this site's candidate. No before backup or rollback point for the pre-attempt state was confirmed.

**Needs Michael:** Make Disposable SB test site available to the Webflow MCP connection and confirm a before backup for this exact site. The prior New Smashburger Test backup does not cover it.

**Next useful action:** After the exact site is readable through Webflow MCP and its before backup is visible, resume the bounded comparison on Disposable SB test site. Do not change the site until both gates are satisfied.

## 4 November 2026 — R-269 site comparison stopped at Webflow access — Codex (night shift)

**Changed (R-269):** No site changes. The authorised disposable site's dashboard confirms both required backups, but the current Webflow tools cannot find that site.

**Outputs:** Recorded the exact local candidate hashes, the confirmed backup names and routes, the failed site lookup, all unchecked comparison items and restore steps in the [brief 286 handoff](webflow/evidence/brief-286-r269-access-block-2026-11-04.md). Updated R-269's state to blocked pending site access.

**Checked how:** Opened New Smashburger Test in signed-in Chrome. Created the “before” backup from Designer; Designer showed a loading spinner, then the dashboard Backups list confirmed the exact name. Created and read back the “after” backup through the dashboard. The Boss Webflow tools recorded both. Webflow MCP `list_sites` omitted New Smashburger Test; `get_site`, `list_pages` and site-instruction search with its recorded site ID returned site-not-found. Computed the candidate SHA-256 hashes locally.

**Still open:** No Designer Canvas, Preview or published comparison, screenshots, computed-style evidence, layout/state/viewport matrix, keyboard/focus, reduced-motion, short-height scroll, no-script, upgrade or rollback behavior was checked. Snapshot exports could not be made because the Webflow tools could not read this site. The existing backups make rollback available; no Webflow content changed.

**Needs Michael:** Make New Smashburger Test available to the Webflow MCP connection. This unlocks the site read and snapshot required to resume the comparison.

**Next useful action:** After the site appears in the current Webflow tool site list, resume the bounded R-269 comparison on this same disposable site. Verify its current site ID, export the before snapshot, and follow the recorded test matrix; do not substitute the separate Smashburger site.

## 4 November 2026 — New bug task added to the roadmap — Codex (night shift)

**Changed (R-271):** Added Michael's task about a bug in the v0.2.6 Navbar Light script to the roadmap. The task title is preserved. The completion condition is marked as inferred because the task gives no symptom or expected result.

**Outputs:** Added R-271 with Boss task #43612358 linked.

**Checked how:** Read the Boss inbox for brief #296 and unmatched tasks, checked the verification section for the correct placement and next available roadmap ID, and reviewed the roadmap diff. No bug work or Webflow changes were performed.

**Still open:** The bug itself has not been investigated; the completion condition needs the task's missing symptom and expected behavior before implementation.

**Needs Michael:** Nothing for this roadmap entry.

**Next useful action:** An agent can investigate the bug described by task #43612358 when it is picked up.

## 3 November 2026 — New navigation check recorded — Codex (night shift)

**Changed (R-270):** Added Michael's burger menu navigation button colour and size check to the verification roadmap, using the task title from the Boss inbox and linking task #43612352.

**Outputs:** R-270 records a completion condition marked “inferred — confirm” because Michael's task does not specify the states, widths or expected appearance.

**Checked how:** Read the project record, current roadmap and Boss inbox; checked the existing navigation and verification sections and current Git status. No site or Webflow work was performed.

**Still open:** The visual check itself has not been performed. Its exact conditions in the done-when remain inferred.

**Needs Michael:** Nothing for this roadmap entry.

**Next useful action:** An agent can perform the check under R-270 when the task is picked up.

## 31 October 2026 — False Claude session warning diagnosed — Codex

**Changed:** Recorded why the nightshift waits despite Claude being idle. No SmashBurger roadmap item was changed; this was Michael's direct investigation request, separate from brief #178.

**Outputs:** Findings reported to Boss. Codex's global hooks in `/Users/michaelauty/.codex/hooks.json` pass `--agent claude` for session start, session end and turn completion. Consequently, this Codex chat itself appears as a Claude session and can block the nightshift.

**Checked how:** Read the live runner queue at 18:43 London, local hook commands and runner/server source. The runner reported Codex idle, SmashBurger skipped for a Claude session, and Claude separately waiting after a usage-limit response until 19:30 London. The process list contained no Claude CLI. The runner log repeatedly reports `unknown action run_abandon`, with the same rejection for `stalls_sync` and `push_queue`: the local runner is newer than the deployed service. The current chat ID `01a19344-1b48-77b2-bfb4-7a369730d092` was registered as Claude run `89e35003-5bb8-41c4-9b2b-a66e54c8f05c`, directly confirming the wrong attribution.

**Still open:** Correct the Codex hook attribution and switch on the already-built Boss stale-session fix, then confirm the false sessions clear and queued work resumes. The runner's 19:30 Claude retry is a separate hold; this investigation does not verify restored provider capacity.

**Needs Michael:** Ask Claude to switch on today's changes to Boss, including the stale-session fix already recorded under Boss R-144. No release or Webflow action is needed.

**Next useful action / Handoff:** Correct only the Boss commands in Codex's global hook file, preserving unrelated hooks, then activate the existing Boss migration and agent service and verify both lanes from the live queue. This investigation changed no hooks, live service, task, brief status or acceptance. The clean checkout's only commit since the prior reviewed baseline was the icon evidence commit, already described below.

## 31 October 2026 — Local icon matrix prepared; browser render blocked — Codex (night shift)

**Changed (R-037):** Added a rerunnable visual fixture with 120 open-icon cases across both icon shapes, four line thicknesses, three project spacing overrides and five simulated pixel grids. The fixture embeds the maintained source CSS and JavaScript and checks rendered line-centre alignment when opened in a browser.

**Outputs:** Added the matrix generator and generated local HTML page. Recorded the exact commands, results and limits in the [dated icon evidence note](webflow/icon-geometry-regression-2026-10-31.md), and linked it and the fixture from R-037.

**Checked how:** `npm run test:icon-visual` generated all 120 cases. `npm run test:icon-geometry` passed (1 test, 0 failures). `node --check scripts/create-icon-visual-matrix.mjs` and `git diff --check` passed. Chrome headless exited with code 134 before making a screenshot. A fresh Chrome tab attempt to open the local page was rejected by the browser URL policy (`file:` protocol not allowed); the page did not load, so no rendered-case result or screenshot is claimed.

**Still open:** The generated fixture's browser-rendered PASS/FAIL result remains unverified. The pixel-grid values are simulated, not browser DPR emulation. Retina display and Webflow consumer/version checks remain separate and open.

**Needs Michael:** Nothing for this local implementation. The browser tool blocked the local-page check; no Webflow access or action is needed for this work.

**Next useful action / Handoff:** When a permitted local browser route is available, open the generated fixture, confirm its 120-case result and save a screenshot. Then keep the Retina display and Webflow consumer/version checks as distinct follow-ups. No released asset or Webflow content was changed; no acceptance is claimed.

## 31 October 2026 — Plain sign-off wording added — Codex (night shift)

**Changed (R-269):** Added a Try line explaining that the menu should keep Michael's chosen layout, colours and spacing across Designer, Preview and the published test page. It says the test page still needs to be prepared before he can compare them. Michael confirmed in this follow-up that no other sessions are running, clearing the earlier editing conflict.

**Outputs:** One Try entry directly under the existing State line. R-269 already describes a visible outcome, so its engineering checks remain supporting exit criteria within that item; no separate outcome or Covers entry was needed.

**Checked how:** Read the current item and its runtime styling boundary note; reviewed the two documentation commits since the prior checked baseline. Compared the documentation diff and checked whitespace. State, Evidence and Acceptance are unchanged. No runtime tests were needed for this wording change.

**Still open:** Preparing the backed-up test page and comparing Designer, Preview and the published result remain separate work. This wording adds no site evidence or sign-off.

**Needs Michael:** Nothing for this documentation change.

**Next useful action / Handoff:** Continue with the bounded site comparison already described in the runtime styling boundary note. Give Michael the exact page to review after that work is ready. Brief #179's wording change is complete.

## 31 October 2026 — Runtime styling fix built locally — Codex (night shift)

**Changed (R-269):** Removed the forced overlay Grid declaration. Layout and appearance defaults on the menu, links, contact area, trigger and close control now use zero-specificity selectors so a Webflow class can override them. Visual presets, including the backdrop surface, are gated. State visibility, motion and native fallback behavior remain runtime-owned.

**Outputs:** Updated the source CSS, candidate delivery files, build guard and regression checks. Added the [runtime styling boundary and bounded Designer/Preview/published follow-up](webflow/runtime-styling-boundary-2026-10-31.md). Candidate Embed JavaScript is minified at build time so the expanded CSS/variant aliases remain under the Embed size limit. Immutable v0.2.6 files remain unchanged.

**Checked how:** `npm run build` passed, including the CSS specificity guard over source, candidate stylesheets and generated Webflow/Library Embed styles. The final `npm run test:candidate` passed 690/690, including simulated upgrade/rollback and runtime behavior. Final `npm test` passed with 279 tests: 252 passed and 27 TODO for documented immutable v0.2.6 defects. The final navbar/CSS suite passed 42/42. New source JSDOM regressions cover Flex with stale Grid columns, authored Grid, opinionated host styles, presets off and all five layouts. These are source/build checks, not rendered-browser evidence.

**Still open:** No local rendered-browser, Designer Canvas, Preview, published page, upgrade or rollback comparison. Chrome rejected the local `file:` page before opening a tab because its URL policy allows only HTTP/HTTPS; no alternative route was attempted. No Webflow change was made. R-269 remains open until the exact candidate is checked on a backed-up disposable site and Michael reviews it.

**Needs Michael:** Nothing tonight; Acceptance remains pending.

**Next useful action:** Run a separate bounded brief for Designer, Preview and published comparison on an authorised backed-up disposable Webflow site. Keep R-268 separate and do not update consumers.

**Handoff:** Read the runtime styling boundary note first. Local build and candidate checks pass in commit 39647bc. The bounded Webflow comparison remains for a separate brief. Do not change Webflow or immutable v0.2.6 assets in this brief.

## 31 October 2026 — Runtime styling work started — Codex (night shift)

**Changed (R-269):** Removed the overlay's forced Grid display and lowered specificity on several collapsed-layout defaults so ordinary Webflow classes can override them. Presets remain gated in the existing source rules. This is a partial implementation; R-269 remains open.

**Outputs:** Updated source stylesheet and generated `candidate/` outputs; added an initial CSS contract test. The candidate is local and unreleased. No v0.2.6 files were changed.

**Checked how:** `npm run build` completed. `npm test` failed: existing source assertions still expect prior forced layout/preset rules; the new test has two faulty assertions; immutable distribution checks also report pre-existing v0.2.6 defects. These results are source/test evidence only, not rendered behavior. No browser or Webflow changes were made.

**Still open:** Finish the layout/appearance specificity audit across all states and layouts; repair and extend the test to cover Flex with stale Grid tracks, intentionally styled Grid, host styles, presets-off and all layouts; add the required build guard; reconcile changed source tests; verify functional behavior against candidate. Audit Canvas helper and prepare Designer component/variant instructions. No Designer, Preview, published or upgrade/rollback checks have run.

**Needs Michael:** Nothing tonight. Acceptance remains pending.

**Next useful action:** Continue R-269 by completing the audit and guard, then run candidate checks before preparing a separate, backed-up disposable-site comparison.

**Handoff:** Follow-up must not begin R-268 Webflow testing or modify Webflow. Candidate still needs Designer Canvas-open, Preview and published test comparison after the local checks are complete.

## 31 October 2026 — Boss attention cleanup — Codex

**Changed (R-155, R-244, R-268, R-269):** At Michael's request, preserved old requests and future work with clear reactivation conditions, removed historical/premature requests from immediate attention, and separated local agent work from later personal approvals. Deferred Lite dependency items R-183/R-185 to planned; prerequisites, evidence and Acceptance are unchanged. Recorded Michael's Boss acceptance of D-014 (“yes”, 31 October), retaining Lite-first sequencing.

**Outputs:** [Boss attention cleanup and preserved original records](webflow/boss-attention-cleanup-2026-10-31.md). Current release task clarified; app/site tasks remain open and labelled Later because Boss has no task snooze state.

**Checked how:** Read full Boss question/task records through its authenticated agent API and inspected the task UI. Request #145 contains permission for local Chrome testing, not a passed check or release approval. Reviewed unchanged source baseline `9ce1d0f`; no runtime or Webflow edits. Pending request closures and renamed tasks are verified by readback before handoff.

**Still open:** All unperformed engineering, Designer, screen-reader, device, clone-flow and release checks. Future open tasks cannot be hidden from All open tasks through current Boss controls without deleting or completing them; neither is appropriate.

**Needs Michael:** Nothing now. Return only with an exact result to review or a fresh, concrete blocker.

**Next useful action / Handoff:** Nightshift continues brief #164. Read the cleanup record before asking Michael anything; re-raise future checks at their stated trigger, not during local work. No test was marked passed and no release or sharing approved by this cleanup.

## 31 October 2026 — Pending records prepared for commit — Codex

**Changed (R-268, R-269):** Reviewed the six pending documentation/evidence files and prepared them for one local commit at Michael's request. Preserved the earlier test-preparation entries and distinguished the reverted styling attempt from the later functional-only menu update.

**Outputs:** Roadmap styling tests and release blocker, status history, two dated consumer records and two historical Preview screenshots.

**Checked how:** Reviewed the pending diff and evidence references against baseline `6e576c1`; checked that the records retain their limits and pending acceptance. Documentation whitespace check passed. No new runtime, browser or Webflow checks performed.

**Still open:** Styling defects and controlled regression checks remain unresolved. The screenshot evidence is historical, not current site acceptance.

**Needs Michael:** Push the resulting local commit when ready.

**Next useful action / Handoff:** After Michael pushes, recap the roadmap from the resulting repository state. No runtime or site changes are included here.

## 24 October 2026 — Designer styling release blocker — Codex

**Changed (R-269):** Added a release blocker for runtime CSS overriding Designer layout and appearance. Kept the separate duplicate-class targeting test (R-268) intact. Added the blocker to the route to launch.

**Outputs:** ROADMAP R-269 records the cause, required runtime/Designer boundary, CSS guard, all-layout regression checks and upgrade/migration checks.

**Checked how:** Source/history audit identified the forced overlay Grid rule in commit `38bbf47` (8 October), the v0.2.6 distribution and current source. The recorded 23 October overlay configuration activated that rule. Checked the new item against S-03/S-04 and the current release gates; no runtime or site changes made. Reviewed baseline: `6e576c1`; three documentation commits follow the older header baseline, with no runtime fix among them.

**Still open:** The defect remains unfixed. No implementation or new browser/Designer test has run; existing passing tests do not cover this regression. Acceptance remains pending.

**Needs Michael:** Nothing for this documentation update. Existing Webflow testing and release approvals still apply.

**Next useful action / Handoff:** Read R-269 before the next release implementation or preflight. Fix and test the Designer/runtime boundary before promoting the candidate; coordinate class ambiguity checks with R-268. Preserve unrelated uncommitted work and immutable released files.

## 16 October 2026 — Brief #90 Lite native build preparation — Codex (night shift)

**Changed (R-177–R-186):** Prepared a source-based native component build sheet. The plain/styled examples and workbench pass the full candidate check; the native component and public clonable remain unbuilt. Acceptance remains pending.

**Outputs:** [SmashBurger Lite native build sheet](webflow/lite-native-build-sheet-2026-10-16.md). It records the proposed element tree, classes, hooks, trigger/panel relationship, example/workbench/Read Me pages and unresolved runtime/build choices.

**Checked how:** Reviewed the accepted Lite scope, current STATUS and R-177–R-186; read both local examples, the workbench, safe-editing guide and existing Lite evidence. `npm run test:candidate` passed 685/685 and preserved the 17 protected historical files. Read-only Webflow site listing returned 16 sites, with no blank SmashBurger Lite test project; SB Unlink Clean Trial is populated. Chrome rejected the new local `file:` tab under its URL policy, which expressly disallows alternate loading routes. No Webflow content changed.

**Still open:** No released runtime matching the `sb-nav` class migration is verified. v0.2.6 has the earlier `mwp-*` classes; 0.3.0-rc.1 is unreleased and its illustrative loader must not be installed. No blank test project is accessible for clone-flow checks. Not checked: rendered visual layout, actual Canvas behaviour, Preview, native keyboard activation or clone flow.

**Needs Michael:** Select and authorise the versioned `sb-nav` runtime release needed for the pinned loader. Make a blank test project accessible for the clone-flow checks. A Chrome route that permits local pages is needed to review the examples visually.

**Next useful action / Handoff:** After the released runtime is available, verify its exact files and integrity values, finish the native component and loader, then use an accessible blank test project for clone-flow checks. Keep Acceptance pending.

## 16 October 2026 — Brief #92 human and physical-device check preparation — Codex (night shift)

**Changed (R-037, R-155, R-244):** Prepared blank instructions and result fields for Windows NVDA checks and physical-display icon checks. No check is claimed passed; Acceptance remains pending.

**Outputs:** [Human and physical-display run sheets](webflow/human-and-physical-check-run-sheets-2026-10-16.md) and [evidence template](webflow/human-and-physical-check-evidence-template-2026-10-16.md).

**Checked how:** Read the project rules and records, including the icon geometry and v0.2.6 release evidence. Confirmed the published Smashburger example is `/demo-overlay` and the known Tablet variant is on the older linked consumer. The machine is macOS; this run did not operate Windows/NVDA or inspect a physical 2×/3× display. No browser page was opened, and no Webflow state changed.

**Still open:** Not checked: NVDA speech, keyboard focus, real-display 2×/3× rendering, measurements or screenshots. The combined candidate remains unreleased without an approved route; its evidence is explicitly Not run and must not be replaced by v0.2.6 evidence.

**Needs Michael:** Arrange a Windows/NVDA tester and access to the named published page. Arrange verified physical 2× and 3× display access and a tester who can capture measurements and screenshots. Provide an approved route for the exact combined candidate before recording candidate results.

**Next useful action / Handoff:** Have the human tester complete the run sheets for one exact release or candidate at a time, attach the original captures, and record each result against that exact artifact. Keep browser emulation separate from physical-display evidence and Acceptance pending.

## 16 October 2026 — Brief #91 combined release preflight — Codex (night shift)

**Changed (R-121, R-125, R-155):** Rebuilt and checked the combined candidate from its recorded source commit. It remains unreleased; Acceptance is pending.

**Outputs:** [Combined candidate preflight follow-up](webflow/release-preflight-followup-2026-10-16.md), with the 19-file size and integrity inventory and upgrade/rollback checklist.

**Checked how:** Verified clean `main` at `a42bfcc`; the saved candidate matches its source commit. A disposable local clone passed `npm run check:dist`, `SMASHBURGER_CANDIDATE=1 npm run test:candidate` (685/685) and `npm run check:namespace`. All 17 protected v0.2.6 files match their recorded hashes. No candidate, release or Webflow state changed.

**Still open:** Not checked: candidate rendering in Chrome, the linked Library consumer, actual Webflow CDN/Preview and fallback, human accessibility, physical-display icon checks, or a cloned Webflow upgrade/rollback. The note's versioned URLs and hashes remain provisional until a version and tag are authorised.

**Needs Michael:** Review the candidate evidence and separately approve the version/tag and any later Library share, staging update or publication. Acceptance remains pending.

**Next useful action / Handoff:** Continue the browser and clean-consumer checks when the outstanding local-preview and site-read access is available; keep release and Webflow changes gated. The note is the only file requested for this brief's commit; this STATUS entry remains local and uncommitted.

## 16 October 2026 — Brief #89 release preflight — Codex (night shift)

**Changed (R-121, R-125, R-155):** Added a local release preflight for the combined candidate. It is reproducible and the protected v0.2.6 files still match their saved pins. Browser, consumer, CDN and release approval gates remain open; Acceptance is pending.

**Outputs:** [Combined candidate release preflight](webflow/release-preflight-2026-10-16.md). Candidate source/build commit: `9211a9f5871b9de30a613b0bf7d5118035858d86`.

**Checked how:** In a disposable local clone at the named source commit, `npm run check:dist` rebuilt the candidate with no file differences. Audited the 19-file list, version text, both proposed loader paths and integrity values, Embed character limits, and all 17 protected v0.2.6 hashes. `npm run check:namespace` passed and confirmed the 17 historical files remain byte-identical. No release output, tag, remote or Webflow content changed.

**Still open:** Not checked: browser rendering of the exact combined candidate, clean linked consumer, current CDN loading/fallback, and human/device behaviour. The New Smashburger Test site is not readable in the existing Webflow connection. These checks do not prove release availability.

**Needs Michael:** Approve the exact five-resource Library share; approve a named staging/test consumer and backup before its update; approve any staging publication separately; after review, approve the version tag and CDN release, then any final Webflow update/publication. Review the remaining evidence and record Acceptance.

**Next useful action / Handoff:** Once local preview and New Smashburger Test read access are available, verify the exact candidate in Chrome and the clean consumer. Keep sharing, release, publication and Acceptance pending until their separate approvals.

## 16 October 2026 — Brief #88 current readback — Codex (night shift)

**Changed (R-037, R-095, R-121, R-125, R-126, R-155):** Refreshed the saved Library candidate metadata and icon assets. The exact combined candidate still has no Chrome rendering proof. Acceptance remains pending.

**Outputs:** [Combined candidate review evidence](webflow/combined-candidate-review-2026-10-16.md). Starting commit: `feb3488fa1ecb8f3b3458ee5f4e3e1576775a343`; candidate source/build commit remains `9211a9f5871b9de30a613b0bf7d5118035858d86`.

**Checked how:** Confirmed the Git root and `git config boss.repo` (`smashburger`) match this folder. Started clean on `main`; two documentation commits follow the previous reviewed baseline and update the same candidate handoff. Chrome inventory showed the Boss Agents page and several pre-existing tabs; none were opened or changed. The `cua_repl` API provides no page evaluation, viewport, or Network controls; its browser capability list is empty. Browser documentation describes a fuller Playwright surface, but that surface is not callable from the exposed CUA API. No tab was opened. The earlier Python and Node loopback binds both failed with permission errors; no setup change makes another attempt useful. Read-only Webflow listing returned the same 16 sites and omitted New Smashburger Test, so its earlier 404 was not repeated. Current MWP Library readback found both saved candidate editions with five variants, 60 properties and nine image properties apiece. Both currently select Mobile landscape. The nine saved icon IDs resolve to their named SVG assets. The earlier 144-element audit and 67 bindings per edition remain documented; bindings were not re-audited in this run. No Webflow content changed.

**Still open:** Not checked: Chrome loading the exact candidate CSS and JavaScript, widths 1280/991/767/479/393px, Full-width and Right menus in a short viewport, scrolling, close, focus return, Escape, overlapping menus, rapid open/close, reduced motion, Custom animation, or blocked-script/native fallback. Not checked: current clean-install variants, properties, bindings and assets; New Smashburger Test remains absent from accessible MCP sites. The saved Library editions and older linked consumer predate the combined candidate and do not prove it is installed or released.

**Needs Michael:** Enable local browser preview and restore read-only access to New Smashburger Test. Do not share or publish; Library update approval and final release remain separate gates.

**Next useful action / Handoff:** Once preview access works, build and serve the recorded candidate commit, then prove its exact CSS and JavaScript are loaded in Chrome before running the requested checks. When New Smashburger Test is readable, inspect its saved component state. Keep Acceptance pending.

## 16 October 2026 — Combined candidate review access follow-up — Codex (night shift)

**Changed (R-037, R-095, R-121, R-125, R-126, R-155):** Refreshed the Chrome capability and saved Library readbacks. The combined candidate still has no browser rendering proof. Acceptance remains pending.

**Outputs:** [Combined candidate review evidence](webflow/combined-candidate-review-2026-10-16.md). Candidate source/build commit `9211a9f5871b9de30a613b0bf7d5118035858d86`; checked starting documentation commit `24701c7ecc153628de1fd85519c90f350f0f8f0b`.

**Checked how:** Confirmed the Git root and `smashburger` Boss routing match this folder; started clean on `main`. Chrome inventory showed the Boss Agents page. Current browser controls include viewport override and read-only page evaluation, but no network blocking. No local server bind was retried because Python and Node had both returned `EPERM` in the unchanged environment. Read-only Webflow MCP listed 16 sites and again omitted New Smashburger Test; the earlier 404 was not repeated. Both saved Library editions still report five variants, 60 properties and nine image properties, and their 144-element trees load. Existing detailed readback records 67 bindings and nine resolved SVG assets per edition. No Webflow content changed.

**Still open:** Not checked: Chrome loading the candidate's exact built CSS and JavaScript, the 1280/991/767/479/393px widths, Full-width and Right menus in a short viewport, scrolling, close, focus return, Escape, overlapping menus, rapid open/close, reduced motion, Custom animation and blocked-script fallback. Not checked: current bindings/assets in this resumed read because this tree endpoint omits them; earlier detailed readback remains documented. The clean-install site's current variants, properties, bindings and assets are unreadable. The older Library and staging components are not proof of the combined candidate.

**Needs Michael:** Enable local browser preview and restore read-only access to New Smashburger Test. Sharing, publication and release remain separate approval gates.

**Next useful action / Handoff:** When local preview is enabled, serve the recorded candidate commit and verify the CSS and JavaScript requests in Chrome before running the responsive, interaction and motion checks. When New Smashburger Test is readable, inspect its saved component state. Do not share or publish; keep Acceptance pending.

## 16 October 2026 — Combined candidate Chrome access check — Codex (night shift)

**Changed (R-037, R-095, R-121, R-125, R-126, R-155):** Added the current Chrome access check to the review record. No candidate page loaded, so rendered checks remain open and Acceptance stays pending.

**Outputs:** [Combined candidate review evidence](webflow/combined-candidate-review-2026-10-16.md). Candidate source/build commit remains `9211a9f5871b9de30a613b0bf7d5118035858d86`; starting documentation HEAD was `24701c7ecc153628de1fd85519c90f350f0f8f0b`.

**Checked how:** Confirmed Git root and `git config boss.repo` (`smashburger`) match this folder, consistent with the Boss mapping readback in the existing evidence. Started clean on `main` at `24701c7`. `cua.getApp('com.google.Chrome')` succeeded and showed Chrome on the Boss Agents page; no candidate tab was opened. The CUA interface provides visible-page accessibility/screenshot and input methods, but no callable page evaluation, viewport override, request blocking or CDP. `node_repl` exposed only `cwd`, `env`, `homeDir`, `tmpDir`, `requestMeta`, `write`, `emitImage` and `rpc`; no browser/CDP handle. The repository evidence records the completed candidate build and exact generated-file comparison from the candidate commit, two denied loopback server binds, and the prior read-only Webflow candidate/asset readbacks. New Smashburger Test previously returned 404; that failed access was not repeated. No Webflow Preview was used because it was not showing the exact combined candidate.

**Still open:** Chrome proof that the exact built CSS and JavaScript are loaded; checks at 1280, 991, 767, 479 and 393px; Full-width and Right menus in a short viewport; scrolling, closing, focus return, Escape, overlapping menus, rapid open/close, reduced motion, Custom animation and blocked-script/native fallback. New Smashburger Test variants, properties, bindings and assets remain unreadable. Older Library editions and the earlier test fixture do not prove the combined candidate.

**Needs Michael:** Enable local browser preview and restore read-only access to New Smashburger Test. Library sharing and final release approval remain separate gates.

**Next useful action / Handoff:** When local preview is available, serve the recorded candidate commit, prove its built files in Chrome, and complete the listed checks. When New Smashburger Test is readable, inspect its current component state. Keep Acceptance pending; do not share or publish.

## 16 October 2026 — Combined candidate review follow-up — Codex (night shift)

**Changed (R-037, R-095, R-121, R-125, R-126, R-155):** Updated the review evidence with this session's Chrome capability and Webflow readbacks. The combined candidate still has no rendered browser proof. Acceptance remains pending.

**Outputs:** [Combined candidate review evidence](webflow/combined-candidate-review-2026-10-16.md). Candidate source/build commit: `9211a9f5871b9de30a613b0bf7d5118035858d86`; starting documentation HEAD: `c309bbcadf09130b4b1eadfeceab35ce622ac0e2`.

**Checked how:** Confirmed Git root and `smashburger` Boss routing resolve to this folder. Started on `main` with no working-tree changes; local `origin/main` is three commits behind the current branch. Read-only Webflow MCP confirmed both saved Library candidates still have five variants and 60 properties; their currently selected variant is Mobile landscape. The self-contained candidate has five instances and the CDN candidate one. The older linked SmashBurger CDN definition has eight instances, five variants, and 60 properties. Read-only page listing confirmed the named New Smashburger Test site still returns 404, “The site cannot be found”. Chrome's available browser capability list includes viewport control, but no candidate page could be loaded to use it; network blocking is not listed. No browser tabs were opened and no Webflow content changed.

**Still open:** Chrome rendering at 1280, 991, 767, 479 and 393px; Full-width and Right menus in a short viewport; scrolling, closing, focus return, Escape, overlapping menus and rapid reversals; reduced motion, Custom animation and blocked-script fallback. Current bindings and assets for the saved candidates are covered by the earlier readback in the linked evidence; the clean-install instance remains inaccessible. No current candidate rendering, bindings, or assets are verified in that site.

**Needs Michael:** The existing request to enable local preview and restore read-only access to New Smashburger Test remains open. Library sharing and final release approval remain separate gates.

**Next useful action / Handoff:** When local preview is available, serve the recorded commit and confirm its built CSS and JavaScript in Chrome before running the responsive, interaction, motion and failure checks. When Webflow MCP can read New Smashburger Test, inspect its current component state. Keep Acceptance pending; do not share or publish.

## 16 October 2026 — Combined candidate preview retry and Webflow metadata — Codex (night shift)

**Changed (R-037, R-095, R-121, R-125, R-126, R-155):** Retried local preview with Node after the earlier Python server could not bind. The environment denied both loopback attempts. Chrome rejected a local `file:` URL before opening it. No combined-candidate page was loaded, so no rendered behavior is claimed. Acceptance remains pending.

**Outputs:** Updated [combined candidate review evidence](webflow/combined-candidate-review-2026-10-16.md). Candidate source/build commit: `9211a9f5871b9de30a613b0bf7d5118035858d86`; documentation starting HEAD: `e898dc1537a7d51fff094cffa371af292e3f1c42`.

**Checked how:** Confirmed Git root and `smashburger` Boss routing both resolve to this folder. The starting working tree was clean on `main`; `e898dc1` adds the prior handoff record above the candidate commit. Read-only Webflow MCP refreshed the two saved Library candidate editions and the linked SmashBurger CDN definition: each reports the five collapse variants and 60 properties, with the corresponding variant selected as Mobile landscape; the linked component reports eight instances. Their names and descriptions identify older/unshared editions, so they do not prove the combined candidate is installed. Existing element-tree and asset evidence remains in the linked record.

**Still open:** Chrome at 1280, 991, 767, 479 and 393px; Full-width and Right menus in a short viewport; scrolling, closing, focus return, Escape, overlapping menus and rapid reversals; reduced motion, Custom animation and blocked-script fallback. The CUA `file:` navigation was rejected by browser URL policy (only HTTP(S) allowed); both Python and Node loopback servers returned permission errors. Request blocking was not available through that browser surface. Chrome Preview was not used because it was not showing this exact candidate.

**Needs Michael:** The already-open Boss request to allow a local preview remains unresolved. Existing approval is still needed before a Library update is shared, and human/device and final release checks remain.

**Next useful action / Handoff:** When local HTTP preview is enabled, serve the recorded candidate commit and verify the exact CSS and JavaScript requests in Chrome before running the width, interaction, motion and script-failure checks. Keep Acceptance pending and leave Webflow unchanged.

## 16 October 2026 — Clean-install MCP access check — Codex (night shift)

**Changed (R-121, R-126):** No candidate or Webflow content changed. The named New Smashburger Test site could not be read through this session's Webflow MCP connection, so its clean-install component state remains unverified. Acceptance remains pending.

**Outputs:** Added this access result to [combined candidate review evidence](webflow/combined-candidate-review-2026-10-16.md). Starting commit: `41b47e0b77721ab083b36aa5bb2d0c35dc4c60bb`; working tree was clean on `main`.

**Checked how:** Confirmed Git root and Boss mapping still point to this folder. Webflow MCP `list_sites` returned 16 sites and omitted New Smashburger Test (`6ad10fe7ca9deaf9a5ea7498`); a read-only component query for its Home page returned 404, “The site cannot be found”. This session did not retry the failed read. CUA `getState` showed the Chrome extension browser; its documented controls do not expose viewport emulation, network blocking or CDP. No new browser tab was opened. The documented fixture is a native test navbar, not a Library install. Existing readback of the two saved Library editions and the older linked Smashburger component remains in the preceding evidence record.

**Still open:** The clean-install instance's current variants, properties, bindings and assets are not verified in this session. All Chrome-rendered candidate checks remain open because the local preview access request is unresolved.

**Needs Michael:** The already-open request to enable local preview remains the gate for Chrome review. No additional question was raised.

**Next useful action / Handoff:** Once local preview is enabled, complete the exact-commit Chrome checks. Separately, restore read-only MCP access to New Smashburger Test before treating its component state as current evidence. Do not share, publish, edit or unlink anything; keep Acceptance pending.

## Current position — 16 October 2026

## 16 October 2026 — Combined candidate build and Webflow readback — Codex (night shift)

**Changed (R-037, R-095, R-121, R-125, R-126, R-155):** Rebuilt the combined candidate locally and read back the saved Library candidates and linked Smashburger menu. The current build is not installed in the Library or consumer. Acceptance remains pending.

**Outputs:** [Combined candidate review evidence](webflow/combined-candidate-review-2026-10-16.md). Candidate commit reviewed: `9211a9f5871b9de30a613b0bf7d5118035858d86`.

**Checked how:** Confirmed Git root and `smashburger` Boss mapping both point to this folder. Started from clean `main` at the recorded candidate commit. `npm run build` exited 0 and `git diff --exit-code -- candidate` found no generated differences. Read both saved Webflow candidate definitions, their 144-element trees and raw settings, five variants, 60 properties, 67 bindings and nine SVG assets; read the linked Smashburger Home instance, its selected Tablet variant, two overrides and nine destination-mapped SVG assets. The exact candidate could not be served: Python's local server returned `PermissionError: Operation not permitted`; Chrome returned `ERR_CONNECTION_REFUSED` for the loopback URL. No browser or Preview result is claimed.

**Still open:** Chrome rendering at 1280, 991, 767, 479 and 393px; Full-width and Right menu behavior in a short viewport; scrolling, close, focus return, Escape, overlapping menus and rapid reversals; reduced motion, Custom animation and blocked-script fallback. The saved Library/consumer state predates the combined candidate and cannot close those checks.

**Needs Michael:** The existing Boss request to allow local preview remains the setup gate. No new product decision is needed. No Webflow change, Library sharing, publication, tag or release occurred.

**Next useful action / Handoff:** Once loopback preview is available, serve the recorded commit, confirm Chrome loaded its exact built CSS and JavaScript, then complete the listed interaction and motion checks. Keep Acceptance pending and do not use the older Library pin as combined-candidate proof.

## 16 October 2026 — Night-shift workspace routing checked — Codex (night shift)

**Changed (R-128):** Confirmed this session opened in the selected SmashBurger folder, with the Git root and Boss mapping at the same location. Its origin is `madewithpixels/Smashburger-Webflow-Navbar`.

**Outputs:** The old checkout remains at `0864f820`, clean on `main`, with the same 20 refs and SHA-256 hashes for 36,824 files before and after the commit. Both hash lists have SHA-256 `b50e4937c5b95c27775668fbdbef87668c599154d1a75c185a3059851d2bcade`.

**Checked how:** Read `pwd`, Git root, branch, status, origin and `/Users/michaelauty/.config/boss/runner.json`; compared the old checkout's saved HEAD, refs, status and file hashes after each canonical commit. Both commits contain only `STATUS.md` and were read back from canonical `main`.

**Still open:** Nothing in this routing check.

**Needs Michael:** Nothing.

**Next useful action:** Continue SmashBurger work from the canonical folder; leave the clean old checkout unchanged.

- **Built:** The core native navbar, the repository transfer and the renamed source candidate. The existing released version is still v0.2.6. Local fixes cover overlapping scroll locks and rapid opening/closing. Sources: [transfer](webflow/canonical-rename-2026-10-15.md), [overlapping menus](webflow/sb-nav-candidate-multiple-navbars-2026-10-16.md), [rapid changes](webflow/rapid-menu-reversals-2026-10-16.md).
- **Settings evidence committed:** Local commit `e599c09` preserves the tests, evidence and refreshed docs. The saved pre-integration run passed 385/385 with 168 settings checks. Those same settings checks are included in the combined 685/685 run. No settings repair was needed. Sources: [configuration evidence](webflow/native-settings-deliveries-2026-10-16.md) and [combined reconciliation](webflow/canonical-reconciliation-2026-10-16.md). These are simulated checks, not browser or linked-consumer proof.
- **Integrated and verified locally:** Migration instructions, native behaviour after removing enhancement, safe closing focus and Escape ownership from the seven old-checkout commits are reconciled with the canonical rapid-reversal/scroll-lock work. Fresh candidate checks pass 685/685, including all 300 imported delivery regressions. Sources: [reconciliation and original commit hashes](webflow/canonical-reconciliation-2026-10-16.md). Browser proof remains separate.
- **Still to verify:** Current-candidate rendering, responsive geometry, scrolling, real keyboard/touch, reduced motion/custom animation, physical-display icon checks and screen readers, including Windows NVDA. Earlier live fixture checks remain useful historical evidence; they predate later repairs. Sources: [fresh staging fixture](webflow/new-smashburger-test-2026-10-15.md); ROADMAP R-037, R-115, R-155 and R-244.
- **Still to deliver:** Approved Library sharing and clean consumer installation/update/rollback; a new semantic release with verified CDN loading/fallback; the editable Lite Webflow component, blank-project clone checks and public clonable. Local Lite examples, workbench references and the accepted safe-editing guide are preparation, not a finished clonable. Sources: ROADMAP R-125–R-126 and R-177–R-186; [Lite checks](webflow/lite-examples-runtime-2026-10-16.md).
- **Deferred:** Designer Extension / Make local until Lite works; mega-menu and commercial/backend choices remain separate (D-014/D-015).

### Checkout handoff

The canonical working folder is `/Users/michaelauty/Work on MacStudio/Smashburger-Webflow-Navbar`, on main. The preserved baseline is `e599c09`; the tested reconciliation is committed as `0c87623`. This chat runs there and its origin points to `madewithpixels/Smashburger-Webflow-Navbar`. The `smashburger` entry in `~/.config/boss/runner.json` now points here after the explicit setup selection. Setup and doctor both confirm this path; doctor confirms the night shift is off; it does not display a paused flag for SmashBurger. Claude’s uncommitted Boss 0.10 repair preserves explicit choices. Source: authorised setup/doctor and local configuration readback on 16 October 2026.

The retained checkout is now clean on main at `0864f82`, matching its live-verified GitHub baseline. Michael authorised its local restoration after verified full backup, then confirmed removal of the old folder from Codex project settings. Its earlier ten local commits and uncommitted STATUS/recovery notes are recoverable from the canonical ignored backup set. The three migration commits remain in canonical history; the seven later commits are reconciled in `0c87623`. See [cleanup and recovery evidence](webflow/old-checkout-cleanup-2026-10-16.md), D-019.

All original release tags, other refs and the prototype worktree remain unchanged. Boss routes to the canonical folder. The old GitHub repository and CDN pins were not modified. Earlier dated entries accurately describe the state before this subsequently authorised cleanup; this current position supersedes their keep-untouched/old-working-tree statements.

## 16 October 2026 — Old compatibility checkout restored and removed from the project — Codex

**Changed (R-120, R-127, R-128):** At Michael's request, restored the old local checkout to its correct pre-migration baseline after preserving its full history and files. Michael then confirmed removing the old folder from Codex project settings. Recorded D-019 and the recovery location. Current canonical runtime and Acceptance are unchanged.

**Outputs:** [Cleanup evidence](webflow/old-checkout-cleanup-2026-10-16.md); complete local recovery set in `.backups/old-checkout-cleanup-2026-10-16/`; updated SCOPE, ROADMAP, DECISIONS and STATUS. Old local main is clean at `0864f82`. No remote write occurred.

**Checked how:**

- Live `git ls-remote` confirms old GitHub main `0864f820670f78917d0726ae24a0b930506ff03a` and unchanged v0.2.6 tag object. The extra ten commits were local, not pushed.
- A complete 22-ref Git bundle verifies with no prerequisites. The full-folder archive includes Git metadata, ignored files and dirty notes; all 137 tracked/untracked file hashes match archive contents. Backup checksums were reverified after cleanup.
- Old checkout has no pending files or ahead/behind count. Its tracked tree and released CSS/JS/Embeds match baseline blobs. Every ref except the intentionally restored local main matches the saved inventory; the linked prototype worktree remains unchanged.
- Leftover old backups, candidate files and recovery note were moved into the recovery set with explicit paths. No broad clean/delete command ran.
- Michael's chat confirmation is the evidence for removal from Codex project settings. Computer Use refused access to the Codex app, so this was not independently observed through UI automation.
- Canonical source, candidate output, dependencies and pins remain at tested `71a9a87`; only documentation changes. Boss still maps to the canonical folder. Local links and `git diff --check` pass.
- Not checked: a new runtime test run, fresh CDN requests, browser/Webflow/human/device behaviour or release publication. The earlier 685/685 combined candidate result remains the relevant local runtime evidence.

**Still open:** Existing browser, Library/consumer, human/device, release and Lite clone-flow checks. R-127's eventual remote archive remains gated. Nothing remains in this bounded old-folder cleanup.

**Needs Michael:** No further cleanup step. Existing preview, Library-sharing, human/device and release steps remain separate.

**Next useful action / Handoff:** Develop only in the canonical folder. Treat the clean old checkout as frozen compatibility evidence. Use the recovery archive/bundle if an old uncommitted note or original commit is needed; do not restore its older runtime over the canonical candidate. No GitHub retirement or tag/CDN change is authorised by this local cleanup.


## 16 October 2026 — Final committed readback and handoff — Codex

**Changed (R-121, R-128, R-155):** Recorded the verified integration commit and final handoff. Local settings/docs commit `e599c09` and integration commit `0c87623` are on canonical main. No remote operation occurred.

**Outputs:** Updated reviewed baseline and commit pointers in STATUS and the reconciliation evidence.

**Checked how:** Read back `0c87623`, its explicit 22-file scope and a clean canonical working tree before this documentation-only entry. The previously recorded 685/685 candidate and standard-suite results apply to its exact source/delivery bytes; no code changed after those runs. Rechecked unchanged old/Boss snapshots, canonical runner mapping and the stopped night shift. Local links and `git diff --check` pass. No repeat runtime test was needed for commit-pointer edits.

**Still open / Needs Michael:** Authorised browser, human/device, Library/consumer, release and Lite clone-flow checks remain. Confirm the intended project pause in Boss before a future shift starts; this session observed the night shift off and altered no pause setting. Existing Acceptance is unchanged.

**Next useful action / Handoff:** Review the combined candidate from this canonical folder. Use `npm run test:candidate`; the older verification CDN pin does not include these repairs. Keep the old folder and Claude's uncommitted Boss repair intact. No local reconciliation or settings-close-out work remains.

## 16 October 2026 — Seven compatibility commits reconciled and combined candidate checked — Codex

**Changed (R-005, R-006, R-009, R-038, R-039, R-040, R-095, R-096, R-097, R-121, R-128, R-155):** Brought briefs #75–#78 into the canonical checkout while preserving its newer rapid-reversal and scroll-lock fixes. Retained all settings tests and the complete candidate test-discovery gate. Native removal, closing focus and two-menu Escape repairs are now checked together in all four local deliveries. Updated current project summaries; Acceptance is unchanged.

**Outputs:** Local integration commit `0c87623`: reconciled source, three imported regression files, three original evidence records, README/migration-guide updates, freshly generated candidate outputs and [the seven-commit provenance/reconciliation record](webflow/canonical-reconciliation-2026-10-16.md). The original seven commits and the old checkout remain intact. Settings close-out was committed first as `e599c09`; brief #74 is reported done in Boss, not accepted.

**Checked how:**

- Imported focused source regressions: 75/75 pass.
- Fresh `npm run test:candidate`: 685/685 pass, zero failures/cancellations/skips/expected failures. This includes the 168 settings checks, all 300 imported delivery checks and the canonical rapid-reversal, Lite, offline migration and scroll-lock regressions.
- `npm test`: exit 0; 274 tests, 247 passes, no unmarked failures/cancellations/skips and the existing 27 executed expected historical failures. No expectation label, assertion, timeout or runner was relaxed.
- `npm run check:dist`, `npm run check` and `npm run check:namespace` pass. All 17 protected historical files are byte-identical. Both self-contained candidates fit the existing Embed limit: main 49,605 characters; Library 49,894. An initial build was 50,002 characters for the Library; shortening two explanatory comments fixed the two-character excess without logic changes.
- The six imported test/evidence files retain their original committed bytes. The canonical complete serial test runner, dependency files, pinned Library verification loader and historical delivery files are unchanged. Guidance/evidence local links resolve; source/new-test syntax and `git diff --check` pass.
- Snapshot comparisons confirm all 137 old-checkout and 370 Boss repository file hashes, HEADs and original working-tree status remain unchanged. Setup/doctor point to the canonical path; night shift remains off. No project pause setting was changed.
- Not checked: browser rendering, real keyboard/touch or scrolling, assistive technology/devices, physical-display icon checks, Webflow Canvas/Preview, linked consumers, actual network/CDN fallback, Library sharing or release publication.

**Still open:** Authorised browser review of the combined candidate; human/device checks; approved Library sharing and consumer installation/update/rollback; released version/CDN verification; native Lite component and clone flow. Local reconciliation and settings recovery are complete. Doctor did not display a project pause flag, so confirm the intended pause in Boss before any future shift starts.

**Needs Michael:** Existing preview, Library-sharing, human/device and final-release steps only. No naming, folder migration or code-reconciliation decision remains. The old-folder retirement remains separately gated; it was not performed.

**Next useful action / Handoff:** Review this combined candidate from the canonical folder, using `npm run test:candidate` for its complete regression suite. Keep the old folder and Claude’s Boss work untouched. Do not treat the older exact-commit Library pin or earlier fixture results as proof of these integrated repairs. No push, fetch, tag, Webflow change, release or Acceptance change occurred.

## 16 October 2026 — Canonical routing restored and settings close-out saved — Codex

**Changed (R-121, R-122, R-128, R-155):** Ran the explicit setup selection authorised by Michael, confirmed canonical routing with doctor, and prepared the preserved settings verification and refreshed docs for a local commit. The night shift is off; this session does not start it or change project pause settings. Claude’s uncommitted Boss repair and the old checkout are unchanged.

**Outputs:** Settings test/evidence files, the four refreshed project docs and the canonical runner mapping. Setup output selects the new folder; doctor reports Boss 0.10, the loaded job and the new SmashBurger path. Setup added the canonical pre-push guard; existing guards were left in place.

**Checked how:** Saved settings logs record 385/385 candidate passes, including 168 settings checks. All 147 non-document inputs still match the saved manifest; only the four intentionally refreshed docs differ. Existing input test/evidence bytes are unchanged. Both setup and doctor exited successfully; doctor confirms the night shift is off and does not show a project pause flag. Snapshot comparisons confirm all 137 old-checkout and 370 Boss repository file hashes, HEADs and working-tree status are unchanged. `git diff --check` passes. No new runtime suite is needed before saving this unchanged tested baseline.

**Still open:** Reconcile the seven commits from briefs #75–#78 with the canonical rapid-reversal/scroll-lock repairs and verify the combined candidate. Browser, human/device, Webflow/consumer and release checks remain separate.

**Needs Michael:** Existing preview, Library-sharing, human/device and final-release steps only. The canonical write-access/routing recovery blocker is resolved in this session. Acceptance is unchanged.

**Next useful action / Handoff:** Commit only the six preserved canonical files, then integrate the separate work using the old checkout read-only. Preserve the full test-discovery gate and regenerate candidate outputs from the combined source. Keep SmashBurger paused; no push, tag, release or Webflow operation is authorised here.

## 16 October 2026 — Why night-shift routing reverted — Codex

**Changed (R-128):** Diagnosed the routing regression and corrected the earlier overbroad commit warning. No runner code, configuration, process or Git history changed.

**Outputs / cause:** Boss setup scans the project root for registered repo keys. Both SmashBurger checkouts report `boss.repo=smashburger`. `found[info.name] = p` silently replaces an earlier match; `cfg.repos = { ...cfg.repos, ...found }` then replaces the configured destination. A read-only reproduction using Node's actual directory scan order visits the canonical folder first and the old folder second, and selects the old folder even when the input mapping is canonical. Source: `/Users/michaelauty/Work on MacStudio/boss/agents/boss-mcp/boss-runner.mjs`, lines 1574–1583.

**Checked how:** Runner configuration was modified at 10:47:21 BST on 16 October. The runner log records SIGTERM at 10:47:21 and version 0.8 restarting at 10:47:26. Claude's Boss session at 10:39:29 BST recommended running `boss-runner.mjs setup` if a restart was needed. Together these strongly indicate setup caused the overwrite; the exact command execution/operator was not recorded in the evidence inspected. The duplicate-selection behaviour itself is reproduced, not inferred. Earlier routing was verified canonical on 15 October; retained rollout evidence is historical, not current state.

**Correction:** Night-shift jobs read runner.json. MCP `runTool()` instead calls `repoInfo()` on its own process working directory (boss-mcp.mjs, lines 515–516); commits and sync do not consult runner.json. This chat's Boss sync reports canonical baseline `bc2caeb`. The earlier claim that the runner config by itself prevents canonical MCP commits is withdrawn. Verify the tool's actual session folder rather than treating the night-shift map as its commit target.

**Still open / Next useful action:** Fix setup to preserve a valid explicit mapping and report duplicate repo keys instead of silently choosing one. Restore `smashburger` to the canonical folder and reload the runner when idle; its daemon reads configuration at startup. Keep both folders and their histories. Separately reconcile the local fixes. No configuration repair or code integration is claimed here.

**Needs Michael:** No product choice. Repair implementation and runner reload remain separate from this read-only investigation and the existing release/Library gates.

**Handoff:** Read this diagnosis before the older routing warnings. The docs remain saved and uncommitted alongside the preserved settings work. Run no setup command as a mere restart until duplicate discovery is repaired. `git diff --check` passes; no runtime/browser/Webflow tests were needed for this read-only reproduction.

## 16 October 2026 — Project records reconciled with both checkouts — Codex

**Changed (R-121, R-125, R-126, R-128, R-155, R-165, R-181, R-182):** Updated the current summary and launch sequence, removed stale naming blockers from current roadmap guidance, corrected the infrastructure prototype's acceptance wording, and identified the checkout/routing mismatch. Added current-reading notes to settled decisions without rewriting their original text.

**Outputs:** SCOPE.md, ROADMAP.md, DECISIONS.md and STATUS.md. Existing settings tests, their evidence record and their three ROADMAP additions are preserved. All changes remain uncommitted. The initial assumption that runner.json also controls this chat’s MCP commit target was too broad; see the routing diagnosis below. No unrelated work is included in a commit.

**Checked how:**

- Read the four docs, Boss inbox, runner log/configuration and both local histories/working-tree states. Canonical `60960a3..bc2caeb` contains only the already recorded reversal evidence commit.
- Rechecked all 151 saved settings-test input hashes before editing docs: zero differences. The three pending-file hashes also match the recovery record.
- Read `/private/tmp/smashburger-brief74-000b_jh4/candidate-tests.log`: 385 passes, zero failures/cancellations/skips/expected failures. The saved reproducibility log passes. These are retained test results, not a new execution.
- Checked the documentation diff, local link targets, stable roadmap/decision IDs and unchanged State/Evidence/Acceptance fields. Verified that existing settings additions and original settled-decision text are retained.
- Not checked: a new runtime test run, combined compatibility/canonical candidate, browser rendering/input, Webflow Canvas/Preview, linked consumers, CDN loading, human/device behaviour or publication.

**Still open:** Correct the Boss binding and commit canonical work; reconcile the separate compatibility fixes; complete browser, Library consumer, release and Lite clone-flow checks. Brief #74's saved verification is complete, but its final local commit remains pending. Existing technical and human acceptance gates remain.

**Needs Michael:** Existing local-preview, Library-sharing, human/device and final-release steps only. The former canonical write-access limitation does not apply to this chat; the runner's older checkout binding is a separate setup gap. Naming is settled.

**Next useful action:** Resolve the checkout binding and review both histories, preserving all uncommitted work. Integrate the separate local fixes and verify the combined candidate before any Webflow update or release.

**Handoff:** Next canonical session: start with this current position and the preserved settings evidence. Confirm the MCP session folder before committing; the runner mapping alone does not establish that tool’s target. Do not copy the old runtime over the canonical version or treat either checkout's test count as combined proof. Keep v0.2.6, existing Library pins and Acceptance unchanged. This entry supersedes earlier workspace/naming/access summaries without deleting their history.

## 16 October 2026 — Rapid menu changes stop late events and focus moves — Codex (night shift)

**Changed (R-095, R-155):**

- Cancelling an opening now discards its request to focus the first link, including before native reopening.
- Closing from an `opened` event listener no longer lets the finishing opening move focus back into the panel.
- A completion timer checks the actual native menu state before announcing completion. A reversal just before its deadline cannot announce the wrong result while native notification is still queued.
- Added 80 candidate checks for interrupted motion and repeated public calls, with separate non-zero opening/closing durations in Dropdown and Custom motion.
- Regenerated only candidate runtime deliveries and their derived files. Scroll-lock ownership, public hooks, the test gate, dependencies, protected releases and Acceptance are unchanged.

**Outputs:** Local repair/test commit `60960a3`; [executable delivery checks](tests/runtime-delivery.test.js); [reproduction, exact coverage and limits](webflow/rapid-menu-reversals-2026-10-16.md); evidence additions in ROADMAP.

**Checked how:**

- Focused source checks pass 20/20. Before repair, source probes reproduced retained focus requests, focus theft after an event listener's close and stale completion in both motion modes.
- `npm run test:candidate` exits 0: 217/217 pass, zero failures, zero skips and zero expected failures. All 80 new checks pass across source, candidate distribution, minified output and self-contained Embed.
- `npm test` exits 0: 157 tests, 130 passes, zero unmarked failures, zero skips and the existing 27 executed expected historical failures. No label, assertion, timeout or runner changed.
- The controlled clock uses the runtime's configured 280 ms opening and 220 ms closing durations. Native Details notifications remain asynchronous in the DOM simulator.
- Exact event order, completion counts, bubbling, payload keys/object identity, native state, root/menu/panel/backdrop state, public state, ARIA, inertness and panel relationships pass. Focus histories also catch temporary late moves.
- Tests advance beyond cancelled deadlines. Separate checks reverse immediately before a deadline and run the old timer before queued native notification delivery.
- Candidate reproducibility and namespace checks exit 0. All 17 protected historical SHA-256 hashes match. Explicit diffs confirm protected deliveries, maintained CSS, dependencies, test gate, build/verifier and compatibility records are unchanged.
- Syntax checks, evidence-record links/heading anchors and `git diff --check` pass.
- Initial main was clean at `a44742e`. Its only commit after the prior reviewed baseline recorded the already documented candidate-preservation evidence. Boss confirmed brief #73 taken and showed no conflicting agent work or new decision needed.
- Not checked: browser scheduling or rendering, real keyboard/pointer input, external GSAP/Webflow Interactions, rendered focus, assistive technology, devices or physical display ratios.
- Not checked: Webflow Canvas/Preview, linked consumer installation/update, CDN/network loading, Library sharing or publication.

**Still open:** Nothing remains in brief #73. Browser, human, Webflow/consumer and release checks retain their existing gates. Native restoration after destroy, ordinary closing focus and two-menu Escape remain separate briefs #76–#78.

**Needs Michael:** No new decision blocks this brief. Existing browser access, Library sharing, human/device checks and final release approval remain his.

**Open questions (not blocking):** None added.

**Next useful action:** Review the local commits and continue separately authorised local briefs. No push, tag or publication occurred.

**Handoff:** On main, use `npm run test:candidate` for a fresh build with all candidate checks mandatory. The new scenarios always run against source; the same assertions also run against all three generated deliveries in candidate mode. The controlled clock intercepts only enhancement timeouts; native Details events still use the existing asynchronous simulator. Read the linked record before treating this as browser or third-party animation proof. The candidate loader proposal's JavaScript integrity value follows regenerated bytes; no loader logic or installed loader changed. The older commit-pinned Library verification loader remains unchanged and is not proof for these repairs. Preserve immutable releases, public hooks, scroll-lock ownership, pending Acceptance and all existing release gates. No browser, desktop app, Webflow or remote access occurred.

## 16 October 2026 — Verification preserves existing candidate files — Codex (night shift)

**Changed (R-125, R-155):**

- Checking a candidate no longer refreshes or partially overwrites its existing files.
- Verification builds in a disposable copy, including the Library outputs, and reports differences without keeping generated changes.
- Deliberate build commands still write to the normal candidate directory.
- Added nine bounded fixture tests for matching output, stale bytes, new/removed files, partial failure, termination, missing output, links and deliberate building.
- No runtime, generated candidate bytes, release version, pin, integrity value, dependency or Acceptance changed.

**Outputs:** Local implementation/test commit `18147a2`; [verifier](scripts/check-dist.mjs); [executable preservation checks](tests/check-dist.test.js); [behaviour, evidence and limits](webflow/candidate-reproducibility-2026-10-16.md); README command documentation and roadmap evidence.

**Checked how:**

- The nine new fixture tests pass with zero skips or expected failures. Every verification case compares the complete original fixture tree and binary bytes before/after, including temporary-output cleanup.
- Matching output passes twice. Stale bytes, new/removed output and a missing candidate return 1. A partial build returns its induced status 7. A terminated child returns 1. Links fail before building.
- The focused candidate fixture, namespace and distribution command passes 16/16, with zero skips or expected failures. The exact command is in the linked record.
- Real `npm run check:dist` and `npm run build` both exit 0. Independent before/after snapshots confirm identical candidate paths, file modes and all 19 file hashes after each command.
- All 17 protected historical SHA-256 hashes match. Explicit diffs confirm maintained runtime, generated candidates, released assets, compatibility records, package and dependencies are unchanged.
- Edited JavaScript syntax checks, `npm run check`, evidence-record links and `git diff --check` pass.
- Initial main was clean at `475a545`. Its only commit after the previous reviewed baseline recorded the Lite evidence already described below. Boss confirmed brief #72 taken and showed no conflicting agent work or new decision needed.
- Not checked: the full runtime suite or migration/rollback rehearsals. The focused checks cover this build-tool brief without running unrelated rehearsals.
- Not checked: browsers, Webflow, network/CDN loading, linked consumer installation, human/device checks or release publication.

**Still open:** Nothing remains in brief #72. Existing rendered, Webflow/consumer, human/device and release gates remain open.

**Needs Michael:** No new decision blocks this brief. Existing browser access, Library sharing, human/device checks and final release approval remain his.

**Open questions (not blocking):** None added.

**Next useful action:** Review the local commits and continue the separately authorised local briefs. No push, tag or publication occurred.

**Handoff:** On main, `npm run check:dist` now preserves the original candidate. Use `npm run build` deliberately when refreshed candidate files are wanted. The verifier sets the internal output override for its child only; every build destination, including Library output, uses it. Distribution source maps retain their normal relative paths. Fixtures have ten-second child limits and fifteen-second test limits. Read the linked record for exact commands and special-entry/concurrency limits. Preserve protected releases, existing Acceptance and all browser/Webflow/release gates. No browser, Webflow, remote access or migration/rollback rehearsal occurred.

## 16 October 2026 — Actual Lite examples checked with their runtime — Codex (night shift)

**Changed (R-181, R-182, R-155):**

- The plain and styled examples now run with their actual candidate stylesheets and browser bundle in the existing DOM simulator.
- Added four mandatory checks for automatic discovery, panel relationships, accessible state, separate opening/closing, repeat initialisation, simulated Escape and the script-free workbench.
- Repaired the workbench's missing closed/open link targets by adding IDs to its existing articles.
- No redesign, runtime, generated delivery, released asset, version, dependency or Acceptance changed.
- The examples and workbench items remain in progress. This does not create Webflow components or a clonable.

**Outputs:** Local test/repair commit `9200c0e`; [executable Lite checks](tests/lite-candidate.test.js); [workbench reference repair](candidate/lite/workbench-references.html); [method, assertions and limits](webflow/lite-examples-runtime-2026-10-16.md); evidence additions in ROADMAP.

**Checked how:**

- `npm run test:candidate` exits 0 after a fresh build: 128/128 passes, zero failures, zero skips and zero expected failures. All six Lite tests pass through this command.
- The initial focused run passed five of six tests and exposed the missing workbench fragment targets. The final candidate run passes after their repair.
- Automatic startup finds both actual navbars without a manual initialisation call. Their panel IDs differ, and each trigger controls its own panel.
- Both public opening/closing orders preserve the other menu's state. Repeated initialisation while closed, while both are open and after closure preserves IDs and APIs without duplicate completion events.
- With either menu open on its own, simulated Escape closes it and returns focus from its first link to its trigger. Closed ARIA/inert state agrees with native Details state.
- The actual workbench loads local CSS without any script. Its native closed/open references, adjacent panels and labelled backdrop sample remain intact; every fragment link resolves.
- The candidate guard verified all 17 protected historical SHA-256 hashes. Explicit diffs against the starting commit confirm maintained runtime, generated candidates, released files, compatibility records, package and dependencies are unchanged.
- New-test syntax, `npm run check`, evidence-record links and `git diff --check` passed.
- Initial main was clean at `810ef55`. Its only commit after the prior reviewed baseline recorded the test-gate evidence already described in STATUS. The boss inbox showed brief #71 taken and no conflicting agent work or new decision needed.
- Not checked: browser rendering, native keyboard activation, actual pointer input, assistive technology, responsive geometry, Webflow Canvas/Preview, network asset loading, Library installation or clone flow.
- Not checked: Escape with both menus open or native accessibility after destruction. These remain separate briefs #78 and #76.

**Still open:** Nothing remains in brief #71. Browser, Webflow/consumer, human/device, clone-flow and release checks remain at their existing gates.

**Needs Michael:** No new decision blocks this brief. Existing browser access, Library sharing, human/device checks and final release approval remain his.

**Open questions (not blocking):** None added.

**Next useful action:** Review the local changes and continue the separately authorised local briefs. No push, tag or publication occurred.

**Handoff:** On main, use `npm run test:candidate` for a fresh build with all tests mandatory. `node --test tests/lite-candidate.test.js` reads the currently generated candidate assets without building. The new helper reads the actual page and declared assets from disk; resource fetching is disabled and automatic runtime discovery remains enabled. It uses the existing permissive CSS-support shim and no reduced-motion preference. The workbench deliberately has no runtime. Read the linked record before interpreting the evidence. Preserve protected releases, pending Acceptance on the Lite items and all browser/Webflow/clone gates. No browser, Webflow or remote access occurred.

## 16 October 2026 — Test gate repaired without changing v0.2.6 — Codex (night shift)

**Changed (R-125, R-155):**

- The ordinary test command now succeeds while explicitly reporting confirmed limitations in the immutable release.
- Marked only the three confirmed historical overlapping-menu failures as expected failures. The assertions still run and remain mandatory for source and freshly built candidates.
- Included all maintained tests in the candidate command. It previously omitted 37 source checks in `tests/navbar-light.test.js`.
- Both commands run test files one at a time. This avoids competition that twice exceeded an existing build-failure timeout; no timeout or assertion was relaxed.
- No runtime, proposed scroll-lock scenario, generated delivery, loader integrity, release version, dependency or Acceptance changed.

**Outputs:** Local repair commit `53cb0d2`; [reproduction, commands and limits](webflow/test-gate-repair-2026-10-16.md); [candidate runner](scripts/check-built-runtime.mjs); [overlap regression](tests/runtime-delivery.test.js); README and roadmap evidence.

**Checked how:**

- Before labelling, an isolated overlap comparison passed source and failed all three historical delivery forms at the same premature-unlock assertion. Four tests ran: one pass and three failures, with no TODOs or skips.
- `npm test` exits 0: 124 tests, 97 passes, zero unmarked failures, zero skips and 27 executed expected failures. These are 15 existing stylesheet/breakpoint/focus limitations, nine existing lock-lifecycle limitations and the three confirmed overlap failures.
- `npm run test:candidate` exits 0 after a fresh build: 124/124 passes, zero skips and zero expected failures. All nine test files run, including the 37 previously omitted maintained-source checks.
- The same overlap assertions pass for source, candidate distribution, minified output and self-contained Embed.
- All 17 protected historical SHA-256 hashes match. Explicit diffs also confirm source, generated candidate files, released deliveries, compatibility records, dependency lockfile and archived demos are unchanged.
- `npm run check`, syntax checks for the edited test and runner, and `git diff --check` passed.
- Initial main was clean at `78d72f2`. Its only commit after the prior reviewed baseline recorded evidence already described in STATUS. The boss inbox showed brief #70 taken and no conflicting agent work or new decision needed.
- Not checked: browser rendering or actual scrolling, native keyboard/touch, assistive technology, network/CDN loading, Webflow Canvas/Preview, linked consumer upgrade/rollback and human/device checks.

**Still open:** Nothing remains in brief #70. Historical defects remain in immutable v0.2.6. Existing rendered, Webflow/consumer, human/device and release gates stay open; this local repair does not complete release verification.

**Needs Michael:** No new decision blocks this brief. Existing browser access, Library sharing, human/device checks and final release approval remain his.

**Open questions (not blocking):** None added.

**Next useful action:** Review the two local commits and continue the separately authorised local briefs. No push, tag or publication occurred.

**Handoff:** On main, use `npm test` for source plus historical delivery evidence and `npm run test:candidate` for a fresh build with every discovered regression mandatory. The three new TODO labels apply only to historical deliveries when neither candidate nor fresh-build mode is set. Preserve release bytes, pins, existing scenario scope and Acceptance. Read the linked record for the initial timeout runs and the clean isolated reproduction. No browser, Webflow or remote access occurred.

## 16 October 2026 — Offline class migration and exact rollback — Codex (night shift)

**Changed (R-115, R-121, R-155):**

- Added a repeatable local rehearsal that preserves client content while switching legacy classes and matching delivery files to the candidate and back.
- Saved the fixture before migration and checked that rollback restores its complete parsed structure exactly.
- Included extra classes, links, accessible names, image references, custom settings and deliberately reordered native content.
- Kept all migration helpers inside test fixtures. No runtime behaviour, released files, versions, dependencies or Acceptance changed.
- The cloned-Webflow upgrade/rollback item remains planned (R-115). This is local preparation only.

**Outputs:** Local test commit `358e157`; [executable tests](tests/migration-rollback.test.js); [fixture helpers](tests/fixtures/migration-rehearsal.mjs); inclusion in the candidate command; [steps, evidence and limits](webflow/offline-migration-rollback-2026-10-16.md); local preparation notes in ROADMAP.

**Checked how:**

- `npm run test:candidate` passed 87/87, with no skips or expected failures. All six new rehearsal tests passed.
- Normal files, minified files and the self-contained Embed each passed original legacy checks and two migration/rollback cycles. The checks used 15 fresh simulated pages, without network or browser access.
- Each phase checked opening, closing, two-stage Escape, first-link focus, trigger focus return and the ARIA/inert state that controls accessibility.
- All 37 explicit mapping entries were covered. Unknown lookalikes and unrelated authored classes survived.
- Deliberate content, order, destination, name, image, setting and unrelated-class damage was detected. A mixed historical/candidate delivery pair was rejected.
- All 17 protected historical hashes matched. Explicit diffs confirmed runtime source, generated candidate output, released files, package/version and dependencies were unchanged.
- New-file syntax checks, `npm run check`, record link checks and `git diff --check` passed.
- Initial main was clean at `d4fed86`. Its only commit since the previous reviewed baseline recorded evidence already described in STATUS. The boss inbox showed this brief taken and no conflicting agent work or new decision needed.
- Not checked: browser rendering, real keyboard activation, assistive technology, image loading, real CDN requests/integrity, Webflow class/style records, bindings/assets, Canvas/Preview, linked Library update or cloned-site upgrade/rollback.
- Not checked: the ordinary `npm test` gate. Its known historical overlap failures remain the separate brief #70.

**Still open:** Nothing remains in brief #69. The cloned-Webflow semantic-version upgrade/rollback remains planned, with live checks outstanding (R-115). Rendered review, Library sharing/consumer checks, human/device and final release gates remain open.

**Needs Michael:** No new decision blocks this brief. Existing browser, Library sharing, human/device and final release approvals remain his.

**Open questions (not blocking):** None added.

**Next useful action:** Continue the separately authorised local briefs. Use this rehearsal as preparation for a later backed-up cloned-Webflow upgrade/rollback once its release and site authority exist.

**Handoff:** On main, run `node --test tests/migration-rollback.test.js` to read existing artifacts only, or `npm run test:candidate` to build the isolated candidate and run the wider checks. Runtime checks use fresh simulated pages to represent a reload; exact restoration applies to the saved parsed author fixture, not a live runtime's destroy lifecycle or Webflow records. Keep helpers fixture-only. Preserve released files, the older Library pin, all Acceptance fields and the planned state of R-115. No browser, Webflow, remote or publication work occurred.

## 16 October 2026 — Multiple-menu teardown and resize checks — Codex (night shift)

**Changed (R-095, R-155):**

- Added checks that page scrolling stays locked when one open menu is removed while another needs the lock.
- Covered repeated removal, repeat initialisation, all three pairs of collapse breakpoints and both menu orders.
- Checked Left/Right locking drawers beside non-locking dropdowns, saved document styles and two independent owner documents.
- No new runtime defect appeared. Runtime, visual design, public configuration, generated outputs, release pins, dependencies and Acceptance are unchanged.

**Outputs:** Local test commit `17a2058`; [new lifecycle tests](tests/runtime-scroll-lock.test.js); candidate runner inclusion; [precise cases, commands and limits](webflow/sb-nav-candidate-multiple-navbars-2026-10-16.md#brief-68--teardown-resize-and-separate-documents); evidence additions under the automated checks and release verification items (R-095, R-155).

**Checked how:**

- `SMASHBURGER_CANDIDATE=1 node --test tests/runtime-scroll-lock.test.js` passed 16/16, with no skipped tests or expected failures. The four delivery forms cover 64 scenario runs.
- Final `npm run test:candidate` passed 81/81, with no skipped tests or expected failures. This includes maintained source, candidate distribution, minified output and self-contained Embed.
- The candidate guard verified all 17 protected historical SHA-256 hashes. Explicit diffs confirmed runtime, generated candidate outputs, released files, version and dependencies were unchanged.
- A historical comparison first reproduced nine failures in immutable v0.2.6: teardown and breakpoint expansion unlock too early, and a second owner document does not acquire its own lock. These three groups fail in each historical delivery form.
- Only those newly confirmed historical failures use the existing TODO convention in the new file. Its historical rerun exits 0: seven passes and nine executed expected failures. Candidate mode keeps every assertion mandatory.
- `npm run check`, new-file syntax checks and `git diff --check` passed. Initial main was clean at `f11a8f0`; the only commit since the prior reviewed baseline recorded integrity evidence already in STATUS.
- Not checked: rendered page scrolling, visual scrollbar padding, overlapping-menu stacking, narrow-height containment, physical keyboard/touch, assistive technology, Webflow Preview or linked consumer update/rollback.
- Not checked: the full ordinary `npm test` gate. Brief #70 separately owns its older unmarked overlap failures and maintained-source coverage. The old overlap test was left untouched.

**Still open:** Nothing remains in brief #68. Rendered multiple-menu scrolling and the existing Webflow, consumer rollback, human/device and release gates remain open. The older Library verification pin still cannot demonstrate the current lock fix.

**Needs Michael:** No new decision blocks this brief. Existing browser, Library sharing, human/device and final release approvals remain his.

**Open questions (not blocking):** None added.

**Next useful action:** Continue the separately authorised local briefs. When rendered checks are authorised, try teardown and each collapse boundary with two open menus, checking page scrolling and visible scrollbar padding before the final release.

**Handoff:** On main, read this entry and the appended brief #68 section in the multiple-navbar record. The new test file is included in `npm run test:candidate`; its historical TODOs never apply to source or candidate mode. Separate-document evidence covers lock ownership only, not general cross-document keyboard/event handling. Non-zero motion/reversal coverage and the existing ordinary test-gate repair remain separate briefs. Preserve protected releases, the older Library pin and all Acceptance fields. No browser, Webflow or remote access occurred.

## 16 October 2026 — Library verification integrity repaired — Codex (night shift)

**Changed (R-125, R-126, R-155):** The Library verification loader now has integrity values calculated from the exact files at its unchanged older commit. Its JavaScript hash was wrong; its CSS hash was already correct. Missing local Git objects stop the Library build clearly. The current-source illustrative loader stays separate and byte-identical. The older verification pin does not include the latest overlapping-overlay scroll-lock fix.

**Outputs:** Repair commit `4b3be79`; [integrity repair and checks](webflow/library-verification-integrity-2026-10-16.md); six new [regressions](tests/library-verification.test.js) included in the normal candidate checks; refreshed candidate verification loader; README and roadmap evidence. Version `0.3.0-rc.1`, pin `ddb83c79934914ef0f03f3f012ee2743154153f7`, released files, installed Embeds and historical snapshots are unchanged. No Acceptance was changed.

**Checked how:**

- `node --test tests/library-verification.test.js` passed 6/6. Both asset hashes match independent calculations over raw local Git bytes.
- Deliberately wrong CSS and JavaScript hashes were rejected. Reusing today's JavaScript hash with the older URL also failed as intended.
- An empty temporary Git object directory made the Library build exit 1 with the missing commit/path. Its three outputs stayed unchanged.
- `npm run test:candidate` passed 65/65 across source, candidate distribution, minified runtime and self-contained Embed. No checks were skipped or marked as expected failures.
- The guard verified all 17 protected historical hashes. Explicit diffs confirmed historical evidence, released files, package/version/dependencies and the illustrative loader were unchanged.
- `npm run check:dist`, `npm run check` and `git diff --check` passed.
- The initial working tree was clean. The one commit after the previous reviewed baseline was the Lite structure check already described in STATUS.
- Not checked: network/CDN loading, browser rendering, Webflow/Preview and installed Embeds.

**Still open:** Nothing remains in brief #67. Library sharing, consumer update/rollback, human/device checks and release approval remain at their existing gates. The corrected older pin cannot serve as evidence for the newer overlay fix.

**Needs Michael:** Review the local repair when convenient. Existing Library sharing, human/device and final release decisions remain his; no new decision blocks this brief.

**Next useful action:** Review the two local commits, then continue the separately authorised local briefs. Keep sharing and release steps gated.

**Handoff:** On main, start with this entry and the integrity repair record. The candidate build now requires both pinned artifact blobs in local Git and never fetches missing objects. Preserve the old pin, release files and historical evidence snapshots. Use `npm run test:candidate` for the six new checks as well as the delivery matrix; this is local preparation only.

## 16 October 2026 — Lite structure checks and partial roadmap progress — Codex (night shift)

**Changed (R-181–R-182):** Added a DOM regression that checks each candidate navbar has one native menu, one panel and one link tree, retains the `sb-nav` classes and runtime hooks, and has no Library-generated class trail. Recorded the plain/styled examples and closed/open workbench references as locally verified preparation only.

**Outputs:** Updated [Lite candidate checks](tests/lite-candidate.test.js) and [ROADMAP](ROADMAP.md). R-181 and R-182 are in progress with local evidence; neither is marked built. The examples are still HTML references, not native Webflow components.

**Checked how:** `node --test tests/lite-candidate.test.js` passed 2/2 checks. `SMASHBURGER_CANDIDATE=1 npm run test:built` passed 59/59 checks across source, candidate distribution, minified output and Embed; all 17 protected historical files matched. `git diff --check` passed. Boss start/inbox showed brief #66 taken and no waiting handoff. The browser check was attempted in a new Chrome tab; its URL policy rejected `file:` and permits only `http:` and `https:`. Per that policy, no alternate route was attempted.

**Still open:** Rendered desktop/phone review; the blank-project native component and clone flow; the approved five-resource Library share and consumer linkage/update/rollback; final release gates; human keyboard, screen-reader and device checks. The three Library “Changed” flags remain unexplained by saved local properties/styles comparisons.

**Needs Michael:** Enable an authorised local browser preview. Approve the exact five-resource Library review before sharing. Complete human/device and final release decisions when those stages are ready.

**Next useful action:** Continue with reproducible local release and rollback checks that do not alter released files; resume rendered Lite review when an allowed local preview URL is available.

**Handoff:** Start with this entry, `webflow/sb-nav-candidate-multiple-navbars-2026-10-16.md`, and the candidate test runner. Keep candidate outputs unreleased and v0.2.6 protected. The browser URL policy explicitly prohibited alternate access after rejecting `file:`; do not retry through another browser surface. The prior local HTTP binding failure remains in the 15 October STATUS evidence and was not repeated.

## 16 October 2026 — Candidate overlay fix and Lite local examples — Codex (night shift)

**Changed (R-121, R-178–R-182):** Fixed page scroll unlocking too early when two candidate overlay menus are open. Prepared plain and styled examples plus closed/open workbench references and a backdrop swatch. Updated the safe-editing guide to separate released instructions from candidate review.

**Outputs:** [Candidate multi-navbar check](webflow/sb-nav-candidate-multiple-navbars-2026-10-16.md), [plain and styled examples](candidate/lite/review-examples.html), [workbench references](candidate/lite/workbench-references.html), and the refreshed [safe-editing guide](webflow/smashburger-lite-safe-editing.md). These local HTML artifacts are not a native Webflow component or clonable.

**Checked how:** `SMASHBURGER_CANDIDATE=1 npm run test:built` passed 58/58 checks across source, candidate distribution, minified output and self-contained Embed. This included the new multi-navbar lock regression, native fallback, failed CDN scripts, keyboard/Escape, ARIA/inert, reduced motion, custom icon geometry and prior layout/motion checks. The runner verified 17 protected historical files byte-for-byte. `npm run check`, the Lite artifact check and `git diff --check` passed. Candidate outputs were built under `candidate/`; released v0.2.6 outputs were not rebuilt.

**Still open:** Browser rendering of the Lite pages was blocked. Chrome control rejected a new local file tab under its URL policy; a local HTTP server could not bind to 127.0.0.1 (`PermissionError: Operation not permitted`). Automated DOM/runtime checks do not prove rendered stacking or narrow-height scrolling. Webflow Canvas/Preview, Library sharing, consumer linkage/update/rollback, and physical keyboard, screen-reader and device checks remain open.

**Needs Michael:** Enable an authorised local browser preview. Approve the exact five-resource Library review before sharing. Human/device sign-off and final release approval remain his gates; no Acceptance was changed.

**Next useful action:** Render the local Lite references at desktop and phone sizes when browser preview is available. Continue Library consumer verification only after its sharing approval.

**Handoff:** Start with this entry and the multi-navbar check record. Keep all `candidate/` files labelled unreleased; preserve v0.2.6 and old pins. The two Lite pages are static HTML review artifacts, not Webflow-native work or clone-flow evidence. No Designer, Preview, staging, Library sharing or Webflow content was changed. The local browser attempt created no tab, and no browser workaround was used.

## 15 October 2026 — Library candidates prepared and Designer icons corrected — Codex

**Changed (R-121, R-125, R-126):** Prepared isolated sb-nav duplicates of both real Library editions, retaining five variants, properties, bindings and assets. Added reproducible candidate-name CSS aliases and a verified existing-commit CDN pin. Fixed the oversized Designer burger/chevron strokes with explicit zero padding and republished only New Smashburger Test staging under Michael's existing approval. Saved and verified source and target backups before structural work.

**Outputs:** [Library candidates, evidence and sharing gate](webflow/library-sb-nav-candidates-2026-10-15.md), three generated Library candidate Embeds, build/readback verification scripts, saved before/after snapshots and browser evidence. [Test-site correction](webflow/new-smashburger-test-2026-10-15.md). The canonical checkout receives this final commit and push; the old remote and immutable releases remain available.

**Checked how:** Each Library copy retains 144 nodes, 60 properties, five variants, nine assets and 67 bindings. Compared saved original settings, global styles and original variant declarations with baseline. Self-contained source-Library Canvas and Preview each passed 20 variant/width cases; ten collapsed cases passed opening, Escape, focus, ARIA/inert and horizontal containment. Nested keyboard Escape passed on the final Always fixture. A local reconstruction separately passed 15 CDN runtime and 15 runtime-script-omission fallback cases; these are not consumer or published Webflow evidence. Candidate tests passed 53/53, readback assertions, syntax, reproducible generation and namespace guards passed; all 17 protected historical files match. Designer and staging readback confirmed 24 × 2px burger strokes and zero icon padding.

**Still open:** The exact Library sharing review includes three existing definitions marked Changed plus two new candidates; checked original settings/styles match, but the remaining review flags are unexplained. No share was submitted. Linked consumer properties/assets/overrides, class prefixes, fresh unlink, update/rollback and actual Webflow CDN/fallback remain unverified. CDN-only and temporary CSS-only Preview stalled; the full self-contained runtime was restored exactly. Multi-navbar stacking/vertical placement, Lite clonable, final release promotion/tag, human/device checks and reopening Codex in the canonical workspace remain open.

**Needs Michael:** Approve the exact five-resource Library update before sharing. Human/device Acceptance and final release approval remain his calls; no Acceptance was changed.

**Next useful action:** After sharing approval, apply/install only in backed-up New Smashburger Test, preserving its existing fixture and both Library tag styles, then complete the consumer and release gates.

**Handoff:** Read this entry and the detailed Library record from `/Users/michaelauty/Work on MacStudio/Smashburger-Webflow-Navbar`. This chat's boss commit binding remains at the retained old checkout; its commit is fast-forwarded and pushed from canonical before closing. Both Designers are in Design mode, sharing review is cancelled, the restored runtime is intact, the local server/tab is closed and viewport overrides are reset. Chrome is free. Do not install the illustrative tag loader, share without approval, alter old pins or retire the old repository before its gates pass.

## 15 October 2026 — Canonical checkout verified and new Webflow fixture tested — Codex

**Changed (R-119–R-125, R-128):** Tested and pushed source candidate 1261de5 from the canonical clone. Preserved the boss key and routed future runner sessions to that path, with a configuration backup. Built a fresh native sb-nav test fixture in New Smashburger Test after saving and verifying its blank-site backup. Published only its Webflow staging subdomain after Michael explicitly approved it. At his request, updated the local Webflow MCP skill to warn before focus-dependent Chrome work and say when Chrome is free again.

**Outputs:** [Canonical transfer record](webflow/canonical-rename-2026-10-15.md), [Webflow test record](webflow/new-smashburger-test-2026-10-15.md), saved native tree/styles, measurements, mobile screenshot and outside test-controls source. Working destination: `/Users/michaelauty/Work on MacStudio/Smashburger-Webflow-Navbar`. The source candidate and final records are to be kept in sync there; old remote and original release tags remain available.

**Checked how:** From the canonical checkout: candidate checks 53/53; full suite 90 checks, 75 passed, no unmarked failures and 15 known v0.2.6 TODOs; syntax and reproducibility passed. Canonical remote main was read back at 1261de5 while old remote main remained 0864f82; all old tags and the prototype branch matched. Test-site MCP readback confirmed 45 nodes, 26 local styles, no legacy class tokens, native Details/Summary/Nav tags and both Embeds byte-identical to the candidate files. Staging passed 35 layout/motion pairs, 25 collapse/width checks, nested/outer Escape with focus return, Full-width and Right at 393 × 384, and genuine no-JavaScript native menu/submenu fallback. A final mobile in-app-browser render also initialised and contained the panel. All 17 protected historical files remained byte-identical.

**Still open:** This is a fresh native fixture, not an imported Library component: Library properties/variants/assets/linkage and upgrade/rollback remain unverified for the class migration. No new distribution tag or CDN release exists. Human/device accessibility, physical-display icon checks and final workspace reopening remain open. Preview was stuck on first-time custom-code loading and supplied no behavioral evidence.

**Needs Michael:** No Git technical steps. Human/device acceptance and later release/Library-sharing approval remain his gates. Both the transfer and test-site publishing permission questions were answered in this chat; they are not current blockers.

**Next useful action:** Use the canonical checkout and these fixture limits to prepare the actual versioned Library-edition migration, preserving backups, properties, assets, old releases and exact runtime hooks.

**Handoff:** Future agent work uses the canonical path and stable boss key smashburger. The runner's path has been updated; this already-running chat/boss commit tool remains bound to the retained old checkout, so its last record commit is fast-forwarded to canonical before closing. Designer is back in normal Design mode with the original custom-code preference off. JavaScript, viewport overrides and temporary local browser/server resources were restored; the staging deliverable remains available. Do not install the illustrative candidate CDN loader. Follow R-125–R-127 gates before distribution or retiring the old repository. Acceptance was not changed.

## 15 October 2026 — Canonical transfer and renamed source candidate — Codex

**Changed (R-119–R-124, R-128):** Copied the complete branch/tag history to the canonical repository and populated the selected clone. Renamed maintained source, demo, fixtures and tests to the accepted sb-nav classes. Package identity is smashburger-webflow-navbar; 0.3.0-rc.1 is an unreleased candidate, generated separately from the released files (technical D-017). Recorded Michael's explicit remote-operation authority under D-013 without rewriting its original decision text.

**Outputs:** Source and candidate distribution/Embeds/loader, automated class/hook and immutable-file guards, updated CI and version-boundary guides. Full transfer/check record: [canonical rename](webflow/canonical-rename-2026-10-15.md). Verified history backup copied to `.backups/` in both checkouts; existing dependencies copied into the canonical clone without installation or upgrades. Original remote, release tags, archived demos and detached trial worktree remain available.

**Checked how:** Verified both remote states before transfer. Destination HEAD/tree, both branches, eight tags and reachable history matched at 0864f82 (244 main commits); git fsck passed. Candidate tests passed 53/53; full tests: 90 checks, 75 passed, no unmarked failures, 15 known v0.2.6 TODO checks. Syntax, class/hook checks, reproducible generation and git diff --check passed. All 17 protected historical files remain byte-identical. Local in-app browser at 1280px/393px confirmed candidate loading, contained mobile panel, submenu hiding and nested/outer Escape with focus return and closed ARIA/inert. Six old CDN assets at v0.1.0/v0.2.0/v0.2.6 returned 200 and matched tagged bytes. These do not establish Webflow candidate acceptance.

**Still open:** Sync the candidate commit and run checks from the canonical clone. R-121's Webflow/Library/clonable scope, final release promotion/tag/CDN delivery, human/device accessibility, physical-display checks, cloned upgrade/rollback and final workspace reopen. The old repository must remain until release/compatibility gates are met. No new tag, Webflow edit, share, publish or CDN write was made by this entry.

**Needs Michael:** No technical Git transfer. Human/device sign-off and later release/publication approval remain his gates. Confirm or create a Webflow backup if the new test site has none; structured site inspection is next.

**Next useful action:** Verify and push the candidate from the canonical clone; inspect “new smashburger test” and use an isolated backed-up test surface for the next candidate checks.

**Handoff:** Future repository work starts at `/Users/michaelauty/Work on MacStudio/Smashburger-Webflow-Navbar`. This chat/boss commit tool still binds the old checkout, so commits are made there and fast-forwarded into the canonical clone. Do not install the illustrative candidate CDN loader or replace top-level v0.2.6 output. Read the rename record and current site state before Webflow work. Michael offered the new test site during this session; it has not yet been structurally changed.

## 15 October 2026 — Record accepted naming and repository direction — Codex

**Changed (D-012, D-013; R-119, R-121, R-128):** Recorded that SmashBurger remains the product identity, the `sb-nav` class mapping is accepted, and the selected local destination is `/Users/michaelauty/Work on MacStudio/Smashburger-Webflow-Navbar`.

**Outputs:** Updated `SCOPE.md`, `DECISIONS.md`, `ROADMAP.md` and this status record. The roadmap now says Michael will create and clone the new repository; the class migration follows once that checkout is available, and the local folder move remains last. No repository, remote, source, release or Webflow content changed.

**Checked how:** Compared the accepted D-012/D-013 verdicts in `DECISIONS.md` with SCOPE, R-119/R-121/R-128 and the current checkout. Confirmed the exact destination spelling, preserved the original decision text, and kept roadmap State, Evidence and Acceptance unchanged. The checked baseline is `e9bf567`; `git diff --check` passed. This is local documentation evidence only.

**Still open:** The new repository and clone do not exist yet. The versioned class migration, release checks and later local folder move remain planned.

**Needs Michael:** Create and clone the new repository at the selected path. Review and push local commits when ready.

**Next useful action:** After the new clone is available, continue R-119 onward there, beginning with verifying the complete history and repository state before the class migration.

## 15 October 2026 — Brief #47 D-014 sign-off wording — Codex (night shift)

**Changed (D-014):** Reworded the question to make clear that Michael should decide after using the Lite release. It remains Proposed; this is a product commitment that affects what he builds and maintains.

**Outputs:** Updated the **For Michael:** line directly below Status in `DECISIONS.md`. The decision text and other fields are unchanged.

**Checked how:** Read D-014, its source references and Lite direction in the project record. Confirmed the question follows Status, gives a recommendation, and explains what changes either way. Confirmed Status remains Proposed. `git diff --check` passed.

**Still open:** Michael's decision after using the Lite release. This wording update does not block other work.

**Needs Michael:** Use the Lite release, then decide whether to build and maintain the separate Designer Extension and menu-maintenance tool.

**Next useful action:** Continue Lite work under the existing scope; return to D-014 after Michael has used its release.

## 15 October 2026 — Brief #45 R-184 sign-off wording — Codex (night shift)

**Changed (R-184):** Added a plain check for the safe-editing guide so Michael can review how it explains safe edits and future updates.

**Outputs:** Updated the R-184 Try line in `ROADMAP.md`. State, Evidence and Acceptance remain unchanged; no implementation or Webflow content changed.

**Checked how:** Compared R-184 before and after. Confirmed the Try line follows State and the State, Evidence and Acceptance values are unchanged. `git diff --check` passed. This wording change does not verify the guide's instructions in a future project.

**Still open:** Michael's review and sign-off. The guide still needs refreshing against the chosen released files before it is used in the future project.

**Needs Michael:** Review the safe-editing guide and record a verdict in boss. Review and push the local commit when ready.

**Next useful action:** Michael checks the R-184 Try line and the guide; after runtime selection, refresh the guide against those released files.

## 15 October 2026 — Brief #44 decision sign-off wording — Codex (night shift)

**Changed (D-012, D-013, D-014):** Added a plain question and recommendation under each proposed decision for Michael. All three remain Proposed because they concern product identity, where the work lives, or future product scope.

**Outputs:** Updated `DECISIONS.md` and this status record. No decision text or implementation changed.

**Checked how:** Read the project rules and the relevant decision and roadmap context. Confirmed each **For Michael:** line is directly below Status, includes a question and recommendation and explains what changes either way. Confirmed all three Status values remain Proposed. `git diff --check` passed.

**Still open:** Michael's choices. None blocks this documentation change.

**Needs Michael:** Review the three **For Michael:** lines and give a verdict when ready.

**Next useful action:** Record Michael's choices and update the decisions in a later session.

## 15 October 2026 — Brief #43 unlink outcome sign-off wording — Codex (night shift)

**Changed (R-267):** Named the “Unlink test” page and described the visible checks in plain words: no duplicate or blank “Always” entries, and a menu that opens and closes in Preview. The technical steps remain covered by this outcome.

**Outputs:** Updated the Try line in `ROADMAP.md`. No State, Evidence or Acceptance value changed; no Webflow content changed.

**Checked how:** Compared R-267 and its covered steps R-122 and R-129–R-137 before and after. Confirmed the State and Evidence values are unchanged, each technical step still points to R-267, and the Try line follows the State line. `git diff --check` passed. This documentation edit does not verify Webflow behavior.

**Still open:** Michael's check and sign-off. Preview behavior was not checked in this session.

**Needs Michael:** Try the unlinked menu on the “Unlink test” page and record a verdict in boss. Review and push the local commit when ready.

**Next useful action:** Michael checks R-267 in Webflow; a later session records his verdict without changing acceptance.

## 15 October 2026 — Brief #42 infrastructure outcome sign-off wording — Codex (night shift)

**Changed (R-165):** Made the Preview check clear: Michael can check the readable settings list and working menu while the infrastructure box is closed. The list is a manual snapshot and may need updating if settings change. R-167 and R-170 remain technical steps covered by this outcome.

**Outputs:** Updated the Try line in `ROADMAP.md`. No implementation or Webflow content changed.

**Checked how:** Compared R-165, R-167 and R-170 before and after. Confirmed State, Evidence and Acceptance are unchanged, and the Try line is directly under State. `git diff --check` passed. This documentation change does not verify Preview behavior.

**Still open:** Michael's Preview check and sign-off. Preview behavior was not checked in this session.

**Needs Michael:** Try the settings list and menu in Preview with the infrastructure box closed, then record a verdict in boss. Review and push the local commit when ready.

**Next useful action:** Michael checks the R-165 outcome in Preview; a later agent records his verdict without changing acceptance.

## 15 October 2026 — Brief #41 Navigator sign-off wording — Codex (night shift)

**Changed (R-162):** Rewrote the Try line so Michael can check whether each part is easy to find by its name in Webflow's Navigator. Kept the State and Evidence unchanged; R-163 remains a technical step covered by R-162.

**Outputs:** Updated the sign-off wording in `ROADMAP.md`. No implementation or Webflow content changed.

**Checked how:** Compared R-162 and R-163 before and after; confirmed State, Evidence and Acceptance are unchanged, and the Try line sits directly under State. `git diff --check` passed. This is a documentation change; no Webflow check was run.

**Still open:** Michael's Navigator check and sign-off. The live result was not checked in this session.

**Needs Michael:** Try R-162 in Webflow and record a verdict in boss. Review and push the local commit when ready.

**Next useful action:** Michael checks the component names in Navigator; a later agent records his verdict without changing acceptance.

## 15 October 2026 — SmashBurger Lite safe-editing guide — Codex (night shift)

**Changed (R-184):** Reworked the future-project guide to cover safe edits, functional hooks and trigger/panel structure, native Menu Button restrictions, accessible names, stacking and duplicate-header removal. Marked current v0.2.6 selectors as version-specific and requiring refresh after class migration and runtime selection.

**Outputs:** Updated [safe-editing guide](webflow/smashburger-lite-safe-editing.md) and recorded its local documentation evidence in `ROADMAP.md`. No runtime, class namespace, clonable or Webflow project changed.

**Checked how:** Compared the guide with accepted Lite scope (D-011), R-184, the source hook selectors, README integration/runtime contract and v0.2.6 release record. `git diff --check` passed. This is local documentation evidence only.

**Still open:** Final Lite structure and runtime are unselected. Refresh and verify the version-specific instructions against the chosen released files before placing the guide in the future project; Lite is not built or published.

**Needs Michael:** Review and push the local documentation commit when ready.

**Next useful action:** After naming, class migration and runtime selection, reconcile the guide with the built component and exact pinned loader before clone-flow checks.

## 15 October 2026 — Maintained-source icon geometry matrix — Codex (night shift)

**Changed (R-037):** Added a focused local regression for open two-line and three-line icons across four bar thicknesses, three overridden gaps and five simulated pixel ratios. The immutable v0.2.6 files and Webflow were not changed.

**Outputs:** Added `npm run test:icon-geometry` and documented the 120-case coverage and its limits in the [icon geometry record](webflow/icon-geometry-regression.md).

**Checked how:** `npm run test:icon-geometry` passed (1 test, 120 combinations). It checks the maintained JavaScript shift, the source CSS translation rules and modelled line-centre rounding at simulated 1×, 1.25×, 1.5×, 2× and 3×. `git diff --check` passed.

**Still open:** This does not render or inspect browser pixels. Physical-display DPR 2×/3×, Webflow candidate checks and exact-version distribution checks remain open.

**Needs Michael:** Review and push the local commit when ready.

**Next useful action:** Use the maintained source matrix for future local regression checks; complete the physical-display and Webflow candidate checks when they can be run.

## 15 October 2026 — README and roadmap implementation check — Codex (night shift)

**Changed (R-009):** README now says the maintained source includes unreleased stylesheet-failure and breakpoint/focus timing fixes, while `dist` and Webflow Embeds remain the released v0.2.6 baseline. The roadmap now links the local comparison and release record and marks the documentation evidence verified locally.

**Outputs:** Updated `README.md`, `ROADMAP.md` and this status record. No runtime code, generated release file, Webflow content or historical decision changed.

**Checked how:** Compared `src/`, generated output paths, `package.json`, the v0.2.6 release record and the Brief #13 test record. The completed 15 October `npm run test:built` result recorded there is 33/48: all 12 maintained-source checks passed, with 15 generated-output failures covering five source-only behaviors across distribution, minified and Embed files. A fresh invocation began but did not complete in this session; generated files were restored to their starting versions and verified unchanged. `git diff --check` passes. This is local automated evidence only.

**Still open:** The unreleased candidate has not been verified in Webflow or a browser. Human/device checks, physical-display DPR 2×/3× and cloned upgrade/rollback remain open.

**Needs Michael:** Review and push the local documentation commit when ready.

**Next useful action:** A later session can verify candidate behavior when an isolated route serves the maintained files and supported browser request inspection is available.

## 15 October 2026 — Brief #16 outcome sign-off wording — Codex (night shift)

**Changed (R-009, R-122, R-129–R-137, R-162, R-163, R-165, R-167, R-170, R-177):** Reframed the built work as three outcomes Michael can check in Webflow: a tidy site after unlinking, clear names in Navigator, and a closed infrastructure box whose menu still works in Preview. Detailed engineering items now point to their outcome; housekeeping items need no separate sign-off.

**Outputs:** Updated `ROADMAP.md` with Try lines, Covers links and a new unlink outcome (R-267). Kept the existing State and Evidence fields unchanged and did not accept any outcome.

**Checked how:** Read the project rules and current project docs; checked `532f9f9..HEAD` and the working tree before editing. Compared all requested item State and Evidence values before and after; confirmed each step points to the intended outcome, the three outcome Try lines are present and `git diff --check` passes. This is a documentation rewrite; no Webflow or browser checks were run.

**Still open:** Michael's three outcome checks and sign-off. The Webflow behavior described by the existing records was not rerun in this session.

**Needs Michael:** Try the three outcomes in the roadmap and record a verdict for each in boss. Review and push the local commit when ready.

**Next useful action:** Michael tries the three outcomes; a later agent records his verdict without changing the evidence or outcome wording unless asked.

**Handoff:** For Michael: read the three Try lines in `ROADMAP.md`; they are the review surface boss will show. The work is on `main` and committed locally. Existing fixture boundaries remain in their linked records; no Webflow changes were made.

## 15 October 2026 — Brief #15 candidate browser access — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, release asset or Webflow content changed. The Clean Trial comparison route opened in a fresh tab; Chrome rejected the documented SB Test Four source-candidate route at its origin approval gate.

**Outputs:** Reported the access blocker to Boss once. Work remains pending Michael's acceptance.

**Checked how:** Started Boss for Brief #15 and read the project record. At `a136494`, `main` was clean. Opened a fresh tab at the recorded Clean Trial isolation URL and confirmed the page's navigation rendered; this does not establish that it serves the maintained candidate. The published source-candidate fixture documented in `webflow/enhanced-layout-regression.md` is `https://sb-test-four.webflow.io/sb-enhanced-regression`. Chrome rejected opening that origin with an approval-gate notice, and instructed not to try another surface or workaround. Reported the blocker to Boss. Closed both tabs created for this check. No Webflow content, draft, setting or publication changed.

**Still open:** Automatic failed-script request capture and candidate Details/focus; Full-width and Right short-height behavior; reduced-motion and custom-animation. Human screen-reader/device checks, physical-display DPR 2×/3× and cloned upgrade/rollback also remain open. The comparison route and its earlier request/focus results do not establish candidate behavior.

**Needs Michael:** Approve the SB Test Four staging origin or provide another approved candidate URL. Arrange human/device checks and a cloned release candidate when available. Review local commits.

**Next useful action:** Once an approved candidate route is available, capture its failed-script request, check Details and focus, test Full-width and Right at short heights, and check reduced motion and custom-animation. Keep Clean Trial unpublished and its empty probe and unrelated drafts unchanged.

**Handoff:** Read this entry and the latest Brief #15 section in the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md). Do not retry the SB Test Four origin unless Michael approves it. Tabs opened for this check are closed.

## 15 October 2026 — Brief #15 route and request check — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, release asset or Webflow content changed. Chrome DevTools request inspection is available, but the known isolated Clean Trial route still serves v0.2.6 rather than the maintained candidate.

**Outputs:** Confirmed the published route's loaded CSS and JavaScript URLs and the Clean Trial page list. Work remains pending Michael's acceptance.

**Checked how:** Started Boss for Brief #15 and read the project record. At `2354365`, `main` was clean. In a fresh Chrome tab, opened DevTools Network and reloaded `https://sb-unlink-clean-trial.webflow.io/unlink-fallback-isolation`. The route document returned 200; Network showed `@v0.2.6/dist/navbar-light.min.css` and `navbar-light.min.js`, both 200. Read-only Webflow page listing shows that route is the only published isolation page; the empty `SB Lite Preview Compiler Probe` and three unrelated audit drafts remain drafts. No separate candidate page appears. I closed my tab; no Webflow setting, draft, request-blocking rule or publication changed.

**Still open:** Candidate failed-script request capture; candidate Details and keyboard focus; Full-width and Right at short heights; candidate reduced-motion and custom-animation. Human screen-reader/device checks, physical-display DPR 2×/3×, and cloned upgrade/rollback also remain open. No candidate behavior was inferred from the v0.2.6 comparison route.

**Needs Michael:** Provide the isolated candidate route URL or make it discoverable in the Clean Trial page list. Arrange human/device checks and a cloned release candidate when available. Review and push local commits.

**Next useful action:** On the source-candidate route, capture the failed-script request, check Details and focus, test Full-width and Right at short heights, then check reduced motion and custom-animation. Keep Clean Trial unpublished and leave the empty probe and unrelated drafts unchanged.

**Handoff:** Read this entry and the matching Brief #15 section in the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md). My fresh Chrome tab is closed; Clean Trial is unchanged.

## 15 October 2026 — Brief #15 candidate route inspection retry — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, release file or Webflow content changed. The candidate route and request inspection were not verified because the page request stayed pending and Chrome switched away during the check.

**Outputs:** Opened Chrome DevTools Network on my fresh tab and confirmed the pre-existing v0.2.6 JavaScript blocking rule remained unchecked. Work remains pending Michael's acceptance.

**Checked how:** Started Boss for Brief #15 and read the project record. At `3e03ff5`, `main` was clean. Opened fresh tabs for `https://sb-unlink-clean-trial.webflow.io/unlink-fallback-isolation`; its accessibility tree showed the isolated navigation and SmashBurger infrastructure disclosure. Chrome DevTools opened on that tab and showed Network capture available, plus the existing `@v0.2.6/dist/navbar-light.min.js` blocking rule unchecked. After clearing the log and reloading, the route document remained pending after 30 seconds. Chrome then switched to a Boss tab and stopped accepting input. A second fresh-tab retry also opened, but no loaded candidate files or behavior were confirmed. Closed both tabs created for this check. The Network rule was not enabled or changed. No Webflow content or publication changed.

**Still open:** Candidate CSS/JavaScript identity and failed-script request capture; candidate Details/focus; Full-width and Right short-height behavior; reduced-motion and custom-animation. Human screen-reader/device checks, physical-display DPR 2×/3×, and cloned upgrade/rollback also remain open. Earlier v0.2.6 fallback and Details/focus evidence remains comparison evidence only.

**Needs Michael:** Arrange human/device checks and a cloned release candidate when available. Review and push local commits.

**Next useful action:** Retry the candidate route when Chrome remains available long enough to finish its document load, then capture its script request and run the layout and motion checks. Keep Clean Trial unpublished, its probe empty, and unrelated drafts unchanged.

**Handoff:** Read this entry and the latest Brief #15 entry in the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md). Both tabs opened for this check are closed; the existing request-blocking rule remains unchecked.

## 15 October 2026 — Brief #15 route inspection retry — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, release file or Webflow content changed. The isolated Clean Trial route opened in Chrome, but this check did not confirm that it served the maintained candidate.

**Outputs:** Reached Chrome DevTools and inspected the existing request-blocking rule. Work remains pending Michael's acceptance.

**Checked how:** Started Boss and read the project record and project-docs workflow. At `c4611f2`, `main` was clean. I opened two fresh tabs for the named `/unlink-fallback-isolation` route. Chrome DevTools showed one unchecked blocking rule targeting `@v0.2.6/dist/navbar-light.min.js`; the Network panel showed the page document pending for 30 seconds and still pending after a reload and another 30-second wait. A fresh tab rendered the route's navigation in its accessibility tree, but that did not identify its loaded runtime. Further Chrome input stopped when the browser state changed. Both tabs opened for this check were closed. No Webflow content or publication changed, and the request rule was not enabled or altered.

**Still open:** Candidate failed-script request capture; native Details and focus behavior on the candidate; Full-width and Right short-height behavior; candidate reduced-motion and custom-animation; human screen-reader/device checks; physical-display DPR 2×/3×; and cloned upgrade/rollback. The earlier published v0.2.6 fallback result remains comparison evidence only.

**Needs Michael:** Arrange human/device checks and a cloned release candidate when available. Review and push local commits.

**Next useful action:** Reopen the isolated route in a fresh tab, confirm its CSS and JavaScript URLs in DevTools Network, then test the candidate layouts and motion settings. Keep Clean Trial unpublished, the empty probe empty, and unrelated drafts unchanged.

**Handoff:** Read this section and the latest Brief #15 entry in the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md). The v0.2.6 blocking rule remains unchecked. No tabs from this check remain open.

## 15 October 2026 — Brief #15 candidate-route availability recheck — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, release file or Webflow content changed. The supplied route still serves the released v0.2.6 comparison, so the candidate checks could not proceed.

**Outputs:** Confirmed the route's CSS/JavaScript URLs and the current Clean Trial page list. Work remains pending Michael's acceptance.

**Checked how:** Started Boss for Brief #15 and read the project record and project-docs workflow. At `de788ab`, `main` was clean. Opened and closed my own fresh browser tab for `https://sb-unlink-clean-trial.webflow.io/unlink-fallback-isolation`. Its DOM reports `@v0.2.6/dist/navbar-light.min.css` and `navbar-light.min.js`. Read-only Webflow page listing shows only this published isolation page and the existing empty draft probe plus three unrelated drafts; no separate candidate page is present. The browser bridge provides viewport control and console logs, but no Network request-event capture. Native Chrome control was interrupted when the app state changed; after waiting 30 seconds and refreshing the browser inventory, I did not retry native input. No page, setting, draft, request-blocking rule or publication changed.

**Still open:** Failed-script request capture and candidate Details/focus; Full-width and Right short-height behavior; candidate reduced-motion and custom-animation. Human screen-reader/device checks, physical-display DPR 2×/3×, and cloned upgrade/rollback also remain open. The earlier v0.2.6 fallback result remains comparison evidence only.

**Needs Michael:** Provide or publish a source-candidate route on the isolated staging site so its script failure and layout/motion behavior can be checked. Arrange human/device checks and a cloned release candidate when available. Review and push local commits.

**Next useful action:** Once the candidate route serves the maintained CSS and JavaScript, capture a failed-script request, check Details and keyboard focus, test Full-width and Right at short heights, and check reduced-motion and custom-animation. Keep Clean Trial unpublished and its empty probe and unrelated drafts unchanged.

**Handoff:** Read this entry and the latest Brief #15 section in the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md). The only published isolation route still loads v0.2.6. No tabs from this check remain open.

## 15 October 2026 — Brief #15 candidate route and fallback checks — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, release file or Webflow content changed. Chrome DevTools blocked the route's v0.2.6 script for one reload; I disabled the block and reloaded successfully. The published route is still the comparison, not the maintained source candidate.

**Outputs:** Captured the failed script request and checked native Details and focus behavior on the isolated route. Work remains pending Michael's acceptance.

**Checked how:** Started Boss for this continuation and read the current project record and project-docs v0.4. Chrome Network showed the route loading `@v0.2.6/dist/navbar-light.min.css` and `navbar-light.min.js`. With the pre-existing request-blocking pattern enabled, Network and Console recorded the blocked `navbar-light.min.js` request and the page's “CDN JavaScript failed to load; native details behavior remains available” message. The native disclosures opened; with “More” open, Tab focused its first link, and after closing it, Tab skipped those links to “VIEW RELEASE”. I disabled the block and reloaded, then closed the tab I opened. No Webflow page, probe, draft or publication changed. Git status was clean at `466e3d8`; the only commit after the previous reviewed baseline `91532aa` was the recorded access-limit update. No remote operation was made.

**Still open:** The route's manual settings snapshot says Dropdown layout, right alignment and dropdown motion. It does not contain the source candidate or the Full-width/Right fixtures. The Full-width and Right short-height, rendered reduced-motion and custom-animation checks remain unverified. Human screen-reader/device checks, physical-display DPR 2×/3× and cloned upgrade/rollback also remain open.

**Needs Michael:** Provide the direct route that serves the maintained candidate CSS and JavaScript. Arrange human/device checks and a cloned release candidate when available. Review and push local commits.

**Next useful action:** Once the candidate route is available, test Full-width and Right at short heights, then reduced motion and custom-animation. Keep the Clean Trial probe empty, leave unrelated drafts unchanged, and do not publish the whole site.

**Handoff:** Read the latest Brief #15 section in the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md). The request-blocking pattern is disabled again. My test tab is closed.

## 15 October 2026 — Brief #13 browser control confirmation — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, release files, or Webflow content changed. Chrome is listed, but its native window cannot be bound in this session.

**Outputs:** Confirmed the supported browser surface and retained the candidate checks as open. Work remains pending Michael’s acceptance.

**Checked how:** Started Boss for R-037, R-095 and R-155. Read the project-docs v0.4 skill, STATUS, and the latest Brief #12/#13 fixture records. `cua.getState()` lists Chrome and an extension browser; `cua.getApp("com.google.Chrome")` returned `cgWindowNotFound`. The extension browser documentation describes a richer Playwright/DevTools interface, but the callable CUA surface here only supports accessibility, screenshots and input; it exposes no page evaluation, viewport control or request events. Webflow access is explicitly authorised, but the existing source-derived candidate route remains unavailable and the draft probe must stay empty. No tab or Webflow content changed.

**Still open:** Failed-script request capture; candidate Details/focus behavior; Full-width and Right narrow-height containment; rendered reduced-motion/custom-animation; human screen-reader/device checks; physical-display DPR 2×/3×; and cloned upgrade/rollback. The isolated-route blocker was already reported to Boss, so it was not repeated.

**Needs Michael:** Arrange a supported isolated candidate route with request inspection, human/device checks, and a cloned release candidate. Review and push local commits.

**Next useful action:** When a supported route and browser inspection controls are available, capture the failed-script request and continue the rendered candidate checks. Keep Clean Trial unpublished.

**Handoff:** Read the latest Brief #13 entry in the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md). Preserve the empty draft probe, unrelated drafts, Navbar Light test page and SB Test Four.

## 15 October 2026 — Brief #13 current verification result — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, immutable release file or Webflow content changed. The newest built-runtime run found that the unreleased source fixes are not present in the v0.2.6 distribution and Embed.

**Outputs:** Updated the local test record and roadmap with the 33/48 result and the candidate access limits. Work remains pending Michael's acceptance.

**Checked how:** At `08e71d4`, `main` was clean; no commits followed the reviewed baseline `94a4098` except the recorded documentation commit. `npm run test:built` passed all 12 maintained-source checks but finished 33/48 overall, with 15 failures in the immutable distribution, minified files and Webflow Embed for source-latest stylesheet-failure and breakpoint/focus timing behavior. The runner restored all 12 generated files; `git diff --check` passed and the worktree is clean. No release bytes were retained or published. Read-only Webflow `list_sites` confirmed the Clean Trial staging site and unchanged publication. Chrome app lookup returned `cgWindowNotFound`; the supported Node repl Playwright import returned `The requested module './index.js' does not provide an export named 'default'`. The earlier isolated-route blocker remains the same and was not reported again.

**Still open:** Failed candidate-script request capture; source-derived candidate Details and closed-link focus; Full-width and Right narrow-height containment; rendered reduced-motion/custom-animation; human screen-reader and device checks; physical-display DPR 2×/3×; and cloned upgrade/rollback. The new build failure reflects unreleased source versus pinned v0.2.6 outputs; no release asset was altered to force a pass.

**Needs Michael:** Arrange a supported isolated candidate route with working request inspection. Arrange human/device checks and a cloned release candidate when available. Review and push local commits.

**Next useful action:** Once a candidate route and request inspection are available, capture the failed-script request and run the remaining rendered checks. Keep the whole Clean Trial site unpublished.

**Handoff:** Read this entry and the latest Brief #13 section in the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md). Keep the probe empty and draft; leave its three unrelated draft pages untouched. Do not refresh the Navbar Light test page or touch SB Test Four.

## 15 October 2026 — Brief #13 current staging and Chrome controls — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, release file or Webflow content changed. No rendered candidate check could run because the available staging page is the published v0.2.6 comparison, not the source-derived candidate.

**Outputs:** Recorded current Clean Trial readback and the Chrome control retry in the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md) and roadmap evidence. Work remains pending Michael's acceptance.

**Checked how:** At `94a4098`, `main` was clean. The only commit after the recorded baseline `cd04987` was `94a4098`; no remote operation was made. Read AGENTS.md, the project-docs v0.4 skill, STATUS, relevant SCOPE/DECISIONS/ROADMAP and the latest Brief #12 test sections. Started the Boss run for R-037, R-095 and R-155. Webflow `list_sites`, `get_site`, `list_pages` and `get_all_elements` confirm Clean Trial has no custom domains, was last published at `2026-10-14T23:30:40.323Z`, and its probe is still an empty draft with only Body. The six-page list has four drafts total: the probe and three unrelated pages. Designer `list_branches` returned none for the probe. Chrome appears in the app inventory, but `cua.getApp("com.google.Chrome")` returned `cgWindowNotFound` twice, including after a 30-second wait. The supported extension browser opened a fresh published comparison tab and exposed the page accessibility tree; its DevTools shortcut did not open a DevTools panel. Its documented controls do not expose Network events. The new tab was closed. No Webflow content or publication changed. Previously recorded candidate Details/focus, responsive, motion and 48/48 build results were not repeated.

**Still open:** Failed candidate-script request capture; source-derived candidate Details and closed-link focus; Full-width and Right short-height containment; rendered candidate reduced-motion/custom-animation; human screen-reader and physical-device checks; physical-display DPR 2×/3×; and cloned upgrade/rollback. No candidate runtime or Network request capture was available. The isolated-route blocker was already reported to Boss, so it was not duplicated.

**Needs Michael:** Arrange a supported isolated candidate route with working request inspection. Arrange the human/device checks and a cloned release candidate when available. Review and push local commits.

**Next useful action:** When an isolated candidate route and request inspection are available, capture the failed-script request and continue the remaining rendered checks. Keep the whole Clean Trial site unpublished.

**Handoff:** Read this entry and the latest Brief #13 section in the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md). Keep the probe empty and draft. Leave all three unrelated draft pages untouched. Do not refresh the Navbar Light test page or touch SB Test Four.

## 15 October 2026 — Brief #13 live fixture count and browser capability — Codex (night shift)

**Changed (R-037, R-095, R-155):** Corrected the current Clean Trial draft count in the handoff record. The probe plus three unrelated pages are drafts; older “four other drafts” wording is stale. No product, source or Webflow content changed.

**Outputs:** Added the current live page/site readback and exact browser-control limits to the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md) and ROADMAP. Work remains pending Michael's acceptance.

**Checked how:** At `cd04987`, `main` was clean. Read AGENTS.md, project-docs v0.4, STATUS, relevant SCOPE/DECISIONS/ROADMAP, README safety and the latest Brief #12 fixture notes. Started the existing Boss run for R-037, R-095 and R-155. Webflow MCP `list_sites`, `get_site`, `list_pages` and `get_all_elements` confirm Clean Trial has no custom domains, last published at `2026-10-14T23:30:40.323Z`, and the backed-up probe remains draft with only Body. The six-page list contains the probe, three other drafts and two published pages. Browser inventory shows Chrome running, but `cua.getApp("com.google.Chrome")` returned `cgWindowNotFound`. The supported extension browser documentation exposes read-only page evaluation, viewport control and console logs, but no Network request events/list. The authorised Node repl Playwright import returned `The requested module './index.js' does not provide an export named 'default'`. No tab or Webflow content changed. No candidate runtime was available; finished Details, layout and 48/48 build evidence were not repeated. The project-docs skill was read from its canonical user-level location; the r1 alias path was absent.

**Still open:** Failed candidate-script request capture; candidate Details and closed-panel link/focus; Full-width and Right narrow-height containment; rendered reduced-motion/custom-animation; human screen-reader and physical-device checks; physical-display DPR 2×/3×; and cloned upgrade/rollback. The isolated-route and request-inspection blocker was already reported to Boss, so it was not duplicated.

**Needs Michael:** Arrange a supported isolated candidate route with request inspection. Arrange the human/device checks and a cloned release candidate when available. Review and push local commits.

**Next useful action:** When an isolated route with Network request inspection is available, capture the failed candidate-script request, then continue the remaining candidate checks. Keep the whole Clean Trial site unpublished.

**Handoff:** Keep the probe empty and draft. The three unrelated audit pages remain drafts. Do not publish the whole site, refresh the Navbar Light test page or touch SB Test Four.

## 15 October 2026 — Brief #13 browser and probe recheck — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, release asset or Webflow content changed. No source-derived candidate runtime was available, so no remaining rendered candidate check could be completed.

**Outputs:** Recorded today's Chrome-control and Clean Trial probe readback in the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md) and ROADMAP. Work remains pending Michael's acceptance.

**Checked how:** Started the existing Boss run and reported this access result as progress; the isolated-route blocker had already been reported, so I did not duplicate it. Current Webflow readback: Clean Trial has no custom domains and last published at `2026-10-14T23:30:40.323Z`; the probe remains `draft: true` and its element tree contains only Body. The page list shows three other draft pages, while the brief and earlier records say four; this count needs reconciling. Chrome is listed in the app inventory, but two `cua.getApp("com.google.Chrome")` attempts returned `cgWindowNotFound`. The extension browser's CUA surface provides accessibility, screenshots and input, but no page evaluation or Network request list. Its DevTools shortcut left the fresh staging comparison page unchanged. `node_repl` Playwright import returned `The requested module './index.js' does not provide an export named 'default'`. The one staging tab opened by this session was closed; pre-existing tabs were left alone. The unavailable `visible` tab option was omitted on retry. No candidate content, styles or publication changed. Earlier Details/focus and 48/48 build evidence were not repeated.

**Still open:** Failed candidate-script request capture; candidate Details and closed-panel link/focus; Full-width and Right narrow-height containment; rendered reduced-motion/custom-animation; human screen-reader and physical-device checks; physical-display DPR 2×/3×; cloned upgrade/rollback; and the draft-page count discrepancy.

**Needs Michael:** Arrange a supported isolated candidate route and browser request inspection. Arrange the human/device checks and a cloned release candidate when available. Review and push local commits.

**Next useful action:** Reconcile the draft-page count on the next Webflow readback, then resume rendered candidate checks when an isolated route and request-inspection control are available. Keep the whole Clean Trial site unpublished.

**Handoff:** The probe remains an empty draft with only Body in its element tree. No tabs opened in this session remain open. Do not publish the whole site, refresh the Navbar Light test page or touch SB Test Four.

## 15 October 2026 — Brief #13 inspection-surface recheck — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, release asset or Webflow content changed. This session did not obtain a source-derived candidate runtime, so no remaining rendered check could be completed.

**Outputs:** Added the current Chrome and Webflow access result to the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md) and roadmap evidence. Work remains pending Michael's acceptance.

**Checked how:** Started the existing Boss run for R-037, R-095 and R-155. Read the project record and latest Brief #12/13 fixture notes. Read-only Webflow `list_sites` and `get_site` confirmed Clean Trial still has no custom domains and its last publication remains `2026-10-14T23:30:40.323Z`. The current Chrome inventory exposes an extension browser; native `cua.getApp("com.google.Chrome")` returned `cgWindowNotFound`. The available CUA page surface offers accessibility, screenshot and input methods but no DevTools Network request list or page evaluation. Node repl Playwright import returned `The requested module './index.js' does not provide an export named 'default'`. No browser tab was opened. No candidate, build or previously completed interaction check was repeated. No Webflow change or publication occurred.

**Still open:** Failed candidate-script request capture; Full-width and Right narrow-height containment; candidate reduced-motion/custom-animation; human screen-reader and physical-device checks; physical-display DPR 2×/3×; and cloned upgrade/rollback. A usable isolated candidate route and DevTools request capture remain unavailable in this session.

**Needs Michael:** Arrange an isolated candidate route and working Chrome DevTools request capture. Arrange human/device checks and a cloned release candidate when available.

**Next useful action:** Resume the rendered candidate checks when an isolated route and request capture are available. Keep the whole Clean Trial site unpublished and leave the four other drafts untouched.

**Handoff:** This records an access recheck only; the isolated-route blocker was already reported to Boss, so no duplicate blocker report was sent. No tabs were opened and no temporary staging content was created.

## 15 October 2026 — Brief #13 current access and fixture readback — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, generated release file or Webflow content changed. The current route and browser controls still do not permit the remaining candidate checks.

**Outputs:** Recorded today's Webflow and Chrome readback in the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md) and added the R-037/R-095/R-155 evidence boundary to ROADMAP. Work remains pending Michael's acceptance.

**Checked how:** At baseline `2711447`, `main` was clean. Read AGENTS.md, project-docs v0.4, STATUS, SCOPE, DECISIONS, ROADMAP and the latest Brief #12 fixture notes. Started Boss for R-037, R-095 and R-155. Webflow MCP `list_sites` and `get_site` succeeded: Clean Trial has no custom domains and its last publication remains `2026-10-14T23:30:40.323Z`. Chrome's inventory exposes only the extension browser; its documented CUA surface has no request-event capture, and `cua.getApp("Google Chrome")` returned `cgWindowNotFound`. Existing tabs were left untouched; no new tab was opened because no source-derived candidate route or request-inspection control was available. No Webflow content or publication changed.

**Still open:** Failed candidate-script request capture; candidate Details and closed-link focus; Full-width and Right narrow-height containment; rendered reduced-motion/custom-animation; human screen-reader and physical-device checks; physical-display DPR 2×/3×; and cloned upgrade/rollback. Previously evidenced behavior and the 48/48 local build were not repeated. The isolated-route blocker was already reported to Boss, so no duplicate blocker report was sent.

**Needs Michael:** Provide a supported isolated candidate route that renders and allows request inspection. Arrange human/device checks and a cloned release candidate when available.

**Next useful action:** Resume candidate checks when that route and inspection surface are available. Keep Clean Trial unpublished as a whole and leave its four other draft pages untouched.

**Handoff:** Read this entry and the latest Brief #13 section in the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md) first. Do not publish the whole site, refresh the Navbar Light test page or touch SB Test Four.

## 15 October 2026 — Brief #13 current route and browser-surface readback — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, release file or Webflow content changed. The current browser and site readback confirms the source-derived candidate still cannot be reached for testing.

**Outputs:** Added current route and browser-surface evidence to the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md) and R-037/R-155 roadmap notes. Work remains pending Michael's acceptance.

**Checked how:** At `00d652a`, `main` was clean; only the prior Chrome bridge and Preview retry followed the reviewed baseline `d0e6c3d`. Started Boss for R-037, R-095 and R-155. Read-only Webflow readback confirms Clean Trial has no custom domains, its last publication remains `2026-10-14T23:30:40.323Z`, the probe remains a draft and four other pages remain drafts. The site record was last updated at `2026-10-15T09:52:33.303Z`. The CUA browser list contains only the Chrome extension surface; its documented page controls do not expose automatic Network request events. The available Playwright import through `node_repl` returned an export error. No Chrome tab was opened. No Webflow content or publication changed.

**Still open:** Automatic failed-script request capture; candidate Details and closed-link focus; Full-width and Right narrow-height containment; rendered reduced-motion/custom-animation; human screen-reader/device use; physical-display DPR 2×/3×; and cloned upgrade/rollback. The route blocker was already reported to Boss, so no duplicate blocker report was sent.

**Needs Michael:** Provide an isolated candidate route that renders and exposes request inspection. Arrange the human/device checks and cloned release candidate when available.

**Next useful action:** Resume candidate browser checks after a supported isolated route renders. Keep the whole Clean Trial site unpublished and its four unrelated draft pages untouched.

**Handoff:** The probe remains an empty draft and no tabs were opened in this check. Read this entry and the latest Brief 13 test-record section first. Do not publish the whole site, refresh the Navbar Light test page or touch SB Test Four.

## 15 October 2026 — Brief #13 candidate access follow-up — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, generated release file or Webflow content changed. The available Chrome tab inspection reached only the published comparison page, not the source-derived candidate.

**Outputs:** Recorded the current browser and local-route limits in the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md) and ROADMAP. Work remains pending Michael's acceptance.

**Checked how:** At `6b91cd2`, `main` was clean; only `6b91cd2` followed the previous reviewed baseline `05999ab`. Started Boss for R-037, R-095 and R-155. Read-only Webflow site/page readback confirms Clean Trial has no custom domains, its last publication is still `2026-10-14T23:30:40.323Z`, the candidate probe is draft and four other pages remain drafts. The CUA browser can open a fresh Chrome tab and read page accessibility/screenshot state, but exposes no Network request list; the candidate route is unavailable on the published comparison page. `cua.getApp("Google Chrome")` returned `cgWindowNotFound` on both attempts, and the browser tab shortcut did not open DevTools in the page surface. A local HTTP server attempt returned `PermissionError: [Errno 1] Operation not permitted` while binding to `127.0.0.1`; no alternate route was attempted. The fresh comparison tab was closed. No Webflow or source changes occurred.

**Still open:** Automatic failed-script request capture; source-derived candidate Details and closed-link focus; Full-width and Right short-height containment; rendered reduced-motion and custom-animation integration; human screen-reader/device use; physical-display DPR 2×/3×; and cloned upgrade/rollback. The recorded Details/focus pass and local build results were not repeated. The isolated-route blocker was already reported to Boss, so it was not reported again.

**Needs Michael:** Provide a supported isolated route with a working candidate runtime. Arrange the human/device checks and a cloned release candidate when available.

**Next useful action:** Resume browser checks when the candidate can render on an isolated route. Keep the whole Clean Trial site unpublished and the four unrelated drafts untouched.

**Handoff:** The Clean Trial probe remains empty and draft; four other draft pages are unchanged. The browser tab opened during this follow-up was closed. Read the latest Brief 13 entry in the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md) first. Do not publish the whole site, refresh the Navbar Light test page or touch SB Test Four.

## 15 October 2026 — Brief #13 Chrome bridge and Preview retry — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, generated release file or Webflow content changed. The isolated probe still does not render in Preview.

**Outputs:** Added the current Chrome inspection controls and a fresh Preview retry to the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md). This work remains pending Michael's acceptance.

**Checked how:** At baseline `d0e6c3d`, `main` was clean. Boss was started for R-037, R-095 and R-155. Read-only Webflow readback confirms the Clean Trial site has no custom domains, the last publish remains `2026-10-14T23:30:40.323Z`, the probe is still `draft: true` with a Body-only tree and blank head/footer code, and four other pages remain drafts. A fresh Chrome Designer tab loaded the probe; after 30 seconds, Preview logged `CompilationError: Invalid source code`. Reloading and waiting 30 seconds produced the same error; a fresh Designer tab and another Preview attempt produced it again. The available Chrome browser bridge supports read-only DOM evaluation, viewport control and console logs, but lists no Network request capture. The only browser and page capabilities returned were viewport override and page assets; DevTools logs are console-only. `npm run test:built` passed 48/48 and restored all 12 generated files; `git diff --exit-code` for maintained/generated outputs and `git diff --check` passed. All three tabs opened for this check were closed. No source or Webflow content changed.

**Still open:** Automatic failed-candidate-script request capture; source-derived candidate Details and closed-link focus; Full-width and Right short-height containment; rendered reduced-motion and custom-animation integration; human screen-reader/device use; physical-display DPR 2×/3×; and cloned upgrade/rollback. The same isolated-route blocker was already reported to Boss, so no duplicate blocker report was sent.

**Needs Michael:** Provide a supported isolated candidate route whose Preview or staging runtime renders. Arrange the human/device checks and a cloned release candidate when available.

**Next useful action:** Resume source-derived candidate checks when a supported isolated route renders and provides Network request inspection. Keep the whole Clean Trial site unpublished and its four unrelated drafts untouched.

## 15 October 2026 — Brief #13 Preview retry — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source or Webflow content changed. A fresh Designer Preview still fails to compile, so candidate checks could not run.

**Outputs:** Added the Chrome inspection-surface and Preview retry evidence to the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md) and related roadmap evidence. Work remains pending Michael's acceptance.

**Checked how:** At baseline `05999ab`, the worktree was clean on `main`; only the already-recorded DevTools evidence followed reviewed commit `6f6d382`. Started Boss for R-037, R-095 and R-155. The Chrome extension runtime exposes DOM snapshots, page-console logs and a viewport override; it does not expose a Network request list. In a fresh Designer tab for the backed-up Clean Trial probe, Preview became active but the console logged `CompilationError: Invalid source code`. After 30 seconds, reloading and waiting another 30 seconds showed the same error. A second fresh Designer tab also logged the same error after Preview was entered and allowed 30 seconds. Read-only Webflow site/page readback confirms no custom domains, last publication `2026-10-14T23:30:40.323Z`, the empty draft probe and four other drafts. All tabs opened for this check were closed. No page, code, style, Library item, asset or publication changed.

**Still open:** Candidate failed-script request capture, native Details and closed-link focus, Full-width/Right short-height containment, reduced-motion/custom-animation and usable candidate Preview. Human screen-reader/device, physical-display DPR 2×/3× and cloned upgrade/rollback still need people, hardware or a release candidate. No source defect was demonstrated.

**Needs Michael:** Provide an isolated candidate route whose Preview compiles, or a supported staging route. Arrange the human/device checks and cloned release candidate when available.

**Next useful action:** Resume source-derived candidate checks when that isolated route is available. Keep product naming, class migration and Lite publication deferred.

**Handoff:** The Clean Trial probe remains empty and draft; four other draft pages are untouched. Read the latest Brief 13 test record first. Do not publish the whole site, refresh the Navbar Light test page or touch SB Test Four.

## 15 October 2026 — Brief #13 DevTools and isolated-route check — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, Webflow page, Library item, asset, release or publication changed. Chrome's visible DevTools panels are available, but no candidate runtime could be loaded for the remaining checks.

**Outputs:** Added the DevTools control and current isolated-route findings to the [Brief 13 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and related roadmap evidence. New work remains pending Michael's acceptance.

**Checked how:** At reviewed baseline `195927f`, history through `6f6d382` contained the previous Brief 13 evidence update; the worktree was clean. Started Boss for R-037, R-095 and R-155. Read project-docs v0.4 and the latest Brief 12/13 fixture entries. Webflow site/page readback confirms Clean Trial has no custom domains, last publication `2026-10-14T23:30:40.323Z`, an empty draft probe and four unrelated draft pages. Chrome's visible Developer Tools menu opens Network and responsive-dimension controls on a fresh comparison-page tab. The CUA API has no Network request log or Rendering override method; the Node repl Playwright import returns `The requested module './index.js' does not provide an export named 'default'`. Webflow guidance confirms page/site branching requires Enterprise and the supported publishing call publishes the whole site. The fresh Chrome tab was closed. No Webflow change or publication occurred.

**Still open:** Failed candidate-script request capture and candidate Details/focus behavior; Full-width and Right short-height containment; candidate reduced-motion/custom-animation; and a usable isolated staging or Preview route. The visible DevTools panel does not supply candidate behavior without that route. Human screen-reader/device, physical-display DPR 2×/3× and cloned upgrade/rollback checks still need people, hardware or a release candidate. No source defect was demonstrated.

**Needs Michael:** Provide a supported isolated SmashBurger staging or Preview route. Arrange the human/device checks and cloned release candidate when available.

**Next useful action:** Resume candidate browser checks when an isolated route is available. Keep product naming, class migration and Lite publication deferred.

**Handoff:** Clean Trial remains unchanged; the backed-up probe is empty and draft and the four other drafts remain untouched. Read the latest Brief 13 test-record section first. Do not publish the whole site, refresh the Navbar Light test page or touch SB Test Four.

## 15 October 2026 — Brief #13 fresh build and inspection-surface check — Codex (night shift)

**Changed (R-037, R-095, R-155):** No maintained source, generated release file, Webflow content, Library item, asset or publication changed. The fresh build passed; no candidate behavior check could run.

**Outputs:** Added the fresh-build result and current tool/fixture readback to the [Brief 13 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and related roadmap evidence. New work remains pending Michael's acceptance.

**Checked how:** Started Boss for Brief 13 and read the current project record, project-docs v0.4 and latest Brief 12/13 test entries. At baseline `195927f`, history since reviewed commit `3e78f81` contained only the prior access recheck; the worktree was clean. `npm run test:built` passed 48/48; its runner restored all 12 generated files, and `git diff --exit-code` confirmed no generated output changed. Read-only Webflow `get_site` and `list_pages` confirm the Clean Trial probe is still an empty draft, four other pages remain drafts, there are no custom domains, and the last publication remains `2026-10-14T23:30:40.323Z`. Chrome's callable CUA surface here exposes accessibility, screenshots and input, not DOM, viewport or request inspection. Its browser documentation describes a separate Playwright/DevTools interface, but that interface is not available from this CUA session. The authorised Node repl Playwright import returned `SyntaxError: The requested module './index.js' does not provide an export named 'default'`. No browser tab was opened and no Webflow change or publication occurred.

**Still open:** Automatic failed-candidate-script request capture; candidate Full-width/Right narrow-height scrolling; rendered reduced-motion/custom-animation integration; and a working isolated Preview or page-level staging route. Earlier Brief 12 Details and closed-panel link/focus checks were not repeated. Human screen-reader/device checks, physical-display DPR 2×/3× and cloned upgrade/rollback still require people, hardware or a clone. The isolated-route blocker was already reported to Boss, so it was not reported again.

**Needs Michael:** Provide the supported isolated route and inspection controls needed for candidate browser checks. Arrange human/device checks and a cloned release candidate when available.

**Next useful action:** Resume candidate request, layout and motion checks once the isolated route and browser inspection surface are available. Keep naming, class migration and Lite publication deferred.

**Handoff:** The Clean Trial probe remains empty and draft, four unrelated drafts remain untouched, and the last staging publication is unchanged. Read the latest Brief 13 test-record section before further fixture work. Do not publish the whole site, refresh the Navbar Light test page or touch SB Test Four.

## 15 October 2026 — Brief #13 browser and fixture access recheck — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, Webflow content, Library item, asset, publication or release changed. No completed candidate behavior check was repeated.

**Outputs:** Confirmed the current browser surface and Clean Trial page state against the latest Brief 12 fixture record. New verification remains pending Michael's acceptance.

**Checked how:** At `3e78f81`, `main` was clean; history since the prior reviewed commit `1ccf54d` contains only the already-recorded build/access recheck. Read-only Webflow site/page calls confirm the probe remains `draft: true`, the site has no custom domains, its last publication remains `2026-10-14T23:30:40.323Z`, and four other pages remain drafts. The documented CUA API in this session provides accessibility state, screenshots and input, but no Network request capture, DOM evaluation or viewport emulation. The richer browser documentation was not exposed as a callable control here. No browser tab was opened; no Webflow change or publication occurred.

**Still open:** Automatic failed-candidate-script request capture; Full-width and Right short-height containment; candidate reduced-motion/custom-animation; usable isolated Preview or staging route; human screen-reader/device checks; physical-display DPR 2×/3×; and cloned upgrade/rollback. The isolated-route blocker was already reported to Boss, so it was not reported again.

**Needs Michael:** Provide a supported isolated staging or Preview route with a working browser inspection surface. Arrange human/device checks and a cloned release candidate when available.

**Next useful action:** Resume the remaining candidate checks once the isolated route is available. Keep product naming, class migration and Lite publication deferred.

**Handoff:** The Clean Trial probe is empty and draft; four unrelated drafts remain untouched. No tabs were opened. Do not publish the whole site to reach the probe, refresh the Navbar Light test page, or touch SB Test Four.

## 15 October 2026 — Brief #13 current access recheck — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, Webflow page, asset, Library item, publication or release changed. Candidate checks remain open because there is no supported isolated route in this workspace.

**Outputs:** Added the live site and browser-surface readback to the [Brief 13 test record](webflow/lite-preparation-local-tests-2026-10-14.md). New work remains pending Michael's acceptance.

**Checked how:** Started Boss, reviewed Brief 12/13 records, and checked the clean baseline at `e2fc350`; only the previously recorded `e2fc350` entry followed the `861428b` reviewed baseline. Read-only Webflow `get_site` and `list_pages` confirm no custom domains, last publication remains `2026-10-14T23:30:40.323Z`, the probe is still draft, and four unrelated pages remain drafts. Although the page list says `canBranch: true`, Webflow AI confirms this is page eligibility only: Branch API and staging Preview require Enterprise. A new Chrome tab loaded the published v0.2.6 comparison page, not a candidate, and was closed. CUA exposed accessibility/screenshot controls but no request log, DOM evaluation or viewport control. `node_repl` exposed no browser/CDP handle. No candidate request was available to capture.

**Still open:** Automatic failed-script request capture, Full-width and Right short-height containment, candidate reduced-motion/custom-animation, usable candidate Preview, human screen-reader/device checks, physical-display DPR 2×/3×, and cloned upgrade/rollback. The same isolated-route blocker was already reported to Boss; no duplicate blocker report was sent.

**Needs Michael:** Complete the isolated-route or Preview setup in Brief 14. Arrange human/device checks and a cloned release candidate when ready.

**Next useful action:** Resume candidate browser checks after Brief 14 provides a supported isolated staging or Preview route. Keep naming, class migration and Lite publication deferred.

**Handoff:** Clean Trial remains empty/draft and no staging publication occurred. Do not use whole-site publication to reach the probe while unrelated drafts remain. Do not refresh the Navbar Light test page or touch SB Test Four.

## 15 October 2026 — Brief #13 fresh build and route recheck — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, Webflow page, asset, Library item, publication or release changed. The fresh build passed; candidate browser checks remain open because there is no supported isolated route.

**Outputs:** Added this run's build and Webflow/browser access evidence to the [Brief 13 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and relevant ROADMAP evidence. New work remains pending Michael's acceptance.

**Checked how:** Started Boss and read the current project record, project-docs v0.4 and latest Brief 12/13 fixture notes. At baseline `1ccf54d`, `main` was clean and only the already-recorded access entry followed reviewed commit `e2fc350`. `npm run test:built` passed 48/48 and restored all 12 generated files; `git diff --exit-code` confirmed no output changes. Webflow MCP `get_site` and `list_pages` confirmed no custom domains, the probe remains draft, four other pages remain drafts, and the last publication is still `2026-10-14T23:30:40.323Z`. CUA's documented Chrome surface provides screenshots and accessibility/input controls, but no request log, DOM or viewport access. The Node repl's Playwright import failed with an export syntax error, so it provided no usable browser/CDP control. No browser tabs were opened and no Webflow changes were made.

**Still open:** Automatic failed-candidate-script request capture; Full-width and Right short-height containment; candidate reduced-motion/custom-animation; a usable candidate Preview or isolated staging route; human screen-reader/device checks; physical-display DPR 2×/3×; and cloned upgrade/rollback. The same isolated-route blocker was already reported to Boss; no duplicate blocker report was sent.

**Needs Michael:** Complete the isolated-route or Preview setup in Brief 14. Arrange human/device checks and a cloned release candidate when ready.

**Next useful action:** Resume candidate browser checks once Brief 14 provides a supported isolated staging or Preview route. Keep product naming, class migration and Lite publication deferred.

**Handoff:** The probe is empty and draft; four other drafts remain untouched. No publication occurred. Do not publish the whole site to reach the probe, refresh the Navbar Light test page, or touch SB Test Four.

## 15 October 2026 — Brief #13 candidate access and cleanup — Codex (night shift)

**Changed (R-037, R-095, R-155):** The backed-up Clean Trial probe temporarily held a labelled source-derived candidate in its draft Designer page. Candidate code, elements and eight styles were removed after Preview stalled. Nothing was published or shared.

**Outputs:** Updated the [Brief 13 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and R-037/R-095/R-155 evidence. New work remains pending Michael's acceptance.

**Checked how:** Started Boss and reviewed Brief 12's latest records before touching the probe. Read-only Webflow data confirmed the probe was empty/draft and four other pages were drafts. Page-branch creation returned `not_enterprise_plan_site`; no retry or whole-site publish was attempted. In Chrome Preview, waited about 30 seconds, reloaded and waited about 30 seconds, then opened a fresh Designer tab and waited about 30 seconds; Preview remained at “Compiling custom code…” or returned to Design without a Preview runtime. Readback after cleanup showed empty page head/footer code and Body only; the eight temporary styles were removed by their unique names. No publication occurred. All tabs opened for this work were closed.

**Still open:** Automatic failed-script Network request capture, Full-width and Right short-height scrolling, reduced-motion/custom-animation, and a usable Preview remain open. Earlier native Details and closed-panel link/focus checks are already recorded in Brief 12 and were not repeated. Human screen-reader/device, physical-display DPR 2×/3× and cloned upgrade/rollback still need people, hardware or a clone.

**Needs Michael:** Provide an isolated test site on its Webflow subdomain with a confirmed backup and a working Preview or supported page-level publish route. Arrange the human/device and clone prerequisites when ready.

**Next useful action:** Resume candidate browser checks on the isolated route; keep naming, class migration and Lite publication deferred.

**Handoff:** The existing probe is restored to an empty draft, the site was not published, and four unrelated drafts remain untouched. Boss already received one blocker report for the missing isolated route. Keep the remaining checks open and do not refresh the Navbar Light test page or touch SB Test Four.

Stage sources: Michael’s Q-01–Q-07 answers in this session, 14 October 2026;
DECISIONS D-010–D-016; webflow/v0.2.6-release-verification.md; brief #11 local test record below and implementation `2eda9f3`. No new boss question.

## 15 October 2026 — Brief #13 remaining Lite checks — Codex (night shift)

**Changed (R-037, R-095, R-155):** No source, Webflow page, asset, Library item, publication or release changed. The fresh-build check passed; candidate browser checks remain open because no isolated route is available.

**Outputs:** Added the current build, Chrome DevTools control and Webflow readback to the [Brief 13 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and R-037/R-095/R-155 evidence. This work remains for Michael's review.

**Checked how:** At `f2dbd5e`, `git --no-optional-locks status` was clean on `main`; one documentation commit followed the previously reviewed `8e7f5bd`. `npm run test:built` passed 48/48 and restored all 12 generated files; `git diff --exit-code` confirmed no generated output changed. Read-only Webflow data confirms the Clean Trial site has no custom domains, the probe is Body-only/draft, and four other pages remain drafts. The current Smashburger Home tree contains a linked `SmashBurger CDN` instance with a primary-navigation override. Visible Chrome DevTools exposes Network, viewport and reduced-motion controls. The owned tab was closed. No Webflow mutation or publication occurred.

**Still open:** Automatic failed-candidate-script request capture, candidate Details/link/focus behavior, candidate full-width/right narrow-height scrolling, candidate reduced-motion/custom-animation, usable Preview, human screen-reader/device checks, physical-display DPR 2×/3×, and cloned upgrade/rollback. The earlier page-only staging publish failed with `Bad Request: Invalid parameter: pageId`; a whole-site publish would include four unrelated draft pages. No source defect was demonstrated.

**Needs Michael:** Enable single-page staging publish for the backed-up probe or provide a usable isolated Preview route. Arrange human/device checks and a cloned release candidate when available.

**Next useful action:** Resume the source-derived candidate checks on the isolated Clean Trial probe when a supported staging or Preview route is available. Keep product naming, class migration and Lite publication deferred.

**Handoff:** No temporary staging content remains. The Clean Trial probe is empty and draft; its last staging publication is still `2026-10-14T23:30:40.323Z`. Boss received one blocker report for the missing isolated route. Chrome DevTools has Network, responsive viewport and reduced-motion controls, so those checks can continue as soon as candidate content can be rendered safely.

## 15 October 2026 — Brief #12 remaining-check access review — Codex (night shift)

**Changed (R-095, R-155):** No source, Webflow page, asset, Library item, publication or release changed. Previously completed candidate checks were not repeated.

**Outputs:** Recorded the remaining browser and Preview limits in the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and R-095/R-155 evidence. All new work remains pending Michael's acceptance.

**Checked how:** Boss resumed the existing run and confirmed Brief 12 is taken. `git --no-optional-locks status` was clean at start on `main` `8e7f5bd`; history since the prior reviewed commit contains only the documented inspection-limit entry. Read the project-docs v0.4 skill and the current project record. The available Chrome control documentation exposes screenshots and accessibility/input interaction, but not page DOM evaluation, responsive viewport control, console logs or failed-request capture in this session. The prior Webflow Designer attempt on the probe exposed no usable canvas or Preview control. No new Chrome tab was opened, and no Webflow mutation or publication occurred.

**Still open:** Failed-script request capture, Preview compilation, candidate reduced-motion/custom-animation, full-width/right narrow-height scrolling, human screen-reader/device checks, physical-display DPR 2×/3×, and cloned upgrade/rollback. No source defect was demonstrated in this session.

**Needs Michael:** Provide a usable Preview route and a browser inspection surface with DOM, viewport, console and request access. Human/device checks and a cloned release candidate are also needed for the remaining physical accessibility and rollback checks.

**Next useful action:** Resume the missing checks on the isolated Clean Trial probe when the inspection surfaces are available. Keep product naming, class migration and Lite publication deferred.

**Handoff:** The Clean Trial probe was already read back as an empty draft after cleanup. Read the latest Brief 12 section in the test record before any further staging work; do not publish the entire site while unrelated draft pages remain.

## 15 October 2026 — Brief #12 fixture and inspection-route readback — Codex (night shift)

**Changed (R-095, R-155):** No source, Webflow content, asset, Library item, publication or release changed. I did not repeat the previously completed candidate checks.

**Outputs:** Added the current fixture state and browser inspection limits to the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and R-155 evidence.

**Checked how:** Started Boss and confirmed brief #12 is taken. Checked the worktree and history from the prior reviewed baseline; current `main` is `f6df7ff`, with only the recorded Preview follow-up since `8621f3d`. Read-only Webflow MCP confirms the backed-up Clean Trial probe is still `draft: true`, the site has no custom domains, and the last staging publication remains `2026-10-14T23:30:40.323Z`; four other pages remain drafts. The current browser API offers screenshots, accessibility state and input, without DOM evaluation, viewport, console or request inspection. No Chrome tab was opened, and no Webflow change was made.

**Still open:** Candidate Preview remains unavailable. Automatic failed-script request capture, candidate reduced-motion/custom-animation, full-width/right narrow-height scrolling, human screen-reader/device checks, physical-display DPR 2×/3× and cloned upgrade/rollback remain open. Earlier native fallback keyboard behavior and the source-candidate responsive/layout checks remain recorded; they were not repeated. All new work remains pending Michael's acceptance.

**Needs Michael:** Arrange a Chrome inspection route with DOM, console and request access, plus a usable Preview route and human/device session when available.

**Next useful action:** Resume only the remaining candidate checks on the isolated route after those inspection controls are available. Keep naming, class migration and Lite publication deferred.

**Handoff:** The Clean Trial probe remains an empty draft. Read the latest Brief #12 entry in the test record first; do not publish the whole site while unrelated drafts remain.

## 15 October 2026 — Brief #12 continuation and Preview availability check — Codex (night shift)

**Changed (R-095, R-155):** No maintained source, Webflow content, asset, Library item, publication or release changed. The earlier candidate verification is complete as recorded below; no finished check was repeated.

**Outputs:** Added this session's Preview availability result to the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and R-155 evidence.

**Checked how:** Started Boss for brief #12 and confirmed it was taken. Checked `git --no-optional-locks status`, history and current `main` at `8621f3d`; the worktree was clean. A fresh Chrome tab loaded the authorised published Clean Trial comparison. A separate new Designer tab opened the Clean Trial probe URL but exposed only an empty embedded Designer surface, with no usable canvas or Preview controls. Boss was notified once that Preview could not be checked. Both tabs opened for this session were closed. No Webflow mutation or publication occurred.

**Still open:** Preview compilation remains unresolved; earlier records contain `CompilationError: Invalid source code`. Candidate failed-script request capture, motion/custom-animation integration, narrow-height scrolling in full-width/right layouts, human screen-reader and physical-device checks, physical-display DPR 2×/3×, and cloned upgrade/rollback remain open. All new work is pending Michael's acceptance.

**Needs Michael:** Review local commits. Arrange a working Preview/browser-inspection route, cloned release candidate, and human/device screen-reader and physical-display checks when available.

**Next useful action:** Resolve Preview access/compiler behavior and perform the still-open candidate checks on an isolated route; keep naming, class migration and Lite publication deferred.

**Handoff:** No temporary Webflow content remains. Current published comparison remained readable, and the Designer route did not expose Preview. See the latest continuation in the test record.

## 15 October 2026 — Brief #12 source-derived staging candidate checks — Codex (night shift)

**Changed (R-095, R-155):** Added candidate layout, interaction, and icon measurements. No maintained source, released asset, Library resource, or ordinary consumer changed. A labelled temporary candidate was placed on the backed-up Clean Trial probe, published only to its Webflow staging subdomain, then removed and cleanup published.

**Outputs:** Updated the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and R-155 evidence. Designer readback after cleanup shows the probe is Body-only, has blank head/footer code, and is a draft again. The three unrelated audit drafts were left untouched. No Library share/update occurred.

**Checked how:** Verified `main` at `9adf264`; only the three project-record files named here were changed. Rendered Chrome on the temporary candidate checked five layouts at ten widths, zero horizontal overflow, the 991/992px collapse boundary, narrow-height scrolling in three layouts, backdrop/outside/link closing, keyboard focus order and restoration, and 24 icon line/gap/thickness combinations. Browser-reported DPR was 1 during CSS viewport emulation; console warnings/errors were empty. Test fixture and class-free rebuild details, publish timestamps, temporary element IDs and cleanup readback are in the test record. `npm run test:built` passed 48/48 and restored all 12 generated files; explicit generated-file diff and `git diff --check` passed. This is candidate staging runtime evidence, distinct from Designer source readback, Preview, and the published v0.2.6 comparison.

**Still open:** Captured automatic failed-script request, Preview compilation, reduced-motion/custom-animation integration in this staging candidate, narrow-height scrolling in full-width/right layouts, human screen-reader and physical-device checks, physical-display DPR 2×/3×, and cloned upgrade/rollback. The candidate contained no animation library. The earlier native fallback test and build check were not repeated. All new work is pending Michael’s acceptance.

**Needs Michael:** Review local commits. Arrange a suitable human/device screen-reader session, physical-display icon checks, and cloned release candidate when available.

**Next useful action:** Resolve Preview compilation and continue the remaining candidate checks on an isolated route; keep naming, class migration, and Lite publication deferred under current decisions.

**Handoff:** Temporary Webflow code and content have been removed, staging cleanup was published at `2026-10-15T23:30:40.323Z`, the route returns 404, the owned Chrome tab is closed, and no custom domain or Library share was involved. Read the newest Brief #12 section in the test record before continuing.

## 15 October 2026 — Brief #12 browser keyboard and access check — Codex (night shift)

**Changed (R-095, R-155):** No source, Webflow content, Library item, asset, publication or release changed. A fresh Chrome tab confirmed Space opens and Escape closes the nested menu on the published Clean Trial comparison, with focus returning to “More”.

**Outputs:** Added the staging observation and actual browser-control limits to the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and roadmap evidence. Closed the new Chrome tab; tabs from earlier sessions were left untouched.

**Checked how:** Verified `main` at `439dec2`; the worktree was clean before this entry. On the published `/unlink-fallback-isolation` comparison, CUA browser keyboard input focused “More”, opened it with Space, and closed it with Escape. Accessibility readback showed focus returned to “More”. Webflow MCP site readback reports no custom domains and last publication at `2026-10-14T22:18:18.210Z`. This is published v0.2.6 behavior, not candidate behavior. CUA exposes accessibility and screenshots but not viewport, console or request inspection in this session.

**Still open:** Candidate responsive layout and outer-menu behavior, captured automatic missing-script request, Preview compilation, reduced-motion/custom-animation rendering, broader icon geometry, physical-device and human screen-reader checks, physical-display DPR 2×/3×, and cloned upgrade/rollback. Three unrelated audit drafts remain, so do not publish the whole Clean Trial site to reach the empty probe. No candidate source defect was demonstrated.

**Needs Michael:** Review local commits. Arrange browser viewport/console/request inspection and an isolated route for Preview or staging candidate verification. Arrange a human/device screen-reader session and cloned release candidate when available.

**Next useful action:** Continue the candidate checks once the browser inspection controls and isolated Preview/publish route are available; do not repeat the completed fresh-build or fallback cleanup checks.

**Handoff:** For the next session, read this entry and the last section of the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md). The local tree is clean at `3dc49d6`; no temporary Webflow content remains. Start with candidate verification only when Chrome viewport and request/console inspection and an isolated staging or Preview route are usable. Do not publish the whole Clean Trial site while its three unrelated audit drafts remain.

## 15 October 2026 — Brief #12 fresh responsive and console check — Codex (night shift)

**Changed (R-095, R-155):** No source, Webflow page, Library item, asset, publication or release changed. A fresh Chrome inspection confirmed the published Clean Trial comparison has no horizontal overflow at ten widths from 320px to 2,060px.

**Outputs:** Added current rendered measurements and the now-available Chrome controls to the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and roadmap evidence. Closed the new Chrome tab and reset the temporary viewport.

**Checked how:** Verified `main` at `9adf264`; the worktree was clean. Opened a new Chrome tab on the published `/unlink-fallback-isolation` page. At widths 320, 393, 479, 480, 767, 768, 991, 992, 1,280 and 2,060 CSS px, document overflow was zero; the dropdown trigger was visible through 991px and hidden from 992px. Chrome reported DPR 1 and `prefers-reduced-motion: reduce` false. At 320×568, the open panel measured 304×496px with 585px content and internal vertical scrolling. Outer Escape closed it and restored focus to its trigger. Console warning/error readback was empty. This is published v0.2.6 comparison evidence, not the unreleased candidate; width emulation is not physical-display evidence.

**Still open:** Candidate rendered geometry across all five layouts and actual collapse boundaries; captured automatic failed-script request; Preview compilation; reduced-motion/custom-animation integration on the candidate; remaining visual icon geometry; human screen-reader and physical-device checks; physical-display DPR 2×/3×; and cloned upgrade/rollback. The test record already documents candidate native fallback testing and cleanup; that result is inconclusive for an actual failed candidate script request. Four unrelated Clean Trial draft pages remain, so do not publish the whole site to expose the empty probe.

**Needs Michael:** Review local commits. Arrange a human screen-reader/device session, physical-display icon checks and a cloned release candidate when available.

**Next useful action:** Continue candidate layout and runtime checks when a route can be tested without publishing unrelated drafts; use Chrome viewport and console controls now available in this session.

**Handoff:** No temporary Webflow content remains and the local worktree was clean before this entry. Read the latest Brief #12 test-record section first. Chrome viewport emulation and per-tab console logs are available through the browser connector; Network request capture is still unavailable. Do not touch SB Test Four or refresh Navbar Light.

## 15 October 2026 — Brief #12 Clean Trial state readback — Codex (night shift)

**Changed (R-095, R-155):** No code, Webflow content, Library item, asset, publication or release changed. Current readback confirms the temporary probe remains an empty draft and the Clean Trial site still has no custom domain.

**Outputs:** Added the current fixture state and remaining inspection limits to the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and roadmap evidence. Closed the fresh Chrome tab opened for inspection.

**Checked how:** Verified `main` at `d14693d`; the worktree was clean before this entry. Read Clean Trial site `6ac8c9f18e63674e4f34f88a` and its six pages through Webflow MCP. The probe `6acfd482072d7417c8ae9149` is `draft: true`; four pages are drafts, and the site reports `customDomains: []` with last publication at `2026-10-14T22:18:18.210Z`. A fresh staging tab displayed the published navigation. The available browser surface still exposes no viewport override, console log or request capture. No publish or fixture mutation was made.

**Still open:** Candidate responsive and outer-panel behavior, automatic missing-script request capture, Preview compilation, reduced-motion/custom-animation rendering, broader icon geometry, human screen-reader and physical-device checks, physical-display DPR 2×/3×, and cloned upgrade/rollback. The previous candidate failure and build checks were not repeated. Four draft pages make a full-site publish inappropriate for reaching the empty probe.

**Needs Michael:** Review local commits. Arrange a Chrome inspection surface with viewport and request/console access, a usable Preview route, a human/device screen-reader session and a cloned release candidate when available.

**Next useful action:** Continue candidate-specific checks when those inspection controls and a route that does not publish the four unrelated drafts are available. Keep the probe draft-only meanwhile.

## 15 October 2026 — Brief #12 linked staging interaction check — Codex (night shift)

**Changed (R-095, R-155):** No source or Webflow content changed. A fresh browser tab rendered the linked navigation on Smashburger's published staging home. Pointer opened the nested “More” menu; Escape closed it and returned focus to its button.

**Outputs:** Added the rendered result and limits to the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and roadmap evidence. Closed the tab opened for this check.

**Checked how:** At baseline `0117237`, opened a new Chrome tab at `https://smashburger-4b8f18.webflow.io/`. The screenshot showed the full-width desktop navigation. Accessibility readback showed the nested links after a pointer click on “More”; after Escape the control was collapsed and focused. This is published staging behavior on the linked consumer, not Lite-candidate behavior. No viewport, console or request inspection was available. Closed the new tab and left earlier-session tabs untouched.

**Still open:** Candidate viewport and outer-menu checks, automatic missing-script request capture, Preview compilation, reduced-motion/custom-animation on the current Webflow consumer, broader icon geometry, human screen-reader/device checks, physical-display DPR 2×/3× and cloned upgrade/rollback. No source, Library, release asset, staging content, sharing or publication changed; new candidate work remains pending Michael’s acceptance.

**Needs Michael:** Review local commits. Arrange Chrome viewport/request inspection, a working Preview route, a human/device screen-reader session and a cloned release candidate when available.

**Next useful action:** Complete the remaining candidate-specific checks with a Chrome surface that supports viewport and request inspection; keep the Clean Trial probe draft-only unless an isolated publishable route becomes available.

## 15 October 2026 — Brief #12 staging readback — Codex (night shift)

**Changed (R-095, R-155):** No source, Webflow, Library, release asset or staging content changed. A fresh browser tab reached the published Clean Trial comparison page and showed its expected navigation in the accessibility tree.

**Outputs:** Added this observation and its limits to the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and roadmap evidence. Closed the tab opened for this check.

**Checked how:** Read the project record and verified `main` at `8792a5e`; the only commit since the last reviewed baseline was the recorded browser-surface check. Opened a fresh Chrome tab at the published Clean Trial comparison URL. Its accessibility tree showed the full navigation and nested “More” control. This is a read-only published v0.2.6 check, not candidate evidence. The available browser API exposed no viewport, console or network-request controls. Closed the new tab; left earlier-session tabs untouched.

**Still open:** Candidate responsive layout and outer-menu behavior, browser-captured missing-script request, Preview compilation, reduced-motion and custom-animation integration, broader icon geometry, physical-device and human screen-reader checks, physical-display DPR 2×/3×, and cloned upgrade/rollback. New source fixes and evidence remain pending Michael’s acceptance.

**Needs Michael:** Review the local commits. Arrange a Chrome inspection surface with viewport and request/console access, plus a usable Preview route, human/device session and cloned release candidate when available.

**Next useful action:** Run the candidate layout and interaction checks on the backed-up Clean Trial staging fixture using the required Chrome inspection controls; keep its current draft and cleanup state intact.

## 14 October 2026 — Brief #12 browser-surface check — Codex (night shift)

**Changed (R-095, R-155):** No code, Webflow content, Library item, release asset or publication changed. I confirmed the published nested “More” menu still closes on Escape and returns focus to its trigger.

**Outputs:** Added the observation and the browser inspection limits to the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and roadmap evidence. The fresh Chrome tab was closed.

**Checked how:** Read the project record and checked `main` at `e888525`; the only commit after the previous reviewed baseline was the recorded fresh-build entry. Opened a fresh Chrome tab on the published Clean Trial comparison page, clicked “More”, and pressed Escape. The accessibility tree showed the disclosure closed and focus on its button. This is published v0.2.6 evidence only. The available browser surface did not provide viewport emulation, console logs or DevTools request capture.

**Still open:** Candidate responsive geometry and outer-menu behavior, automatic failed-script request capture, Preview compilation, motion and custom-animation checks, broader icon geometry, physical-device and human screen-reader checks, physical-display DPR 2×/3×, and cloned upgrade/rollback. No new defect was demonstrated.

**Needs Michael:** Review local commits and arrange a Preview route plus human/device and cloned-release environments when convenient. New candidate fixes and checks remain pending acceptance.

**Next useful action:** With a usable Chrome inspection surface, finish candidate layout, motion, icon and runtime checks on the authorised staging fixture, preserving its draft and cleanup state.

## 14 October 2026 — Brief #12 fresh-build verification — Codex (night shift)

**Changed (R-095, R-155):** No source, release, Library or Webflow content changed. Freshly built delivery checks passed across maintained source and generated forms.

**Outputs:** Updated the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and R-095/R-155 evidence. No staging publication, Library sharing or release occurred.

**Checked how:** At `fb78438`, `npm run test:built` passed 48/48 across source, dist, minified and Embed deliveries. The runner restored all 12 generated files; `git diff --exit-code` over the generated paths, `git diff --check` and `git status` confirmed no generated or unrelated changes. This verifies freshly built local candidate bytes, not immutable v0.2.6 runtime behavior or Webflow Preview.

**Still open:** The browser did not expose the automatic failed-script request entry. Webflow Preview still reports its earlier compilation error. Human screen-reader/physical-device checks, physical-display DPR 2×/3× icon checks and cloned upgrade/rollback need environments or release prerequisites not available here. No new defect was demonstrated.

**Needs Michael:** Review the local commits when convenient. Candidate fixes and checks remain pending acceptance.

**Next useful action:** Arrange a working Preview route and suitable human/device and cloned-release environments, then complete those checks before deciding on a new release.

## 14 October 2026 — Brief #12 fresh-build and browser follow-up — Codex (night shift)

**Changed (R-095, R-155):** No source, release, Library or Webflow content changed. I reran the fresh-build gate. Maintained source tests passed, but 14 checks against the committed v0.2.6 deliveries failed where those immutable files lack newer local fixes. I restored all generated files to the pre-run `959485b` bytes.

**Outputs:** Updated the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and R-095/R-155 evidence. No publication, sharing or release occurred.

**Checked how:** `npm run test:built` completed with 34 passes and 14 failures across source, dist, minified and Embed. The failures are the existing breakpoint timer/focus and missing-CSS fixes intentionally absent from immutable v0.2.6 deliveries; this run does not establish a passing delivery gate. The runner had been interrupted on an earlier invocation, so I restored the 12 generated files from the clean starting commit and verified `git diff --exit-code HEAD --` across every generated path. A fresh Chrome tab showed the published Clean Trial desktop navigation tree; this adds no candidate evidence and I closed the tab. No Webflow content changed. The requested project-docs skill v0.3+ file was not present in the declared `.codex/skills` or `.agents/skills` roots, so I followed the repository instructions directly.

**Still open:** Candidate responsive and browser interaction checks remain blocked pending an isolated staging route; Boss still shows Michael’s earlier whole-site publication question unanswered. Preview compilation, motion/custom-animation, icon geometry, human screen-reader/device checks and cloned upgrade/rollback remain open. Earlier fallback behavior is verified on staging, but the automatic missing-script request was not captured in DevTools.

**Needs Michael:** Review the local work; provide an isolated, backed-up staging route when available. Do not publish Clean Trial sitewide while unrelated draft pages are pending.

**Next useful action:** Run candidate rendering and behavior checks on an isolated staging route; then rerun `npm run test:built` after the exact committed delivery expectations have been deliberately resolved.

## 14 October 2026 — Brief #12 responsive and interaction follow-up — Codex (night shift)

**Changed (R-095, R-155):** No code, Webflow content, Library item or release changed. Rendered checks on the published Clean Trial comparison now cover responsive widths and outer-menu interactions.

**Outputs:** Updated the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and R-095/R-155 evidence. No staging publication or Library sharing occurred.

**Checked how:** Verified `main` at `eb7df0f`, with the tree clean before work. In a fresh Chrome tab on the published `Unlink Fallback Isolation` page, viewport widths 2,048, 1,280, 992, 991, 820, 768, 767, 480, 393 and 320px at 900px height had zero horizontal document overflow. The outer trigger was hidden at desktop and visible at the collapse widths. At 320×568, the open 304×496px panel fit the viewport and its 585px content scrolled internally. Real browser keyboard input passed Tab/Shift-Tab, Space, Enter, nested Escape and outer Escape with focus restoration. Pointer open and outside click closed the panel; selecting Home navigated and left it closed. Browser-reported DPR was 1, and the console had no warnings or errors. These are published v0.2.6 results, not candidate-Lite, physical-display or screen-reader evidence. The temporary viewport was reset and the tab closed. Webflow readback confirms Clean Trial has no custom domains and its last publication remains the earlier 22:18:18 cleanup; no Webflow change was made.

**Still open:** Source-candidate rendering and exact missing-script request capture; reduced-motion/custom-animation and icon visuals; Preview compilation; human screen-reader/device checks; cloned upgrade/rollback. The available published fixture uses v0.2.6. The candidate probe is an empty draft and prior page-only publication failed; full-site publication risks unrelated pending pages.

**Needs Michael:** Review and push the local commits when convenient. All newer fixes and verification remain pending acceptance.

**Next useful action:** Provide an isolated staging route or equivalent approved preview for the local source candidate, then run the same responsive and interaction checks against it.

**Handoff:** Continue from this entry and the final Brief #12 section in the local test record. The fresh Chrome tab is closed; no Webflow content changed. Do not publish the Clean Trial site as a whole to reach the candidate probe: four unrelated draft pages were pending in the last readback. Use a separately isolated, backed-up staging fixture or wait for Michael's answer to the scope question in Boss.

## 14 October 2026 — Brief #12 fresh-build and rendered follow-up — Codex (night shift)

**Changed (R-095, R-155):** No source, generated release, Library or Webflow content changed. A fresh source build passed all 48 checks and restored its generated outputs. On the existing published Clean Trial page, the nested “More” menu closed with Escape and returned focus to its trigger.

**Outputs:** Extended the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and roadmap evidence. No staging publication, Library sharing or release occurred.

**Checked how:** `npm run test:built` passed 48/48 across source, dist, minified and Embed; all 12 generated files were restored. `git diff --check` passed and the working tree was clean after the build. In a fresh Chrome tab, a real click opened the published nested menu and Escape closed it with focus on “More”. Rendered readback at 2,044 × 1,131 CSS px reported DPR 1, zero document overflow, a full-width panel container and the outer collapsed trigger hidden at this wide size. Chrome's captured console had no warnings or errors. These are published v0.2.6 observations, not candidate-Lite geometry or physical-display DPR evidence.

**Still open:** Source-candidate responsive geometry and outer-panel close behavior; browser-captured missing-script request; Preview compilation; reduced-motion and custom-animation integration; icon geometry across line counts/thicknesses/gaps and DPR; genuine screen-reader/device checks; and cloned upgrade/rollback.

**Needs Michael:** Review the local commits when convenient. New local fixes and this evidence remain pending acceptance.

**Next useful action:** Use a Chrome session with responsive viewport controls to check the source-derived candidate across collapse boundaries and layouts, then test its backdrop, outside and link closing. Keep new work on authorised test/staging fixtures.

## 14 October 2026 — Brief #12 browser-control follow-up — Codex (night shift)

**Changed (R-095, R-155):** No code, Webflow source, Library resource, staging page or release file changed. This session did not repeat checks already recorded in the Brief #12 test history.

**Outputs:** None. The published Clean Trial comparison page rendered in a fresh Chrome tab; the tab was closed after inspection.

**Checked how:** Confirmed `main` at `a467f90` and a clean tree before this entry. Chrome's computer-use surface returned the published page accessibility tree and a 2,044 × 1,131 screenshot of the full desktop navigation. It exposed no responsive viewport emulation or page-script inspection; the DevTools shortcut exposed neither. This is published v0.2.6 visual evidence only, not a Lite candidate check. A temporary built-in HTTP server for the local demo was denied permission to bind localhost, so no local candidate render was attempted through `file://` or another route. The staging tab was closed and absent from the browser tab list afterward.

**Still open:** Candidate responsive layout, panel scrolling/containment and outer backdrop/outside/link closing need a browser session with viewport controls and page inspection. This environment also needs to allow a localhost server before the maintained local demo can be rendered. Prior records cover local candidate resize/focus and icon emulation; they do not provide physical-display or human screen-reader evidence. Preview compilation and cloned upgrade/rollback also remain unresolved.

**Needs Michael:** Review and push local commits when convenient. No new acceptance was recorded.

**Next useful action:** Continue the source-candidate render matrix in a Chrome session that exposes responsive viewport and page inspection controls, or with an approved local HTTP preview available. Leave the Clean Trial fixture unchanged until then.

**Handoff:** Read this entry, then the Brief #12 test record and R-095/R-155. Clean Trial remains the published v0.2.6 comparison; no staging or Library mutation was made in this session.

## 14 October 2026 — Brief #12 missing-script fallback and cleanup — Codex (night shift)

**Changed (R-095, R-155):** The backed-up Clean Trial probe temporarily hosted a clearly labelled Details/Summary fallback with maintained candidate CSS and a deliberately missing JavaScript URL. The native menu opened and closed; no component JavaScript ran. The page, page code, temporary styles and published route have been restored or removed.

**Outputs:** Updated the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and R-095/R-155 evidence. No source, released asset, Library resource or consumer changed.

**Checked how:** On `SB Unlink Clean Trial` page `SB Lite Preview Compiler Probe` (`6acfd482072d7417c8ae9149`), Designer readback confirmed the probe structure and `/__brief12-candidate-js-unavailable__.js` footer URL. The temporary WHTML root was `410f6f05-7d04-7d56-96c8-3cb570dca2cd`; its temporary style classes were `brief12-js-failure`, `brief12-nav`, `brief12-inner`, `brief12-menu` and `brief12-panel`. The published staging page showed the labelled Details trigger. Space opened it, Tab reached the first link, Shift-Tab returned to the trigger, and Enter closed it. Direct HTTPS navigation to the missing script path returned Webflow's 404 page. Chrome's current control did not expose the automatic page-load request in DevTools, so that request entry is not claimed. Cleanup readback showed Body only, blank head/footer code, `draft: true` and no `brief12-*` style classes. Clean Trial was published to its Webflow subdomain only at 22:14:49, 22:15:56 and 22:18:18 UTC; `customDomains` remained empty, and the temporary route returned 404 after the final cleanup publish. The reused Chrome tab is restored to `Unlink Fallback Isolation`.

**Still open:** Source-candidate responsive geometry and outer-menu closing; reduced-motion/custom-animation; icon visuals at DPR 1×/2×/3×; actual screen-reader/device checks; Webflow Preview; and cloned upgrade/rollback. No new defect was demonstrated.

**Needs Michael:** Review and push local commits when convenient. New source fixes and these verification results remain pending acceptance.

**Next useful action:** With DevTools request/console access available, confirm the automatic failed-script entry, then continue candidate responsive and close-behaviour checks. Keep the local fixes unreleased and the product name decision open.

## 14 October 2026 — Brief #12 candidate JavaScript request attempt — Codex (night shift)

**Changed (R-095, R-155):** No source or release files changed. A clearly labelled temporary candidate was added to the backed-up Clean Trial probe with maintained candidate CSS and a one-off missing JavaScript URL. The probe has been restored to an empty draft and its temporary staging route removed.

**Outputs:** Updated the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and R-095/R-155 evidence. No Library share, consumer update or release occurred.

**Checked how:** `npm run test:built` passed 48/48; its runner restored all 12 generated files, and an explicit generated-file diff and `git diff --check` passed. Webflow readback showed the labelled Details/Summary and sibling links, maintained candidate CSS and a footer script URL at `/__brief12-candidate-js-unavailable__.js`. Published to the Clean Trial Webflow subdomain only; Chrome rendered the temporary label and native trigger. Chrome input timed out before I could open the trigger or inspect its network request/console, so the failed request and fallback behavior are not claimed. Cleanup readback showed zero matches for the temporary root, blank head/footer code and `draft: true`; cleanup publication completed and Chrome confirmed the temporary route returns 404. Final site readback has no custom domains.

**Still open:** Confirm the candidate script request failure and native Details behavior in Chrome; source-candidate responsive layouts and close behavior; reduced-motion/custom-animation; icon visuals at DPR 1×/2×/3×; human screen-reader/device checks; Webflow Preview; and cloned upgrade/rollback. No new defect was demonstrated.

**Needs Michael:** Review newer local changes when convenient. The local tracking ref `origin/main` still points to `07de2eb`; this run did not access or change a remote.

**Next useful action:** Use the Clean Trial probe with DevTools open to observe the failed candidate script request and operate the native trigger, then continue the source-candidate viewport checks.

## 14 October 2026 — Brief #12 fresh-build and staging follow-up — Codex (night shift)

**Changed (R-095, R-155):** No source, release, Library or Webflow content changed. The generated-delivery checks pass, and the published Clean Trial page still supports Escape closing its nested “More” disclosure with focus returned to the trigger.

**Outputs:** Added the check details to the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and updated R-095/R-155 evidence in [ROADMAP.md](ROADMAP.md).

**Checked how:** `npm run test:built` passed 48/48 across source, dist, minified and Embed. The runner restored all 12 generated files. Chrome rendered the published `Unlink Fallback Isolation` page at a wide desktop view; a real browser click opened “More”, and Escape closed it with focus on the same button. This is a published v0.2.6 nested-disclosure check, not source-candidate geometry or outer-menu close evidence. Webflow readback confirms the candidate probe is Body-only and still `draft: true`; Clean Trial reports `customDomains: []` and its prior publication timestamp. No Webflow changes or publication occurred. The temporary Chrome tab was closed.

**Still open:** Source-candidate layouts and collapse boundaries, candidate JavaScript network failure, backdrop/outside/link closing, reduced-motion and custom-animation integration, rendered icon geometry at DPR 1×/2×/3×, and human screen-reader/physical-device checks. Webflow Preview remains blocked by its recorded compilation error. No cloned upgrade/rollback fixture or suitable human screen-reader session is available.

**Needs Michael:** Review and push local commits when convenient. The newer source fixes and verification remain pending acceptance; the product name still blocks the later class migration and Lite publication.

**Next useful action:** Use Chrome DevTools on the backed-up Clean Trial fixture to block a candidate script request and set responsive viewport widths. Verify the panel and links at collapse boundaries, then test backdrop, outside and link closing. The current browser control allowed page rendering and input but did not expose DevTools viewport or request-blocking controls. Leave the probe and other fixtures untouched until the structural test setup is verified.

## 14 October 2026 — Brief #12 native fallback verification — Codex (night shift)

**Changed (R-095, R-155):** No source, release, Library or consumer files changed. The temporary no-JavaScript candidate now passes the native Details open/close check on the authorised staging site.

**Outputs:** [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md); temporary Webflow changes on `SB Unlink Clean Trial` page `SB Lite Preview Compiler Probe` were fully restored.

**Checked how:** With maintained candidate CSS retained and no candidate JavaScript in the fixture, rendered Chrome showed the labelled trigger and links. Space opened it and Enter closed it. With it open, Tab focused the first link and Shift-Tab returned to the trigger. A focused follow-up confirmed Tab after closing did not focus either navigation link; a refreshed accessibility tree then omitted the links. Designer readback confirmed the native `details`/`summary` trigger is a sibling of the navigation panel, matching the maintained CSS fallback selector. This did not simulate a failed candidate JavaScript network request, and no console capture was available.

The temporary WHTML roots were `6eeb3434-ba70-5330-f46d-b58985adb3b2` and `1fcfa9b3-8cbe-89a6-4a09-a5e120571f33`. Both were removed, page head/footer code restored to blank and the probe restored to `draft: true`. Final Designer readback showed Body only and blank code blocks. I published Clean Trial to its Webflow subdomain only for the check and cleanup. Final site readback shows `customDomains: []` and publication at `2026-10-14T21:53:10.007Z`; Chrome confirmed the temporary route returns 404. No Library sharing/update or consumer change occurred. The existing Clean Trial tab was returned to its starting page; no new browser tab was opened.

**Still open:** Source-candidate geometry across layouts and breakpoints, keyboard/pointer closing beyond native Details, reduced-motion/custom-animation integration, visual icon checks at DPR 1×/2×/3×, human screen-reader/device checks and cloned upgrade/rollback. Existing evidence for the published v0.2.6 Tablet fixture is recorded below and was not repeated.

**Needs Michael:** Review and push local commits. New source fixes remain unreleased and pending acceptance; naming still blocks the later class migration and Lite publication.

**Next useful action:** Test whether closed fallback links can receive Tab focus in a rendered candidate, then resume candidate responsive and close-behavior checks. Keep all changes on test fixtures and staging only.

## 14 October 2026 — Lite verification continuation — Codex (night shift)

**Changed (R-095, R-155):** No source or release files changed. I tested the
no-runtime candidate on the backed-up Clean Trial probe, then checked the
existing published Tablet-collapse fixture at responsive widths.

**Outputs:** [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Checked how:** `npm run test:built` passed 48/48 across source, freshly built
dist, minified and Embed deliveries. The runner restored all 12 generated
files; an explicit diff of those paths was empty. The published
`Unlink Fallback Isolation` page stayed within its viewport at 1,280, 992,
991, 820, 768, 767, 480, 479, 393 and 320 CSS px; document horizontal
overflow was zero at each width. At 393×852, the open panel was 377×543px and
contained; the browser reported DPR 1. Pointer open, Tab/Shift-Tab, Space,
Enter, nested Escape and outer Escape with focus return passed. This page has
the published v0.2.6 runtime; these checks do not verify the source candidate.

On `SB Unlink Clean Trial` page `SB Lite Preview Compiler Probe`
(`6acfd482072d7417c8ae9149`), I inserted a clearly labelled temporary WHTML
candidate (root element `9f478d5c-721e-a021-3bda-ca9a1ddf3574`), added
maintained source CSS and temporary fixture styles to page head code, and
temporarily changed the page from draft to publishable for staging. The
candidate omitted JavaScript. Designer readback showed native Details and
Summary structure, but published Chrome showed only the fixture label, brand
and test note; the trigger and navigation links were absent from the
accessibility tree, and Tab reached only the brand link. The fallback result
is therefore inconclusive. I removed that WHTML element, restored blank page
head/footer code, returned the probe to `draft: true`, and republished Clean
Trial to its Webflow subdomain. Readback showed Body only, no custom domains,
and the temporary route returned 404. The temporary publication was
21:32:28 UTC and cleanup publication was 21:33:35 UTC. No Library share,
consumer update, production-domain publication or release occurred.

**Still open:** Why the candidate trigger and links were absent in the
published render; the candidate no-runtime test; backdrop/outside/link close
on the candidate; other rendered layouts; reduced-motion/custom-animation
integration; icon visuals at physical DPR 2×/3×; human screen-reader/device
checks; and cloned upgrade/rollback. The backdrop click on the existing page
was denied by Chrome because the attempted target resolved to Instagram, so I
stopped that check. Candidate console output was not captured. The existing
fixture's console had no warnings or errors at its initial desktop read.

**Needs Michael:** Review and push the local commits. Product naming still
precedes the later class migration and Lite publication. Human screen-reader
and physical-device evidence needs a person using those devices.

**Next useful action:** Inspect the temporary probe render through supported
Designer and Chrome readback, then rerun the no-runtime case once the native
trigger is visible. Keep all new work pending Michael's acceptance.

## 14 October 2026 — Source and fixture readback; browser gate — Codex (night shift)

**Changed (R-095, R-155):** No source, Library, consumer or site content changed. Read-only Webflow MCP comparison covered the Library source, linked `/demo`, dedicated Smashburger staging Home, and the existing Clean Trial unlinked fixture.

**Outputs:** Additional evidence in the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and [ROADMAP.md](ROADMAP.md).

**Checked how:** Source, linked demo and dedicated staging instance each read back 60 component properties with matching settings; only nine icon asset IDs differed between source and destination. Asset readback confirmed matching icon names and sizes, with destination-local IDs shared by the linked demo and dedicated Home. The unlinked fixture read back 85 nodes, 27 navigation class variants, nine images, two Embeds, and its original Tablet-collapse and candidate attributes. These are Designer source/property reads, not Canvas, Preview or rendered-page checks. A new Chrome tab for the Smashburger staging origin was blocked by the browser's origin approval gate; the unused tab was closed. No alternate surface was used.

**Still open:** Chrome rendered checks across the Smashburger layouts and linked instance; candidate no-runtime fallback; Preview compilation; backdrop/outside/link closing; motion and custom-animation integration; physical DPR 2×/3×; human screen-reader/device checks; and cloned upgrade/rollback. The additional Chrome check could not proceed because of the origin approval gate.

**Needs Michael:** Review the local commits and resume the blocked Chrome staging checks when browser origin approval is available.

**Next useful action:** You: enable the Smashburger staging origin in Chrome's approval controls, then continue the rendered layout and close-behaviour checks. Keep the temporary candidate probe cleaned up and draft until its trigger renders correctly.

**Handoff:** Current branch `main`; no source or Webflow changes remain uncommitted. The existing Chrome denial is a real browser permission boundary; do not retry through another surface. Candidate probe is empty/draft and its staging route is 404. SB Test Four and Navbar Light remain untouched. New verification remains pending Michael's acceptance.

## 14 October 2026 — Brief #12 browser-session handoff — Codex (night shift)

**Changed (R-095, R-155):** No source, release, Library, Webflow or browser
content changed. This session confirmed the recorded verification state and
found that the available browser-control connection cannot attach to the
existing Clean Trial staging tabs: their IDs belong to another Chrome browser
session.

**Outputs:** No new test evidence. The previous candidate cleanup and local
build evidence remain recorded above and in the [test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Checked how:** `git --no-optional-locks status` was clean at `749cb8a` on
`main`; `git log 749cb8a..HEAD` was empty. The current Chrome inventory showed
the existing staging tabs, but browser control refused to bind to their
session. No new tab was opened and no alternate browser surface was used. The
earlier origin approval denial remains recorded in the test record.

**Still open:** Candidate no-runtime fallback, broader rendered layouts and
closing behavior, motion integration, icon appearance at higher display
density, human screen-reader/device checks, and cloned upgrade/rollback.
These remain open because the browser session/origin gate prevents the needed
rendered checks. No new defect was demonstrated, so no source fix or repeated
test was warranted.

**Needs Michael:** Restore a Chrome browser-control session that can access
the already-authorised SmashBurger staging origin, or approve that origin in
Chrome. Review the local commits; no push was made.

**Next useful action:** You: make the staging tab available to the browser
control session, then resume the uncompleted rendered checks without repeating
the already-recorded Tablet fixture checks.

**Handoff:** Resume from this entry and the final Brief #12 sections in the
[test record](webflow/lite-preparation-local-tests-2026-10-14.md). The prior
candidate is cleaned up and draft. Do not revisit the earlier passing
Tablet-collapse matrix, SB Test Four, or Navbar Light. New work remains pending
Michael's acceptance.

## 14 October 2026 — Rendered viewport resize and focus hardening — Codex

**Changed (R-095, R-155):** Added a maintained-source fix and regression test
for focus remaining inside desktop links while resizing into the collapsed
mobile layout. The breakpoint callback now distinguishes its initial call from
a `MediaQueryListEvent` and returns focus to the trigger before making the
panel inert/hidden. The opening/closing timer fix remains local and unreleased;
v0.2.6 release files were not changed.

**Outputs:** `src/navbar-light.js`, `tests/runtime-delivery.test.js`, R-095/R-155
notes and [rendered test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Checked how:** On the backed-up Clean Trial staging fixture, Chrome DevTools
responsive emulation at 800×852 CSS px used real Space input to open and close,
then resized to 1200×852 during each animation. After 700 ms, the timer-fix
candidate exposed all three desktop links in Chrome's accessibility tree and
Tab reached the first link in both directions. The unchanged v0.2.6 page
reproduced the race: desktop links were absent after the old timer. A second,
fresh source-derived temporary candidate passed a 1200→800 resize with focus on
a desktop link: focus returned to the trigger before the panel was hidden, and
the page had no console messages at that check. These are rendered-browser,
keyboard-event and accessibility-tree checks using emulated CSS viewport
resizing, not physical-device or human screen-reader evidence. `npm test` passed
85 tests (70 pass, 15 expected TODO demonstrations against unchanged v0.2.6
outputs); `npm run check` passed; `npm run test:built` passed 48/48 across
source and fresh deliveries. The build runner restored all 12 generated files,
confirmed by an empty diff for those paths.

The temporary candidate Embed was removed through Designer; readback showed
Body only and `isDraft: true`. Clean Trial was republished to its Webflow
subdomain only (`customDomains: []`); the temporary route returned 404. No
Library share/update or release was made. No other pages, SB Test Four,
Navbar Light, released files or consumers were changed.

**Still open:** Candidate JavaScript-asset failure, broader responsive staging
geometry, Webflow Preview (compiler error), genuine screen-reader/physical-device
checks, physical DPR 2×/3× evidence and cloned upgrade/rollback. Product naming,
class migration and Lite publication remain deferred.

**Needs Michael:** Review and push local commits; choose a product name before
the later class migration/Lite-publication gate.

**Next useful action:** Run candidate JavaScript-failure and responsive-layout
checks in the rendered staging fixture, retaining the same temporary-candidate
and cleanup controls.

**Handoff:** The candidate probe is empty/draft and its route is absent. Read the
new rendered-browser section of the local test record before resuming. Chrome
blocked a local `file://` candidate URL under its HTTP(S)-only security policy;
the same file-based check was not attempted through another browser surface.

## 14 October 2026 — Staging publication and Chrome verification — Codex

**Changed (R-095, R-155):** Published SB Unlink Clean Trial, Smashburger and
MWP Component Library to their Webflow staging subdomains only, under Michael's
explicit authority. No custom domains, Library share or candidate asset update
was made. No source or release file changed.

**Outputs:** Updated [local test record](webflow/lite-preparation-local-tests-2026-10-14.md)
and R-095/R-155 evidence in [ROADMAP.md](ROADMAP.md).

**Checked how:** Webflow MCP readback confirmed all three staging publications
and no custom domains. The Clean Trial site has six pages; its four audit/probe
pages remain `draft: true`, and the probe route returns 404. Chrome rendered
the Smashburger and MWP Component Library home pages and Clean Trial's published
Unlink Fallback Isolation page. On Smashburger, real browser Space closed and
Enter reopened the nested More disclosure while focus remained on its button.
The staging accessibility tree exposed the site navigation links. This is
rendered published-page and browser-keyboard evidence, not a screen-reader or
physical-device check. `npm run test:built` passed 44/44 and restored all 12
generated files; `git status` and generated-file diff checks were clean.

**Still open:** Candidate source runtime and asset-failure behavior on Webflow
Preview/staging; the fixed resize race on a rendered candidate; DPR 2×/3× and
physical-display icon evidence; human assistive-technology/device checks; and
cloned upgrade/rollback checks. Preview remains blocked by Webflow's
`CompilationError: Invalid source code`; isolated page publishing remains
unsupported for the probe.

**Needs Michael:** Review and push local commits. Product naming remains needed
for later class migration and Lite publication.

**Next useful action:** Diagnose or bypass the Preview compiler issue through a
reversible candidate fixture, then run the fixed source candidate in Chrome.

**Handoff:** Test sites are published only on their Webflow staging subdomains.
The probe stays an empty draft. SB Test Four and the Navbar Light test page were
not touched. Do not share an update or change a consumer until a recoverable
candidate and consumer backup are confirmed.

## 14 October 2026 — Rendered staging candidate and keyboard follow-up — Codex

**Changed (R-095, R-155):** Verified both breakpoint-timer race directions with
the freshly generated source candidate in a temporary, clearly labelled Clean
Trial staging fixture. Also checked nested submenu keyboard focus and Escape on
the published SmashBurger staging home. No release file, Library share or
consumer update changed.

**Outputs:** Added the browser and cleanup evidence to the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md)
and R-095/R-155 in [ROADMAP.md](ROADMAP.md).

**Checked how:** At `be3fc87`, `npm run test:built` passed 44/44 across source,
freshly built dist, minified and Embed outputs. The runner restored all 12
generated files; explicit generated-file diff, `git diff --check` and
`git --no-optional-locks status` were clean. On Clean Trial, the source-built
candidate passed opening and closing races in rendered Chrome after 400 ms:
the component remained expanded, the panel visible, `aria-hidden=false`,
`inert=false`, and both desktop links visible and enabled. Chrome reported
2060 CSS px and DPR 1. The fixture dispatched a synthetic Tablet
`matchMedia` change, so this proves browser runtime/timer behavior in the staged
candidate, not a physical viewport resize. Afterward I removed the Embed in
Designer, read back only the Body element, returned the page to `draft: true`,
republished Clean Trial to its Webflow subdomain, and verified the temporary
route returned 404; `customDomains` remained empty. On the published SmashBurger
home, Tab entered the More submenu and Shift-Tab returned to its trigger;
Escape collapsed it and left focus on the trigger. A pointer click on blank
page space did not collapse this separate nested More disclosure; this is not
evidence about Navbar Light's outer panel close behavior. No physical
screen-reader or device test was performed.

**Still open:** A candidate test driven by an actual browser viewport resize;
candidate JS-asset failure and Webflow Preview; narrower/wider live responsive
geometry, backdrop and overflow checks; physical DPR 2×/3× evidence; human
assistive-technology/device checks; and cloned upgrade/rollback. Webflow Preview
still reports `CompilationError: Invalid source code`.

**Needs Michael:** Review and push local commits. Product naming remains needed
for the later class migration and Lite publication.

**Next useful action:** Run the candidate through a real browser viewport
collapse-boundary change in the staging fixture, then continue live responsive
and failure-fallback checks.

**Handoff:** The candidate Embed is removed, the probe is empty and draft, and
Clean Trial's staging route is absent after republishing. The three prior site
publications remain on their Webflow subdomains only. SB Test Four and the
Navbar Light page were not touched.

## 14 October 2026 — Post-restart verification — Codex

**Changed (R-095, R-155):** Repeated the candidate-build delivery suite after
the CSS-failure hardening commit; confirmed Webflow MCP read/write access on the
backed-up test project; and tried the candidate Embed in Designer Preview. The
Embed was removed after Preview failed. No staging publication changed.

**Outputs:** Candidate Preview failure, page-only publish rejection and cleanup
evidence in the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Checked how:** At `44e4ad6`, `npm run test:built` passed 44/44 across fresh
source/dist/minified/Embed outputs and restored all 12 generated files. Read-only
Webflow `list_sites`, `get_site` and Designer current-page/current-mode calls
first succeeded after the restart. In the empty draft probe, a clearly labelled
source-candidate Embed was written and read back. Designer Preview showed only
the native Menu summary, without its candidate links; DevTools showed
`CompilationError: Invalid source code` and an uncaught rejection. I removed the
Embed, read back only the Body element, and confirmed the probe remains a draft.
A page-only staging publish request returned `Bad Request: Invalid parameter:
pageId`. The site has four other pending draft pages, so I did not fall back to
a full-site publish. Site metadata still reports its existing 13 October
publication. This provides candidate Designer Preview failure evidence, not
candidate staging runtime evidence.

**Still open:** Candidate Preview remains blocked by Webflow's compiler error;
candidate staging runtime/asset-failure checks await a safe isolated publish
route or Michael's decision on full-site staging scope. Human/device and cloned
rollback checks remain open.

**Needs Michael:** Decide whether to authorise a full-site staging publish of
Clean Trial, which will also publish four other pending draft pages, or wait
for an isolated page-publish/Preview path.

**Next useful action:** Follow Michael's staging-scope decision; if full-site
publish is not authorised, wait for Webflow to support isolated page publishing
or resolve Preview compilation before running the fresh candidate.

**Handoff:** The Designer remains on SB Unlink Clean Trial Home in Design mode.
Do not touch SB Test Four or refresh the Navbar Light test page.

## 14 October 2026 — Source candidate stylesheet-failure hardening — Codex

**Changed (R-095, R-155):** Fixed a demonstrated source-candidate failure in
which JavaScript hid and inerted the menu panel after the component stylesheet
failed. The runtime now enables itself only when its stylesheet readiness
marker is present, leaving native menu content accessible when CSS is missing.
This remains local and unreleased; immutable v0.2.6 deliveries and URLs were
preserved.

**Outputs:** Runtime/CSS readiness marker, a fresh-build regression across
source/dist/minified/Embed, and the dated [local test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Checked how:** `npm test` passed 69 tests with 12 expected TODO cases: nine
demonstrate the known v0.2.6 resize-timer defect, and three show the new CSS
failure fix is not in the immutable v0.2.6 generated deliveries. `npm run
test:built` passed 44/44 on fresh outputs and restored all 12 generated files;
restoration was checked byte-for-byte for the two temporary Webflow/demo files
used in the rendered follow-up. `npm run check` and `git diff --check` passed.
A fresh source-derived local browser candidate loaded while its stylesheet was
deliberately missing: DevTools reported `ERR_FILE_NOT_FOUND`, while the menu
remained unenhanced, its panel had no `aria-hidden` or `inert`, and all 14 links
remained in the accessibility tree; the first link had `tabIndex=0`. DevTools responsive
width was set to 393, but the page reported `innerWidth=634`; this check does
not establish narrow-layout geometry. This was local rendered-browser evidence,
not Webflow Preview or published candidate evidence.

**Still open:** Candidate CSS/JavaScript failure checks in Webflow Preview or
staging; Preview's custom-code compilation error; physical-device, human
screen-reader, touch, actual OS reduced-motion and cloned upgrade/rollback
checks. The CSS fallback's narrow visual layout remains unverified.

**Needs Michael:** Review and push the pending local commits; no product decision
is needed.

**Next useful action:** Diagnose the Webflow Preview compiler failure, then run
the fresh candidate in a recoverable Webflow fixture and verify cleanup. Continue
the device/accessibility checks only where a suitable human/device environment
exists.

**Handoff:** Designer remains on the SB Unlink Clean Trial Home Canvas. The
published fallback-isolation tab is restored at 1280px with the CSS block rule
removed and the pre-existing JavaScript rule disabled. Temporary local HTML and
generated outputs were removed/restored. The empty Preview probe is unpublished
and retained. Do not touch SB Test Four or refresh the Navbar Light test page.

## 14 October 2026 — Webflow Preview fallback continuation — Codex

**Changed (R-095, R-155):** Recorded the read-only Designer Canvas/Preview
comparison and a repeated custom-code Preview compilation failure on two pages,
then on a new empty draft probe page. Verified the published v0.2.6 CSS and
JavaScript failure fallbacks on the backed-up staging fixture using Chrome
request blocking. Recorded that the Designer MCP bridge is available again,
while the scripts readback route still fails. No site content, Library item,
or publication was changed.

**Outputs:** This status entry, the [local test record](webflow/lite-preparation-local-tests-2026-10-14.md),
and R-095/R-155 evidence in [ROADMAP.md](ROADMAP.md). The empty probe remains
as an explicitly named, unpublished draft in SB Unlink Clean Trial for follow-up.

**Checked how:** Webflow Data MCP listed the authorised sites and read the
existing linked/unlinked `Unlink Override Verification` fixture. Chrome Designer
Canvas showed the two instances. With Preview custom code enabled, Webflow
remained at “Compiling custom code…” on both `Unlink Override Verification` and
`Unlink Fallback Isolation`; DevTools reported `CompilationError: Invalid source
code` on each. I created the draft `SB Lite Preview Compiler Probe`
(`sb-lite-preview-compiler-probe`, page `6acfd482072d7417c8ae9149`) to distinguish
page content from the site or Preview compiler. Its Canvas body is empty and
both page-level custom-code fields are empty; Preview with custom code enabled
stalled with the same error. With the Preview custom-code toggle temporarily
off on the first page, it rendered; the native Details menu opened/closed and
Tab entered its link order. Restored the toggle to on and returned to Canvas.
This is Preview fallback evidence, not candidate runtime or asset-failure
evidence. Separate published v0.2.6 asset-failure checks are recorded below.
The scripts readback endpoint returned 404 “Custom code
block not found” for site and page scripts, so it did not identify the source.
The error on an empty page rules out that page's elements and page-level code,
but does not distinguish site-wide code from Webflow's Preview compiler. After
Michael restarted the connection, Designer MCP returned the current page (Home)
and mode (design) successfully. The site/page script readback endpoints still
return 404. A local CSS-failure browser harness could not start because the
sandbox denied binding `127.0.0.1:8766` with `EPERM`; I removed it without
bypassing the restriction. Separate Chrome DevTools checks then verified the
published v0.2.6 CSS/JavaScript failure fallbacks; candidate asset failure
remains untested.
`npm test`, `npm run test:built`, `npm run check` and
`git diff --check` were verified earlier; `npm run test:built` was rerun in
this continuation and passed 40/40, restoring all 12 generated files. No
implementation files changed.

**Still open:** Candidate Preview with custom code enabled; separating site-wide
custom code from a Webflow Preview compiler issue; candidate-build asset failures;
all human screen-reader/touch/physical-display checks, full custom icon DPR
combinations, actual OS reduced-motion and upgrade/rollback. Published v0.2.6
CSS/JavaScript failure fallback passed at emulated DPR 2; physical-device evidence
is still absent.

**Needs Michael:** Review/push local commits. No product decision is required.

**Next useful action:** Diagnose the Preview compiler error through the Webflow
site settings or a narrower compiler probe; then run the clearly labelled local
candidate in Preview and verify exact cleanup.

**Handoff:** The empty `SB Lite Preview Compiler Probe` draft remains in SB
Unlink Clean Trial; it has no page elements or page-level custom code and is
unpublished. The separate staging tab was restored to 1280px after the CSS/JS
request-blocking checks; both temporary rules were removed or disabled and the
page reloaded. Designer MCP is responsive again. Do not touch SB Test Four or
refresh the Navbar Light test page.

## 14 October 2026 — Rendered Chrome continuation — Codex

**Changed (R-037, R-095, R-155):** Rendered baseline/candidate tests now run in
Chrome. Added the demo's `--mwp-nav-header-height: 5rem` token after its 80px
panel anchor exceeded a 400px test viewport by 8px with the default 4.5rem
fallback. Added a regression assertion for that fixture contract. The runtime
fix remains local and unreleased; no versioned assets changed.

**Outputs:** `demo/index.html`, `tests/demo.test.js`, the dated [local test
record](webflow/lite-preparation-local-tests-2026-10-14.md), and R-095/R-155
evidence below. Temporary browser fixtures are removed before commit.

**Checked how:** Reproduced opening and closing resize races on the published
v0.2.6 page in the backed-up SB Unlink Clean Trial. A separately labelled,
source-derived local browser candidate passed both races after 350ms, with
desktop links visible, non-inert and focusable. Browser-input Tab, Shift-Tab,
Enter, Space, nested/outer Escape, trigger focus restoration, link/outside and
backdrop closing passed. Responsive width samples covered 320–767px for
mobile-landscape, 479/480px for mobile-portrait, 991/992px for tablet, and
wide desktop. At 320×400 the candidate panel stayed within the viewport, scrolled
its 354px content, and kept document horizontal overflow at zero. Full-width,
left/right drawer and overlay bounds were measured at 393×852 with zero document
overflow. Chrome reduced-motion emulation reduced panel, icon and backdrop
transitions to 0.01ms, then restored normal durations; this was CSS media
emulation, not an OS setting. A script-free fixture opened/closed with native
Details and exposed links to keyboard focus. These are browser UI events, not
physical-keyboard or assistive-technology tests.
`npm test`: 77 tests, 68 passes, nine expected TODO failures in immutable v0.2.6
delivery files. `npm run test:built`: 40/40; all 12 generated files restored and
an independent diff check passed. `npm run check` and `git diff --check` passed.

**Still open:** Candidate Preview with custom code enabled is blocked: the
existing verification page remains at “Compiling custom code…” and Webflow's
Designer console reports `CompilationError: Invalid source code`. The Designer
MCP bridge also remains disconnected. With Preview's custom-code toggle off,
native Details fallback rendered and opened/closed; this disables all Embed code,
so it does not isolate failure of only the JavaScript asset. No page/source data
was changed. The full icon thickness/gap combinations
across all DPR values and physical Retina evidence; actual OS reduced-motion and
custom-animation integration (Chrome CSS emulation passed); CSS/CDN asset-failure
variants beyond the script-free native fallback; real touch, VoiceOver/NVDA and
cloned upgrade/rollback remain. DPR 2× and 3× icon checks used Chrome device
emulation, not physical displays. No Webflow source change, Library share or
publication was made. The published page checked here still uses pinned v0.2.6
assets, not the candidate.

**Needs Michael:** Review and push local commits. Naming remains the later
class-migration/Lite-publication gate.

**Next useful action:** Diagnose the Preview compilation failure on a disposable
test page; after custom code compiles, run and read back the candidate Preview.

**Handoff:** Read this entry and the rendered-browser section of the test record.
The Clean Trial backup is confirmed by Michael. Keep the candidate local and
temporary; leave SB Test Four, pinned v0.2.6 assets, source Library definitions
and Navbar Light test page unchanged. No refresh or Webflow mutation occurred.

## 14 October 2026 — Focus cancellation regression — Codex

**Changed (R-095, R-155):** Added independent regression coverage proving that a
queued first-link focus is cancelled when opening is interrupted by a resize to
desktop. No runtime implementation change; source already clears that request.
The new fix remains local and unreleased.

**Outputs:** `tests/runtime-delivery.test.js`; updated R-095/R-155 evidence and
[pre-Lite test record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Checked how:** `npm run test:built` passed 40/40 across source and all freshly
generated delivery forms. The runner restored all 12 generated files, and an
independent `git diff --exit-code` on generated paths passed. `npm test` recorded
77 tests, 68 passes and nine expected TODO failures (the opening state, queued
focus and closing state regressions in each immutable v0.2.6 generated form).
Source passed all three. `npm run check`, test syntax and `git diff --check` passed.

**Still open:** Rendered Chrome/browser verification, real keyboard/focus,
responsive geometry, real OS reduced motion, DPR visual checks, Preview and
published runtime, screen readers and upgrade/rollback. Chrome control is still
not exposed in this session; no Webflow backup or fixture was changed.

**Needs Michael:** Review and push local commits. Connect an authorised Chrome
control surface for rendered work; product naming remains the later migration
and publication gate.

**Next useful action:** Add the temporary candidate build to the isolated fixture
after rendered browser control and a recoverable backup are available, then run
the opening/closing resize plus native focus behavior.

**Handoff:** Read this entry and the focus regression section of the test record.
Preserve v0.2.6 bytes/pins, leave SB Test Four alone, and do not publish/share a
temporary same-version candidate. No Webflow mutations were made.

## 14 October 2026 — Continuation test run — Codex

**Changed (R-037, R-095, R-155):** No code or Webflow changes. Repeated the
fresh-build candidate suite and read current source/consumer component metadata
through Webflow Data MCP. The local timer fix remains unreleased and pending;
immutable v0.2.6 assets, pinned URLs and existing content remain unchanged.

**Outputs:** Continued evidence in [pre-Lite test record](webflow/lite-preparation-local-tests-2026-10-14.md) and R-037/R-095/R-155 roadmap notes. No Library update was shared; no page or site was published.

**Checked how:** Reviewed `5824d28..HEAD` (2eda9f3 implementation and 7968cb2 evidence update); `git --no-optional-locks status` was clean. `npm run test:built` passed 36/36 across source and three generated delivery forms; runner restored all 12 generated files and `git diff --exit-code` confirmed exact restoration. Read-only site, page and component calls confirmed the MWP Library's two five-variant source definitions and separate one-Base unlink candidate, plus the linked `SmashBurger CDN` instance on Smashburger `/demo`. These are structured readbacks, not runtime evidence.

**Still open:** Rendered reproduction/fix check, responsive geometry, physical keyboard/touch, no-JS and asset failure, actual reduced motion/custom animation, icon visuals at DPR 1×/2×/3×, Preview/published runtime, screen readers and upgrade/rollback. Chrome control is not exposed in this session; the local-file URL security rejection was not bypassed. No recoverable backup was confirmed for a target fixture, so no structural Webflow test was attempted.

**Additional check:** Read the stored MWP self-contained and CDN source component Embeds. Runtime and Canvas helper/loader values match their committed local files byte for byte, including pinned v0.2.6 loader URLs/SRI. Smashburger `/demo` is linked, but Webflow MCP does not expose Library component internals there. The isolated clean-trial Home and fallback page structures were read without mutation; none of these reads prove Preview, rendering or runtime behavior. Details are in the continuation section of the test record.

**Needs Michael:** Review/push local commits. Make an authorised Chrome control surface available for rendered tests; product naming remains for the later migration/publication gate.

**Next useful action:** Once Chrome control and a fixture backup are available, use a temporary candidate Embed on the isolated test fixture and run the opening/closing resize check first.

**Handoff:** Read this entry and the continuation section of the test record. Keep SB Test Four alone, do not replace v0.2.6 assets or pinned URLs, and do not share/publish a temporary same-version candidate. No Webflow changes were made in this run.

## 14 October 2026 — Brief #11: existing-menu tests and local hardening — Codex (night shift)

**Changed (R-037, R-095, R-155):** Expanded identical runtime checks for maintained
source and exact v0.2.6 unminified/minified/Embed deliveries. Demonstrated a race:
expanding the viewport during opening/closing allowed a pending collapsed timer
to overwrite `expanded` with `open`/`closed`; the closing case hid/inerted desktop
links. Source now cancels that timer and pending focus request on breakpoint
state resets. The new fix is built, verified (local), pending Michael and
unreleased. Existing historical Acceptance remains unchanged. Source: new
regression tests and [full evidence record](webflow/lite-preparation-local-tests-2026-10-14.md).

**Outputs:** `src/navbar-light.js`; `tests/runtime-delivery.test.js` and its
`scripts/runtime-test-fixture.mjs` helper; `npm run test:built` and
`scripts/check-built-runtime.mjs`; test record; ROADMAP evidence and this entry.
Generated v0.2.6 bytes, package version, CDN loader and pinned URLs are unchanged.
Implementation committed locally as `2eda9f3`; this evidence update is a separate local commit. Michael pushes.

**Checked how:** Clean main at 5824d28; reviewed 161b744..HEAD (only Michael's
answers/historical-acceptance docs, no implementation gap). Baseline 41/41 tests,
syntax and `check:dist` passed. Final `npm test`: 73 tests, 67 passes, zero
unexpected failures and six executed TODO failures documenting both known races
in the three immutable v0.2.6 delivery forms (exit 0). Fresh-build suite:
36/36 pass, zero TODOs, including both fixed races in all generated forms, demo
startup and local loader SRI. Build runner restores all 12 generated files;
readback via `git diff --exit-code` confirms restoration. Source/new-file syntax
and `git diff --check` pass. `check:dist` now fails as expected: source contains
an unreleased correction; README explicitly allows source/release drift between
releases. Do not overwrite immutable v0.2.6 to silence it. DOM tests simulate
260 collapse-boundary initialisations, 140 layout/motion opens/closes, 96 icon
token calculations, reduced-motion waits, synthetic Escape/focus, close controls,
repeat init/destroy and CSS-only Always fallback. These are not rendered checks.

**Still open:** Browser rendering, actual Enter/Space/Tab and touch, overflow,
DPR 1×/2×/3× visual convergence, OS/CSS reduced motion, custom GSAP integration,
Webflow source/linked/unlinked/clean-install and Preview/published checks, actual
CDN requests, VoiceOver/NVDA (R-244), and cloned upgrade/rollback (R-115).
Installed sandboxed Chrome exited 134 before opening; browser connector rejected
local file URLs and prohibited circumvention. No workaround was attempted and no
browser viewport/preferences were changed. Detailed actionable checks are in the
test record. Naming still gates migration/publication (D-012/D-013).

**Needs Michael:** Review and push local commits. Arrange authorised rendered
local-browser and current-fixture Webflow/human validation, with backup before
structural work, then authorise a new semantic release for the fix. Decide the
product name when ready; no repeat naming question was raised.

**Open questions (not blocking):** None added. No product/design choice was needed
for the demonstrated local timer fix.

**Next useful action:** Read the test record, reproduce the mid-transition resize
in an authorised rendered browser, and decide the next release before Lite uses
the fixed source. `npm run test:built` is the repeatable local fresh-build check;
`npm test` intentionally continues to expose six v0.2.6 TODO failures.

**Handoff:** Michael/next agent: branch main; no worktree. Source is fixed, release
files are still immutable v0.2.6 and retain the defect. Do not copy a temporary
same-version build's loader/SRI into Webflow. New version/tag/distribution work
needs a separate authorised release. Keep SB Test Four untouched under D-010.
Read the local test record and D-011–D-013 before proceeding. Brief #11 completes
the available local testing/hardening and records all unavailable checks; it does
not accept the new fix or close R-037's rendered matrix.

## 14 October 2026 — Michael’s answers and historical acceptance — Codex

**Changed:** Applied Q-01–Q-07 to the four project docs. D-011 accepts the Lite
boundary (R-177–R-186); D-015 accepts separate mega-menu scope and defers premium
pricing/licensing/backend (R-212, R-215–R-224); D-016 accepts the manual settings
snapshot as a prototype with a muted “Infrastructure and settings” label (R-165).
The label is direction only, not an implemented change. D-014 and R-187–R-214
remain deferred until Lite works. Appended Q-06 to settled D-010 without rewriting
its original record: R-160 stays a historical defect; leave SB Test Four alone and
verify fresh installs in current test projects. D-012/D-013 remain Proposed while
Michael decides the product name (R-119–R-128). Nothing is deployed on a live
domain yet, so the old repo’s CDN compatibility role matters less; no repository
change is authorised. Source: Michael’s explicit answers in this session.

**Historical acceptance — Michael, 14 October 2026:** Applied his standing rule to
183 built roadmap items supported by pre-today release or use records, including
the v0.2.6 release work. Each item now says `accepted (historical)` and cites an
acceptance basis. This applies Michael’s rule, not agent sign-off. 83 items remain
pending: 66 not built and 17 built. Of those 17, four are newer work, four are
unreleased candidate work, two are prototypes, and seven have unclear qualifying
release/use evidence. The unclear count is seven; no item-by-item questions raised.
Evidence fields and States are unchanged. Historical acceptance of superseded
milestones does not revive them. Sources: project-docs v0.3 Historical acceptance;
Michael’s instruction in this session; ROADMAP acceptance-basis links to the POC,
Canvas fixture and v0.2.4/v0.2.6 release records.

**Outputs:** Updated SCOPE.md, DECISIONS.md, ROADMAP.md and STATUS.md only. Local
commit requested: `Apply Michael's answers and historical acceptance`.

**Checked how:** Clean main baseline at 161b744. Reviewed c808ca4..HEAD: 770bcdf
contains the retrofit and 161b744 its whitespace fix; no intervening implementation
gap. Compared all 266 roadmap IDs/titles/order, State and Evidence fields against
HEAD; checked Acceptance totals, per-item sources, retained pending candidates,
prototypes and newer work, decision statuses, local Markdown file links and
`git diff --check`. Original todo and settled D-001–D-010 text remain intact;
D-010 has a dated follow-up. No code tests or live checks rerun for this docs update.

**Still open:** Product name, class migration and Lite build/publication gates;
unreleased one-Base candidate, prototype styling/upkeep, and the seven ambiguous
historical-acceptance cases remain pending. Existing rollback (R-115), icon matrix
(R-037) and Windows NVDA (R-244) validation remain open. Designer Extension /
Make local and premium commercial/backend choices are deferred as above.

**Needs Michael:** Decide the product name. This blocks the class migration and Lite publication.

**Open questions (not blocking):** None raised in this update. Deferred choices
remain recorded in D-014/D-015; they do not block this documentation work.

**Next useful action:** Continue authorised Lite preparation under D-011, using
current test projects for fresh-install verification. Michael pushes the local
commit. No repeat naming question in boss.

**Handoff:** For Michael or the next agent: read this header and D-010–D-016 first.
Branch main; no new worktree. Do not act on the historical Q-01–Q-07 question list
below: this entry supersedes it. Keep SB Test Four untouched, R-160 historical,
and D-012/D-013 Proposed. Publication, Library sharing, remote changes and tags
still require explicit authority. This update changes documentation only.

## Historical log

The retrofit entry below records the earlier position before Michael’s answers
and standing historical-acceptance rule. Its pending-acceptance statements and
question queue are preserved as history and superseded by the entry above.

## 14 October 2026 — Retrofit baseline — Codex (night shift)

**Changed:** brief #6 extracted 266 ordered checklist items as R-001–R-266,
with State, Evidence and Acceptance. Added SCOPE, ROADMAP, DECISIONS and STATUS;
added AGENTS plus CLAUDE import. Added one pointer line to todo without rewriting
its contents. This is record maintenance across existing items; no new retrofit
roadmap item was invented. Sources: todo, README, webflow release/verification
records, local git log, project-docs skill and boss docs/agents-setup.md §4.

**Outputs:** SCOPE.md, ROADMAP.md, DECISIONS.md, STATUS.md, AGENTS.md, CLAUDE.md and
the todo pointer; one local commit requested as `Retrofit project docs` (brief #6).

**Checked how:** read-only git status was clean on main at c808ca4; skimmed the
last 80 commits and inspected source records. Local document checks compare all
266 R titles/order to the original todo checklist, verify original todo bytes
remain after the pointer, require one set of State/Evidence/Acceptance fields per
item, check local file-link targets and IDs, and compare the boss reporting text
byte-for-byte to §4. `git diff --check` verifies whitespace. No code tests, builds,
Webflow or live browser checks are part of this docs-only verification. Historical
live evidence is labelled as such; it was not rerun tonight.

**Current evidence:**

- Released v0.2.6 was recorded on 8 October with 41/41 tests, syntax/distribution
  checks and CDN byte comparison. Published readback proved exact code in the
  active staging rollout; rendered acceptance came from Michael's Preview checks.
  Source: webflow/v0.2.6-release-verification.md §§Evidence, Active rollout.
- Dated historical acceptance: **8 October 2026 — Michael accepted the Preview
  results**, per todo's release status. This is release/Preview sign-off only;
  no complete individual todo item is assigned Acceptance from it. Library update
  acceptance and records headed “acceptance” are not automatically roadmap sign-off.
- The one-Base candidate was shared without Library publication. Clean destination
  retained 79 native nodes, both Embeds, no numbered variants and all 66 settings;
  non-default overrides, responsive runtime, fallback and Embed parity passed within
  the recorded fixture limits. The isolated staging route was published. The
  original five-variant v0.2.6 component remains separate. Source:
  webflow/unlink-hardening-candidate.md §§Isolated clean-destination follow-up,
  Clean-destination non-default override follow-up, Final Canvas-affordance and
  Embed-parity readback; todo §10.
- The source candidate/clean Navigator gate is recorded complete on 14 October.
  No public clonable exists and no universal future unlink guarantee is claimed.
  Source: git 802679d; todo R-163–R-164; unlink candidate Navigator sections.
- Lite scope and the exact structural class mapping are documents only, committed
  on 14 October (77716d2, 5d720b1, c808ca4). Source: namespace audit and clonable
  draft; runtime/class/Webflow construction remains unperformed.

**Still open / contradictions retained:**

- R-037 icon matrix has partial native-fixture high-DPI proof; the 4px JS two-line
  pass and recorded DPR, linked candidate and exact distribution checks remain.
  Source: webflow/icon-geometry-regression.md, especially the final 4px follow-up.
- R-115 explicit rollback and R-244 Windows NVDA remain open. Source: todo and
  webflow/smashburger-poc-acceptance.md §Result.
- R-160 old SB Test Four import defect is open but excluded from the v0.2.6 rollout
  (D-010). Future ownership needs Michael; no item was dropped.
- R-128 retains an obsolete Macbook path. Today's actual checkout is on MacStudio;
  future replacement destination is unconfirmed (D-013).
- README/migration-guide paragraphs still describe v0.2.3 candidate behavior,
  adjacent-sibling limitations for enhanced presentation, visible settings and
  older cleanup gates. Later enhanced/native, v0.2.4/v0.2.6, Canvas and 13 October
  unlink records qualify them. Those originals were not rewritten under this brief.
  Sources: README §§Replacing an existing Webflow Navbar, Component properties;
  webflow/migration-guide.md §§Backdrop behavior, Designer, Preview and delivery;
  webflow/enhanced-layout-regression.md; webflow/canvas-authoring-fixture.md;
  webflow/always-unlink-class-audit-2026-10-13.md.
- R-060 Secondary-first and R-166 floating inspector describe superseded milestones;
  D-005 and D-009 hold later settled direction. R-169 retains partial-check wording
  even though later Canvas records extend coverage. Historic ticks stay built;
  broad future-product completion is not inferred.
- A smashburger-designer-extension directory exists locally while R-187 is unchecked.
  Its existence is not proof of a completed capability prototype; keep planned until
  a relevant verification record establishes progress. Source: local directory
  inventory at c808ca4 and todo §11.
- Infrastructure Details with a manual settings snapshot remains an unstyled
  prototype requiring upkeep; not an accepted shared pattern (D-016).

**Needs Michael — complete inference list (queued in boss):**

- **Q-01 / D-011:** approve the detailed Lite first-clonable boundary (inferred — confirm).
- **Q-02 / D-012:** approve exact sb-nav / sb-nav-{role} structural mapping (inferred — confirm).
- **Q-03 / D-013:** confirm canonical repository/package identity and the MacStudio
  replacement for R-128's old Macbook target (inferred — confirm).
- **Q-04 / D-014:** confirm the preferred Designer Extension / Make local product
  commitment (inferred — confirm).
- **Q-05 / D-015:** confirm a separate premium mega-menu boundary; commercial/backend
  choices remain open (inferred — confirm).
- **Q-06 / D-010:** decide whether to resume R-160 on old SB Test Four or use current
  fixtures instead (inferred — confirm); the agent has not dropped it.
- **Q-07 / D-016:** decide whether to graduate the manual infrastructure snapshot
  prototype and choose summary styling (inferred — confirm).

**Next useful action:** review Q-01–Q-07 and the evidence boundaries. Issue a separate
brief for any migration, release, clonable or external workflow; today's brief
provides no authority for those actions.

**Handoff:** Michael in the morning, or the next agent: read this header, then SCOPE
open questions and Proposed DECISIONS. ROADMAP preserves original todo order and
wording; edit its fields going forward and retain todo as history. Current branch
is main, no new worktree. Keep v0.2.6, source/consumer sites, CDN, remotes and code
untouched under the retrofit brief. Review recorded evidence before any new live
check; do not use older memory to reopen the completed clean-destination gate.

## 14 October 2026 — Designer reconnect and candidate-build recheck — Codex

**Changed (R-095, R-155):** Confirmed the refreshed Designer connection and
repeated candidate-build verification. No Webflow content or publication
changed.

**Outputs:** Added the reconnect and current build evidence to the [local test
record](webflow/lite-preparation-local-tests-2026-10-14.md) and [ROADMAP.md](ROADMAP.md).

**Checked how:** Webflow MCP readback confirmed the compiler probe is still an
empty draft containing only Body; configured collapse boundaries are Tablet
991px, Mobile (L) 767px and Mobile 479px. `npm run test:built` passed 44/44 at
`2621a4a` and reported restoring all 12 generated files. Chrome DevTools
emulation showed the published v0.2.6 page at 800 CSS px with its collapsed
trigger visible. The subsequent input timed out, so the resize race was not
retested.

**Still open:** Candidate actual-viewport resize, JavaScript-asset failure,
Webflow Preview, responsive staging geometry, physical DPR 2×/3×, human
assistive-technology/device checks and cloned upgrade/rollback.

**Needs Michael:** Review and push local commits. Product naming remains needed
for later class migration and Lite publication.

**Next useful action:** Retry the actual viewport race after Chrome input is
stable, then continue staged responsive geometry and failure-fallback checks.

**Handoff:** The probe remains empty/draft and its staging route remains absent.
SB Test Four and the Navbar Light page remain untouched.

## 15 October 2026, 18:07 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 15 October 2026 — Accepted by Michael in boss: R-162 (checked: not stated)

## 15 October 2026, 18:18 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 15 October 2026 — Accepted by Michael in boss: R-165 (checked: not stated)
- 15 October 2026 — Accepted by Michael in boss: D-012
- 15 October 2026 — Accepted by Michael in boss: R-267 (checked: not stated)
- 15 October 2026 — Accepted by Michael in boss: R-184 (checked: not stated)
- 15 October 2026 — Accepted by Michael in boss: D-013 (*"'/Users/michaelauty/Work on MacStudio/Smashburger-Webflow-Navbar'"*)

## 4 November 2026, 13:04 — boss runner *(Michael's roadmap order, R-120)*
Written in from Michael's task list in boss. The order is his; the runner only moves the items. If a move breaks a dependency, tell him; don't undo it.
- Michael moved R-270 before R-125 (dragged its task in boss).

## 4 November 2026, 15:16 — boss runner *(Michael's roadmap order, R-120)*
Written in from Michael's task list in boss. The order is his; the runner only moves the items. If a move breaks a dependency, tell him; don't undo it.
- Michael moved R-271 before R-125 (dragged its task in boss).


## 5 November 2026 — Preview error source comparison — Codex (night shift)

**Changed (R-155):** Compared the saved Clean Trial probe code and earlier isolation results. No Webflow page, component, class, CMS item, custom code or publishing setting changed.

**Outputs:** The earlier empty draft probe had only Body content and blank page-level head/footer code; a later temporary candidate Embed was removed and readback confirmed the probe returned to Body-only with blank page code. Preview also failed on two existing fixtures when custom code was enabled, while native Details worked when all custom code was disabled. The same Preview error on the empty probe rules out its page elements and page-level code. It does not distinguish site-wide custom code from Webflow's Preview compiler. The saved navbar source and local checks do not reproduce Webflow's `CompilationError: Invalid source code`; no specific source can be named from available evidence.

**Checked how:** Reviewed the saved test record and roadmap entries. `node --check src/navbar-light.js` and `node --check demo/navbar-light.browser.js` passed. These syntax checks do not exercise Webflow Preview. No Chrome page was opened and no Webflow tool was used.

**Still open:** Exact failing source/script or compiler diagnostic, and a local reproduction of the Preview error. The previous run lacked Network request capture and the scripts readback route returned 404 without a source location.

**Needs Michael:** Nothing for this evidence review.

**Next useful action:** With a usable Preview and read access to the site's site-wide custom code and failed script requests, isolate the remaining source-versus-compiler question. No site backup was made because this session used no Webflow tool or site surface.

## 5 November 2026 — Preview error follow-up — Codex (night shift)

**Changed (R-155):** Compared the saved page-code findings with the earlier isolation checks. No page, component, class, CMS content, custom code or publishing setting changed.

**Outputs:** The Webflow dashboard's site-wide Head and Footer custom-code fields are empty. This makes those freeform blocks an unlikely source. The saved probe was Body-only with blank page-level code; Preview also failed on two populated fixtures with custom code enabled, and worked when custom code was disabled. These results rule out the probe's elements and page-level code, but do not identify a failing source or distinguish an unexposed registered script from Webflow's Preview compiler.

**Checked how:** Read the dashboard custom-code fields and retried the Scripts readback for site and probe page. Both returned “Custom code block not found” (404). The prior record has passing JavaScript syntax checks, but those do not reproduce Preview compilation. I used Chrome only to inspect the named test site's settings and backups; I did not open Preview.

**Still open:** The exact failing script/source, a compiler diagnostic with a source location, failed-request capture and a local reproduction of Webflow's Preview error. No Webflow content was changed or published.

**Needs Michael:** Nothing for this evidence report.

**Next useful action:** If Webflow exposes the registered script contents and the failed Preview request details, compare those against the saved probe and isolate the remaining source-versus-compiler question.

**Webflow backups:** `boss · brief #316 · before` was created from the Designer Backups panel and confirmed in the dashboard. The Designer stayed on “Loading” when making the after backup, so `boss · brief #316 · after` was created and confirmed through the dashboard. Both were recorded in boss. No snapshots were needed because no site content changed.

## 5 November 2026, 15:26 — boss runner *(Michael's verdicts, R-092)*
Written in from the Needs you queue on boss's Agents page. The verdicts are Michael's; the runner only records them.
- 5 November 2026 — Accepted by Michael in boss: R-037 (checked: Looked at brief #178's result.)


## 10 November 2026 — Duplicate-class write preflight — Codex (night shift)

**Changed (R-268):** Drafted a local read-only preflight for the duplicate-class style-write risk.

**Outputs:** The procedure requires checking each style record's stable ID, selector, local/Library origin, declarations, actual element assignment and linked sibling before any proposed write. It gives explicit stop conditions and requires separate before, after and recovery evidence. It does not claim any Webflow write route is safe.

**Checked how:** Read the 23 October incident record, R-268 exit criteria and the current project records. Compared the procedure against the recorded failure: name-based writes affected imported IDs while intended local declarations remained unchanged, and name-based readback did not establish targeting. No Webflow, browser or write-route check was made.

**Still open:** The controlled R-268 regression test remains unrun. Any later Webflow check still needs its own exact-site authority, pinned candidate, recovery point and independent proof of targeting.

**Needs Michael:** Nothing to unblock this local procedure.

**Next useful action:** Use the preflight when preparing the separately authorised R-268 controlled test; stop if any required identity or evidence is unavailable.

**Reviewed at commit:** 54a5a8b — checked current records and incident evidence before this update.

## 10 November 2026 — R-271 regression coverage map — Codex (night shift)

**Changed (R-271):** Mapped each stated resize-fix exit condition to current handler code and existing named tests or release evidence.

**Outputs:** Same-breakpoint resize, breakpoint change, Escape and menu-link closing have source and recorded local test coverage. The current test source does not explicitly name or demonstrate a second user click on the trigger; API toggle coverage is adjacent evidence only. The note also identifies the narrower same-breakpoint test's closed starting state. Consumer-site behavior remains open.

**Checked how:** Read the current resize and close handlers, relevant test names and assertions, the R-271 roadmap entry, and v0.2.7/v0.2.9 release evidence. No tests, browser or Webflow checks were run.

**Still open:** Explicit test evidence for second-trigger-click closing; consumer-browser checks on the named staging sites, including resize and keyboard/link behavior.

**Needs Michael:** Nothing to unblock this local coverage map.

**Next useful action:** Use the authorised Chrome session to verify the exact staging consumer pages across same-breakpoint resizing, real breakpoint crossing and each close method.

**Reviewed at commit:** 41ba04b — checked current project records, handler, tests and release evidence before this update.

## 10 November 2026 — Lite example preset choice prepared — Codex (night shift)

**Changed (R-181):** Prepared Michael's choice on whether the local styled example should retain the runtime's built-in visual look.

**Outputs:** Boss now offers two options: keep the current difference, or turn the built-in look off in both examples so the styled example isolates its authored styling. I recommend the second option for that purpose. No example default or Webflow page was changed. This choice does not settle the final Webflow Lite default.

**Checked how:** Compared `candidate/lite/review-examples.html`, `candidate/lite/review-examples.css` and the visual preset selectors in `src/navbar-light.css`. The plain header explicitly sets `data-presets="false"`; the styled header omits it and has separate authored background, text, spacing, layout, brand, focus and narrow-screen rules. The runtime's visual preset rules are enabled unless presets are false. This is local source evidence only; no browser or Webflow behavior was checked.

**Still open:** Michael's choice; final Webflow Lite default; browser and Webflow checks for the examples.

**Needs Michael:** Choose which appearance the styled local example should demonstrate in the Boss question.

**Next useful action:** Apply only the selected local example setting in a follow-up brief; decide the final Webflow Lite default separately.

**Reviewed at commit:** c56f178 — checked the examples and preset rules before recording this choice.

## 10 November 2026 — Clean-checkout release rehearsal — Codex (night shift)

**Changed (R-121, R-125):** Documented a repeatable rehearsal from fresh local tracked files using only the already-installed locked dependencies and the existing build and verification commands. This documents the current `check:release` gate; it does not add or replace a gate.

**Outputs:** The [clean-checkout rehearsal runbook](webflow/clean-checkout-release-rehearsal-2026-11-10.md) records the exact setup, command order, version, checked commit and all candidate artifact SHA-256 values. It keeps local verification separate from release approval and Webflow/browser evidence.

**Checked how:** At `9acbd1804d43fd0ec55de4b3d459ed224041f48a`, made a local-only clone in `/tmp`, linked the existing `node_modules`, and ran `npm run build`, `npm run check:dist`, `npm run test:candidate` and `npm run check:release`. All commands exited successfully. `check:dist` found no candidate path or byte differences. The consolidated gate reported version `0.3.0-rc.1`, all 17 protected v0.2.6 files matching their Git-baseline hashes, retained v0.2.9 files matching, and 678 passed / 0 failed / 15 TODO in the full suite. It also reported the existing one-byte trailing-whitespace difference in the Library CSS comparison; content matches after trimming that byte. The clone's only status entry was the untracked `node_modules` dependency symlink; no tracked file changed. No release file was modified and no network, browser, Webflow or hosted workflow was used. `git diff --check` passed.

**Still open:** Local reproducibility does not establish release approval, a hosted workflow result, Webflow rollout or live behavior. The Library CSS comparison continues to report its trailing-whitespace diagnostic.

**Needs Michael:** Nothing for this local rehearsal.

**Next useful action:** Continue the roadmap's separately ordered prerequisites. Keep release and live checks distinct from this local evidence.

**Reviewed at commit:** 9acbd18 — checked the current project record, release gate and clean-clone results before adding the runbook.
