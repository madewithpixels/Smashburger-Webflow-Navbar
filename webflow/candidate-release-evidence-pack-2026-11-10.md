# Candidate-to-release evidence pack

10 November 2026 — brief #430. Serves R-121, R-125 and R-126. This pack records
local evidence for review. It does not approve a release, Library share, consumer
update, rollback or archive.

## Candidate snapshot

- Package: `smashburger-webflow-navbar` version `0.3.0-rc.1`.
- Checked commit: `6cc44f62b9f527aab7d31d700c614937623f7602` (`6cc44f6`), local `main`.
- Candidate tree: 19 generated/maintained delivery files under `candidate/`; 395,071 bytes in the last recorded clean-checkout inventory. The paths and SHA-256 values below were read from the current checkout after the successful gate.
- Build/check source: [`package.json`](../package.json), [`scripts/check-release-candidate.mjs`](../scripts/check-release-candidate.mjs), [`scripts/build-paths.mjs`](../scripts/build-paths.mjs). Build output defaults to `candidate/`; the check builds into a disposable comparison location and preserves the committed candidate tree.

## Local results and limits

- `npm run check:release` exited 0 on the checked commit. It rebuilt and byte-compared candidate output; ran the runtime CSS specificity guard; checked class namespace, retained contracts and protected release files; compared Library CSS aliases; and ran serial source/candidate tests. Source: the command in [`package.json`](../package.json) and the consolidated gate in [`scripts/check-release-candidate.mjs`](../scripts/check-release-candidate.mjs).
- Candidate rebuild matched all current paths and bytes. Protected check: all 17 historical v0.2.6 files matched their Git baseline; stable working files matched v0.2.9. Source: [`scripts/check-class-namespace.mjs`](../scripts/check-class-namespace.mjs), compatibility baseline in `compatibility/`, and gate output.
- Library CSS comparison: content matches after trimming trailing whitespace only; lengths were 29,071 expected and 29,070 saved. Hashes differed (`34f7067b9edd436bf570d603267112a685d8bebde4bc0b3c66b3aca5e20aa3f7` expected, `e6ae0212a34a2cebd3add1312ed29a6f7419220ec00ce1175075f56e9bb63d52` saved). Preserve this diagnostic; it is not byte identity. Source: [`scripts/compare-library-embed-css.mjs`](../scripts/compare-library-embed-css.mjs) and gate output.
- Serial maintained-source/candidate suite completed successfully as part of the gate. It includes 15 expected TODO cases for retained v0.2.9 defects in immutable outputs; TODO means recorded known behavior, not a failed candidate assertion. Source: test output and the retained-defect notes in [`webflow/v0.2.9-release-verification.md`](v0.2.9-release-verification.md).
- These are local checks. They do not establish hosted workflow success, Designer/Preview/published behavior, CDN delivery, approval or acceptance.

## Candidate file SHA-256 inventory

Refresh with `find candidate -type f -print0 | sort -z | xargs -0 shasum -a 256` after the gate. Each hash identifies the current local file bytes.

| File | SHA-256 |
| --- | --- |
| `candidate/demo/navbar-light.browser.js` | `7649a519d26d5dc17327ac0f6f6b6b182acb6eb619afd656d55beb553b908bcd` |
| `candidate/dist/navbar-light.css` | `22ff5988ce1144dff4eef02b3f25abf3394f84660d4344f7cecb5dd6f8c8af7c` |
| `candidate/dist/navbar-light.css.map` | `7a64f2fcd6f2c326710f673d598a110d8585d14c71c552b4e9c96a00093352b0` |
| `candidate/dist/navbar-light.js` | `af03d79ba1495e8f109b2b84860d4e317e6bda7c9a50847a1447460d9e663ca7` |
| `candidate/dist/navbar-light.js.map` | `f39fb1542eaa1ce8a3a237b6913cd4560554094e1787a36506832a6234ec1992` |
| `candidate/dist/navbar-light.min.css` | `05529db26b69a3d09d0963397ae8f497ba93f7454bdb9d70ceab62d6c067bd0b` |
| `candidate/dist/navbar-light.min.css.map` | `0e6878ff402c25af3825897b100220fdc720fabe2aad376292fc4ccab87df3d3` |
| `candidate/dist/navbar-light.min.js` | `ea528bf87aa637f9896a092e87573720948b75b7ef2164680905bb0035de4ecc` |
| `candidate/dist/navbar-light.min.js.map` | `a40fb3102082dcf0ed0708e51b552f1ce3ee139cf018fe76a2e582f53fc137a0` |
| `candidate/lite/review-examples.css` | `bad536fcaa8dfc5e572f3712131a03260fdc11756d88a5f51780bc9d92597bd4` |
| `candidate/lite/review-examples.html` | `a82609ef7f9d0e30e0c2c52fa3d057d7821ec1e050ceb62f9953140c33c6399b` |
| `candidate/lite/workbench-references.css` | `fed99bdfdf90d1b764762a3e9a3e80199ddee33b9b872b1750c2fea58aaf6abe` |
| `candidate/lite/workbench-references.html` | `1d235aa06d469550c607631a3ef10db0c1f133d4a928c79465eec8d0f9cc1696` |
| `candidate/webflow/library/navbar-light-canvas-embed.html` | `74829bff7c1e4abe7e64134dd5d27ed4e36e2db4aeb5262e633df3c687490bcb` |
| `candidate/webflow/library/navbar-light-cdn-candidate-loader.html` | `52bfac29e3599baad7ce81154b11fb143cbc8c313de0e9590d1c7524a7ae7239` |
| `candidate/webflow/library/navbar-light-embed.html` | `bae1096445d835c0cd74f5c9b7cfdba124de4acb6fa3b9ea1f3245deb943ca7f` |
| `candidate/webflow/navbar-light-canvas-embed.html` | `c25b45bc03e41e493c38e473dc25cdc0aa20136ab4bf9f5e945d84e5a92e7464` |
| `candidate/webflow/navbar-light-cdn-loader.html` | `d8b02e372b2666bb6d229e32940cfc769a468847939012e05ec28c94dab2ceeb` |
| `candidate/webflow/navbar-light-embed.html` | `75058e540de02475826ff33dffdfe038b4ce384786ca550d2fb592d9fe596c92` |

