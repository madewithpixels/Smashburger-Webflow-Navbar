# R-269 minified Library Embed CSS comparison

**Scope:** Local CSS text comparison for brief #400. This records source and generated artifact parity, not Designer, Preview, published or browser behaviour.

## Result

- `src/navbar-light.css` and the `<style>` block in `candidate/webflow/navbar-light-embed.html` match exactly after trimming outer whitespace.
- `candidate/webflow/library/navbar-light-embed.html` includes two extra candidate variant aliases per existing variant selector. Those aliases support the isolated candidate Library component. Direct selector-text comparison therefore reports false mismatches.
- After applying the same alias expansion used by `scripts/build-webflow-library-candidates.mjs` and minifying the readable candidate CSS with the installed esbuild CSS minifier, the result matches the Library Embed CSS after trimming trailing whitespace. The only byte-level difference is the final newline in the generated expected text.
- No selector or declaration difference remains under this reproducible generation comparison. This covers layout selectors, visual presets and state selectors because it compares the complete CSS text, not a sample of rules.

## Reproduce

From the repository root, run:

```sh
node scripts/compare-library-embed-css.mjs
```

The script checks the maintained and readable CSS for exact equality, expands the same two candidate alias names used by the Library builder, minifies using the installed esbuild package, and compares the complete result with the Library style block. It prints character counts and SHA-256 values. It exits unsuccessfully if substantive CSS text differs.

This comparison assumes the checked-in Library Embed was produced by the current builder logic and the installed esbuild version. It does not prove that the saved Webflow Embed currently has these bytes, that selectors match elements, or that any styles win in Designer, Preview or a published page.
