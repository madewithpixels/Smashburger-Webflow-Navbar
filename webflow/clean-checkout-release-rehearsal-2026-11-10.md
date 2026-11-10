# Clean-checkout release rehearsal

This rehearsal checks whether the committed local candidate can be rebuilt and
pass the existing release-candidate gate from fresh tracked files. It is local
verification only. It does not approve a release, publish assets, verify Webflow
or browser behaviour, or replace the separately ordered release checks.

## Requirements

- A local clone of this repository at the commit being checked; no remote access
  is needed.
- Node.js and npm already available, plus an already-installed `node_modules`
  directory for this repository's exact `package-lock.json`. Do not install or
  update dependencies as part of the rehearsal.
- A temporary directory outside the repository for the rehearsal clone and log.

On 10 November 2026 the checked environment had Node.js 25.2.1, npm 11.6.2 and
the locked development dependencies `esbuild` 0.28.2 and `jsdom` 29.0.0 present.
Record the versions actually used each time; these values describe that run, not
a project-wide version pin.

## Procedure

From the repository checkout, run:

```sh
set -e
REPO_DIR="$PWD"
REHEARSAL_DIR="$(mktemp -d /tmp/smashburger-rehearsal.XXXXXX)"
git clone --quiet --local --no-hardlinks "$REPO_DIR" "$REHEARSAL_DIR/checkout"
ln -s "$REPO_DIR/node_modules" "$REHEARSAL_DIR/checkout/node_modules"
cd "$REHEARSAL_DIR/checkout"
node --version
npm --version
git rev-parse HEAD
npm run build
npm run check:dist
npm run test:candidate
if npm run check:release > "$REHEARSAL_DIR/check-release.log" 2>&1; then
  release_status=0
else
  release_status=$?
fi
cat "$REHEARSAL_DIR/check-release.log"
printf 'check:release exit status: %s\n' "$release_status"
git status --short
git status --short --untracked-files=no
find candidate -type f -print | sort | while IFS= read -r path; do shasum -a 256 "$path"; done
```

Use the commit printed by the clone as the one being rehearsed. The local clone
has fresh tracked files; the symlink reuses installed dependencies without a
package-manager install or network access.

The commands above exercise the existing entry points in this order:

1. `npm run build` regenerates the candidate in the disposable clone.
2. `npm run check:dist` rebuilds into a disposable comparison folder and checks
   every candidate path and byte against the clone's committed candidate.
3. `npm run test:candidate` runs the existing candidate build, namespace and
   serial source/candidate test checks.
4. `npm run check:release` runs the unified gate, including `check:dist`, the
   protected v0.2.6 and retained-contract checks, Library CSS alias comparison,
   and the serial source/candidate tests. This command prints the version,
   checked commit, candidate SHA-256 hashes and expected protected-file hashes.