## Exact-version loader metadata

The ordinary candidate loader is explicitly labelled unreleased and says not to
install it. [`scripts/cdn-loader.mjs`](../scripts/cdn-loader.mjs) builds versioned
asset paths, SHA-384 integrity and `crossorigin="anonymous"` metadata. Its
illustrative base is
`https://cdn.jsdelivr.net/gh/madewithpixels/Smashburger-Webflow-Navbar@v0.3.0-rc.1/dist`;
this tag and URLs are proposed only and were not read from the CDN.

- CSS file: `navbar-light.min.css`; SRI:
  `sha384-cgvZQHb1gNQRmNho3M2RGa6Xu4rRJVfl+20RsKwJcR9ukhG/cjXqlY4QHFzMOsAo`.
- JavaScript file: `navbar-light.js`; SRI:
  `sha384-hQG8xkWFOjYGs4rIb9ISWbCYDd6N6mh3yvb+eyeS1heuq57pr6HD3kQGd+gLA71G`.
- The separate Library verification loader is pinned to exact commit
  `ddb83c79934914ef0f03f3f012ee2743154153f7`; it is a test pin, predates the
  overlapping-overlay fix and is not the proposed release loader. Its history and
  SRI evidence remain in [`webflow/library-sb-nav-candidates-2026-10-15.md`](library-sb-nav-candidates-2026-10-15.md).

## Separate gates before any promotion or retirement

- **Release promotion (R-125):** Michael must choose/approve the release version
  and tag, and select the exact promoted bytes. Then build the stable loader and
  verify the new URLs and SRI against delivered CDN bytes. A hosted workflow run,
  browser rendering, accessibility/device checks and Michael's review remain
  distinct. The existing v0.2.9 release record is [`webflow/v0.2.9-release-verification.md`](v0.2.9-release-verification.md).
- **Library sharing (R-126):** Michael must approve the exact five-resource Share
  review already recorded in the Library evidence. Then verify the backed-up named
  consumer's linked properties, variants, assets, overrides and class prefixes;
  fresh unlink; update; rollback; and real Webflow CDN/fallback behavior. The prior
  review flags are unresolved and must not be described as candidate-only sharing.
- **Consumer update:** separately authorised update on the named consumer, with
  before/after readback and rendered checks. Staging publication permission does
  not itself approve Library sharing or a production consumer update.
- **Rollback:** the offline mapping rehearsal is local evidence only. A named,
  backed-up cloned Webflow consumer must exercise update and full paired rollback,
  then compare restored component, bindings, assets, overrides and delivery against
  its saved baseline. Checklist: [`webflow/r115-cloned-site-upgrade-rollback-checklist.md`](r115-cloned-site-upgrade-rollback-checklist.md).
- **Archive (R-127):** retain the old compatibility repository until the new
  release and old pinned URLs are independently verified. Archival itself needs
  Michael's separate authority; no archive or old-URL check was made here.

## Refresh procedure

Use [`webflow/clean-checkout-release-rehearsal-2026-11-10.md`](clean-checkout-release-rehearsal-2026-11-10.md)
for the fresh-tracked-files rehearsal when reviewing a later candidate. Record the
new full commit and tool versions, run the existing build/dist/candidate/release
checks in a disposable clone, capture the entire gate output and clean tracked-file
status, then replace this snapshot's version, commit, results, inventory and SRI.
Preserve older packs and release/Library records as historical evidence.

## Records checked

- [`webflow/clean-checkout-release-rehearsal-2026-11-10.md`](clean-checkout-release-rehearsal-2026-11-10.md)
- [`webflow/release-preflight-followup-2026-10-16.md`](release-preflight-followup-2026-10-16.md)
- [`webflow/library-sb-nav-candidates-2026-10-15.md`](library-sb-nav-candidates-2026-10-15.md)
- [`webflow/v0.2.9-release-verification.md`](v0.2.9-release-verification.md)

No prior evidence was edited. No tag, publishing, CDN read, Library sharing,
Webflow change or release claim was made.
