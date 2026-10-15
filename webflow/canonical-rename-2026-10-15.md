# Canonical repository and sb-nav candidate — 15 October 2026

Michael's completion brief in this chat explicitly authorises Codex to transfer the complete history and perform the necessary remote Git operations. It retains the backup, release, Library and compatibility gates. Product identity is SmashBurger (D-012); package identity is `smashburger-webflow-navbar` (D-013).

## Repository transfer

- Source: `/Users/michaelauty/Work on MacStudio/Webflow-Navbar-Light`, clean `main` at `0864f820670f78917d0726ae24a0b930506ff03a` before changes.
- Source origin: `https://github.com/madewithpixels/Webflow-Navbar-Light.git`.
- Destination: `/Users/michaelauty/Work on MacStudio/Smashburger-Webflow-Navbar`.
- Destination origin: `https://github.com/madewithpixels/Smashburger-Webflow-Navbar.git`. Its observed `Smashburger` spelling differs in case from the older proposal; GitHub accepts the configured remote. Product text remains SmashBurger.
- A fresh `git ls-remote --symref` found the destination empty. The source remote matched both local branches and all eight tags.
- `git bundle create ... --all` and `git bundle verify` made a complete backup at the retained old checkout's `.backups/smashburger-before-move-2026-10-15.bundle`. It includes private Codex refs and the detached trial worktree HEAD as well as source branches/tags. These local bookkeeping refs were preserved in the backup, not published as project branches.
- `git push --atomic <destination> 'refs/heads/*:refs/heads/*' 'refs/tags/*:refs/tags/*'` copied `main`, `codex/designer-extension-prototype` and `v0.1.0`, `v0.2.0`–`v0.2.6`. No force, mirror, prune, reset, rebase or history rewrite was used.
- The existing destination clone fetched its origin and fast-forwarded. `git fsck --full` passed. HEAD, the complete tracked tree, both branch tips, all tag object IDs and all history reachable from the branches/tags matched the source. Main contained 244 commits before the candidate work.
- The old remote, old release tags and detached prototype worktree were left alone. No old repository was archived or deleted.

The chat and boss commit tool remain bound to the old checkout. Candidate edits and the required `boss_commit` therefore use that checkout, then the canonical clone fast-forwards from it and pushes only to its own origin. This is a tool binding, not a new product/location decision. The canonical clone is the working destination for verification and subsequent work; the old checkout is retained.

## Candidate build and class mapping

Version `0.3.0-rc.1` identifies an unreleased candidate for the breaking class change (technical decision D-017). It is not a tag or published release. The complete accepted old-to-new map remains in [the namespace audit](class-namespace-migration-audit.md#chosen-class-mapping).

```text
header.sb-nav [data-mwp-navbar]
└── div.sb-nav-inner
    ├── details.sb-nav-menu [data-mwp-menu]
    │   └── summary.sb-nav-summary [data-mwp-trigger]
    └── nav.sb-nav-panel [data-mwp-panel]
        ├── div.sb-nav-primary
        │   ├── div.sb-nav-links
        │   └── a.sb-nav-cta
        └── div.sb-nav-secondary
            ├── div.sb-nav-socials
            └── div.sb-nav-contacts
```

Maintained source, the reference demo, regression markup, tests and candidate generated files use the accepted class family. The runtime's class-based panel fallback is `.sb-nav-panel`. The `data-mwp-panel` hook remains the preferred selector. Host demo classes remain host classes.

Every build command writes under `candidate/`, including unminified/minified distribution files and maps, self-contained/Canvas Embeds, browser JavaScript and an illustrative loader. That loader proposes exact canonical `/dist` URLs and SHA-384 values but is prominently marked **UNRELEASED; DO NOT INSTALL**. Its tag does not exist and the candidate bytes have not been promoted to top-level `/dist`.

Existing top-level distribution files, four generated/browser delivery files and the archived demo directory/ZIP remain unchanged. `compatibility/v0.2.6-baseline.json` protects all 17 historical files by SHA-256. The hooks inventoried from `0864f82` in `compatibility/runtime-contracts.json` remain in source and generated deliveries: data attributes, CSS properties, APIs, events, auto-init/version globals and variant markers. Diagnostic event names remain stable; new readable banners and console product text say SmashBurger. Historic readback documents keep the class names they actually observed and now link to this version boundary.

## Checks and evidence limits

- `npm run test:candidate`: 53/53 local checks passed after the extra renamed-panel fallback regression was added. Source, normal/minified distribution and Embed deliveries cover collapse boundaries, all 35 layout/motion pairs, nested Escape, focus, reduced motion, native fallback, missing CSS, timer cancellation and icon geometry. It also checks the candidate loader's URL/version/SHA-384 values and failure diagnostics.
- `npm test`: 90 checks, 75 passed, no unmarked failures; 15 known v0.2.6 generated-delivery defects remain marked TODO. Those historical bytes were deliberately preserved.
- `npm run check`, `npm run check:namespace`, `npm run check:dist` and `git diff --check` passed. Namespace guards reject legacy class selectors and HTML class tokens while requiring retained hooks; negative fixtures prove the guard catches legacy classes and removed APIs/hooks. Candidate generation is reproducible.
- Local in-app browser at `http://127.0.0.1:8765/demo/index.html`: candidate script URL and `.sb-nav` root confirmed; 1280px expanded and 393px collapsed/mobile open render inspected. Document widths matched both viewports. Mobile panel bounds were 0–393px. Closed submenu list stayed hidden. Nested Escape returned focus to Corporate info; outer Escape closed the menu, restored Navigation menu focus and set `aria-hidden="true"` and `inert`. Temporary viewport and tab were cleaned up. This is a local smoke check, not the full browser/Webflow acceptance matrix.
- Six live old CDN reads returned 200 and were byte-identical to the corresponding original tag files: CSS/JavaScript at v0.1.0, v0.2.0 and v0.2.6. URLs, lengths and SHA-256 are in `compatibility/old-cdn-verification-2026-10-15.json`. No CDN write or cache purge occurred.

## Remaining release gates and handoff

R-121 is complete for repository sources and local generated candidates, but remains **in progress** for the full roadmap scope: Webflow source editions, Library consumers and the future clonable still carry the released version. Acceptance remains Michael's.

Before publication (R-125/R-126), obtain the required Webflow backup, perform the versioned component/class/Embed change, read back the exact saved code and properties, complete Preview and published candidate checks, human/device accessibility and physical-display icon checks, and the planned release selection/approval. Generate the final `/dist` release loader from the promoted exact bytes before tagging; the candidate loader is not an installation instruction. Verify cloned upgrade/rollback (R-115) and old pins again before any retirement (R-127). This session creates no new tag, Webflow edit, Library share, publication or CDN release.

The old folder and compatibility remote remain. The destination clone is populated and selected for future work; this chat's workspace/boss binding cannot be changed by a Git operation. R-128's final workspace reopen and any later retirement remain recorded separately from the successful history transfer. Start future work from the canonical path above and check boss's registered path before starting unattended work there.
