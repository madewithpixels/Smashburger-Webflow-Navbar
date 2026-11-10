import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { JSDOM, VirtualConsole } from 'jsdom';

const embed = readFileSync(new URL('../candidate/webflow/navbar-light-embed.html', import.meta.url), 'utf8');

function menu(id) {
  return `<header id="${id}" data-mwp-navbar data-collapse="always" data-motion="none">
    <details data-mwp-menu><summary data-mwp-trigger>${id} menu</summary></details>
    <nav data-mwp-panel><a href="#${id}-link">${id} link</a></nav>
  </header>`;
}

test('two separate copies of the actual candidate Embed initialise and control independent menus', async () => {
  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', error => errors.push(error.message));
  const html = `<!doctype html><html><head></head><body>
    ${menu('first')}${menu('second')}
    ${embed}
    ${embed}
  </body></html>`;
  const dom = new JSDOM(html, {
    runScripts: 'dangerously',
    virtualConsole,
    beforeParse(window) {
      window.CSS = { supports: () => true };
      window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
      window.addEventListener('error', event => errors.push(event.message));
    }
    // No `resources` option: external resources are not fetched.
  });

  try {
    const { document } = dom.window;
    await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve, { once: true }));

    const roots = ['first', 'second'].map(id => document.getElementById(id));
    const [first, second] = roots;
    const menus = roots.map(root => root.querySelector('[data-mwp-menu]'));
    const apis = roots.map(root => root.mwpNavbarLight);
    const eventCounts = roots.map(() => ({ open: 0, opened: 0, close: 0, closed: 0 }));
    roots.forEach((root, index) => {
      for (const name of Object.keys(eventCounts[index])) {
        root.addEventListener(`mwp-nav:${name}`, () => eventCounts[index][name]++);
      }
    });

    assert.deepEqual(errors, [], 'both inline script blocks should execute without script errors');
    assert.ok(apis.every(Boolean), 'both roots should receive a runtime instance');
    for (let index = 0; index < roots.length; index++) {
      const root = roots[index];
      const trigger = root.querySelector('[data-mwp-trigger]');
      const panel = root.querySelector('[data-mwp-panel]');
      assert.equal(root.dataset.mwpReady, 'true');
      assert.equal(root.dataset.mwpCollapsed, 'true');
      assert.equal(menus[index].open, false);
      assert.equal(trigger.getAttribute('aria-controls'), panel.id);
      assert.equal(document.getElementById(panel.id), panel);
    }

    await new Promise((resolve, reject) => {
      first.addEventListener('mwp-nav:opened', resolve, { once: true });
      second.addEventListener('mwp-nav:open', () => reject(new Error('opening first menu changed second menu')),
        { once: true });
      apis[0].open();
    });
    assert.equal(first.dataset.state, 'open');
    assert.equal(menus[0].open, true);
    assert.equal(second.dataset.state, 'closed');
    assert.equal(menus[1].open, false);
    assert.deepEqual(eventCounts, [
      { open: 1, opened: 1, close: 0, closed: 0 },
      { open: 0, opened: 0, close: 0, closed: 0 }
    ]);
    assert.equal(first.mwpNavbarLight, apis[0]);
    assert.equal(second.mwpNavbarLight, apis[1]);
  } finally {
    dom.window.close();
  }
});
