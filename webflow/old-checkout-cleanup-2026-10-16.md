# Old compatibility checkout restored — 16 October 2026

Codex. Michael explicitly asked to remove unwanted development from the old
checkout, return it to its pre-migration position and remove that folder from the
Codex project. This later instruction supersedes the earlier keep-untouched
instruction for this bounded local cleanup (D-019).

## Baseline and findings

A live read-only `git ls-remote` confirmed the old GitHub repository's main is
`0864f820670f78917d0726ae24a0b930506ff03a`. Its v0.2.6 tag object is
`61833279e10f4892bb58aaa0cf41793b23659b53`. No unwanted commits had been pushed
there. The local old checkout was on main at `e4a8f8d`, ten commits ahead, with
uncommitted STATUS/recovery notes. Three migration commits were already in
canonical history; the later seven were reconciled in canonical `0c87623`.
The current canonical runtime and its 685 passing candidate checks are unaffected.

## Recovery before cleanup

A complete recovery set is saved locally under the canonical ignored directory:

`.backups/old-checkout-cleanup-2026-10-16/`

- `checkout-before-cleanup.tar.gz`: the full old folder, including .git, ignored
  backups/dependencies and the uncommitted notes. 88,934,517 bytes. Every one of
  the 137 tracked/untracked file hashes was independently compared with archive
  contents before restoring the checkout.
- `history-before-cleanup.bundle`: complete Git history and 22 refs, including
  old main at e4a8f8d, both branches, all eight release tags, private local refs
  and the linked prototype worktree's detached HEAD. `git bundle verify` passed
  with complete history and no prerequisites.
- `before.json`: original HEAD, refs, worktree inventory, dirty state and hashes.
- `checksums.json` and `RESTORE.md`: backup integrity and recovery instructions.
- `untracked-after-reset/`: retained old backups, leftover candidate files,
  the empty test-helper directory and the recovery note moved out of the old
  checkout after restoration. They were preserved, not discarded.

Backup archive SHA-256: `a7a20a505b27de958401fc633fa2fffcf2d843cce252888025b8518c4870f6f5`.
Git bundle SHA-256: `5bf29e3352d3e9fc140612290fdc2cb8f2dd414c78dbb84e95f60aea4d2a128c`.
Both were reverified after cleanup. The archive includes a full Git snapshot;
review its linked-worktree metadata before restoring it at another path. Use the
bundle for isolated commit/content recovery and the archive for uncommitted notes.
No backup was uploaded or committed.

## Local change and verification

After the recovery set was verified, the explicitly authorised old local main was
restored with `git reset --hard 0864f820670f78917d0726ae24a0b930506ff03a`.
Only the old checkout's main/worktree changed. Remaining untracked paths were
moved to the recovery set with explicit paths; no broad clean/delete command ran.

- Old main and tracked tree now match the independently verified old GitHub main.
- `git status --short --branch` reports `main...origin/main`, with no pending files
  and no ahead/behind count. `git diff --exit-code 0864f82 --` exits 0.
- Every ref except local main matches the saved pre-cleanup refs, including all
  release tags and prototype-branch pointers. The detached prototype worktree
  remains registered at its original `8d819885` HEAD.
- Released CSS, JavaScript and both delivery Embeds match the baseline Git blobs.
- Canonical HEAD remained `71a9a87` during cleanup; its tested runtime/deliveries,
  dependencies and pinned compatibility files were not changed.
- Boss's `smashburger` mapping still points to the canonical path.
- Michael confirmed in this chat that the old folder was removed from Codex
  project settings. That is Michael's UI readback, not an automated observation.
  Computer Use refused access to `com.openai.codex`; no alternative UI bypass or
  direct edit of app state was attempted.

## Limits and handoff

No remote push, force-push, tag change, GitHub archive/deletion, CDN change,
Webflow change, release or Acceptance change occurred. The old GitHub repository
continues to provide the historical version pins. R-127's eventual remote archive
remains subject to its existing new-release and compatibility checks.

Use the canonical checkout for all development. The old folder is a clean frozen
compatibility copy at 0864f82, outside this Codex project's configured folders.
The full pre-cleanup state remains recoverable from the local backup set. No
runtime tests were repeated: only the old compatibility workspace and current
documentation changed, and exact Git/blob checks verify that bounded restoration.
