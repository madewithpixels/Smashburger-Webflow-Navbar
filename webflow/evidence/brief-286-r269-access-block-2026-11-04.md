# Brief 286 — R-269 site comparison handoff — 4 November 2026

## Outcome

The Designer / Preview / published comparison did not run. The authorised disposable site, **New Smashburger Test** (`new-smashburger-test.webflow.io`), opens in signed-in Chrome and its dashboard is accessible. The current Webflow MCP `list_sites` response contains 16 sites but omits this site. Read requests using its previously recorded site ID `6ad10fe7ca9deaf9a5ea7498` returned `404 resource_not_found: The site cannot be found`. The separate **Smashburger** site was not substituted.

## Candidate identity

Local checked baseline: commit `e555cf7f1032e7c5481aa62c35dcfa38e4b39224`.

| File | SHA-256 |
|---|---|
| `candidate/webflow/navbar-light-embed.html` | `ad896dde4860070fb960ee20019c8a089283fbe52fd1cca9629fb4d52712a074` |
| `candidate/webflow/navbar-light-canvas-embed.html` | `c25b45bc03e41e493c38e473dc25cdc0aa20136ab4bf9f5e945d84e5a92e7464` |
| `src/navbar-light.css` | `93ff5d35574f0179156cc2bc2325f3bf666dfc1cc4af0c73187f8edd97ff2ece` |
| `src/navbar-light-canvas.css` | `7d4b75a754c5a8ef5dc0f9125ff67e4770a0b185e45f7f92414cc66a4838e570` |

## Backup and site record

- Site: **New Smashburger Test**; dashboard `webflow.com/dashboard/sites/new-smashburger-test`; staging page `https://new-smashburger-test.webflow.io/`.
- Before: **boss · brief #286 · before**, created from the Designer Backups panel on 4 November 2026. The Designer save dialog remained on “Loading”; the dashboard Backups list subsequently showed the named backup (1 page, 26 styles, 45 elements). Boss recorded it as confirmed, route `designer`.
- After: **boss · brief #286 · after**, created through the dashboard Backups page on 4 November 2026. The refreshed Backups list showed it (1 page, 26 styles, 45 elements). Boss recorded it as confirmed, route `dashboard`.
- No page, component, class, CMS item, custom code, interaction, publish setting or site content was changed. No snapshot exports were possible because the Webflow data tools could not resolve this site. Interactions and animations are not represented by snapshots in any case.

## Checks and limits

- Chrome displayed the named test site's Designer, dashboard and existing test page. This only confirms the site is present in the browser account.
- Webflow MCP `list_sites` did not include New Smashburger Test. `get_site`, `list_pages`, and site-instruction search with the previously documented ID each returned the site-not-found error.
- Designer Canvas open/closed comparison, Style panel readback, Preview, published page, computed styles, screenshots for comparison, all five layouts, desktop/mobile sizes, open/closed behavior, keyboard and focus handling, reduced motion, short-height scrolling, no-script fallback, upgrade and rollback were **not checked**.
- No Webflow snapshot JSON or comparison screenshots were produced. The older October 2026 fixture screenshots and browser checks are historical and do not prove R-269 candidate behavior.

## Resume and rollback

First make **New Smashburger Test** available to the Webflow MCP connection, then verify its current site ID with `list_sites` and confirm it uniquely matches the dashboard and `new-smashburger-test.webflow.io`. Re-read/export the current site before any mutation. Repeat the before-backup gate for the resumed brief if Boss requires a new run's backup, then apply only the candidate and authored-style test setup described in [the R-269 bounded follow-up](../runtime-styling-boundary-2026-10-31.md). Publish only to the Webflow subdomain.

If the comparison fails or needs full rollback, open **New Smashburger Test → Settings → Backups**, find **boss · brief #286 · before**, press **Restore**, and verify the site returns to the saved 1-page / 26-style / 45-element state. The “after” backup is the post-attempt restore point; no site edits were made in this run.

## Exact URL follow-up — 4 November 2026

The current brief names `https://disposable-sb-test-site.design.webflow.com/`. Signed-in Chrome opened it in Designer as **Disposable SB test site**. Its dashboard backup page is `https://webflow.com/dashboard/sites/disposable-sb-test-site/backups`. This is not the **New Smashburger Test** named in the earlier handoff above; do not use that site's backups or rollback instructions for this site.

Before any structural change, the dashboard said **“No versions exist for this site.”** Therefore the brief's instruction that the before backup was already made could not be confirmed for this exact site, and no structural edits, candidate install, publishing, or comparison were attempted. Webflow MCP `list_sites` returned 16 sites and did not include Disposable SB test site, so no MCP snapshots of pages, styles, variables or custom code were possible.

The required closing backup was created in Designer under Settings → Backups as **boss · brief #286 · after**. The Designer reported “Site backup started”; the dashboard list then showed the saved backup (1 page, 0 styles, 1 element). Boss recorded this after backup as confirmed, route `designer`. No site content changed. The dashboard's before list was empty; this after backup is not a before restore point.

No comparison screenshots or computed-style evidence were captured. Canvas, Preview and published styling; all layouts and viewport sizes; open/closed behavior; keyboard/focus; reduced motion; short-height scrolling; no-script; upgrade and rollback remain unchecked. The earlier candidate hashes above identify the previous handoff's local baseline only; this follow-up did not verify that candidate on this site. Interactions and animations are not represented by the unavailable snapshot export.

To resume, make **Disposable SB test site** readable through the Webflow MCP connection and confirm a before backup for this exact site. Then export its before snapshot and run the bounded comparison on this site only. No rollback is required for this follow-up because no content changed; do not restore from the after backup as though it were the prior state.
