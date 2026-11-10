import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { violations } from '../scripts/check-runtime-style-specificity.mjs';

const css = await readFile(new URL('../src/navbar-light.css', import.meta.url), 'utf8');
const canvasCss = await readFile(new URL('../src/navbar-light-canvas.css', import.meta.url), 'utf8');

test('single author class wins over layout defaults in every layout with stale Grid tracks', () => {
  const layouts = ['dropdown', 'overlay', 'left', 'right', 'full-width'];
  for (const layout of layouts) {
    const host = new JSDOM(`<style>${css}\n.author-flex{display:flex;grid-template-columns:2fr 1fr;width:67%;align-items:start}\n.author-grid{display:grid;grid-template-columns:3fr 1fr;align-content:start}\n</style><header data-mwp-navbar data-mwp-collapsed="true" data-state="open" data-layout="${layout}" data-presets="false"><details open data-mwp-menu></details><nav data-mwp-panel class="author-flex"></nav></header>`);
    const panel = host.window.document.querySelector('[data-mwp-panel]');
    const style = host.window.getComputedStyle(panel);
    assert.equal(style.display, 'flex', `${layout}: Flex class must win`);
    assert.equal(style.gridTemplateColumns, '2fr 1fr', `${layout}: stale tracks remain authored but inert on Flex`);
    assert.equal(style.width, '67%', `${layout}: authored width must win`);
    host.window.close();
  }
});

test('an intentionally styled Grid panel and opinionated host styles survive presets-off', async t => {
  const layouts = ['dropdown', 'overlay', 'left', 'right', 'full-width'];
  for (const layout of layouts) await t.test(layout, () => {
    const host = new JSDOM(`<style>${css}\nnav{display:flex;color:purple;padding:3px}\n.author-grid{display:grid;grid-template-columns:3fr 1fr;align-content:start;width:72%;background-color:teal}</style><header data-mwp-navbar data-mwp-collapsed="true" data-state="open" data-layout="${layout}" data-presets="false"><details open data-mwp-menu></details><nav data-mwp-panel class="author-grid"></nav></header>`);
    const panel = host.window.document.querySelector('[data-mwp-panel]');
    const style = host.window.getComputedStyle(panel);
    assert.equal(style.display, 'grid', `${layout}: author-set Grid display must win`);
    assert.equal(style.gridTemplateColumns, '3fr 1fr', `${layout}: author-set Grid columns must win`);
    assert.equal(style.alignContent, 'start', `${layout}: author-set Grid alignment must win`);
    assert.equal(style.width, '72%', `${layout}: authored width must win`);
    assert.equal(style.backgroundColor, 'rgb(0, 128, 128)', `${layout}: authored background must win`);
    assert.equal(style.color, 'rgb(128, 0, 128)', `${layout}: opinionated host color must survive`);
    assert.equal(style.padding, '3px', `${layout}: opinionated host padding must survive`);
    host.window.close();
  });
});

test('visual preset rules remain gated; open and closed state selectors still provide behavior', () => {
  const parsed = new JSDOM(`<style>${css}</style>`).window.document.styleSheets[0].cssRules;
  const flat = [];
  const visit = rules => { for (const rule of rules) { if (rule.type === 4) visit(rule.cssRules); else if (rule.selectorText) flat.push(rule); } };
  visit(parsed);
  const visualProps = ['background', 'background-color', 'border', 'border-radius', 'box-shadow', 'color', 'font-size', 'font-family', 'line-height', 'text-align', 'gap', 'padding'];
  for (const rule of flat) if (visualProps.some(property => rule.style.getPropertyValue(property)))
    assert.match(rule.selectorText, /:not\(\[data-presets="false" i\]\)/, rule.selectorText);
  assert.match(css, /:not\(\[data-presets="false" i\]\) \[data-mwp-panel\]\)\s*\{\s*background:/);
  assert.ok(flat.some(rule => rule.style.getPropertyValue('opacity') === '1' && rule.selectorText.includes('[open]')));
  assert.ok(flat.some(rule => rule.style.getPropertyValue('visibility') === 'hidden' && rule.selectorText.includes('[data-state="closed"]')));
});

test('Canvas-open helper only hides closed panels and has no competing layout or appearance rules', () => {
  assert.match(canvasCss, /:not\(\[data-canvas-open="true" i\]\)/);
  const runtime = new JSDOM(`<style>${css}</style>`).window.document.styleSheets[0].cssRules;
  const text = [...runtime].map(rule => rule.cssText).join(' ');
  assert.doesNotMatch(text, /wf-design-mode/);
  const canvasRules = new JSDOM(`<style>${canvasCss}</style>`).window.document.styleSheets[0].cssRules;
  const canvasDeclarations = [];
  const visitCanvas = rules => { for (const rule of rules) { if (rule.type === 4) visitCanvas(rule.cssRules); else if (rule.style) canvasDeclarations.push(...Array.from({ length: rule.style.length }, (_, index) => { const property = rule.style.item(index); return [property, rule.style.getPropertyValue(property)]; })); } };
  visitCanvas(canvasRules);
  assert.ok(canvasDeclarations.length > 0);
  assert.ok(canvasDeclarations.every(([property, value]) => property === 'display' && value === 'none'));
  assert.ok(violations(css).length === 0, violations(css).join('\n'));
});

test('build guard rejects high-specificity author layout and appearance declarations', () => {
  assert.deepEqual(violations(':where([data-mwp-navbar] [data-mwp-panel]){display:grid;color:red}'), []);
  assert.ok(violations(':where([data-mwp-navbar]) [data-mwp-panel]{display:grid;color:red}').length > 0);
  assert.ok(violations(':where([data-mwp-navbar]) [data-mwp-panel] > [data-mwp-link]{color:red}').length > 0);
  assert.ok(violations('[data-mwp-navbar][data-layout="overlay"] [data-mwp-panel]{display:grid}').length > 0);
});

test('build guard includes Flex and Grid placement shorthands in its author-owned layout properties', () => {
  for (const declaration of [
    'flex-direction:column', 'flex-wrap:wrap', 'grid-template-areas:"nav"',
    'grid-area:nav', 'grid-column:1 / -1', 'place-items:start', 'row-gap:1rem', 'column-gap:2rem'
  ]) {
    assert.ok(violations(`:where([data-mwp-navbar]) [data-mwp-panel]{${declaration}}`).length > 0,
      `guard should flag ${declaration} outside a zero-specificity selector`);
    assert.deepEqual(violations(`:where([data-mwp-navbar] [data-mwp-panel]){${declaration}}`), [],
      `a zero-specificity default should remain allowed for ${declaration}`);
  }
});