Capture the complete `check:release` output. Record its exit status, version,
full checked commit, all candidate artifact hashes, all 17 expected v0.2.6
hashes, and both final clone status commands. The dependency symlink may appear
as the clone's sole untracked `node_modules` entry; `git status --short
--untracked-files=no` must be empty after the build. The protected-file check
compares the protected files with their recorded Git baseline; do not edit those files.
After recording the results, remove only the temporary rehearsal directory
created for that run (`rm -rf "$REHEARSAL_DIR"`).

The commands intentionally repeat some candidate checks: the runbook exercises
each existing entry point, while `check:release` remains the single consolidated
gate. Do not add a second gate or interpret duplicate local passes as release
approval.

## 10 November 2026 rehearsal record

- Package version: `0.3.0-rc.1`.
- Checked commit: `9acbd1804d43fd0ec55de4b3d459ed224041f48a`.
- Local toolchain: Node.js 25.2.1; npm 11.6.2. Locked installed dependencies:
  esbuild 0.28.2 and jsdom 29.0.0.
- Fresh local clone: `npm run build`, `npm run check:dist` and
  `npm run test:candidate` completed successfully; candidate suite: 693 passed.
- `npm run check:release` is the authoritative consolidated output for the
  candidate artifact hashes and v0.2.6 protected-file hashes. It also reports a
  one-byte trailing-whitespace difference in the Library CSS comparison; the
  generated content matches after trimming that byte. Preserve and report that
  diagnostic rather than describing the files as byte-identical.
- On this machine the two full serial test runs took about ten minutes together.
- `npm run check:release` exited 0. Its suite reported 678 passed, 0 failed and
  15 TODO; the TODO tests concern retained known v0.2.9 defects.
- Protected v0.2.6 files were verified against their Git baseline; no protected
  release file was changed. The clone's only status entry was the untracked
  `node_modules` dependency symlink; no tracked file changed. Local checks do not establish Michael's approval,
  a hosted workflow result, Webflow rollout or live browser behaviour.

Candidate SHA-256 values from the consolidated gate:

- `candidate/demo/navbar-light.browser.js`: `7649a519d26d5dc17327ac0f6f6b6b182acb6eb619afd656d55beb553b908bcd`
- `candidate/dist/navbar-light.css`: `22ff5988ce1144dff4eef02b3f25abf3394f84660d4344f7cecb5dd6f8c8af7c`
- `candidate/dist/navbar-light.css.map`: `7a64f2fcd6f2c326710f673d598a110d8585d14c71c552b4e9c96a00093352b0`
- `candidate/dist/navbar-light.js`: `af03d79ba1495e8f109b2b84860d4e317e6bda7c9a50847a1447460d9e663ca7`
- `candidate/dist/navbar-light.js.map`: `f39fb1542eaa1ce8a3a237b6913cd4560554094e1787a36506832a6234ec1992`
- `candidate/dist/navbar-light.min.css`: `05529db26b69a3d09d0963397ae8f497ba93f7454bdb9d70ceab62d6c067bd0b`
- `candidate/dist/navbar-light.min.css.map`: `0e6878ff402c25af3825897b100220fdc720fabe2aad376292fc4ccab87df3d3`
- `candidate/dist/navbar-light.min.js`: `ea528bf87aa637f9896a092e87573720948b75b7ef2164680905bb0035de4ecc`
- `candidate/dist/navbar-light.min.js.map`: `a40fb3102082dcf0ed0708e51b552f1ce3ee139cf018fe76a2e582f53fc137a0`
- `candidate/lite/review-examples.css`: `bad536fcaa8dfc5e572f3712131a03260fdc11756d88a5f51780bc9d92597bd4`
- `candidate/lite/review-examples.html`: `a82609ef7f9d0e30e0c2c52fa3d057d7821ec1e050ceb62f9953140c33c6399b`
- `candidate/lite/workbench-references.css`: `fed99bdfdf90d1b764762a3e9a3e80199ddee33b9b872b1750c2fea58aaf6abe`
- `candidate/lite/workbench-references.html`: `1d235aa06d469550c607631a3ef10db0c1f133d4a928c79465eec8d0f9cc1696`
- `candidate/webflow/library/navbar-light-canvas-embed.html`: `74829bff7c1e4abe7e64134dd5d27ed4e36e2db4aeb5262e633df3c687490bcb`
- `candidate/webflow/library/navbar-light-cdn-candidate-loader.html`: `52bfac29e3599baad7ce81154b11fb143cbc8c313de0e9590d1c7524a7ae7239`
- `candidate/webflow/library/navbar-light-embed.html`: `bae1096445d835c0cd74f5c9b7cfdba124de4acb6fa3b9ea1f3245deb943ca7f`
- `candidate/webflow/navbar-light-canvas-embed.html`: `c25b45bc03e41e493c38e473dc25cdc0aa20136ab4bf9f5e945d84e5a92e7464`
- `candidate/webflow/navbar-light-cdn-loader.html`: `d8b02e372b2666bb6d229e32940cfc769a468847939012e05ec28c94dab2ceeb`
- `candidate/webflow/navbar-light-embed.html`: `75058e540de02475826ff33dffdfe038b4ce384786ca550d2fb592d9fe596c92`
