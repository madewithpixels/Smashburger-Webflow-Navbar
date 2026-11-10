import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = {
  examples: 'candidate/lite/review-examples.html',
  exampleCss: 'candidate/lite/review-examples.css',
  workbench: 'candidate/lite/workbench-references.html',
  workbenchCss: 'candidate/lite/workbench-references.css',
  guide: 'webflow/smashburger-lite-safe-editing.md',
  buildSheet: 'webflow/lite-native-build-sheet-2026-10-16.md',
  trialSheet: 'webflow/lite-blank-project-trial-sheet.md'
};
const contents = Object.fromEntries(Object.entries(files).map(([key, file]) => [key, readFileSync(path.join(root, file), 'utf8')]));
const errors = new Map(Object.values(files).map(file => [file, []]));

function check(file, fn) {
  try { fn(); }
  catch (error) { errors.get(file).push(error.message); }
}
function requireValue(condition, message) { assert.ok(condition, message); }
function documentFor(file) { return new JSDOM(contents[file], { url: `file://${path.join(root, files[file])}` }).window.document; }
function accessibleName(element) {
  const label = element.getAttribute('aria-label')?.trim();
  if (label) return label;
  const labelledBy = element.getAttribute('aria-labelledby');
  if (labelledBy) {
    const name = labelledBy.split(/\s+/).map(id => element.ownerDocument.getElementById(id)?.textContent.trim() ?? '').join(' ').trim();
    if (name) return name;
  }
  return element.textContent.trim();
}
function checkLocalTargets(key) {
  const doc = documentFor(key);
  for (const link of doc.querySelectorAll('a[href]')) {
    const href = link.getAttribute('href').trim();
    requireValue(href.length > 0, `empty link target on <a>${link.textContent.trim()}`);
    if (href.startsWith('#')) {
      requireValue(doc.getElementById(decodeURIComponent(href.slice(1))), `missing link target ${href}`);
    } else if (!/^[a-z][a-z\d+.-]*:/i.test(href) && !href.startsWith('//')) {
      const targetPath = decodeURIComponent(href.split(/[?#]/, 1)[0]);
      requireValue(existsSync(path.resolve(path.dirname(path.join(root, files[key])), targetPath)), `missing local link target ${href}`);
    }
    requireValue(accessibleName(link).length > 0, `link has no accessible name: ${href}`);
  }
  for (const selector of ['link[href]', 'script[src]']) {
    for (const element of doc.querySelectorAll(selector)) {
      const attr = selector.startsWith('link') ? 'href' : 'src';
      const target = element.getAttribute(attr);
      requireValue(existsSync(path.resolve(path.dirname(path.join(root, files[key])), target)), `missing ${selector} target ${target}`);
    }
  }
  return doc;
}

const exampleDoc = documentFor('examples');
check(files.examples, () => {
  const stylesheets = [...exampleDoc.querySelectorAll('link[rel="stylesheet"]')].map(element => element.getAttribute('href'));
  const scripts = [...exampleDoc.querySelectorAll('script[src]')].map(element => element.getAttribute('src'));
  requireValue(stylesheets.includes('../dist/navbar-light.css'), 'examples must include the intended local runtime stylesheet ../dist/navbar-light.css');
  requireValue(scripts.includes('../demo/navbar-light.browser.js'), 'examples must include the intended local runtime script ../demo/navbar-light.browser.js');
  const runtimeAssets = [...exampleDoc.querySelectorAll('link[rel="stylesheet"][href], script[src]')];
  for (const element of runtimeAssets) {
    const target = element.getAttribute(element.tagName === 'LINK' ? 'href' : 'src');
    requireValue(!/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(target), `examples must not install a remote or candidate runtime asset: ${target}`);
    requireValue(!/candidate\/webflow\/navbar-light-cdn-loader|0\.3\.0-rc\.1/i.test(target), `examples must not install a remote or candidate runtime asset: ${target}`);
  }
  checkLocalTargets('examples');
  const sections = [...exampleDoc.querySelectorAll('section')].filter(section => /Plain example|Styled example/.test(section.querySelector('h2')?.textContent ?? ''));
  requireValue(sections.length === 2, `expected plain and styled example sections; found ${sections.length}`);
  for (const section of sections) {
    const heading = section.querySelector('h2')?.textContent.trim() ?? '(unnamed section)';
    const roots = section.querySelectorAll('[data-mwp-navbar]');
    requireValue(roots.length === 1, `${heading}: expected one navigation tree; found ${roots.length}`);
    const navs = section.querySelectorAll('nav[data-mwp-panel]');
    requireValue(navs.length === 1, `${heading}: expected one native navigation panel; found ${navs.length}`);
    requireValue(navs[0] && accessibleName(navs[0]).length > 0, `${heading}: navigation landmark has no accessible name`);
    const summaries = section.querySelectorAll('details[data-mwp-menu] > summary[data-mwp-trigger]');
    requireValue(summaries.length === 1, `${heading}: expected one native summary trigger; found ${summaries.length}`);
    requireValue(summaries[0] && accessibleName(summaries[0]).length > 0, `${heading}: trigger has no accessible name`);
    for (const rootNode of roots) {
      requireValue(rootNode.getAttribute('data-presets') === 'false', `${heading}: data-presets must be "false"`);
      requireValue(rootNode.querySelectorAll('a[data-mwp-item]').length === 3, `${heading}: expected three navigation links in its single tree`);
      requireValue(!rootNode.querySelector('[class~="always"], [class^="always"], [class*=" always"]'), `${heading}: unlink-generated .always* class found`);
      requireValue(!rootNode.querySelector('[data-wf--mwp-component-library--smashburger--variant]'), `${heading}: Library variant marker found`);
    }
  }
  requireValue(!contents.examples.includes('0.3.0-rc.1/dist/navbar-light.min.js'), 'examples point at the unreleased candidate loader');
});

const workbenchDoc = checkLocalTargets('workbench');
check(files.workbench, () => {
  requireValue(workbenchDoc.body.classList.contains('workbench-page'), 'body must carry workbench-page scope');
  requireValue(workbenchDoc.querySelectorAll('script').length === 0, 'workbench references must remain script-free');
  const articles = [...workbenchDoc.querySelectorAll('article')];
  requireValue(articles.some(article => /closed sample.*static authoring reference/i.test(article.textContent)), 'missing static closed-state label');
  requireValue(articles.some(article => /open sample.*static forced-open authoring reference/i.test(article.textContent)), 'missing static open-state label');
  requireValue(articles.some(article => /non-interactive static sample/i.test(article.textContent)), 'missing non-interactive backdrop label');
  requireValue(workbenchDoc.querySelectorAll('[data-mwp-navbar]').length === 2, 'expected exactly two static navigation references');
  requireValue(workbenchDoc.querySelectorAll('[data-mwp-menu][open]').length === 1, 'expected one forced-open and one closed sample');
  for (const rootNode of workbenchDoc.querySelectorAll('[data-mwp-navbar]')) {
    requireValue(rootNode.getAttribute('data-presets') === 'false', 'workbench sample data-presets must be "false"');
    requireValue(!rootNode.querySelector('[class~="always"], [class^="always"], [class*=" always"]'), 'unlink-generated .always* class found');
    const nav = rootNode.querySelector('nav[data-mwp-panel]');
    requireValue(!nav || accessibleName(nav).length > 0, 'navigation landmark has no accessible name');
  }
});

check(files.workbenchCss, () => {
  const css = contents.workbenchCss.replace(/\/\*[\s\S]*?\*\//g, '');
  for (const [index, raw] of css.split('}').entries()) {
    const selector = raw.split('{', 1)[0].trim();
    if (!selector || selector.startsWith('@')) continue;
    requireValue(selector.split(',').every(part => /^(?:body\.workbench-page|\.workbench-page)(?:[\s.#:[>+~]|$)/.test(part.trim())), `selector ${index + 1} is not scoped to .workbench-page: ${selector}`);
  }
});

check(files.exampleCss, () => requireValue(contents.exampleCss.trim().length > 0, 'example stylesheet is empty'));
for (const key of ['guide', 'buildSheet']) {
  check(files[key], () => {
    const text = contents[key];
    const namesCandidateLoaderAsInstallable = /(?:install|add|paste|use)\b[^\n.]{0,100}(?:candidate\/webflow\/navbar-light-cdn-loader|0\.3\.0-rc\.1)[^\n.]{0,100}(?:loader|embed)?/i;
    requireValue(!namesCandidateLoaderAsInstallable.test(text), 'instructions present the unreleased candidate loader as installable');
    requireValue(/(?:unreleased|unpublished)[^\n.]{0,140}(?:not be installed|not an installation instruction|must not be installed)/i.test(text), 'must state that the unreleased loader is not installable');
  });
}

check(files.trialSheet, () => {
  const text = contents.trialSheet;
  for (const heading of [
    '## Local evidence already prepared',
    '## Blank-project checks still required',
    '7. **Close-out:**'
  ]) requireValue(text.includes(heading), `missing trial-sheet section ${heading}`);
  for (const checkName of ['Clone and structure', 'Canvas editing', 'Four breakpoints', 'Keyboard and focus', 'Fallback', 'Assets and console']) {
    requireValue(text.includes(`**${checkName}:**`), `missing bounded trial check ${checkName}`);
  }
  requireValue(/(?:unreleased|unpublished)[^\n.]{0,100}(?:do not|must not)[^\n.]{0,50}install/i.test(text), 'must say not to install the unreleased loader');
  requireValue(/not\s+evidence that a Webflow component[^.]*clone flow has been checked/i.test(text), 'must distinguish this plan from performed Webflow checks');
  const markdownLinks = [...text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map(match => match[1]);
  for (const href of markdownLinks) {
    if (/^[a-z][a-z\d+.-]*:/i.test(href) || href.startsWith('#') || href.startsWith('//')) continue;
    const targetPath = decodeURIComponent(href.split(/[?#]/, 1)[0]);
    requireValue(existsSync(path.resolve(path.dirname(path.join(root, files.trialSheet)), targetPath)), `missing trial-sheet link target ${href}`);
  }
});

let failureCount = 0;
for (const file of Object.values(files)) {
  const fileErrors = errors.get(file);
  if (fileErrors.length) {
    failureCount += fileErrors.length;
    console.log(`FAIL ${file}`);
    for (const error of fileErrors) console.log(`  - ${error}`);
  } else console.log(`PASS ${file}`);
}
console.log(`Lite integrity: ${Object.keys(files).length - [...errors.values()].filter(list => list.length).length}/${Object.keys(files).length} files pass; ${failureCount} failure(s).`);
if (failureCount) process.exitCode = 1;
