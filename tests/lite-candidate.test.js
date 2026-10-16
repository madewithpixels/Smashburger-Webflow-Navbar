import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { JSDOM } from 'jsdom';
import { change } from '../scripts/runtime-test-fixture.mjs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

// Load the actual page and its declared assets from disk. outside-only prevents
// automatic script execution and resource fetching; only the local bundle below
// is evaluated. Leave AUTO_INIT unset so the shipped discovery path is exercised.
async function litePage(filename) {
  const url = new URL(`../candidate/lite/${filename}`, import.meta.url);
  const dom = new JSDOM(readFileSync(url, 'utf8'), { url: url.href, runScripts: 'outside-only' });
  try {
    const { window } = dom;
    const { document } = window;
    window.CSS = { supports: () => true }; // Same shim as the existing DOM fixture.
    window.matchMedia = (query) => ({
      matches: false, // No reduced-motion request; both examples use Always collapse.
      addEventListener() {}, removeEventListener() {}
    });
    for (const link of document.querySelectorAll('link[rel="stylesheet"]')) {
      const style = document.createElement('style');
      style.textContent = readFileSync(new URL(link.getAttribute('href'), url), 'utf8');
      link.replaceWith(style);
    }
    for (const script of document.querySelectorAll('script[src]')) {
      window.eval(readFileSync(new URL(script.getAttribute('src'), url), 'utf8'));
    }
    if (document.readyState === 'loading') {
      await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve, { once: true }));
    }
    return { dom, roots: [...document.querySelectorAll('[data-mwp-navbar]')] };
  } catch (error) {
    dom.window.close();
    throw error;
  }
}

function assertState(root, open) {
  const menu = root.querySelector('[data-mwp-menu]');
  const trigger = root.querySelector('[data-mwp-trigger]');
  const panel = root.querySelector('[data-mwp-panel]');
  assert.equal(root.dataset.mwpReady, 'true');
  assert.equal(root.dataset.mwpCollapsed, 'true');
  for (const element of [root, menu, panel, root.querySelector('[data-mwp-backdrop]')]) {
    assert.equal(element.dataset.state, open ? 'open' : 'closed');
  }
  assert.equal(menu.open, open);
  assert.equal(trigger.getAttribute('aria-expanded'), String(open));
  assert.equal(panel.getAttribute('aria-hidden'), String(!open));
  assert.equal(panel.inert, !open);
}

test('actual Lite page automatically discovers both navbars with unique panel relationships', async () => {
  const { dom, roots } = await litePage('review-examples.html');
  try {
    assert.equal(dom.window.MWP_NAVBAR_LIGHT_AUTO_INIT, undefined);
    assert.equal(roots.length, 2);
    const ids = new Set();
    for (const root of roots) {
      assertState(root, false);
      const panel = root.querySelector('[data-mwp-panel]');
      const trigger = root.querySelector('[data-mwp-trigger]');
      assert.ok(panel.id);
      ids.add(panel.id);
      assert.equal(trigger.getAttribute('aria-controls'), panel.id);
      assert.equal(dom.window.document.getElementById(trigger.getAttribute('aria-controls')), panel);
      assert.equal(trigger.getAttribute('aria-haspopup'), 'true');
      assert.equal(root.querySelector('[data-mwp-menu]').mwpNav, root.mwpNavbarLight);
      assert.equal(dom.window.getComputedStyle(root).getPropertyValue('--mwp-nav-css-ready').trim(), '1');
      assert.equal(root.querySelector('[data-mwp-menu]').nextElementSibling, panel);
    }
    assert.equal(ids.size, 2);
    const allIds = [...dom.window.document.querySelectorAll('[id]')].map(element => element.id);
    assert.equal(new Set(allIds).size, allIds.length);
  } finally { dom.window.close(); }
});

test('actual Lite navbars open and close independently in either order after repeat initialisation', async () => {
  const { dom, roots } = await litePage('review-examples.html');
  try {
    const apis = roots.map(root => root.mwpNavbarLight);
    const ids = roots.map(root => root.querySelector('[data-mwp-panel]').id);
    const counts = roots.map(() => ({ opened: 0, closed: 0 }));
    roots.forEach((root, index) => {
      for (const name of ['opened', 'closed']) root.addEventListener(`mwp-nav:${name}`, () => counts[index][name]++);
    });
    const reinitialise = () => {
      for (let attempt = 0; attempt < 3; attempt++) assert.equal(dom.window.initNavbarLight().length, 0);
      roots.forEach((root, index) => {
        assert.equal(root.mwpNavbarLight, apis[index]);
        assert.equal(root.querySelector('[data-mwp-panel]').id, ids[index]);
      });
    };
    reinitialise();
    for (const order of [[0, 1], [1, 0]]) {
      const [first, second] = order;
      await change({ root: roots[first] }, () => apis[first].open(), 'opened');
      assertState(roots[first], true);
      assertState(roots[second], false);
      await change({ root: roots[second] }, () => apis[second].open(), 'opened');
      roots.forEach(root => assertState(root, true));
      reinitialise();
      await change({ root: roots[first] }, () => apis[first].close(), 'closed');
      assertState(roots[first], false);
      assertState(roots[second], true);
      await change({ root: roots[second] }, () => apis[second].close(), 'closed');
      roots.forEach(root => assertState(root, false));
      reinitialise();
    }
    for (const count of counts) assert.deepEqual(count, { opened: 2, closed: 2 });
  } finally { dom.window.close(); }
});

