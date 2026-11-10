# SmashBurger night shift — seven briefs ready to paste into Boss

10 November 2026. Run the first four in order if time is short. The last three are independent reserve briefs. Each heading is a Boss brief title. Copy the text under it into the brief body, including the shared instructions below.

> **Shared instructions:** Use the canonical SmashBurger checkout and local Git history only. Use the Code/repository grant only. Keep to the files and checks named in the brief. Preserve released files and existing pins. No browser, network, Webflow, publication, Library sharing, tags or dependency changes. If dependencies are missing, a focused check fails for a reason outside the brief, or the proposed fix would change public behaviour, record the exact gap and stop that brief. Report the revision, the check and its result, what remains unchecked, and one next action. Commit only your own files through Boss. Keep project evidence and Michael's acceptance separate.

## 1. Prove that resizing within the same breakpoint leaves an open menu alone

**Outcome and scope.** Close the two local evidence gaps in the [resize coverage map](r271-resize-coverage-2026-11-10.md) (R-271). Add focused cases in `tests/navbar-light.test.js` or a dedicated test file. Start with the collapsed menu open and exercise the supported breakpoint event path without changing its collapsed state. Check that it stays open, its links remain available, and focus does not move. Separately activate the native Summary twice and check that the panel closes. Use the native Details toggle path if the DOM harness supports it, or label a simulated toggle accurately. The existing boundary-crossing, Escape and link-close cases are sufficient for those paths.

**First check.** Run only the new or amended cases with Node's test-name filter. A passing test must exercise the breakpoint handler or a clearly identified simulated change event. Dispatching an ignored synthetic window resize alone does not cover the same-breakpoint guard. API `toggle()` alone does not cover a trigger click.

**Expand or stop.** Run the enclosing test file once if you changed shared test setup. If the harness cannot model native activation, record which part needs the browser. If a maintained runtime defect is exposed, report the smallest reproduction and keep the work test-only.

**Done when.** The two behaviours have distinct local results or a precise harness limitation. The Voice Focus and madewithpixels staging check and Michael's acceptance stay open.

## 2. Check that two copies of the current Embed can run on one page

**Outcome and scope.** Add one offline regression for the repeated-script scenario (R-272). Use the actual generated candidate Embed script twice in the same DOM, in separate script blocks as it would be embedded on a page. Give each native menu its own trigger and panel. Capture script errors, verify both menus initialise, and exercise one menu without changing the other's state. Existing Lite coverage repeats initialisation with one bundle, so target the repeated script blocks specifically.

**First check.** Run the dedicated Node/JSDOM test using the checked-in candidate Embed, with resource fetching disabled. Check that the test would catch a redeclaration or duplicate initialisation rather than only checking that the two script strings match.

**Expand or stop.** Use the saved Library Embed parity check if the inputs disagree. If the repeated-script case fails, save the error and reproducing test or fixture, and leave the generator and delivery files alone.

**Done when.** The local repeated-Embed result is reproducible. Hand off the distinct Webflow Preview compiler and published Console checks without attributing either to a duplicate script name. [Preview capture](r272-preview-error-capture-2026-11-10.md)

## 3. Build a one-menu fixture for the short-height problem

**Outcome and scope.** Add one offline page under `webflow/fixtures/` for the Full-width case observed on the stacked test page (R-269). Reuse the candidate's checked-in local CSS and JavaScript. Include one identifiable native menu, enough links to reach below a short viewport, a final contact link or CTA, and presets off. Keep page styles minimal so they do not give the panel its own scrolling workaround. Include a short use note with 471 × 500 and 471 × 900 CSS pixel viewports, and what to observe about the last link, scroll and focus.

**First check.** Read the fixture as HTML and confirm one root, one native link tree, matching trigger and panel structure, local asset paths and the visible final destination. Check that the existing candidate assets are unmodified.

**Expand or stop.** If the current fixtures already have an equivalent one-menu case with sufficient content, document how to reuse it instead of making another. Leave any runtime or CSS fix for a separate brief after someone observes a failure on the rendered fixture.

**Done when.** A daytime agent can open the fixture and collect the first single-menu observation without preparing a site or disentangling stacked rows. Record this as a prepared fixture. [Short-height source review](r269-short-height-css-source-2026-11-10.md)

## 4. Make the offline rollback rehearsal identify the version it restores

