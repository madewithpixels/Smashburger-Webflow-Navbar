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
