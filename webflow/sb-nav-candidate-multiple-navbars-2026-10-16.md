# Multiple overlay menus in the unreleased candidate

16 October 2026 — Codex (night shift)

## Finding

Opening two overlay navbars in one document acquired the page scroll lock
twice. Closing the first navbar released the document styles immediately,
although the second overlay remained open. The page could scroll behind the
remaining menu. This was reproduced in the candidate runtime harness.

## Change

The candidate now keeps a per-document count of active overlay scroll locks.
It saves the original document overflow and scrollbar padding on the first
lock, and restores them only after the final navbar releases its lock. The
state is tied to each root's owner document.

## Checks

`SMASHBURGER_CANDIDATE=1 npm run test:built` rebuilds isolated candidate files,
checks retained contracts and historical file hashes, then runs the source,
candidate distribution, minified distribution and self-contained Embed suites.
The multi-navbar regression opens both overlays, closes each in turn and
asserts that scroll stays locked until the second closes.

The check exercises runtime state in jsdom. It does not establish rendered
stacking order, vertical placement, short-height scrolling, native keyboard
activation, Webflow Preview, staging or physical-device behavior. The fix is
unreleased; the protected v0.2.6 files and pins remain unchanged.

## Brief #68 — teardown, resize and separate documents

16 October 2026 — Codex (night shift), serving R-095 and R-155.

The existing candidate lock ownership passed the extended checks. No runtime,
visual design, public configuration, version, delivery pin or generated output
needed changing. Added `tests/runtime-scroll-lock.test.js` using the existing
runtime fixture and included it in `scripts/check-built-runtime.mjs`.

Four test groups run against maintained source, candidate distribution,
minified output and the self-contained Embed: 16 tests containing 64 scenario
runs in total. All use native Details toggle events in jsdom, with zero motion
duration; viewport/media changes and scrollbar widths are simulated.

- **Removing an open menu:** both removal orders, with zero and 24px simulated
  scrollbars. The surviving open menu keeps the lock. Repeated destruction,
  discovery of exactly one replacement, reopening it beside the survivor and
  calling the stale instance's destroy again do not release another owner.
  Removing the survivor still leaves the replacement's lock. Closing that final
  owner restores the document. A later initialisation/open/destroy cycle captures
  changed original styles rather than reusing an earlier snapshot.
- **Different collapse breakpoints:** Tablet/landscape, Tablet/portrait and
  landscape/portrait, each with root order reversed. At 991/767/479px the matching
  menu stays collapsed; one pixel above its boundary it expands and releases
  only its lock. The wider collapsed menu keeps the page locked until its own
  expansion. Returning to 320px closes both without acquiring a lock. Reopening
  in reverse order, destroying one and expanding the other also restores styles.
  Resizing after both are destroyed leaves the document untouched.
- **Drawer plus dropdown:** Left and Right drawers, each with both opening
  orders. Opening, destroying, reinitialising and closing the non-locking
  dropdown never releases the drawer's lock. Closing the drawer restores styles
  while the dropdown remains open. Destroying a reopened drawer also restores
  styles after the dropdown has closed.
- **Separate owner documents:** both instances use the same constructor and
  therefore the same lock map, rather than separately evaluated runtime copies.
  Opening the first leaves the second document unchanged. Both can then lock
  independently, using distinct original styles and 24px/16px scrollbar widths.
  Both destruction orders, repeated destroy, final close and repeat discovery /
  open / destroy cycles restore only the relevant document.

Restoration assertions cover `overflow: clip`, `scroll` and `auto`, with original
right padding of 13px, 7px and 9px. Each lock assertion checks the document marker,
hidden overflow and expected temporary padding. Each release assertion checks
that the marker is absent and both original property values have returned.

### Reproducible local evidence

- `SMASHBURGER_CANDIDATE=1 node --test tests/runtime-scroll-lock.test.js`:
  16/16 passed, no skipped tests or expected failures.
- `npm run test:candidate`: 81/81 passed, no skipped tests or expected failures.
  This deliberately builds only `candidate/`, then runs the namespace/contract
  guard and the complete candidate delivery suite, including the new lifecycle
  file. All 17 protected historical SHA-256 hashes match the checked-in baseline.
- The initial historical comparison, `node --test tests/runtime-scroll-lock.test.js`,
  reproduced nine failures: open-menu destruction, breakpoint release and owner
  document isolation in each immutable v0.2.6 delivery. In the first two groups
  the lock marker disappears while another menu needs it. In the third, opening
  the second document fails to lock that document. Source and mixed-menu checks
  pass. The existing expected-failure convention now applies only to these nine
  confirmed historical failures in this new file: rerun exits 0, with seven
  passes and nine executed TODO failures. Candidate mode never enables them.
- `npm run check`, new-file syntax checks and `git diff --check` passed. Runtime,
  candidate outputs, protected release files, dependencies and Acceptance stay
  unchanged. The starting tree was clean at `f11a8f0`; the only commit after the
  STATUS baseline `4b3be79` recorded the already-described integrity evidence.

### Limits and handoff

No browser, desktop app, Webflow, remote, dependency installation or release
operation was used. This verifies document style values and ownership, not
rendered scrolling, visual scrollbar compensation, overlapping-menu stacking,
short-height containment, physical keyboard/touch or assistive technology.
Separate-document checks establish lock isolation only, not general keyboard or
event binding across documents. Non-zero motion/reversal checks remain a
separate brief. Webflow Preview, linked consumer update/rollback and human/device
checks remain open. The older pinned Library loader still predates the lock fix.

The full ordinary `npm test` gate was not rerun here; brief #70 separately owns
the pre-existing unmarked historical overlap failures and maintained-source gate
coverage. These additions do not change that older test or repair v0.2.6.
