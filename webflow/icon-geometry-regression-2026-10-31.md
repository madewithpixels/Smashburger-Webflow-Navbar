# R-037 local visual matrix — 31 October 2026

## Re-run

From the repository root, run:

```sh
npm run test:icon-visual
npm run test:icon-geometry
```

The first command regenerates [the local visual matrix](icon-geometry-matrix-2026-10-31.html), embedding the current maintained `src/navbar-light.css` and `src/navbar-light.js`. Open that generated HTML page in a browser to run its 120 rendered cases. Each cell shows PASS only when the measured open-bar centres converge, the maintained JavaScript sets the expected bar-plus-gap shift, and the centres map to the same coordinates on that cell's simulated pixel grid. The page also reports the browser's actual `devicePixelRatio`.

## This run

- `npm run test:icon-visual` completed and wrote the generated matrix page. It contains two- and three-line icons, 1px, 2px, 3px and 4px bars, 5px, 7px and 9px row-gap overrides, and 1×, 1.25×, 1.5×, 2× and 3× simulated pixel grids: 120 cases.
- `npm run test:icon-geometry` passed: 1 test, 0 failures. This is the existing source geometry model, not a browser rendering result.
- Chrome was installed, but this local probe command exited with code 134 and wrote no screenshot: `'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' --headless --disable-gpu --no-sandbox --window-size=192,160 --screenshot=/private/tmp/sb-icon-matrix-probe/probe.png file:///private/tmp/sb-icon-matrix-probe/index.html`.
- I then tried to open `file:///Users/michaelauty/Work%20on%20MacStudio/Smashburger-Webflow-Navbar/webflow/icon-geometry-matrix-2026-10-31.html` in a fresh Chrome tab using the browser controls. The browser policy rejected the `file:` URL before the page loaded and explicitly prohibited using another route to reach the same page. No case was rendered or captured in this run.
- `node --check scripts/create-icon-visual-matrix.mjs` and `git diff --check` passed.

## Evidence limits and remaining checks

The generated fixture is a local, reproducible browser check, but its PASS/FAIL output has not been observed in the 31 October run. The DPR labels use a simulated pixel-grid calculation inside each browser-rendered case; they do not emulate separate browser DPR settings or prove physical pixel rasterisation. The Mac Retina display check remains open. The source-derived Webflow consumer, linked candidate and exact versioned-distribution checks remain open as separate checks. No Webflow or released assets were changed, and no physical-display result is claimed.

## 5 November 2026 — Brief #319 local HTTP attempt — Codex (night shift)

- `npm run test:icon-visual` regenerated the existing page with 120 cases (two- and three-line icons; four bar heights; three spacing overrides; five simulated pixel grids).
- The attempt to serve the page over local HTTP failed before Chrome was opened: Node returned `Error: listen EPERM` while binding `127.0.0.1:8765`.
- Chrome, page rendering, all 120 PASS results and a screenshot are therefore not checked. The page was not observed; no claim about rendered results is made.
- The DPR labels are simulated calculations at the browser's actual DPR. They do not emulate separate browser DPR settings or prove physical pixel rasterisation. Webflow consumer, linked candidate, exact versioned distribution and Retina-display checks remain separate and open.
- No runtime code, released asset or Webflow content changed.
