# Actual Lite examples with the candidate runtime

16 October 2026 — Codex (night shift), brief #71. Serves R-181, R-182 and R-155.

The plain and styled HTML examples now have executable behaviour checks using
their actual local assets. The workbench stays a separate, script-free reference.
This adds local evidence; it does not complete the Webflow examples or clonable.

## Inputs and method

[The tests](../tests/lite-candidate.test.js) parse
[review-examples.html](../candidate/lite/review-examples.html) directly from disk
with the existing jsdom dependency. They resolve its declared stylesheet links
and browser script relative to that file. Both candidate CSS and page-specific
CSS are inserted into the simulated document; the declared
`candidate/demo/navbar-light.browser.js` is evaluated unchanged.

External resource fetching is disabled. Scripts only run through explicit local
evaluation. The runtime's automatic-start setting remains unset, and the tests
wait for normal document readiness. They never construct navbar instances or call
the initialiser to perform the first discovery. They use the existing fixture's
bounded lifecycle-event wait helper for subsequent changes.

As in the existing DOM fixture, `CSS.supports` is a permissive shim. The media
query shim reports no reduced-motion preference. Both actual examples specify
Always collapse; these checks do not simulate a responsive viewport matrix.

## Assertions

- Both authored navbars are automatically enhanced in their closed state.
- Each panel receives a different, non-empty ID, with no duplicate document IDs.
- Each trigger's `aria-controls` resolves to its own panel, and `aria-haspopup`
  and the menu's public API relationship are correct.
- Native Details state, root/menu/panel/backdrop state, trigger `aria-expanded`,
  panel `aria-hidden` and panel inertness agree after each completed transition.
- Opening either navbar leaves the other closed. Both can then remain open.
  Publicly closing either one leaves the other open. Both operation orders run.
- Repeated initialisation while closed, while both are open and after closure
  creates no new instances, changes no panel IDs and adds no duplicate completion
  events. Each navbar completes exactly two opening and two closing cycles.
- With either navbar open on its own, requested first-link focus works. A
  simulated, bubbling Escape from that link is consumed, closes the menu and
  returns focus to its trigger. The other navbar remains closed.
- The actual workbench loads its two local stylesheets but no script. Its closed
  and open native references retain their authored states, adjacent panel
  structure and labelled backdrop swatch. No runtime API, readiness marker,
  `aria-hidden` or `inert` state is added to its panels.
- Every workbench fragment link has a real local target.

## Reference repair

The first focused run passed five tests and failed one: the workbench links to
`#closed` had no matching target. Inspection confirmed the same defect for
`#open`. Added those IDs to the existing reference articles in
[workbench-references.html](../candidate/lite/workbench-references.html).
No layout, text, styling or script was changed.

## Evidence and limits

`npm run test:candidate` exits 0: 128/128 passes, no failures, skips or expected
failures. All six Lite checks pass. The candidate guard confirms all 17 protected
historical hashes match. Test syntax, `npm run check`, local record links and
`git diff --check` pass. Explicit diffs confirm runtime, generated assets,
versions and dependencies are unchanged. [STATUS](../STATUS.md) records the
checked baseline and handoff.

The four new behaviour/reference checks run alongside the two existing Lite
structure checks. The candidate command already discovers this test file, so no
runner change is required.

This is DOM simulation. It does not verify browser rendering, animation geometry,
native keyboard activation, actual pointer input, assistive technology, responsive
layout, Webflow Canvas editability, Preview, asset loading over a network, Library
installation or clone flow. Escape with two simultaneously open menus is separate
brief #78; this brief's Escape cases intentionally open one menu at a time.
Destruction and native fallback restoration remain separate brief #76.

The runtime and all generated delivery files are unchanged. Protected releases,
versions, pins, dependencies and Acceptance are unchanged. The Lite roadmap items
remain in progress with local evidence; all existing release gates remain open.
