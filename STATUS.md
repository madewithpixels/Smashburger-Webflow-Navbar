# SmashBurger — Status
**Stage:** v0.2.6 remains the released baseline. Local breakpoint-timer, stylesheet-failure and focus-restoration fixes pass fresh-build checks and remain unreleased. The temporary Clean Trial missing-script probe was removed after native Details keyboard checks. A fresh-build run passed 48/48 and restored all generated files. On the existing published Clean Trial page, Escape closed the nested “More” menu with focus returned to its trigger; rendered desktop overflow was zero at DPR 1. This is v0.2.6 evidence. Source-candidate responsive layouts, motion and icon visuals remain open. Webflow Preview still fails compilation; human/device and cloned upgrade/rollback checks remain open.
**Last updated:** 14 October 2026 — Codex (night shift)
**Reviewed at commit:** 71f34de — current `main` checked before this documentation update; local `origin/main` still points to `07de2eb`, ten commits behind this checkout. No remote operation was made.
**Next action:** Resume source-candidate layout and close checks in a Chrome session with responsive viewport controls; then check reduced motion, custom animation and icon rendering.
**Needs Michael:** Review and push local commits. Product name remains needed for the later class migration/Lite publication.

Stage sources: Michael’s Q-01–Q-07 answers in this session, 14 October 2026;
DECISIONS D-010–D-016; webflow/v0.2.6-release-verification.md; brief #11 local test record below and implementation `2eda9f3`. No new boss question.

## 14 October 2026 — Brief #12 fresh-build and rendered follow-up — Codex (night shift)

**Changed (R-095, R-155):** No source, generated release, Library or Webflow content changed. A fresh source build passed all 48 checks and restored its generated outputs. On the existing published Clean Trial page, the nested “More” menu closed with Escape and returned focus to its trigger.

**Outputs:** Extended the [Brief #12 test record](webflow/lite-preparation-local-tests-2026-10-14.md) and roadmap evidence. No staging publication, Library sharing or release occurred.

**Checked how:** `npm run test:built` passed 48/48 across source, dist, minified and Embed; all 12 generated files were restored. `git diff --check` passed and the working tree was clean after the build. In a fresh Chrome tab, a real click opened the published nested menu and Escape closed it with focus on “More”. Rendered readback at 2,044 × 1,131 CSS px reported DPR 1, zero document overflow, a full-width panel container and the outer collapsed trigger hidden at this wide size. Chrome's captured console had no warnings or errors. These are published v0.2.6 observations, not candidate-Lite geometry or physical-display DPR evidence.

**Still open:** Source-candidate responsive geometry and outer-panel close behavior; browser-captured missing-script request; Preview compilation; reduced-motion and custom-animation integration; icon geometry across line counts/thicknesses/gaps and DPR; genuine screen-reader/device checks; and cloned upgrade/rollback.

**Needs Michael:** Review the local commits when convenient. New local fixes and this evidence remain pending acceptance.

**Next useful action:** Use a Chrome session with responsive viewport controls to check the source-derived candidate across collapse boundaries and layouts, then test its backdrop, outside and link closing. Keep new work on authorised test/staging fixtures.

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
