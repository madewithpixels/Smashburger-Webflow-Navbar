# SmashBurger — next shift and daytime briefs

10 November 2026. The previous shift completed all seven local briefs. This batch starts with five substantial Code-only jobs. The next five need daytime browser or Designer access. The last five are ready to use when their stated prerequisites and permissions are in place.

For Boss, copy a heading as the title and the entire section body below it. Each body includes its own access and stop instructions.

## 1. Make the runtime CSS guard fail when it should (R-269)

**Run lane.** Code only · run first.

**Access and boundaries.** Code only, in the canonical SmashBurger checkout. Use local files, Git history and installed dependencies. Keep released files and pins intact. No browser, Webflow, network, pushes, tags, dependency changes or publishing. Report the revision, commands, pass/fail counts and anything left unchecked. Commit only your own changes through Boss. Leave acceptance to Michael.

**Work and first check.** Repair the standalone CSS guard and confirm the candidate builder uses the same checks. At the current baseline, npm run check:runtime-css exits zero without its expected result. The direct-entry call sits inside the exported function. Move the entry point to the proper module scope and keep imports safe. Compare the script invocation, npm command and builder wiring. In a disposable output tree, deliberately introduce one high-specificity author-owned declaration, then prove the direct command rejects it and names the delivery. Also check the clean path and a disposable candidate build. Keep the change to the guard and a small regression covering this false green.

**Finish and handoff.** Done when the direct command prints a result, returns a failure for the planted violation, and the builder still calls the same guard. Save the before/after exit status and confirm candidate and stable artifact bytes were untouched.

## 2. Close demonstrated gaps in the CSS guard (R-269)

**Run lane.** Code only · after the guard repair.

**Access and boundaries.** Code only, in the canonical SmashBurger checkout. Use local files, Git history and installed dependencies. Keep released files and pins intact. No browser, Webflow, network, pushes, tags, dependency changes or publishing. Report the revision, commands, pass/fail counts and anything left unchecked. Commit only your own changes through Boss. Leave acceptance to Michael.

**Work and first check.** Check two ways an author-owned rule may slip through: nested grouping rules other than @media, and broad display exceptions triggered by merely mentioning an expanded root, submenu or icon selector. Start with a few realistic positive and negative CSS snippets in the existing guard tests. Confirm each actual gap before editing. Tighten only the matching or traversal required by a demonstrated miss. Preserve the current genuine behaviour exceptions and the zero-specificity defaults. Compare real source and candidate CSS with the existing guard after the focused test.

**Finish and handoff.** Done when each confirmed miss has a regression and all existing deliveries still pass. If a proposed rule would require a change to shipped CSS, capture the exact selector and stop for a separate brief.

## 3. Make Lite preflight explain missing inputs and keep checking (R-181/R-182/R-183)

**Run lane.** Code only · independent.

**Access and boundaries.** Code only, in the canonical SmashBurger checkout. Use local files, Git history and installed dependencies. Keep released files and pins intact. No browser, Webflow, network, pushes, tags, dependency changes or publishing. Report the revision, commands, pass/fail counts and anything left unchecked. Commit only your own changes through Boss. Leave acceptance to Michael.

**Work and first check.** Make the seven-file Lite preflight useful after an accidental deletion or bad link. The current eager file reads and workbench target validation can throw before the per-file report. In disposable copies, remove one required input and break one workbench fragment or stylesheet target. Record what the checker reports today. Route failures through the existing per-file reporting so a missing prerequisite is named, dependent checks are skipped, and independent files still report. Keep the existing remote-loader rejection, explicit unreleased warning and current file list.

**Finish and handoff.** Done when the clean check stays green and the two deliberately broken copies return non-zero with named, actionable failures and results for unaffected files. Keep source examples and released assets untouched.

## 4. Check that release failure summaries stay useful when a job stops early (R-125)

**Run lane.** Code only · independent.

**Access and boundaries.** Code only, in the canonical SmashBurger checkout. Use local files, Git history and installed dependencies. Keep released files and pins intact. No browser, Webflow, network, pushes, tags, dependency changes or publishing. Report the revision, commands, pass/fail counts and anything left unchecked. Commit only your own changes through Boss. Leave acceptance to Michael.

