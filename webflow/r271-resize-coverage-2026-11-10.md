# R-271 resize-fix coverage map — 10 November 2026

This note maps the stated exit conditions to the current maintained handler and the recorded v0.2.7 regression evidence. It inventories evidence only; no tests were run for this note.

## Checklist

- [x] **Same-breakpoint resize leaves an open menu alone.** `NavbarLight.onBreakpointChange` compares the current collapsed state with `data-mwp-collapsed` and returns when they match (`src/navbar-light.js`, lines 278–286). `tests/navbar-light.test.js` has `ignores a resize event when the collapsed breakpoint has not changed`; the test asserts no `syncNative` call and unchanged state. The R-271 release record says the v0.2.7 regression tests cover this case and reports 43 local tests passing (`webflow/evidence/r270-r271-v027-2026-11-04.md`). The named test itself starts closed, so it does not independently demonstrate preservation of an open menu.

- [x] **A real breakpoint change switches to the correct state.** The handler updates `data-mwp-collapsed`; changing to collapsed closes the menu, while changing to expanded opens it and clears stale transition/focus state (`src/navbar-light.js`, lines 282–306). `tests/navbar-light.test.js` names `closes the collapsed menu when a real breakpoint change is detected` and asserts collapsed/closed state. `tests/runtime-delivery.test.js` names `${delivery}: collapse boundaries and open resize preserve accessible state` and exercises both directions. The release note records local coverage of real breakpoint changes.

- [x] **Escape still closes.** `onKeydown` handles Escape for the focused navbar and closes with trigger focus (`src/navbar-light.js`, lines 337–355). `tests/navbar-light.test.js` names `closes on Escape and restores focus to the trigger`; `tests/runtime-delivery.test.js` also covers Escape in its nested Escape and all-layout cases. The release record includes Escape in its regression coverage claim.

- [ ] **A second trigger click closes the menu.** Native `<details>` toggle synchronization is handled by `onToggle` (`src/navbar-light.js`, lines 309–317), and `toggle()` closes when already open (lines 444–448). `tests/runtime-delivery.test.js` exercises repeated public API toggles, but the current test names and inspected assertions do not show a second user click on the trigger. The R-271 roadmap and release note claim second-click coverage without naming the test. This is a local evidence gap, not evidence that trigger closing is broken.

- [x] **A menu link still closes.** `onPanelClick` closes when a link is clicked and link closing is enabled (`src/navbar-light.js`, lines 327–330). `tests/navbar-light.test.js` names `closes after a navigation link click`; `tests/runtime-delivery.test.js` also clicks a panel link among its close-control cases. The R-271 release record includes link closing in its regression coverage claim.

## Evidence limits and open checks

The R-271 roadmap records 43 passing local tests and byte-for-byte matching published CDN files. The later v0.2.9 verification records 44/44 tests, build/check and generated-file parity; it says v0.2.8 retained the same-breakpoint guard and real breakpoint changes use the `matchMedia` listener (`webflow/v0.2.9-release-verification.md`). These are local test and release-byte records, not consumer behavior.

Consumer-site browser verification remains open. The 4 November release evidence says consumer sites had not yet been updated to v0.2.7 at that point and lists resize, breakpoint crossing, keyboard/link closing, synthetic resize and tablet/phone checks as open. Later v0.2.9 records MWP and Voice Focus staging loader updates, but the Voice Focus published HTML and live interaction after that update were not checked; the documented MWP Firefox interaction also remains open. No consumer-browser check was made for this coverage note.