test('actual Lite examples return focus on simulated Escape with either navbar open', async () => {
  const { dom, roots } = await litePage('review-examples.html');
  try {
    for (const root of roots) {
      const other = roots.find(item => item !== root);
      await change({ root }, () => root.mwpNavbarLight.open({ focusFirst: true }), 'opened');
      // opened is emitted just before queued first-link focus runs.
      assert.equal(dom.window.document.activeElement, root.querySelector('[data-mwp-panel] a'));
      const escape = new dom.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true });
      await change({ root }, () => dom.window.document.activeElement.dispatchEvent(escape), 'closed');
      assert.equal(escape.defaultPrevented, true);
      assertState(root, false);
      assertState(other, false);
      assert.equal(dom.window.document.activeElement, root.querySelector('[data-mwp-trigger]'));
    }
  } finally { dom.window.close(); }
});

test('actual workbench stays script-free with native closed/open references and working fragments', async () => {
  const { dom, roots } = await litePage('workbench-references.html');
  try {
    const { document } = dom.window;
    assert.equal(document.querySelectorAll('script').length, 0);
    assert.equal(dom.window.NavbarLight, undefined);
    assert.equal(roots.length, 2);
    roots.forEach((root, index) => {
      const menu = root.querySelector('[data-mwp-menu]');
      const panel = root.querySelector('[data-mwp-panel]');
      assert.equal(menu.open, index === 1);
      assert.equal(root.dataset.state, index === 1 ? 'open' : 'closed');
      assert.equal(menu.nextElementSibling, panel, 'native fallback keeps panel adjacent to Details');
      assert.equal(root.mwpNavbarLight, undefined);
      assert.equal(root.hasAttribute('data-mwp-ready'), false);
      assert.equal(panel.hasAttribute('aria-hidden'), false);
      assert.equal(panel.hasAttribute('inert'), false);
      assert.equal(dom.window.getComputedStyle(root).getPropertyValue('--mwp-nav-css-ready').trim(), '1');
    });
    for (const link of document.querySelectorAll('a[href^="#"]')) {
      assert.ok(document.getElementById(link.hash.slice(1)), `missing workbench target ${link.hash}`);
    }
    assert.ok(document.querySelector('.backdrop-swatch[role="img"][aria-label]'));
  } finally { dom.window.close(); }
});

test('Lite review examples keep one native link tree and remain candidate-only', () => {
  const examples = read('candidate/lite/review-examples.html');
  const workbench = read('candidate/lite/workbench-references.html');
  const guide = read('webflow/smashburger-lite-safe-editing.md');

  assert.match(examples, /Unreleased local review material/);
  assert.match(examples, /not a native Webflow component, a clonable or installation instructions/);
  assert.equal((examples.match(/data-mwp-navbar/g) || []).length, 2);
  for (const hook of ['data-mwp-menu', 'data-mwp-trigger', 'data-mwp-panel', 'data-mwp-item']) {
    assert.ok(examples.includes(hook), `example retains ${hook}`);
  }
  assert.ok(examples.includes('class="sb-nav-inner"'));
  assert.ok(examples.includes('class="sb-nav-panel"'));
  assert.ok(examples.includes('../demo/navbar-light.browser.js'));
  assert.equal((workbench.match(/data-mwp-navbar/g) || []).length, 2);
  assert.ok(workbench.includes('data-mwp-menu open'));
  assert.ok(workbench.includes('Backdrop reference'));
  assert.ok(!workbench.includes('<script'));
  assert.ok(!examples.includes('0.3.0-rc.1/dist/navbar-light.min.js'));
  assert.ok(guide.includes('unreleased review material'));
  assert.ok(guide.includes('not an installation instruction'));
});

test('Lite examples keep each navbar to one native link tree and candidate classes', () => {
  const examples = new JSDOM(read('candidate/lite/review-examples.html')).window.document;
  const workbench = new JSDOM(read('candidate/lite/workbench-references.html')).window.document;

  for (const document of [examples, workbench]) {
    const roots = [...document.querySelectorAll('[data-mwp-navbar]')];
    assert.equal(roots.length, 2);
    for (const root of roots) {
      assert.equal(root.querySelectorAll('nav[data-mwp-panel]').length, 1);
      assert.equal(root.querySelectorAll('details[data-mwp-menu] > summary[data-mwp-trigger]').length, 1);
      assert.ok(root.querySelector('div.sb-nav-inner'));
      assert.ok(root.querySelector('nav.sb-nav-panel'));
      assert.ok(!root.querySelector('[class*="always"]'), 'no generated .always* class trail');
      assert.ok(!root.querySelector('[data-wf--mwp-component-library--smashburger--variant]'), 'no Library variant marker');
    }
  }

  const exampleRoots = [...examples.querySelectorAll('[data-mwp-navbar]')];
  for (const root of exampleRoots) {
    assert.equal(root.querySelectorAll('nav[data-mwp-panel] a[data-mwp-item]').length, 3);
    assert.equal(root.querySelectorAll('a[data-mwp-item]').length, 3, 'links are not duplicated outside the single panel');
  }
  assert.equal(workbench.querySelectorAll('[data-mwp-menu] > summary[data-mwp-trigger]').length, 2);
  assert.equal(workbench.querySelectorAll('[data-mwp-menu][open]').length, 1);
});