**Outcome and scope.** Check what the rehearsal loads through unprefixed `dist/` and `webflow/` paths (R-115/R-121). Its note says v0.2.6, while top-level delivery is now v0.2.9. Inspect `tests/fixtures/migration-rehearsal.mjs` and the actual bytes against the local tags. Make the legacy baseline explicit in the fixture and its note. If the v0.2.6 Library path is only described and not exercised, add one targeted local tagged-Embed case that upgrades to the candidate and rolls back to the same old bytes. Use the existing preservation assertions and local Git blobs.

**First check.** Prove which old bytes the current test reads, then run `node --test tests/migration-rollback.test.js` after any fixture change. Check that an explicitly selected old version and its paired delivery survive rollback.

**Expand or stop.** Leave a missing tag or blob as a reported dependency. Do not fetch, regenerate stable artifacts, alter the production migration mapping or replace the named Webflow clone exercise.

**Done when.** The local note and test agree about which version was actually restored, and a reader can distinguish the v0.2.6 Library baseline from v0.2.9. [Offline rehearsal](offline-migration-rollback-2026-10-16.md)

## 5. Clarify which Embed to copy for each installed version

**Outcome and scope.** Edit the README's “Switching delivery” section and repository map (R-121/R-124). The section says v0.2.6 but links to the current v0.2.9 delivery files. Point an existing v0.2.6 installation to its exact tagged files, distinguish current stable v0.2.9 from the separate shared Library baseline, and keep the candidate clearly labelled as unreleased. Verify the file names before editing the instructions, including the stable exact-byte JavaScript URL.

**First check.** Read both loaders from the local tags or matching local blobs and compare the versions, paths and README destinations. Run `git diff --check`. This is a documentation brief.

**Expand or stop.** Follow only directly related version references in the edited README sections. If anything requires changing a pin or upgrading an installed component, record it as a separate follow-up.

**Done when.** Someone maintaining a v0.2.6 Library install can find the matching Embed without accidentally picking up v0.2.9 or the candidate. [Stable decision](../DECISIONS.md#d-020---advance-the-stable-baseline-to-v029-while-retaining-the-03-candidate)

## 6. Cover the four layouts missing from the authored Grid check

**Outcome and scope.** Extend the existing Overlay-only authored Grid and host CSS fixture (R-269) to Dropdown, Full-width, Left and Right in `tests/runtime-styling-contract.test.js`. Reuse its assertions for the Grid display, author-set columns and alignment, and preset-off styling. Keep the existing five-layout Flex case as is. The point is to exercise layout-specific declarations that only match under those four other settings.

**First check.** Run `node --test tests/runtime-styling-contract.test.js`. Name any failing layout and the declaration that wins. If changing the test reveals a JSDOM limitation, record it instead of weakening the expected author control.

**Expand or stop.** Keep the task test-only. A failure that requires a shared runtime CSS change should carry a reproduction into a separate brief. Canvas, Preview and published checks remain separate.

**Done when.** Each layout has a named local result for the authored Grid case. [Local coverage map](r269-local-coverage-map-2026-11-10.md)

## 7. Make the Lite check catch an unreleased loader accidentally wired into an example

**Outcome and scope.** Probe the Lite integrity check's loader protection (R-181/R-183). The example check looks for a versioned `.min.js` string, while the illustrative loader names `navbar-light.js`. Work in a disposable local copy or on in-memory fixtures. Try wiring the illustrative URL into a runtime asset tag on the example, and check whether the failure names the loader problem or merely happens because a file is missing. If there is a gap, make the example check require its intended local runtime assets and refuse an actual remote or candidate-loader install. Preserve legitimate reference text and the shipped guide's explicit warning.

**First check.** Run `npm run check:lite` on the unchanged files and on the disposable negative case. If you change the checker, confirm both outcomes again and include the exact failure message in the handoff. Never send a request to the sample URL.

**Expand or stop.** Keep this to `scripts/check-lite-integrity.mjs` and any small test fixture required to show the gap. If the current check already diagnoses the risky case, report that and stop. Leave wider Markdown parsing and loader redesign outside the brief.

**Done when.** Normal Lite examples pass and an install-like use of the illustrative runtime is rejected locally, or the existing rejection is demonstrated. The actual Lite install still needs a released runtime and a blank-project trial. [Lite trial](lite-blank-project-trial-sheet.md)
