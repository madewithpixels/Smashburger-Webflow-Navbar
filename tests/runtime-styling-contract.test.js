import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';

const css = await readFile(new URL('../src/navbar-light.css', import.meta.url), 'utf8');
const dom = new JSDOM(`<style>${css}</style>`);

function rules(list, into = []) {
  for (const rule of list) {
    if (rule.cssRules) rules(rule.cssRules, into);
    else if (rule.selectorText) into.push({ selector: rule.selectorText, style: rule.style });
  }
  return into;
}

const parsed = rules(dom.window.document.styleSheets[0].cssRules);
const declarations = property => parsed.filter(r => r.style.getPropertyValue(property));

test('overlay has no forced display or track sizing, even with presets disabled', () => {
  const overlay = parsed.filter(r => r.selector.includes('data-layout="overlay"') && r.selector.includes('data-mwp-panel'));
  assert.ok(overlay.length);
  for (const rule of overlay) {
    assert.equal(rule.style.getPropertyValue('display'), '', rule.selector);
    assert.equal(rule.style.getPropertyValue('grid-template-columns'), '', rule.selector);
    assert.equal(rule.style.getPropertyValue('grid-template-rows'), '', rule.selector);
  }
});

test('author-owned panel layout defaults use zero-specificity selectors', () => {
  const layoutProps = ['display', 'grid-template-columns', 'grid-template-rows', 'align-content', 'justify-items', 'width', 'height', 'max-width', 'max-height', 'inset', 'top', 'right', 'bottom', 'left', 'translate'];
  for (const property of layoutProps) {
    for (const rule of declarations(property)) {
      if (rule.selector.includes('data-mwp-panel') && !/data-state|data-menu\]\[open\]|wf-design-mode/.test(rule.selector)) {
        assert.match(rule.selector, /:where\(/, `${property}: ${rule.selector}`);
      }
    }
  }
});

test('visual preset declarations are gated, and false mode has no visual values', () => {
  const visual = new Set(['background', 'background-color', 'border', 'border-color', 'border-radius', 'box-shadow', 'color', 'font-size', 'font-family', 'line-height', 'text-align', 'gap', 'padding']);
  for (const rule of parsed) {
    const props = [...visual].filter(property => rule.style.getPropertyValue(property));
    if (props.length && rule.selector.includes('data-presets="false"')) assert.fail(`false preset selector styles appearance: ${rule.selector}`);
  }
  assert.ok(parsed.some(r => r.selector.includes(':not([data-presets="false" i])') && r.style.getPropertyValue('background')));
});

test('host Flex and Grid declarations retain priority over runtime layout defaults', () => {
  const host = new JSDOM(`<style>${css}\n.author-flex{display:flex;grid-template-columns:2fr 1fr}\n.author-grid{display:grid;grid-template-columns:3fr 1fr;align-content:start}</style><div class="author-flex" data-mwp-panel></div><div class="author-grid" data-mwp-panel></div>`);
  const sheet = host.window.document.styleSheets[0];
  const flex = host.window.document.querySelector('.author-flex');
  const grid = host.window.document.querySelector('.author-grid');
  assert.equal(host.window.getComputedStyle(flex).display, 'flex');
  assert.equal(host.window.getComputedStyle(flex).gridTemplateColumns, '2fr 1fr');
  assert.equal(host.window.getComputedStyle(grid).display, 'grid');
  assert.equal(host.window.getComputedStyle(grid).gridTemplateColumns, '3fr 1fr');
  assert.ok(sheet.cssRules.length > 0);
});
