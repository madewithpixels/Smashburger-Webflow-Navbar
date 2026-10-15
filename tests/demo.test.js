import assert from 'node:assert/strict';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';

const demoUrl = new URL('../demo/index.html', import.meta.url);

test('demo initializes when opened directly from the filesystem', async () => {
  const dom = await JSDOM.fromFile(fileURLToPath(demoUrl), {
    resources: 'usable',
    runScripts: 'dangerously',
    url: demoUrl.href,
    beforeParse(window) {
      window.CSS = { supports: () => true };
      window.matchMedia = () => ({
        matches: false,
        addEventListener() {},
        removeEventListener() {}
      });
    }
  });

  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Demo did not load')), 2000);
    dom.window.addEventListener('load', () => {
      clearTimeout(timeout);
      resolve();
    }, { once: true });
  });

  const root = dom.window.document.querySelector('[data-mwp-navbar]');
  const siteNavRule = [...dom.window.document.styleSheets]
    .flatMap((sheet) => [...sheet.cssRules])
    .find((rule) => rule.selectorText === '.site-nav');
  assert.equal(
    siteNavRule?.style.getPropertyValue('--mwp-nav-header-height').trim(),
    '5rem',
    'the dropdown viewport offset must match the demo header height'
  );
  assert.equal(root.dataset.mwpReady, 'true');
  assert.equal(typeof dom.window.NavbarLight, 'function');
  assert.equal(root.dataset.state, 'expanded');

  const layout = dom.window.document.querySelector('[name="layout"]');
  layout.value = 'overlay';
  layout.dispatchEvent(new dom.window.Event('change', { bubbles: true }));
  assert.equal(root.dataset.layout, 'overlay');

  const collapse = dom.window.document.querySelector('[name="collapse"]');
  collapse.value = 'always';
  collapse.dispatchEvent(new dom.window.Event('change', { bubbles: true }));
  assert.notEqual(dom.window.getComputedStyle(root.querySelector('[data-mwp-panel]')).display, 'none');
  const submenu = root.querySelector('[data-mwp-submenu]');
  const submenuList = root.querySelector('.sb-nav-submenu-list');
  assert.equal(dom.window.getComputedStyle(submenuList).display, 'none');
  submenu.open = true;
  assert.notEqual(dom.window.getComputedStyle(submenuList).display, 'none');
  assert.ok(submenu.querySelector('[data-mwp-submenu-icon]'));
  const panelGroups = [...root.querySelector('[data-mwp-panel]').children];
  // DOM order is the reading and Tab order; it must match the visual order
  // (Primary first) so keyboard and screen-reader users meet the main links first.
  assert.deepEqual(panelGroups.map((element) => element.className), [
    'sb-nav-primary',
    'sb-nav-secondary'
  ]);
  const focusable = [...root.querySelectorAll('[data-mwp-panel] a[href]')];
  assert.ok(focusable[0].closest('[data-mwp-primary]'), 'first panel link must be a primary link');
  assert.deepEqual([...root.querySelector('.sb-nav-primary').children].map((element) => element.className), [
    'sb-nav-links',
    'sb-nav-cta'
  ]);
  assert.equal(root.querySelectorAll('.sb-nav-socials a').length, 7);
  assert.equal(root.querySelectorAll('.sb-nav-socials .sb-nav-secondary-label').length, 7);
  assert.equal(root.querySelectorAll('.sb-nav-contacts a').length, 2);
  assert.equal(root.querySelectorAll('.sb-nav-contacts a > span').length, 2);

  layout.value = 'dropdown';
  layout.dispatchEvent(new dom.window.Event('change', { bubbles: true }));
  dom.window.document.querySelector('#navbar-toggle').click();
  assert.equal(root.querySelector('[data-mwp-menu]').open, true);

  dom.window.close();
});
