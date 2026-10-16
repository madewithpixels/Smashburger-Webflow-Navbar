# Combined candidate release preflight — follow-up

16 October 2026 — Codex (night shift), brief #91. Serves R-121, R-125 and
R-155. Acceptance remains pending.

## Starting point and checks

- Canonical Git root and Boss route are this SmashBurger folder and `smashburger`.
- Started on `main` at `a42bfcc284688ef5a4aaca270a7bf2b50509d6cf`, clean. Since the recorded reviewed baseline `5ee299f`, the only commit is the Lite build sheet (`a42bfcc`). The named candidate source/build commit exists at `9211a9f5871b9de30a613b0bf7d5118035858d86`; its saved `candidate/` tree matches the current checkout byte for byte.
- Rebuilt that exact commit in a disposable local clone with its Git objects and the existing `node_modules` linked in. `npm run check:dist` passed and reported the saved candidate reproducible without changing its files.
- `SMASHBURGER_CANDIDATE=1 npm run test:candidate` passed 685/685, with 0 failures, skips or TODOs. This includes distribution/loader checks, class migration and offline upgrade/rollback fixtures.
- `npm run check:namespace` passed and confirmed all 17 protected v0.2.6 files byte-identical to their recorded SHA-256 pins.
- The first disposable source-archive attempt could not read a historical pinned Git object because the archive had no `.git` metadata. It wrote no repository files. Repeating in a disposable local clone resolved that setup issue; it was not a candidate defect.

## Candidate inventory

The entries below are the 19 checked-in candidate files. Sizes are bytes;
SHA-256 values identify these current candidate bytes. They are inventory values,
not a release approval or a promise that any proposed URL exists.

| File | Bytes | SHA-256 |
| --- | ---: | --- |
| `candidate/demo/navbar-light.browser.js` | 21,204 | `13288d61c6b7840faf6dad8b9c08ac85fbd64f977cda889c2b3faac6322a7648` |
| `candidate/dist/navbar-light.css` | 25,182 | `6bf5f494e63f8edfe5b1cb8ca847c480a55c1d5192b3571b15fd3814bc81786f` |
| `candidate/dist/navbar-light.css.map` | 44,058 | `2a02de300e9b98fa51c0ade4bf20f11de3a79fa4a37252523591d2a1d63b2f5f` |
| `candidate/dist/navbar-light.js` | 21,284 | `cc0db3f23c604dd9e4c8652351911964749d1f2df5b571741644c7aadbe0a9ad` |
| `candidate/dist/navbar-light.js.map` | 35,871 | `c0ec514a6f42df17a45354e11678e312bcd47524e2fe1f7778c9b48c23f7ecb1` |
| `candidate/dist/navbar-light.min.css` | 22,985 | `6522b17414306e94ce276c1f42d2e117e4038a572f162fec4da1d78fecef7c8f` |
| `candidate/dist/navbar-light.min.css.map` | 44,059 | `3635ef3aa05edb610efbce7a70a57a144df79734c2744de87f82a40bba17c19c` |
| `candidate/dist/navbar-light.min.js` | 13,482 | `9b429bc7bbdfb05c588cee6fd768da9c3f86ea58d9e0684b847091933a1b48ed` |
| `candidate/dist/navbar-light.min.js.map` | 36,071 | `0415e1d3bcde7188cacbb1ef8609ded3d5bd8163909ea539f08d1772cd71dc2f` |
| `candidate/lite/review-examples.css` | 1,467 | `bad536fcaa8dfc5e572f3712131a03260fdc11756d88a5f51780bc9d92597bd4` |
| `candidate/lite/review-examples.html` | 2,900 | `6c213d3aff72a656e04f3e434b0316ad9b762c37074ab1842b836c52cafce8bd` |
| `candidate/lite/workbench-references.css` | 472 | `cf7939a8dffbd02132628297c114ab7f0b9150e1d3202dbbe944779c57fee4bb` |
| `candidate/lite/workbench-references.html` | 1,857 | `48901998d7e6b5e5addb59bd7a35069baf977e1af2797f5bb77de0cd201b1f97` |
| `candidate/webflow/library/navbar-light-canvas-embed.html` | 4,025 | `9489e9824dc1c766d7f4e2e15af220b0bade1a8d6f2d701d63e76bee2679a670` |
| `candidate/webflow/library/navbar-light-cdn-candidate-loader.html` | 15,006 | `74601f13d0967e4575129e678a3141feb3b917538ea6493d25f79bd970a019fe` |
| `candidate/webflow/library/navbar-light-embed.html` | 49,894 | `3905ea8c762fd64f42de2d1df076fcdcdeca58a9aabefa7cdb75618e63ef8cf9` |
| `candidate/webflow/navbar-light-canvas-embed.html` | 4,182 | `c25b45bc03e41e493c38e473dc25cdc0aa20136ab4bf9f5e945d84e5a92e7464` |
| `candidate/webflow/navbar-light-cdn-loader.html` | 1,467 | `eb7c8d88967e7e140b89233d1ef177766c0d7709ca9a6c8a2394190f7d680853` |
| `candidate/webflow/navbar-light-embed.html` | 49,605 | `f371d5d879cf311209d57d04d6297df47e312dd0b398ae5360424a3b2c6a64d2` |

