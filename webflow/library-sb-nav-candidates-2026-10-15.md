# Library sb-nav migration candidates — 15 October 2026

## State, evidence and authority

**State:** prepared review candidates; R-121 and R-126 remain in progress.
**Evidence:** actual source-Library saved readback, Designer Canvas and self-contained Preview checks; local CDN/browser evidence separately labelled below.
**Michael's Acceptance:** pending. No Library share, consumer update, source-site publication, new release tag or stable CDN release was performed.

Michael authorised continuing the actual Library candidate work and gave Chrome full focus. His earlier staging-only publication approval covers New Smashburger Test. AGENTS.md retains explicit Library-sharing and release gates. The existing Git-transfer authority covers committing and syncing these records to the canonical repository.

## Backups and scope

- Source site: MWP Component Library, `6a0351de7c4e42148a81db6f`.
- Verified source backup: **Before sb-nav 0.3.0-rc.1 Library candidates — 15 Oct 2026**, displayed 19:32:26, 15 pages, 146 styles, 932 elements; no Saving indicator remained. [Screenshot](evidence/library-before-sb-nav-backup-2026-10-15.jpg).
- Target site: New Smashburger Test, `6ad10fe7ca9deaf9a5ea7498`.
- Verified target backup: **Before Library candidate install — 15 Oct 2026**, displayed 20:08:19, 1 page, 26 styles, 45 elements. No Library has been installed there by this work. [Screenshot](evidence/new-smashburger-before-library-backup-2026-10-15.jpg).

The released self-contained definition `5e7a8748-7a91-3b5a-7978-b6a45d39743d`, released CDN definition `d095c22c-0919-f8ea-3180-d7c64046c04d`, and previous one-Base unlink trial `57de15ba-cabc-b586-4053-94e085e880f5` remain available. This class-only rehearsal retains the original editions' five variants; it does not replace the separate one-Base Lite/unlink direction.

## Prepared definitions and retained content

| Edition | Candidate definition | Source draft |
| --- | --- | --- |
| Self-contained | `f5b0a303-de0f-3ff8-adbe-6369ae720de8`, **SmashBurger 0.3.0-rc.1 candidate** | `6ad11ecdf2e3c943fd2cfe24`, **SB sb-nav 0.3.0-rc.1 verification** |
| CDN verification | `6dc7881f-30d8-cf8a-c2c5-1efdfa57f459`, **SmashBurger CDN 0.3.0-rc.1 candidate** | `6ad1242a9d9f8424d3ce23db`, **SB CDN sb-nav 0.3.0-rc.1 verification** |

Both definitions retain 144 native nodes, 60 properties, five collapse variants, nine asset-backed Images, 67 property bindings, settings inspector, content/links, Details/Summary/Nav structure, backdrop and two Embeds. Non-variant property definitions/defaults and asset IDs match their respective originals. Variant IDs are new because these are duplicates; names, order and declarations are retained. All 36 attached class names use the accepted sb-nav mapping, including four redundant custom class attributes inherited from the originals.

Created new class records rather than renaming globally shared legacy classes. All 146 pre-existing global style records and the 214 original-edition raw-settings records match the before snapshot. The 34 non-empty original variant declaration records also match after the work. Fresh reinspection of the previous unlink trial found its 79-node tree and 59-property/one-Base metadata unchanged.

Duplication also copied 34 variant override records onto the old classes for the new variant IDs. These were no longer used after class reassignment. Removed their declarations only for the duplicate variants, read back all 34 as empty, and verified the 34 replacement sb-nav override records still match. No original variant ID was cleared.

The self-contained draft ends with exactly five candidate instances: base Mobile landscape `ed6ca70a-c285-3ffb-2a4c-4e562802e73a`, Never `ce31f660-41d4-f3fe-0aff-6239cf4cfbc9`, Tablet `deed5665-d3e9-ba47-30f4-db1de481ce0c`, Mobile portrait `3b46e7e6-a276-5b5e-51db-6323ccedeab5`, Always `f62a3479-5a9b-c87c-b501-18f158ce183e`. The isolated CDN draft contains instance `8a7b779c-1d76-874b-2c2e-333cfa531720`. An unused default comparison instance created during this session was removed from the self-contained draft; the definition and isolated CDN fixture remain.

## Candidate delivery

The new names generate new Webflow variant marker names. D-018 records candidate-only aliases, retaining old hooks, and the unmarked Mobile landscape base fallback. These derivatives live under `candidate/webflow/library/`; the ordinary candidate source and all historical release bytes remain untouched.

- Self-contained runtime: **45,516 characters**; CSS is minified after alias expansion, and JavaScript matches the ordinary source candidate byte for byte.
- Canvas helper: **4,025 characters**, style-only and scoped to Designer.
- CDN verification loader: **14,956 characters**, including its inline variant-alias layer. The alias layer deliberately omits the CSS-ready sentinel, which must come from fetched CSS.
- Source MCP readback matched the intended Embed files exactly, including restoration after the temporary CSS-only attempt.

The CDN test pin uses already-pushed commit **ddb83c79934914ef0f03f3f012ee2743154153f7**:
`https://cdn.jsdelivr.net/gh/madewithpixels/Smashburger-Webflow-Navbar@ddb83c79934914ef0f03f3f012ee2743154153f7/candidate/dist/navbar-light.min.css`
and the corresponding `.js` file. Read both successfully and compared their bytes with local candidate output. SHA-384 values matched the loader:

- CSS: `sha384-CHBz/LfxkFBbjeXMGi5tQVHiA80e1z+LAEpsnCpYYz9E6L4xgm0REid6pBvUHe0N`.
- JavaScript: `sha384-9cGtXQ4jePBy9MF0q3zmhELqfYUY4xFdEhJpmgOW3nytWjUbInNnjdTGfv9qv+JP`.

