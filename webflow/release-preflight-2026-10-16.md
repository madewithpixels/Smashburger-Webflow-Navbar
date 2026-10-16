# Combined candidate release preflight

16 October 2026 — Codex (night shift), brief #89. Serves R-121, R-125 and
R-155. The combined candidate is locally reproducible; release and Michael's
Acceptance remain pending.

## Ready locally

- Source/build commit: `9211a9f5871b9de30a613b0bf7d5118035858d86`.
- A fresh local clone checked out at that commit passed `npm run check:dist`.
  The saved 19-file candidate matched the rebuild byte for byte; no differences
  were reported. The temporary clone's `node_modules` link pointed to the
  existing checkout; no dependencies were installed.
- Candidate file list: `candidate/demo/navbar-light.browser.js`;
  `candidate/dist/navbar-light.{css,css.map,js,js.map,min.css,min.css.map,min.js,min.js.map}`;
  `candidate/lite/{review-examples.css,review-examples.html,workbench-references.css,workbench-references.html}`;
  `candidate/webflow/{navbar-light-canvas-embed.html,navbar-light-cdn-loader.html,navbar-light-embed.html}`;
  `candidate/webflow/library/{navbar-light-canvas-embed.html,navbar-light-cdn-candidate-loader.html,navbar-light-embed.html}`.
  Total: 19 files. The self-contained Embed is 49,605 characters and the
  Library Embed is 49,894 characters; both meet the 50,000-character build
  limit. Other candidate files are below that limit.
- Package and generated version text read `0.3.0-rc.1`.
- The proposed standalone CDN loader uses
  `https://cdn.jsdelivr.net/gh/madewithpixels/Smashburger-Webflow-Navbar@v0.3.0-rc.1/dist/`
  and its CSS/JavaScript SHA-384 values match the current minified candidate
  bytes: CSS `sha384-CHBz/LfxkFBbjeXMGi5tQVHiA80e1z+LAEpsnCpYYz9E6L4xgm0REid6pBvUHe0N`;
  JavaScript `sha384-7S/JKvh0+O4dqyR0rDbJuJPaTzZ9xB+YEGxxjo1I1ynXao9TWwlpivNhimDUN5SL`.
  The tag URL is proposed and unpublished; these values do not establish CDN
  availability.
- The separate Library verification loader pins commit
  `ddb83c79934914ef0f03f3f012ee2743154153f7`, with CSS
  `sha384-CHBz/LfxkFBbjeXMGi5tQVHiA80e1z+LAEpsnCpYYz9E6L4xgm0REid6pBvUHe0N`
  and JavaScript
  `sha384-9cGtXQ4jePBy9MF0q3zmhELqfYUY4xFdEhJpmgOW3nytWjUbInNnjdTGfv9qv+JP`.
  Its pins match that older commit's files by the existing integrity checks;
  it predates the overlapping-overlay scroll-lock fix and is not the release
  loader for the current combined candidate.
- All 17 paths in `compatibility/v0.2.6-baseline.json` still match their
  protected SHA-256 values. `npm run check:namespace` passed and independently
  confirmed all 17 historical files byte-identical.

## Still needs browser or Webflow evidence

- The exact combined candidate has not been rendered in Chrome. Verify its
  loaded CSS and JavaScript, responsive widths, short-height Full-width and
  Right menus, scrolling, keyboard/focus and close behaviour, overlapping menus,
  rapid open/close, reduced motion, Custom animation and blocked-script fallback.
- The saved Library candidates and older staging consumer are not proof that
  this combined candidate is installed. Readable New Smashburger Test access,
  a clean linked consumer, actual CDN loading and fallback, and human/device
  checks remain open. Existing access limits and detailed browser checklist are
  recorded in [the combined candidate review](combined-candidate-review-2026-10-16.md).

## Actions requiring Michael's approval

1. Review the exact five-resource Library update and explicitly approve sharing
   it. No sharing is included in this preflight.
2. Before any consumer trial, approve the named staging/test site and confirm a
   backup. Then approve the specific component update and any staging
   publication separately. Never publish to a custom live domain.
3. Review the browser, clean-consumer, CDN and human/device evidence. Explicitly
   approve creating the version tag and releasing the exact files to the CDN;
   then separately approve any final Webflow update/publication. No tag,
   release, Webflow change or publication is authorised by this record.
4. Review and record Acceptance after the agreed checks. Acceptance remains
   pending.

No release files, tags, remote state or Webflow content were changed.
