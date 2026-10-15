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