This is an immutable commit-based verification pin, not a published semantic release. The illustrative tag-based loader at `candidate/webflow/navbar-light-cdn-loader.html` remains unsuitable for installation. The original Library CDN loader still matches its exact v0.2.6 baseline. No CDN upload, tag creation or old asset change was needed.

## Checks and their limits

### Actual source Library

At 1279, 820, 667 and 393 CSS pixels, all five self-contained candidate variants had the intended expanded/collapsed Canvas presentation and zero horizontal overflow: **20 Canvas cases**. The same **20 Preview cases** initialised correctly. Ten collapsed cases passed pointer opening, Escape closure, ARIA/inert, focus return and horizontal panel containment. All nine original icons loaded. Nested keyboard Escape passed on the final Always fixture: Space opened More, the first Escape closed only More and focused its summary, and the next Escape closed the outer menu and focused Navigation menu.

The stacked comparison page lets later headers paint over earlier panels. An initial pointer attempt on the first fixture's submenu therefore hit a later fixture's link; it supplied no submenu evidence. The successful nested check used keyboard input on the final Always fixture. These comparisons do not prove multi-navbar overlay stacking or vertical containment for every page placement.

[Canvas matrix](evidence/library-sb-nav-canvas-matrix-2026-10-15.json), [Preview matrix](evidence/library-sb-nav-preview-matrix-2026-10-15.json), [nested Escape](evidence/library-sb-nav-nested-escape-2026-10-15.json), [Designer screenshot](evidence/library-sb-nav-designer-mobile-2026-10-15.jpg), [Preview screenshot](evidence/library-sb-nav-preview-mobile-2026-10-15.jpg).

Preview initially stalled; one saved-draft reload cleared the self-contained compilation. A later temporary CSS-only test and the isolated CDN-only Preview both remained at Compiling custom code through one reload each. No behavior claim is made for those stalled attempts. The full self-contained runtime was restored and verified at 45,516 characters. Both drafts are left in normal Design mode.

### Local CDN/browser reconstruction

Captured the isolated CDN candidate's saved native Designer markup. `scripts/build-library-browser-fixture.mjs` reconstructs only saved authored base/breakpoint/variant CSS in a neutral host, removes Designer Embed placeholders, and inserts the exact verification loader. Generated local pages are ignored temporary output, not Webflow exports or deliverables to install.

In the in-app browser, all five variants at 1279, 820 and 393px passed: **15 runtime cases** with successful stylesheet/script status, SRI-enforced loading, expected collapse state, horizontal containment, Escape, ARIA/inert and focus return. **15 runtime-script-omission cases** passed native Details opening/closing with hidden/visible panel state and no enhanced ready/ARIA state. This omitted the SmashBurger runtime script; it did not disable all browser JavaScript, and is not a Webflow Preview, linked consumer or published fallback result.

[Native markup](evidence/library-cdn-designer-native-html-2026-10-15.html), [runtime matrix](evidence/library-cdn-local-runtime-2026-10-15.json), [fallback matrix](evidence/library-cdn-local-fallback-2026-10-15.json), [local mobile screenshot](evidence/library-cdn-local-mobile-open-2026-10-15.jpg).

### Reproducible local checks

`node scripts/check-webflow-library-candidate.mjs` verifies the saved before/after trees, properties, bindings, Embeds, source settings/styles, original variant declarations and duplicate override cleanup. `npm run test:candidate` passes **53/53**. Namespace/compatibility checks retain all 17 protected historical files byte for byte. Candidate generation is reproducible. Syntax and `git diff --check` pass. No dependency installation or upgrade was performed.

[Baseline snapshot](evidence/library-sb-nav-baseline-2026-10-15.json) and [candidate snapshot](evidence/library-sb-nav-candidate-2026-10-15.json).

## Sharing gate and next action

The final Share updates review lists **five** resources: SmashBurger, SmashBurger CDN and SmashBurger CDN Unlink Trial as **Changed**, plus the two versioned candidates as **Added**. It still lists the three existing definitions after unused duplicate overrides were cleared. Their checked settings, original declarations and global styles match baseline; the reason for the remaining review flags is not established. Do not describe this as a candidate-only sharing payload.

The Library panel shows seven components, 26 variables, two tag styles, nine assets and five installed sites. Asset settings expose image folders, not a component-by-component share selector. No selection setting was changed, no share was submitted, and neither consumer nor source staging was published by the Library work. Source site metadata reported lastPublished/fullSiteCompiledAt `2026-10-14T19:48:56.470Z`, before this work.

[Exact review scope](evidence/library-sb-nav-sharing-scope-2026-10-15.json) and [review screenshot](evidence/library-sb-nav-share-review-2026-10-15.jpg).

Next: Michael reviews/authorises that exact five-resource Library update. After approval, apply/install only in backed-up New Smashburger Test; preserve its existing native fixture and the Library's two tag styles. Verify linked properties/assets/variants and non-default overrides, linked class prefixes, fresh unlink, update/rollback and actual staging fallback. Approval to publish New Smashburger Test staging already exists; it does not authorise other sites. Final release promotion/tag/SRI URLs, the Smashburger clean-install consumer rollout, Lite clonable and human/device sign-off remain separate gates. Keep the old repository and v0.2.6 pins until the release/compatibility retirement checks pass.

## Handoff

Continue from the canonical checkout. This running chat's boss commit tool is still bound to the retained old checkout, so its final commit is fast-forwarded into canonical. Read STATUS and this record first. No agent Acceptance was recorded. Local server and temporary verification tab were closed, viewport overrides reset, and Chrome is free. Review dialogs were cancelled; source and test Designers remain in Design mode. Do not replace the restored runtime with the temporary CSS-only attempt or install the illustrative tag loader.

