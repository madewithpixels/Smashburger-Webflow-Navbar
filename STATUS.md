# SmashBurger — Status
**Stage:** v0.2.6 remains the released baseline. Local breakpoint-timer, stylesheet-failure and focus-restoration fixes remain unreleased. Candidate behavior checks, human/device accessibility, physical-display DPR 2×/3× and cloned upgrade/rollback remain open. README now records the generated-output comparison and limits. The three outcomes from Brief #16 are ready for Michael's review.
**Last updated:** 15 October 2026 — Codex (night shift)
**Reviewed at commit:** 532f9f9 — checked this baseline and compared the release record, maintained source, generated outputs and current README/roadmap claims. No remote operation was made.
**Next action:** Michael can try the three outcomes in the roadmap and record his verdict in boss.
**Needs Michael:** Try the unlink result, Navigator labels and closed infrastructure box in Webflow, then accept or return each outcome in boss. Review and push the local commit when ready. Product naming remains needed for the later class migration and Lite publication.

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
