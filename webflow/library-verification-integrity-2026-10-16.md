# Library verification loader integrity repair

16 October 2026 — Codex (night shift), brief #67. Local candidate preparation
for R-125, R-126 and R-155; Acceptance remains unchanged.

The verification loader now authenticates the files its URLs actually name.
It stays pinned to `ddb83c79934914ef0f03f3f012ee2743154153f7` and version
`0.3.0-rc.1`. The older pin **does not include the latest overlapping-overlay
scroll-lock fix** in the maintained source/self-contained candidate. Matching
integrity establishes the identity of those older bytes, not current behaviour.

## What changed

- `scripts/library-verification.mjs` reads both raw artifact blobs with local
  `git show`, with lazy network fetching and replacement objects disabled.
- The Library builder hashes these buffers directly. It resolves both blobs
  before writing Library output. Missing objects produce an explicit error
  naming the commit and artifact; there is no current-source or network fallback.
- The shared loader template receives separate artifact buffers from each builder.
  The illustrative loader still reads today's candidate files and retains its
  unpublished tag URLs. Its output
  is byte-identical to the pre-repair file.
- The namespace guard checks the verification loader's exact URLs and integrity.
  The normal candidate runner includes the new six-test regression file.

## Pinned asset values

Both paths below are relative to the pinned commit; these are raw bytes, with no
text decoding or newline conversion before hashing.

- `candidate/dist/navbar-light.min.css`:
  `sha384-CHBz/LfxkFBbjeXMGi5tQVHiA80e1z+LAEpsnCpYYz9E6L4xgm0REid6pBvUHe0N`
- `candidate/dist/navbar-light.min.js`:
  `sha384-9cGtXQ4jePBy9MF0q3zmhELqfYUY4xFdEhJpmgOW3nytWjUbInNnjdTGfv9qv+JP`

The CSS value was already correct. The JavaScript value previously came from
today's candidate and was wrong for this older commit.

## Evidence and limits

- `node --test tests/library-verification.test.js`: 6/6 passed. These compare both
  loader values with independent SHA-384 calculations over local Git bytes.
- Deliberately wrong CSS and JavaScript hashes are rejected. Reusing today's
  JavaScript hash on the older pin also reproduces and rejects the original bug.
- With an empty temporary Git object directory, the actual Library build exits
  1, names the unavailable pin/path and leaves all three Library outputs intact.
- `npm run test:candidate`: 65/65 passed, with no skipped or expected failures.
  This includes the six new checks and the existing source/distribution/minified/
  self-contained Embed runtime checks. All 17 protected historical hashes match.
- `npm run check:dist`, `npm run check` and `git diff --check` passed. Explicit
  diffs against the starting commit confirmed historical evidence, released files,
  package metadata/dependencies and the illustrative loader were unchanged.
- No browser, network, Webflow, installed Embed, Library share or publication was
  checked or changed. Existing historical evidence snapshots stay unchanged;
  they record the earlier installation and are not proof of this repaired file.
- Consumer loading, sharing, update/rollback, rendered behaviour, human/device
  checks and release approval remain at their existing gates.

Sources: `scripts/build-webflow-library-candidates.mjs`,
`scripts/library-verification.mjs`, `scripts/cdn-loader.mjs`,
`scripts/check-class-namespace.mjs`, `tests/library-verification.test.js`, local
Git objects at the pin, and the [current-source overlay-fix record](sb-nav-candidate-multiple-navbars-2026-10-16.md).
The [15 October Library record](library-sb-nav-candidates-2026-10-15.md) remains
historical; this entry records the new local integrity correction separately.