**Work and first check.** Build a small offline check around scripts/write-release-summary.mjs using temporary summary output and explicit step outcomes. Cover setup failure with skipped checks, a failed test followed by successful independent checks, and a cancelled or unavailable result. Verify the checked revision, package version when available, failing step and complete result list. Inspect how the workflow invokes the summary if checkout itself fails, and distinguish what can be fixed in the script from what needs an authorised workflow change. Keep this brief to the summary script and its tests. Use the documented local troubleshooting examples as the starting point.

**Finish and handoff.** Done when the failure scenarios have reproducible output and the evidence states what still needs a real GitHub run. Preserve workflow triggers, permissions and gate coverage.

## 5. Run one integrated candidate check on the finished batch (R-121/R-125/R-269/R-272)

**Run lane.** Code only · run after the preceding local changes.

**Access and boundaries.** Code only, in the canonical SmashBurger checkout. Use local files, Git history and installed dependencies. Keep released files and pins intact. No browser, Webflow, network, pushes, tags, dependency changes or publishing. Report the revision, commands, pass/fail counts and anything left unchecked. Commit only your own changes through Boss. Leave acceptance to Michael.

**Work and first check.** Run npm run check:release once on the exact clean revision after the guard and test changes. This is the first whole-candidate comparison after the seven completed briefs and the new fixes. Record build byte comparison, protected v0.2.6 and v0.2.9 files, runtime contracts, the Library CSS diagnostic, and test passes, failures and known TODOs. Check that the repeated Embed, resize, rollback and authored Grid coverage appears in the intended test mode. Preserve the existing evidence pack as history and add a short new revision record. Do not rerun commands already covered by the aggregate unless a specific failure needs isolating.

**Finish and handoff.** Done when the revision and evidence are reviewable together. If it fails, reproduce only the failing group, record the first useful error and hand it off. No promotion, hosted-success claim, or release-order change follows from a local pass.

## 6. Find out whether the short menu is actually scrollable (R-269)

**Run lane.** Daytime · Chrome, local fixture.

**Access and boundaries.** Daytime Chrome brief. Open only the named page or fixture. Record the exact page, revision or loaded version, measured CSS viewport, browser, observations and evidence limits. No Designer edits, publish, share, pin changes or acceptance. Stop at a sign-in or access failure and record where it occurred.

**Work and first check.** Open webflow/fixtures/full-width-short-height.html with the current candidate assets, following its use note. At 471 × 500 and 471 × 900 CSS pixels, open the one Full-width menu with presets off. Measure the panel bounds, clientHeight and scrollHeight; use wheel and keyboard to reach Contact us and activate it. Record visible focus and what scrolls. If the local file is blocked, use a permitted loopback-only server if that route is already available; otherwise stop with the exact access error. Compare the result with the previously observed stacked page as a different fixture.

**Finish and handoff.** Done when there are two measured observations, with screenshot or geometry evidence and one reproducible failing case if applicable. Open a separate CSS fix only if the candidate reproduces a defect.

## 7. Check the current disposable staging Console for the repeated-script error (R-272)

**Run lane.** Daytime · Chrome, published staging.

**Access and boundaries.** Daytime Chrome brief. Open only the named page or fixture. Record the exact page, revision or loaded version, measured CSS viewport, browser, observations and evidence limits. No Designer edits, publish, share, pin changes or acceptance. Stop at a sign-in or access failure and record where it occurred.

**Work and first check.** Use the published Home at disposable-sb-test-site.webflow.io. Clear Console, capture a fresh reload, and record page and asset identity as far as the browser exposes it. Open each menu separately and record any duplicate declaration or script-name error, other errors and failed script requests with their locations. Preserve the distinction between the actual repeated Embed test, the current staging bytes and the saved Designer Preview.

**Finish and handoff.** Done when a dated clean reload and interaction record shows whether a duplicate-script error occurred in the published surface. Record the extent of the identity check and any unrelated errors.

## 8. Capture the Webflow Preview compiler failure (R-272/R-155)

**Run lane.** Daytime · Chrome and authorised read-only Designer access.

**Access and boundaries.** Daytime Chrome brief. Open only the named page or fixture. Record the exact page, revision or loaded version, measured CSS viewport, browser, observations and evidence limits. No Designer edits, publish, share, pin changes or acceptance. Stop at a sign-in or access failure and record where it occurred.