Total candidate bytes: 395,071. The two regular self-contained Embeds are below
Webflow's 50,000-character build limit (49,605 and 49,894 characters).

## Provisional URLs and integrity

- Candidate minified CSS SHA-384 SRI: `sha384-CHBz/LfxkFBbjeXMGi5tQVHiA80e1z+LAEpsnCpYYz9E6L4xgm0REid6pBvUHe0N`.
- Candidate minified JavaScript SHA-384 SRI: `sha384-7S/JKvh0+O4dqyR0rDbJuJPaTzZ9xB+YEGxxjo1I1ynXao9TWwlpivNhimDUN5SL`.
- The illustrative loader currently names `https://cdn.jsdelivr.net/gh/madewithpixels/Smashburger-Webflow-Navbar@v0.3.0-rc.1/dist/`. Both URLs and hashes are **provisional** until Michael authorises the release version and tag, exact promoted bytes are selected, and CDN delivery is checked. Do not install this loader.
- The separate Library verification loader is pinned to commit `ddb83c79934914ef0f03f3f012ee2743154153f7`. Its CSS SRI is the value above; its JavaScript SRI is `sha384-9cGtXQ4jePBy9MF0q3zmhELqfYUY4xFdEhJpmgOW3nytWjUbInNnjdTGfv9qv+JP`. This pin is for an authorised test only and predates the overlapping-overlay scroll-lock fix; it is not the combined release loader.
- Protected v0.2.6 files and their existing release pins are unchanged. Keep old URLs available and do not mix the legacy class family with the candidate files.

## Upgrade and rollback checklist

1. Before any authorised Webflow change, name and verify a restorable backup of the selected test site and record the exact component, page and delivery mode.
2. Select one authorised destination. Keep its native links, properties, variants, assets, bindings, overrides, custom styles and project content; compare them before and after the class change.
3. Change the complete matched set: `mwp-css-nav` / `mwp-css-nav_*` structural classes to `sb-nav` / `sb-nav-*`, plus the matching CSS/JavaScript or self-contained Embed and delivery code. Keep `data-mwp-*`, variables, APIs/events, diagnostics and variant markers compatible. Never leave two delivery Embeds active.
4. Read back the saved source; verify all properties, variants, bindings and assets; then check Preview, published staging code, exact asset requests/SRI, keyboard behaviour and native fallback. Sharing, publication and release each need separate authority.
5. For rollback, restore the matching saved component and backup as one set: legacy classes, compatible v0.2.6 CSS/JavaScript or Embed, delivery URLs and integrity metadata, bindings/assets and saved overrides. Do not roll back by changing only a CSS or script URL.
6. Re-read the restored destination and compare it with the backup. Verify the old pinned assets and native/keyboard behaviour before calling recovery complete. Preserve the candidate and v0.2.6 files for review.

The offline suite exercises source-to-candidate-to-exact-rollback preservation.
No live linked-consumer upgrade or cloned Webflow rollback has been rehearsed.

## Still needed before a real versioned release

- Chrome rendering of this exact combined candidate, including the recorded widths, short-height Full-width and Right layouts, scrolling, focus/Escape, overlap/reversal, reduced motion, Custom animation and blocked-script fallback. The current run did not open a browser.
- Approved five-resource Library share, then a backed-up, named test consumer with readback of properties, variants, bindings, assets and overrides; confirm update, unlink and cloned rollback without disturbing authored content.
- Actual Webflow Preview and staging browser proof, including exact CSS/JavaScript requests, SRI and fallback. Existing staging evidence is a native fixture or older component, not this combined Library release.
- Human accessibility and physical-display 2×/3× icon checks, linked to the exact candidate/release tested.
- Michael's version and tag approval; select exact release files, promote/build the stable loader, verify the released URLs and hashes against CDN bytes, and only then consider separately approved Library changes or publication.
- Review all evidence and record Michael's Acceptance. Acceptance stays pending.

No candidate, release, pin, tag, remote or Webflow file/state was changed in this
preflight. A dated STATUS handoff is included here because this brief requires
committing only this note; it is not an Acceptance update.
