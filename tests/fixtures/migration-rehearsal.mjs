// Test fixtures only. No installer, Webflow operations or files written to disk.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';
import { event } from '../../scripts/runtime-test-fixture.mjs';

const read = path => readFileSync(new URL(`../../${path}`, import.meta.url), 'utf8');
const audit = read('webflow/class-namespace-migration-audit.md');
// Only the explicit table entries are eligible. Lookalikes and combos stay intact.
export const classMapping = new Map([...audit.matchAll(/^\| `(mwp-css-nav[^`]*)` \| `(sb-nav[^`]*)` \|$/gm)]
  .map(([, legacy, candidate]) => [legacy, candidate]));
assert.equal(classMapping.size, 37, 'Review changes to the documented mapping');

const elements = root => [root, ...root.querySelectorAll('*')];
export function deliveryPair(form, candidate = false) {
  const prefix = candidate ? 'candidate/' : '';
  if (form === 'embed') return { embed: `${prefix}webflow/navbar-light-embed.html` };
  assert.ok(['dist', 'minified'].includes(form));
  const suffix = form === 'minified' ? '.min' : '';
  return { css: `${prefix}dist/navbar-light${suffix}.css`, js: `${prefix}dist/navbar-light${suffix}.js` };
}

export function createRehearsal(form) {
  const archive = new JSDOM(read('smashed-navbar-html-demo/demo/index.html'));
  const header = archive.window.document.querySelector('[data-mwp-navbar]').outerHTML;
  archive.window.close();
  const dom = new JSDOM(`<!doctype html><body>${header}<button id="outside">Outside</button></body>`);
  const root = dom.window.document.querySelector('header');
  const panel = root.querySelector('[data-mwp-panel]');
  root.className += ' client-header mwp-client-theme mwp-css-nav_panel-client mwp-css-nav_panel-5 always-5';
  root.setAttribute('data-collapse', 'always');
  root.setAttribute('data-motion', 'none');
  root.setAttribute('data-focus-first', 'true');
  root.setAttribute('data-close-on-link', 'false');
  root.setAttribute('data-close-on-outside', 'false');
  root.setAttribute('data-panel-width', '23rem');
  root.setAttribute('data-wf--smashburger--variant', 'always');
  root.style.setProperty('--mwp-nav-client-accent', '#ab2468');
  root.querySelector('[data-mwp-menu]').setAttribute('data-mwp-motion', 'mwp-motion-none');
  root.querySelector('[data-mwp-trigger]').setAttribute('aria-label', 'Open the Sheffield menu');
  panel.id = 'client-navigation';
  panel.setAttribute('aria-label', 'Sheffield navigation');
  panel.className += ' client-panel';
  // Reorder real native content before the backup, preserving menu/panel siblings.
  panel.prepend(panel.querySelector('.mwp-css-nav_cta'));
  const links = root.querySelector('[data-mwp-links]');
  links.prepend(links.querySelector('[data-mwp-submenu]'));
  const contact = panel.querySelector('a[href^="mailto:"]');
  contact.setAttribute('aria-label', 'Email our Sheffield team');
  contact.setAttribute('title', 'A client-authored destination');
  const img = dom.window.document.createElement('img');
  img.src = './assets/client-mark.svg';
  img.setAttribute('srcset', './assets/client-mark.svg 1x, ./assets/client-mark@2x.svg 2x');
  img.alt = 'Sheffield studio';
  img.className = 'client-image mwp-client-art';
  root.querySelector('.brand').prepend(img);
  // These inert descriptors represent a paired local delivery, never a CDN load.
  const delivery = dom.window.document.createElement('script');
  delivery.type = 'application/json';
  delivery.id = 'rehearsal-delivery';
  delivery.textContent = JSON.stringify(deliveryPair(form));
  dom.window.document.head.append(delivery);
  const nodes = elements(root);
  return { dom, root, delivery, form, nodes,
    classes: nodes.map(node => node.getAttribute('class')),
    original: dom.serialize(), originalDelivery: delivery.textContent,
    authored: authoredStructure(root) };
}

export function authoredStructure(root) {
  // Full recursive tree, including whitespace, comments, attribute values and order.
  // Only structural class spelling is excluded from this preservation comparison.
  function snapshot(node) {
    if (node.nodeType !== 1) return [node.nodeType, node.nodeValue];
    const attrs = [...node.attributes].map(({ name, value }) => [name, name === 'class'
      ? value.replace(/\S+/g, token => classMapping.get(token) || token) : value]);
    return [node.tagName, attrs, [...node.childNodes].map(snapshot)];
  }
  return snapshot(root);
}

export function assertPreserved(f) {
  assert.deepEqual(elements(f.root), f.nodes, 'Nodes and native order must survive');
  assert.deepEqual(authoredStructure(f.root), f.authored, 'Authored content/attributes/classes changed');
}

export function migrate(f) {
  assert.equal(f.dom.serialize(), f.original, 'Start from the saved original');
  for (const node of f.nodes) {
    const classes = node.getAttribute('class');
    if (classes !== null) node.setAttribute('class', classes.replace(/\S+/g, token => classMapping.get(token) || token));
  }
  f.delivery.textContent = JSON.stringify(deliveryPair(f.form, true));
  assertPreserved(f);
}