**Work and first check.** Use the exact saved Home page on Disposable SB test site and the existing Preview capture card. Record selected instance, revision, Preview custom-code setting and Console and Network evidence from a fresh reproduction. Identify the earliest specific error and its script, request or compilation input if available. If the tool only reports the generic webflow.js stack, retain that as the observation. Where the existing session permits it, compare Preview with custom code enabled and disabled without editing or saving page content.

**Finish and handoff.** Done when the report distinguishes reproduced compiler evidence from the duplicate-name hypothesis and identifies the most specific next step, including any access or capture limitation. Published staging gets its own record.

## 9. Verify the released resize fix on both consumer sites (R-271)

**Run lane.** Daytime · Chrome, two staging sites.

**Access and boundaries.** Daytime Chrome brief. Open only the named page or fixture. Record the exact page, revision or loaded version, measured CSS viewport, browser, observations and evidence limits. No Designer edits, publish, share, pin changes or acceptance. Stop at a sign-in or access failure and record where it occurred.

**Work and first check.** Use the named madewithpixels-dev.webflow.io and voice-focus.webflow.io staging pages in the v0.2.9 release record. Confirm each page's loaded runtime and its actual collapse boundary. Starting from an open collapsed menu, resize within the breakpoint, then cross to expanded and back. Test Escape, second trigger activation and link closing from fresh opens. Record focus return and any unwanted page shift. If a site's runtime differs, record the actual version and compare it separately without changing the site.

**Finish and handoff.** Done when each site has a small results table covering the five behaviours and the exact widths and loader used. Keep Michael's pending review separate and leave the release order intact.

## 10. Trace the dark social icons to their actual source (R-269)

**Run lane.** Daytime · Chrome, published staging.

**Access and boundaries.** Daytime Chrome brief. Open only the named page or fixture. Record the exact page, revision or loaded version, measured CSS viewport, browser, observations and evidence limits. No Designer edits, publish, share, pin changes or acceptance. Stop at a sign-in or access failure and record where it occurred.

**Work and first check.** Start from the published 667 CSS px observation on Disposable SB test site. Identify the bottom menu by exact selectors, variant and content. Capture a measured viewport, open the candidate and compare one dark social icon with one legible control. Record asset URL or inline SVG, image fill or filter where visible, panel background and relevant authored/computed styles. If an authorised saved Preview comparison is available, match the exact instance and presets setting before comparing. Preserve current colours and assets.

**Finish and handoff.** Done when the evidence can distinguish dark source art from a page or runtime styling rule, or names the exact missing data. Include one concrete proposed repair path only if supported by the observed cause.

## 11. Prove Designer styling survives in all five layouts (R-269)

**Run lane.** Hold · authorised disposable Webflow session.

**Access and boundaries.** Hold until separately authorised for the named disposable project and exact changes. Record the before state. Keep old pins and other projects untouched. Publishing and Library sharing require their own explicit authority. Stop if the target cannot be confirmed. Record what was actually observed and leave acceptance to Michael.

**Work and first check.** On the named Disposable SB test site, identify one exact candidate. Use the existing R-269 coverage map to check Dropdown, Full-width, Left, Right and Overlay with presets off. In each layout compare authored Flex and Grid, including stale tracks and opinionated host styles. Verify Style-panel editing on the panel, primary and contact links, CTA and trigger. Capture Canvas-open and Preview at representative desktop and mobile widths. Compare with published staging only where the same bytes and settings are already present or where staging publication has separate authority. Track linked and unlinked evidence separately.

**Finish and handoff.** Done when every required layout has saved identity, viewport, state, screenshots and key computed styles, or an explicit reason the comparison could not be made. Restore the named fixture state as authorised. Keep this separate from duplicate class targeting.

## 12. Check keyboard, motion and fallback on the exact styled candidate (R-269/R-155)

**Run lane.** Hold · authorised disposable Webflow and browser session.

**Access and boundaries.** Hold until separately authorised for the named disposable project and exact changes. Record the before state. Keep old pins and other projects untouched. Publishing and Library sharing require their own explicit authority. Stop if the target cannot be confirmed. Record what was actually observed and leave acceptance to Michael.

