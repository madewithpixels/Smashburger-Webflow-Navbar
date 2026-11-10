import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { JSDOM } from 'jsdom';
import { projectRoot, outputRoot } from './build-paths.mjs';

const authorProperties = new Set([
  'display', 'position', 'inset', 'top', 'right', 'bottom', 'left', 'width', 'height',
  'min-width', 'min-height', 'max-width', 'max-height', 'box-sizing',
  'grid-template-columns', 'grid-template-rows', 'grid-auto-flow',
  'grid-template-areas', 'grid-auto-columns', 'grid-auto-rows', 'grid', 'grid-area',
  'grid-column', 'grid-column-start', 'grid-column-end', 'grid-row', 'grid-row-start', 'grid-row-end',
  'align-items', 'align-content', 'align-self', 'justify-items', 'justify-content',
  'place-items', 'place-content', 'place-self', 'flex', 'flex-basis', 'flex-direction',
  'flex-grow', 'flex-shrink', 'flex-wrap', 'order', 'gap', 'row-gap', 'column-gap',
  'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
  'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
  'background', 'background-color', 'border', 'border-top', 'border-right', 'border-bottom', 'border-left',
  'border-color', 'border-radius', 'box-shadow', 'color', 'font-size', 'font-family', 'font-weight',
  'line-height', 'text-align', 'filter'
]);
const authorTargets = /\[data-mwp-(?:panel|primary|links|secondary|trigger|item|submenu|close|line|icon|backdrop)\]/;

export function violations(css, label = 'CSS') {
  const dom = new JSDOM(`<style>${css}</style>`);
  const bad = [];
  const visit = rules => {
    for (const rule of rules) {
      if (rule.type === 4) visit(rule.cssRules);
      if (!rule.selectorText || !authorTargets.test(rule.selectorText)) continue;
      const properties = [...authorProperties].filter(property => rule.style.getPropertyValue(property));
      const displayBehavior = properties.length === 1 && properties[0] === 'display'
        && /data-icon-lines|data-mwp-submenu|data-mwp-collapsed=(?:"false"|false)/.test(rule.selectorText);
      if (displayBehavior) continue;
      if (properties.length && !isZeroSpecificity(rule.selectorText.trim())) {
        bad.push(`${label}: ${properties.join(', ')} — ${rule.selectorText}`);
      }
    }
  };
  visit(dom.window.document.styleSheets[0].cssRules);
  dom.window.close();
  return bad;
}

function isZeroSpecificity(selector) {
  if (!selector.startsWith(':where(')) return false;
  let depth = 0;
  let quote = '';
  let escaped = false;
  for (let index = selector.indexOf('('); index < selector.length; index += 1) {
    const character = selector[index];
    if (escaped) { escaped = false; continue; }
    if (character === '\\') { escaped = true; continue; }
    if (quote) { if (character === quote) quote = ''; continue; }
    if (character === '"' || character === "'") { quote = character; continue; }
    if (character === '(') depth += 1;
    if (character === ')' && --depth === 0) return selector.slice(index + 1).trim() === '';
  }
  return false;
}

export async function checkRuntimeStyleSpecificity() {
const files = [
  ['source', resolve(projectRoot, 'src/navbar-light.css')],
  ['candidate readable CSS', resolve(outputRoot, 'dist/navbar-light.css')],
  ['candidate minified CSS', resolve(outputRoot, 'dist/navbar-light.min.css')]
];
const errors = [];
for (const [label, path] of files) {
  try { errors.push(...violations(await readFile(path, 'utf8'), label)); }
  catch (error) { errors.push(`${label}: ${error.message}`); }
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) await checkRuntimeStyleSpecificity();
for (const path of [
  resolve(outputRoot, 'webflow/navbar-light-embed.html'),
  resolve(outputRoot, 'webflow/navbar-light-cdn-loader.html'),
  resolve(outputRoot, 'webflow/library/navbar-light-embed.html'),
  resolve(outputRoot, 'webflow/library/navbar-light-cdn-candidate-loader.html')
]) {
  try {
    const html = await readFile(path, 'utf8');
    for (const [, css] of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)) errors.push(...violations(css, path.split('/').at(-1)));
  } catch (error) { errors.push(`${path}: ${error.message}`); }
}
if (errors.length) {
  console.error(`Runtime CSS specificity guard failed:\n${errors.join('\n')}`);
  process.exitCode = 1;
} else {
  console.log('Runtime author-style specificity guard passed for source and candidate CSS deliveries.');
}
}