export function rollback(f) {
  // Restore classes and delivery only. Never replace content to conceal data loss.
  f.nodes.forEach((node, index) => {
    if (f.classes[index] === null) node.removeAttribute('class');
    else node.setAttribute('class', f.classes[index]);
  });
  f.delivery.textContent = f.originalDelivery;
  assertPreserved(f);
  assert.equal(f.dom.serialize(), f.original, 'Rollback must restore the saved structure exactly');
}

export async function checkContract(f, candidate) {
  const pair = JSON.parse(f.delivery.textContent);
  assert.deepEqual(pair, deliveryPair(f.form, candidate), 'CSS and JavaScript must use the same delivery');
  const embed = pair.embed ? read(pair.embed) : null;
  const css = embed ? embed.match(/<style>\s*([\s\S]*?)<\/style>/)[1] : read(pair.css);
  const js = embed ? embed.match(/<script>\s*([\s\S]*?)<\/script>/)[1] : read(pair.js);
  // A fresh realm models a page reload, avoiding any claim that destroy() restores
  // every runtime attribute. The saved author fixture never receives runtime state.
  // Leave automatic resource loading disabled (jsdom's default).
  const dom = new JSDOM(f.dom.serialize(), { runScripts: 'outside-only' });
  try {
    const noNetwork = () => { throw new Error('Network forbidden in the rehearsal'); };
    dom.window.fetch = noNetwork;
    dom.window.XMLHttpRequest = noNetwork;
    dom.window.WebSocket = noNetwork;
    const { document } = dom.window;
    const root = document.querySelector('[data-mwp-navbar]');
    const authoredNodes = elements(root).map(node => ({ node, attrs: [...node.attributes].map(a => [a.name, a.value]),
      children: [...node.childNodes], text: [...node.childNodes].filter(n => n.nodeType !== 1).map(n => [n, n.nodeValue]) }));
    const assertRuntimePreservesAuthoring = () => {
      for (const { node, attrs, children, text } of authoredNodes) {
        assert.deepEqual([...node.childNodes], children, 'Runtime changed authored content/order');
        for (const [child, value] of text) assert.equal(child.nodeValue, value, 'Runtime changed authored text');
        for (const [name, value] of attrs) {
          if (name === 'style') assert.equal(node.style.getPropertyValue('--mwp-nav-client-accent'), '#ab2468');
          else assert.equal(node.getAttribute(name), value, `Runtime changed authored ${name}`);
        }
      }
    };
    const style = document.createElement('style'); style.textContent = css; document.head.append(style);
    dom.window.CSS = { supports: () => true };
    dom.window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
    dom.window.MWP_NAVBAR_LIGHT_AUTO_INIT = false;
    dom.window.eval(js);
    assert.equal(dom.window.initNavbarLight().length, 1);
    assert.equal(dom.window.initNavbarLight().length, 0, 'Repeat initialisation must be harmless');
    const navbar = root.mwpNavbarLight;
    const menu = root.querySelector('[data-mwp-menu]');
    const trigger = root.querySelector('[data-mwp-trigger]');
    const panel = root.querySelector('[data-mwp-panel]');
    const submenu = root.querySelector('[data-mwp-submenu]');
    const submenuList = submenu.querySelector(candidate ? '.sb-nav-submenu-list' : '.mwp-css-nav_submenu-list');
    assert.ok(submenuList, 'Matching structural classes must be present');
    assert.equal(dom.window.getComputedStyle(submenuList).display, 'none', 'Paired CSS hides closed submenu');
    assert.equal(trigger.getAttribute('aria-controls'), panel.id);
    assert.equal(trigger.getAttribute('aria-haspopup'), 'true');
    assert.equal(root.dataset.mwpReady, 'true');
    const state = open => {
      assert.equal(menu.open, open);
      assert.equal(root.dataset.state, open ? 'open' : 'closed');
      assert.equal(trigger.getAttribute('aria-expanded'), String(open));
      assert.equal(panel.getAttribute('aria-hidden'), String(!open));
      assert.equal(panel.inert, !open);
      assertRuntimePreservesAuthoring();
    };
    const change = async (action, name) => { const done = event(root, `mwp-nav:${name}`); action(); await done; };
    const escape = () => document.activeElement.dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
    state(false);
    await change(() => navbar.open({ focusFirst: true }), 'opened'); state(true);
    assert.equal(document.activeElement, panel.querySelector('a'), 'Focus follows authored reordered content');
    submenu.open = true; submenu.querySelector('a').focus(); escape();
    assert.equal(submenu.open, false); state(true);
    assert.equal(document.activeElement, submenu.querySelector('summary'));
    await change(escape, 'closed'); state(false);
    assert.equal(document.activeElement, trigger);
    await change(() => navbar.open(), 'opened'); state(true);
    panel.querySelector('a').click(); document.querySelector('#outside').click();
    assert.equal(menu.open, true, 'Custom disabled link/outside closing survives');
    await change(() => navbar.close({ focusTrigger: true }), 'closed'); state(false);
    assert.equal(document.activeElement, trigger);
  } finally { dom.window.close(); }
  assertPreserved(f);
}
