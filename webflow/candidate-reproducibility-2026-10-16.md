# Candidate verification preserves existing outputs

16 October 2026 — Codex (night shift), brief #72. Local verification support for
release preparation and distribution checks (R-125, R-155). Acceptance is unchanged.

## Behaviour

Previously, `scripts/check-dist.mjs` saved candidate bytes in memory, rebuilt
directly into `candidate/`, then reported differences. A stale result or failed
build could leave refreshed, newly generated or partially written files behind.
Source: the script at starting commit `475a545`.

`npm run check:dist` now snapshots paths and bytes, copies the candidate into a
new temporary directory and rebuilds only that copy. It compares both trees,
including empty directories and authored files. Matching output exits 0.
Differences exit 1 with the affected relative paths and instructions to run an
intentional build. A child build failure preserves its non-zero status; signal
termination or launch failure exits 1. Temporary output is removed in `finally`.
A missing candidate stays missing and is reported as stale once the build emits
output. Links and special filesystem entries fail before the build starts.

The original candidate is never a build destination during verification. Even
abrupt termination of the verifier cannot leave partial writes there; an abrupt
verifier termination may leave a disposable temporary directory behind. This is
an offline check of the trusted repository build, not a sandbox for arbitrary
build scripts. Concurrent edits during the check are outside its contract.

Build scripts use the shared output path, including the previously hard-coded
Library destinations. Verification sets `SMASHBURGER_BUILD_OUTPUT_ROOT` only in
its child environment. Without that override, `npm run build` and the individual
build commands continue to generate `candidate/`. Esbuild generates distribution
bytes in memory using the normal logical candidate path, then writes those bytes
to the selected destination. This keeps relative source-map paths identical.

Sources: [verifier](../scripts/check-dist.mjs),
[build paths](../scripts/build-paths.mjs),
[distribution build](../scripts/build-dist.mjs),
[Library build](../scripts/build-webflow-library-candidates.mjs).
No runtime, version, pin or integrity calculation changed.

## Bounded fixture checks

`node --test tests/check-dist.test.js` passes 9/9 with no skips or expected
failures. Each child command has a ten-second timeout; each test has a
fifteen-second timeout. Fixtures use disposable temporary roots and the actual
verifier/shared build-path scripts with a small controlled builder. They never
modify real candidate output or install dependencies.

- Matching binary bytes pass, including repeat verification.
- Stale bytes return 1, identify the path and recommend an intentional build.
- Newly generated nested files and empty directories return 1.
- Removed files and directories return 1.
- A partial build overwrites a file, removes authored content and creates new
  nested output before failing with status 7. Verification returns 7.
- A build child terminated after a write returns 1 and reports the signal.
- A missing candidate returns 1 without creating the original directory.
- A symbolic link is rejected without running the build or touching its target.
- A deliberate fixture build writes updated and new files to its normal
  candidate directory while preserving authored content.

Every verification case independently reads the complete fixture tree before
and after. Assertions compare binary file bytes, entry types, link destinations
and empty directories. This also proves temporary outputs were removed and an
inherited output override did not redirect the verifier into unrelated files.
Source: [executable checks](../tests/check-dist.test.js).

## Real-build evidence and limits

- Real `npm run check:dist` exits 0. An independent before/after readback confirms
  the candidate's complete paths, file modes and all 19 file SHA-256 hashes match.
- Real `npm run build` exits 0 and preserves the same snapshot with current
  sources. Generated distribution, source maps, Embeds, loaders and Library
  output remain byte-identical.
- Focused candidate-mode checks run the new fixtures, namespace/compatibility
  assertions and distribution/loader checks together: 16/16 pass, no skips or
  expected failures.
- All 17 protected historical hashes match
  [the immutable baseline](../compatibility/v0.2.6-baseline.json).
- Syntax checks, `npm run check` and `git diff --check` pass.
- Not checked: the full runtime suite or migration/rollback rehearsals; neither
  is needed for this build-tool change or included in this brief's verification.
- Not checked: browsers, Webflow, CDN/network loading, Library sharing or release
  publication. Their existing approval and verification gates remain open.

The exact focused command is:

```sh
SMASHBURGER_CANDIDATE=1 node --test --test-concurrency=1 tests/check-dist.test.js tests/class-namespace.test.js tests/dist.test.js
```

The normal test discovery includes the new fixtures automatically. Use the
focused command above to repeat this brief without running unrelated rehearsals.