**Work and first check.** Use the matched candidate instance established by the styling comparison. Check real keyboard opening, Tab order, visible focus, nested and outer Escape, trigger focus return, CTA activation, scroll containment and quick reversal during a transition. Compare one motion with reduced motion enabled. In the browser, block the runtime script by an authorised reversible method and verify native Details and links without changing the saved Embed. Record which delivery, view and input was exercised. Published and Preview checks should have their own evidence rows.

**Finish and handoff.** Done when each observed case has a pass, fail or reason it could not be checked, with exact runtime identity. Stop before site edits if local browser controls cannot isolate the script. Physical device and assistive technology coverage remain separate.

## 13. Prove a local style can be changed safely after unlinking (R-268)

**Run lane.** Hold · authorised cloned Webflow test.

**Access and boundaries.** Hold until separately authorised for the named disposable project and exact changes. Record the before state. Keep old pins and other projects untouched. Publishing and Library sharing require their own explicit authority. Stop if the target cannot be confirmed. Record what was actually observed and leave acceptance to Michael.

**Work and first check.** Use the duplicate-class preflight and retain a linked sibling as the control. On the authorised disposable consumer, configure and unlink a duplicate using the authorised exact runtime. Record colliding stable IDs, selector, origin, declarations and actual assignments before attempting a write. Proceed only with a verifiably deterministic route. Compare both records and the linked sibling after each authorised change. If that route cannot be proven, exercise a uniquely named local class only if the brief authorises it. Verify desktop/mobile geometry and keyboard behaviour, and restore the before state.

**Finish and handoff.** Done when there is before, after and recovery evidence by record ID, or a documented stop at the point targeting became ambiguous. A success response alone is insufficient.

## 14. Rehearse a real Library upgrade and rollback on a clone (R-115/R-126)

**Run lane.** Hold · authorised clone and approved delivery pair.

**Access and boundaries.** Hold until separately authorised for the named disposable project and exact changes. Record the before state. Keep old pins and other projects untouched. Publishing and Library sharing require their own explicit authority. Stop if the target cannot be confirmed. Record what was actually observed and leave acceptance to Michael.

**Work and first check.** Use the existing cloned-site checklist on one named disposable consumer. Confirm the actual old install and exact proposed delivery pair. Capture linked properties, variants, bindings, authored overrides, class assignments, images and loader before upgrading. Verify the approved update in the clone, then restore the paired old component and loader. Compare the restored saved and rendered states, including keyboard, fallback, asset loading and the linked consumer relationship. The existing offline tagged v0.2.6 and v0.2.9 results can guide the comparison.

**Finish and handoff.** Done when the upgrade, restore and post-restore checks are evidenced separately on the clone. A missing update or approved delivery pair is a stop condition.

## 15. Build and trial the native SmashBurger Lite clone (R-178–R-185)

**Run lane.** Hold · released runtime and authorised blank project.

**Access and boundaries.** Hold until separately authorised for the named disposable project and exact changes. Record the before state. Keep old pins and other projects untouched. Publishing and Library sharing require their own explicit authority. Stop if the target cannot be confirmed. Record what was actually observed and leave acceptance to Michael.

**Work and first check.** Use the accepted Lite scope, native build sheet and trial sheet. With the exact released sb-nav loader and verified integrity, build the local native component with one link tree, plain and styled examples, a workbench and the safe-editing guide. Verify the resulting clone in an actually blank authorised project. Check Navigator classes, Canvas edits and persistence, Desktop/Tablet/both mobile breakpoints, keyboard/focus, no-script links, assets, overflow and Console. Keep Library and Extension out of this work.

**Finish and handoff.** Done when the build and the blank-project clone have separate observed evidence in the capture sheet. Public clonable publication requires its own approval.

Existing records: [last shift results](../STATUS.md), [roadmap](../ROADMAP.md), [published comparison checklist](r269-published-page-checklist-2026-11-10.md), [Preview capture card](r272-preview-error-capture-card-2026-11-10.md), [release record](v0.2.9-release-verification.md), [clone rollback checklist](r115-cloned-site-upgrade-rollback-checklist.md), [Lite trial](lite-blank-project-trial-sheet.md).
