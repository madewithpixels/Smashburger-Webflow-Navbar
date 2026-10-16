# Rapid menu reversals and Custom motion events

16 October 2026 — Codex (night shift), brief #73. Local evidence for automated
menu behaviour and release preparation (R-095, R-155). Acceptance is unchanged.

## What changed for the user

Cancelled openings no longer leave a request that can move focus into a later
native opening. Closing from an `opened` listener no longer lets the finishing
opening move focus back into the panel. Completion timers also check the actual
native Details state before announcing completion: changing direction just
before a timer expires cannot announce a stale `opened` or `closed` event while
the native toggle notification is still waiting.

These are unreleased source/candidate repairs. The existing scroll-lock ownership
code, test runner, dependencies, public hook names and protected v0.2.6 files are
unchanged. No browser, desktop app, Webflow or remote operation was used.

## Contract and reproduction

The existing [README motion contract](../README.md#layout-and-motion-presets) says Custom motion
retains state, ARIA, inertness, focus and lifecycle events while an external
animation owns the visuals. [Integration hooks](../README.md#integration-hooks)
document the state names, four bubbling events and public controls.
[The GSAP example](../examples/gsap.js) requires the external animation to fit
within the configured opening and closing durations. The pre-change
[runtime](../src/navbar-light.js), at starting commit `a44742e`, establishes the
existing event payload: `navbar`, `root`, `menu`, `trigger`, `panel`, `state`.
This brief retains that payload and the existing event/focus ordering.

Before repair, focused source probes reproduced the following in both Dropdown
and Custom motion:

- Start opening with `focusFirst: true`, close before completion, then reopen
  natively during closing. The later opening incorrectly moves focus from an
  outside button to the first link. Both public and native closing reproduce it.
- Close and reopen natively in the same turn during opening. Native notification
  coalescing skips the intermediate closing notification; the cancelled focus
  request still survives.
- An `opened` listener closes with `focusTrigger: true`. The opening callback
  then moves focus from the trigger into the closing panel.
- Change native state through a public control one millisecond before the old
  deadline, then allow that timer to run before native toggle delivery. The old
  callback incorrectly emits `opened` after closure, or `closed` after reopening.

The repaired runtime clears pending opening focus on public closure and on a
native closing transition. Both completion callbacks reject the opposite native
state. Opening focus additionally checks that the menu remains open after
`opened` listeners return. No new event, timing option or animation policy was
introduced. Normal public close behaviour when focus already lies inside the
panel is outside this brief and remains the separately queued brief #77.

## Executable coverage

[The delivery tests](../tests/runtime-delivery.test.js) add ten scenarios for
each of two motion presets and four deliveries: **80 new candidate checks**.
Opening takes 280 ms and closing takes 220 ms; reduced motion is off.

- Repeated public open/close calls during and after motion preserve the original
  deadlines and emit one completion per completed transition.
- Closing during opening cancels its completion and pending focus.
- Reopening during closing cancels its completion and delays fresh requested
  focus until the new opening completes.
- Both public and native closing discard cancelled focus before native reopening.
- Repeated public toggles, including same-turn bursts, settle the final direction.
- Closing in an `opened` listener preserves the returned trigger focus.
- Reversing at each old deadline suppresses completion even before queued native
  notification delivery.
- Same-turn public close/native reopen discards cancelled focus.

Every scenario records all four event types. Assertions check exact order,
completion counts, event bubbling to the owner document, payload keys and object
identity. Event-time snapshots check native Details state, root/menu/panel/backdrop
state, trigger ARIA, panel ARIA and inertness. Capture records state before a
consumer event listener can change it; a separate document listener proves each
event bubbles once. Final-state checks also verify the public state and the
trigger's panel relationship. Focus histories detect a transient late move even
if another action later restores focus. Each scenario advances well beyond old
deadlines after reaching its expected result.

The new helper replaces only the fixture window's timeout/clear-timeout functions
with a controlled clock. It runs the real runtime callbacks and reads the real
configured durations. Native Details toggle events still arrive asynchronously
through jsdom; the existing event helper waits for each transition to start.
The two deadline tests deliberately run a completion before native notification
delivery. This tests that ordering without relying on machine speed. It is a
model of task ordering, not proof of browser scheduling or rendered motion.

Ordinary `npm test` runs all twenty new source scenarios alongside its unchanged
historical-release checks. Candidate mode also runs the same scenarios against
fresh candidate distribution, minified JavaScript/CSS and self-contained Embed.
No historical TODO, skip, runner, timeout or existing assertion was changed.

## Verification and handoff

Implementation, tests and regenerated candidate files are committed locally as
`60960a3`. Initial main was clean at `a44742e`. The only commit since STATUS's
previous reviewed baseline (`18147a2`) recorded the candidate-preservation
evidence already described there; no unrecorded implementation gap was found.
Boss resumed brief #73 as taken and showed no conflicting agent work or new
blocking decision.

- Focused source command: 20/20 pass, no failures, skips or expected failures.
- `npm run test:candidate`: exit 0, **217/217 pass**, no failures, skips or
  expected failures. All 80 new scenarios pass across the four deliveries.
- `npm test`: exit 0, 157 tests, 130 passes, no unmarked failures or skips,
  27 executed expected failures belonging to the existing immutable-release
  checks. Their labels and assertions are unchanged.
- `npm run check:dist`: exit 0; candidate output is reproducible and existing
  files are preserved.
- `npm run check:namespace`: exit 0; public compatibility hooks match and all
  **17 protected historical SHA-256 hashes** match the immutable baseline.
- JavaScript syntax, evidence-link/heading-anchor checks and `git diff --check`
  pass. Explicit diffs confirm no changes to the test runner, build/verifier,
  dependencies, compatibility records, maintained CSS, protected deliveries or
  the older Library verification loader.

The dated [STATUS entry](../STATUS.md) records the handoff and remaining gates.

```sh
SMASHBURGER_CANDIDATE=1 node --test --test-name-pattern='source (dropdown|custom):' tests/runtime-delivery.test.js
npm run test:candidate
npm test
npm run check:dist
npm run check:namespace
npm run check
node --check tests/runtime-delivery.test.js
git diff --check
```

The candidate build refreshes its runtime bundles, source maps, self-contained
Embeds, demo bundle and the JavaScript integrity value in the **unreleased,
uninstalled** candidate loader proposal. This follows the existing builder;
no integrity calculation or loader logic changes. The older commit-pinned
Library verification loader remains unchanged and still predates these fixes.
Its pin is not evidence for this repaired candidate. No tag or installed loader
was changed.

Not checked: actual browser motion, native keyboard/pointer input, external
GSAP/Webflow Interactions cancellation, native task scheduling, rendered focus,
assistive technology, devices, physical display ratios, Canvas/Preview, linked
consumer installation/update, network/CDN loading or publication. Existing
browser, human and release gates remain open. Custom here means the runtime's
configured Custom preset; no third-party animation engine was loaded.

Continue on main. Review this record and STATUS before further work. Preserve
immutable releases, public hooks, pending Acceptance and the existing separate
scroll-lock, Library, browser and release boundaries.
