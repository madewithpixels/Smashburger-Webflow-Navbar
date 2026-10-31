import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const css = readFileSync(resolve(root, 'src/navbar-light.css'), 'utf8');
const js = readFileSync(resolve(root, 'src/navbar-light.js'), 'utf8').replace(/^export /gm, '');
const output = resolve(root, 'webflow/icon-geometry-matrix-2026-10-31.html');
const cases = [];
for (const lines of [2, 3]) for (const height of [1, 2, 3, 4])
  for (const gap of [5, 7, 9]) for (const dpr of [1, 1.25, 1.5, 2, 3])
    cases.push({ lines, height, gap, dpr });

const fixtureMarkup = cases.map(({ lines, height, gap, dpr }, index) => `
  <article class="case" data-case="${index}" data-lines="${lines}" data-height="${height}" data-gap="${gap}" data-dpr="${dpr}">
    <h2>${lines}-line · ${height}px bar · ${gap}px gap · ${dpr}×</h2>
    <header data-mwp-navbar data-collapse="always" data-motion="none" data-icon-lines="${lines}">
      <div data-mwp-inner><details data-mwp-menu open><summary data-mwp-trigger aria-label="Navigation menu">
        <span data-mwp-icon style="--case-gap:${gap}px;--case-height:${height}px;row-gap:${gap}px"><span data-mwp-line style="height:${height}px"></span><span data-mwp-line style="height:${height}px"></span><span data-mwp-line style="height:${height}px"></span></span>
      </summary></details><nav data-mwp-panel></nav></div><div data-mwp-backdrop></div>
    </header><output>waiting</output>
  </article>`).join('');

const page = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>SmashBurger icon visual matrix · 31 October 2026</title>
<style>
${css}
:root { color-scheme: light; font: 13px/1.35 system-ui, sans-serif; background: #f3f1ee; color: #282522; }
* { box-sizing: border-box; }
body { margin: 0; padding: 20px; }
h1 { margin: 0 0 6px; font-size: 20px; }
p { margin: 0 0 14px; }
#summary { position: sticky; top: 0; z-index: 1000; padding: 10px; background: #fff; border: 2px solid #777; }
#summary[data-result="pass"] { border-color: #247a42; }
#summary[data-result="fail"] { border-color: #ba2d2d; }
#matrix { display: grid; grid-template-columns: repeat(6, minmax(140px, 1fr)); gap: 8px; }
.case { min-height: 112px; padding: 8px; background: #fff; border: 1px solid #d2ccc5; border-radius: 5px; }
.case[data-result="fail"] { border: 2px solid #ba2d2d; }
.case h2 { min-height: 32px; margin: 0; font-size: 12px; font-weight: 600; }
.case [data-mwp-navbar] { position: relative; display: block; width: 48px; height: 48px; margin: 0 auto 3px; --mwp-nav-z-index: 1; }
.case [data-mwp-inner] { position: absolute; inset: 0; }
.case [data-mwp-menu] { position: absolute; inset: 0; margin: 0; }
.case [data-mwp-trigger] { display: flex; width: 48px; height: 48px; margin: 0; padding: 0; }
.case [data-mwp-icon] { width: 24px; height: 24px; row-gap: var(--case-gap); }
.case [data-mwp-line] { width: 24px; height: var(--case-height); background: #df382c; }
.case [data-mwp-panel], .case [data-mwp-backdrop] { display: none; }
.case output { display: block; text-align: center; font-weight: 700; }
</style></head><body>
<h1>Open icon visual matrix</h1>
<p>Maintained source CSS and JavaScript. Each cell opens a native two-line or three-line icon using its bar and spacing override. The DPR label is a pixel-grid check; all cells render at this browser's current device-pixel ratio.</p>
<div id="summary" data-result="waiting">Waiting for ${cases.length} rendered cases…</div>
<main id="matrix">${fixtureMarkup}
</main>
<script>
globalThis.MWP_NAVBAR_LIGHT_AUTO_INIT = false;
${js}
const cases = ${JSON.stringify(cases)};
const elements = [...document.querySelectorAll('.case')];
const navbars = initNavbarLight(document);
requestAnimationFrame(() => {
  const failures = [];
  requestAnimationFrame(() => {
    for (const [index, fixture] of elements.entries()) {
      const c = cases[index];
      const root = fixture.querySelector('[data-mwp-navbar]');
      const lines = [...root.querySelectorAll('[data-mwp-line]')];
      const shown = lines.filter(line => getComputedStyle(line).display !== 'none');
      const centres = shown.map(line => { const r = line.getBoundingClientRect(); return { x: r.x + r.width / 2, y: r.y + r.height / 2 }; });
      const shift = parseFloat(root.style.getPropertyValue('--mwp-nav-icon-auto-shift'));
      const expectedShift = c.height + c.gap;
      const xError = Math.max(...centres.map(p => Math.abs(p.x - centres[0].x)));
      const yError = Math.max(...centres.map(p => Math.abs(p.y - centres[0].y)));
      const shiftError = Math.abs(shift - expectedShift);
      const rounded = centres.map(p => [Math.round(p.x * c.dpr), Math.round(p.y * c.dpr)]);
      const alignedGrid = rounded.every(p => p[0] === rounded[0][0] && p[1] === rounded[0][1]);
      const pass = centres.length === c.lines && shiftError < 0.01 && xError < 0.1 && yError < 0.1 && alignedGrid;
      fixture.dataset.result = pass ? 'pass' : 'fail';
      fixture.querySelector('output').textContent = pass ? 'PASS' : 'FAIL';
      if (!pass) failures.push({ index, c, centres, shift, xError, yError, rounded });
    }
    const actualDpr = window.devicePixelRatio;
    const summary = document.querySelector('#summary');
    summary.dataset.result = failures.length ? 'fail' : 'pass';
    summary.textContent = (failures.length ? 'FAIL' : 'PASS') + ' · ' + (elements.length - failures.length) + '/' + elements.length + ' cases · browser DPR ' + actualDpr + ' · pixel-grid labels simulated';
    document.title = summary.textContent;
    document.documentElement.dataset.matrixResult = failures.length ? 'fail' : 'pass';
    document.documentElement.dataset.matrixFailures = JSON.stringify(failures);
  });
});
</script></body></html>`;

writeFileSync(output, page);
console.log(`Wrote ${output}`);
console.log(`Cases: ${cases.length} (2 line modes × 4 thicknesses × 3 spacing overrides × 5 simulated pixel grids)`);
