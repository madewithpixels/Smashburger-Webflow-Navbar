# Candidate-to-release evidence pack

12 November 2026 — brief #564. Serves R-121, R-125 and R-272. This is a new
local snapshot linked to the [10 November 2026 pack](candidate-release-evidence-pack-2026-11-10.md),
which remains historical. Neither record approves a release, Library share,
consumer update, rollback, archive or Michael's Acceptance.

## Exact candidate checked

- Package: `smashburger-webflow-navbar` version `0.3.0-rc.1`.
- Checkout: `/Users/michaelauty/Work on MacStudio/Smashburger-Webflow-Navbar`, branch `main`.
- Checked commit: `1437345a5ef22e14339028d66aacac70c41d60fc` (`1437345`).
- The brief describes `9fd984c` as later than the old snapshot. Local Git history shows the reverse: `9fd984c` is an ancestor of `6cc44f6`. The candidate files' Git blob IDs at `9fd984c`, `6cc44f6` and this checked commit are identical, and `git diff 6cc44f6 HEAD -- candidate` is empty. The Embed change was therefore already present in the old snapshot; it is not a new candidate-byte change after that snapshot. The current checker independently rebuilt the output and confirmed reproducibility.
- The current candidate inventory contains 19 files totalling 384,541 bytes. The historical 10 November pack reports 395,071 bytes, although its listed per-file hashes match this pack. That size discrepancy is retained as a historical-record inconsistency; this record reports the current measured total.

## Local check results and limits

- Ran `npm run check:release` at the checked commit with Node `v25.2.1` and npm `11.6.2`. Exit code 0.
- Candidate rebuild and byte comparison passed; existing candidate files were preserved.
- Protected release and retained-contract checks passed. The 17 historical v0.2.6 files matched their Git baseline, and stable working files matched v0.2.9.
- Library CSS alias expansion reported 28,691 characters for both maintained and readable Embed CSS. The saved Library CSS comparison was not byte-identical: 29,071 expected bytes versus 29,070 saved bytes, with trailing whitespace as the only difference. Expected SHA-256: `34f7067b9edd436bf570d603267112a685d8bebde4bc0b3c66b3aca5e20aa3f7`; saved Library SHA-256: `e6ae0212a34a2cebd3add1312ed29a6f7419220ec00ce1175075f56e9bb63d52`.
- The serial local suite completed: 710 tests, 695 passed, 0 failed, 0 cancelled, 0 skipped, 15 TODO. TODOs are recorded expected cases for retained v0.2.9 behavior, not candidate failures.
- The gate ended: `PASS: all local candidate checks passed. This is not Webflow rollout or release approval.`
- This record is local automated evidence only. No browser, Webflow, Preview, published site, CDN, hosted workflow, release promotion or human/device verification was checked.

## Current candidate file SHA-256 inventory

Hashes were printed by the release checker after its reproducible build check.

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

## Separate gates

The stable v0.2.9 files and pins were not changed. This candidate check does not
promote the candidate or change release status. Release approval and version/tag
choice, exact promoted bytes, hosted/CDN verification, Library sharing and linked
consumer checks, Webflow rendering, rollback, archive and Michael's review remain
separate gates. See the prior snapshot and [v0.2.9 release verification](v0.2.9-release-verification.md)
for their distinct evidence.
