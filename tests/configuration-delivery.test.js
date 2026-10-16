import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { deliveries, runtimeFixture, change, event } from '../scripts/runtime-test-fixture.mjs';

// Ordinary tests check maintained source. Candidate mode checks the same contract
// against fresh generated files, without imposing it on immutable v0.2.6 assets.
const targets = deliveries.filter(d => d === 'source' || process.env.SMASHBURGER_CANDIDATE);
const saved = JSON.parse(readFileSync(new URL('../webflow/evidence/library-sb-nav-candidate-2026-10-15.json', import.meta.url)));
const paths = {
  menu: { layout: 'data-mwp-layout', motion: 'data-mwp-motion', alignment: 'data-mwp-align',
    iconLines: 'data-mwp-icon-lines', focusFirst: 'data-focus-first', closeOutside: 'data-close-on-outside',
    closeLink: 'data-close-on-link', scrollLock: 'data-scroll-lock', panelWidth: 'data-mwp-panel-width',
    stagger: 'data-mwp-stagger', iconDuration: 'data-mwp-icon-duration' },
  root: { layout: 'data-layout', motion: 'data-motion', alignment: 'data-align', iconLines: 'data-icon-lines',
    focusFirst: 'data-focus-first', closeOutside: 'data-close-on-outside', closeLink: 'data-close-on-link',
    scrollLock: 'data-scroll-lock', panelWidth: 'data-panel-width', stagger: 'data-stagger', iconDuration: 'data-icon-duration',
    submenuIconDuration: 'data-submenu-icon-duration', submenuIconEasing: 'data-submenu-icon-easing',
    submenuIconRotation: 'data-submenu-icon-rotation' }
};
const sample = { layout: 'mwp-layout-overlay', motion: 'mwp-motion-custom', alignment: 'left', iconLines: '2',
  panelWidth: '31rem', stagger: '17ms', iconDuration: '190ms', submenuIconDuration: '240ms',
  submenuIconEasing: 'ease-in-out', submenuIconRotation: '135deg' };
const properties = { panelWidth: '--mwp-nav-panel-width', stagger: '--mwp-nav-stagger', iconDuration: '--mwp-nav-icon-duration',
  submenuIconDuration: '--mwp-nav-submenu-icon-duration', submenuIconEasing: '--mwp-nav-submenu-icon-ease',
  submenuIconRotation: '--mwp-nav-submenu-icon-rotation' };

function fixture(delivery) {
  const f = runtimeFixture(delivery);
  f.root.removeAttribute('data-motion');
  return { ...f, menu: f.root.querySelector('[data-mwp-menu]') };
}

function write(f, path, values) {
  for (const [key, value] of Object.entries(values)) {
    if (path === 'text') {
      const node = f.dom.window.document.createElement('div');
      node.dataset.mwpConfigValue = key;
      node.textContent = ` ${value} `;
      let block = f.root.querySelector('[data-mwp-config]');
      if (!block) {
        block = f.dom.window.document.createElement('div');
        block.setAttribute('data-mwp-config', '');
        f.root.append(block);
      }
      block.append(node);
    } else {
      assert.ok(paths[path][key], `No established ${path} path for ${key}`);
      f[path].setAttribute(paths[path][key], value);
    }
  }
}

function settings(f, expected) {
  for (const [key, attr] of Object.entries({ layout: 'data-layout', motion: 'data-motion', alignment: 'data-align',
    iconLines: 'data-icon-lines', focusFirst: 'data-focus-first', closeOutside: 'data-close-on-outside',
    closeLink: 'data-close-on-link', scrollLock: 'data-scroll-lock' })) {
    assert.equal(f.root.getAttribute(attr), expected[key], key);
  }
  for (const [key, property] of Object.entries(properties)) {
    if (key in expected) assert.equal(f.root.style.getPropertyValue(property), expected[key], key);
  }
}

// Only enhancement timeouts are controlled. Native Details toggle notifications
// retain jsdom's asynchronous delivery; change() waits for them before advancing.
function clock(f) {
  let now = 0, id = 0;
  const tasks = new Map();
  f.dom.window.setTimeout = (callback, delay) => {
    tasks.set(++id, { callback, at: now + Number(delay) });
    return id;
  };
  f.dom.window.clearTimeout = key => tasks.delete(key);
  return ms => {
    const end = now + ms;
    for (;;) {
      const next = [...tasks].sort((a, b) => a[1].at - b[1].at)[0];
      if (!next || next[1].at > end) break;
      tasks.delete(next[0]); now = next[1].at; next[1].callback();
    }
    now = end;
  };
}

function state(f, expected) {
  const open = ['opening', 'open'].includes(expected);
  const panel = f.root.querySelector('[data-mwp-panel]');
  const trigger = f.root.querySelector('[data-mwp-trigger]');
  assert.equal(f.menu.open, open);
  assert.equal(f.root.mwpNavbarLight.state, expected);
  for (const node of [f.root, f.menu, panel, f.root.querySelector('[data-mwp-backdrop]')]) {
    assert.equal(node.dataset.state, expected);
  }
  assert.equal(trigger.getAttribute('aria-expanded'), String(open));
  assert.equal(trigger.getAttribute('aria-controls'), panel.id);
  assert.equal(panel.getAttribute('aria-hidden'), String(!open));
  assert.equal(panel.inert, !open);
}

async function cycle(f, openMs, closeMs, { focus = false, lock = false } = {}) {
  const advance = clock(f), names = [];
  const doc = f.dom.window.document;
  const trigger = f.root.querySelector('[data-mwp-trigger]');
  const first = f.root.querySelector('[data-mwp-panel] a');
  const api = f.root.mwpNavbarLight;
  for (const name of ['open', 'opened', 'close', 'closed']) {
    f.root.addEventListener(`mwp-nav:${name}`, () => names.push(name));
  }
  trigger.focus();
  await change(f, () => api.open(), 'open');
  state(f, 'opening');
  assert.equal(doc.documentElement.style.overflow === 'hidden', lock);
  if (openMs) advance(openMs - 1);
  state(f, 'opening'); assert.deepEqual(names, ['open']);
  assert.equal(doc.activeElement, trigger);
  advance(openMs ? 1 : 0);
  state(f, 'open'); assert.deepEqual(names, ['open', 'opened']);
  assert.equal(doc.activeElement, focus ? first : trigger);
  await change(f, () => api.close({ focusTrigger: true }), 'close');
  state(f, 'closing');
  if (closeMs) advance(closeMs - 1);
  state(f, 'closing'); assert.deepEqual(names, ['open', 'opened', 'close']);
  assert.equal(doc.documentElement.style.overflow === 'hidden', lock);
  advance(closeMs ? 1 : 0);
  state(f, 'closed'); assert.deepEqual(names, ['open', 'opened', 'close', 'closed']);
  assert.equal(doc.documentElement.style.overflow, '');
  assert.equal(doc.activeElement, trigger);
  return advance;
}

for (const delivery of targets) {
  for (const path of ['menu', 'root', 'text']) for (const enabled of [false, true]) {
    test(`${delivery} settings: ${path} values control focus, closing and scroll (${enabled})`, async () => {
      const f = fixture(delivery);
      try {
        const boolean = enabled ? 'TrUe' : 'FaLsE';
        const values = { ...sample, focusFirst: boolean, closeOutside: boolean,
          closeLink: boolean, scrollLock: boolean };
        // The menu has no submenu-icon path; those values use root/text instead.
        write(f, path, Object.fromEntries(Object.entries(values).filter(([key]) => path !== 'menu' || paths.menu[key])));
        if (path === 'menu') write(f, 'root', Object.fromEntries(Object.entries(values).filter(([key]) => key.startsWith('submenu'))));
        f.menu.dataset.mwpOpenDuration = '37ms';
        f.menu.dataset.mwpCloseDuration = '23ms';
        f.create();
        settings(f, { ...values, layout: 'overlay', motion: 'custom' });
        const advance = await cycle(f, 37, 23, { focus: enabled, lock: enabled });
        const api = f.root.mwpNavbarLight, doc = f.dom.window.document;
        await change(f, () => api.open(), 'open'); advance(37);
        // A nested target verifies the real link-closing event path.
        const link = f.root.querySelector('[data-mwp-panel] a');
        const span = doc.createElement('span'); link.append(span);
        span.addEventListener('click', e => e.preventDefault());
        const linkClose = enabled ? event(f.root, 'mwp-nav:close') : null;
        span.dispatchEvent(new f.dom.window.MouseEvent('click', { bubbles: true }));
        assert.equal(f.menu.open, !enabled, 'Close on link uses the selected boolean');
        if (enabled) { await linkClose; advance(23); state(f, 'closed'); }
        else { await change(f, () => api.close(), 'close'); advance(23); }
        await change(f, () => api.open(), 'open'); advance(37);
        const outsideClose = enabled ? event(f.root, 'mwp-nav:close') : null;
        doc.querySelector('#outside').click();
        assert.equal(f.menu.open, !enabled, 'Close on outside uses the selected boolean');
        if (enabled) { await outsideClose; advance(23); state(f, 'closed'); }
        else state(f, 'open');
      } finally { f.close(); }
    });
  }

  for (const winner of ['menu', 'root', 'text']) {
    test(`${delivery} settings: ${winner} wins supported conflicting paths including explicit false`, async () => {
      const f = fixture(delivery);
      try {
        const lower = { layout: 'dropdown', motion: 'left', alignment: 'right', iconLines: '3',
          panelWidth: '19rem', stagger: '8ms', iconDuration: '90ms', focusFirst: 'true',
          closeOutside: 'true', closeLink: 'true', scrollLock: 'true' };
        const chosen = { ...sample, focusFirst: 'false', closeOutside: 'false', closeLink: 'false', scrollLock: 'false' };
        const common = Object.fromEntries(Object.entries(chosen).filter(([key]) => paths.menu[key]));
        write(f, 'text', winner === 'text' ? common : lower);
        if (winner !== 'text') write(f, 'root', winner === 'root' ? common : lower);
        if (winner === 'menu') write(f, 'menu', common);
        f.menu.dataset.mwpDuration = '29ms';
        f.create();
        settings(f, { ...common, layout: 'overlay', motion: 'custom' });
        await cycle(f, 29, 29);
      } finally { f.close(); }
    });
  }

  const durations = [
    ['menu separate', { mwpOpenDuration: '41ms', mwpCloseDuration: '17ms', mwpDuration: '80ms' },
      { openDuration: '50ms', closeDuration: '60ms', duration: '90ms' }, '70ms', 41, 17, '41ms', '17ms'],
    ['root separate before menu generic', { mwpDuration: '80ms' },
      { openDuration: '0.043s', closeDuration: '0.019s', duration: '90ms' }, '70ms', 43, 19, '0.043s', '0.019s'],
    ['text closing before generic', { mwpDuration: '47ms' }, { duration: '90ms' }, '13ms', 47, 13, '47ms', '13ms'],
    ['menu generic before root generic', { mwpDuration: '53ms' }, { duration: '90ms' }, null, 53, 53, '53ms', '53ms'],
    ['root generic', {}, { duration: '59ms' }, null, 59, 59, '59ms', '59ms'],
    ['zero is explicit', { mwpOpenDuration: '0ms', mwpCloseDuration: '0s', mwpDuration: '80ms' },
      { duration: '90ms' }, '70ms', 0, 0, '0ms', '0s']
  ];
  for (const [name, menu, root, closing, openMs, closeMs, openCss, closeCss] of durations) {
    test(`${delivery} settings: independent durations (${name})`, async () => {
      const f = fixture(delivery);
      try {
        Object.assign(f.menu.dataset, menu); Object.assign(f.root.dataset, root);
        if (closing !== null) write(f, 'text', { closeDuration: closing });
        f.create();
        assert.equal(f.root.style.getPropertyValue('--mwp-nav-duration-open'), openCss);
        assert.equal(f.root.style.getPropertyValue('--mwp-nav-duration-close'), closeCss);
        await cycle(f, openMs, closeMs);
      } finally { f.close(); }
    });
  }

  test(`${delivery} settings: root submenu settings beat settings text`, async () => {
    const f = fixture(delivery);
    try {
      write(f, 'text', { submenuIconDuration: '80ms', submenuIconEasing: 'ease', submenuIconRotation: '90deg' });
      write(f, 'root', { submenuIconDuration: '240ms', submenuIconEasing: 'ease-in-out', submenuIconRotation: '135deg' });
      f.root.dataset.motion = 'none'; f.create();
      for (const key of ['submenuIconDuration', 'submenuIconEasing', 'submenuIconRotation']) {
        assert.equal(f.root.style.getPropertyValue(properties[key]), sample[key]);
      }
      await cycle(f, 0, 0);
    } finally { f.close(); }
  });

  for (const [name, menu, expected] of [
    ['preferred ease alias', { mwpEase: 'ease-in', mwpEasing: 'ease-out' }, 'ease-in'],
    ['easing alias', { mwpEasing: 'ease-out' }, 'ease-out'],
    ['root easing', {}, 'linear']
  ]) {
    test(`${delivery} settings: distance and ${name}`, async () => {
      const f = fixture(delivery);
      try {
        f.root.dataset.distance = '2rem'; f.root.dataset.easing = 'linear';
        Object.assign(f.menu.dataset, menu);
        if (Object.keys(menu).length) f.menu.dataset.mwpDistance = '3rem';
        f.root.dataset.motion = 'none'; f.create();
        assert.equal(f.root.style.getPropertyValue('--mwp-nav-distance'), Object.keys(menu).length ? '3rem' : '2rem');
        assert.equal(f.root.style.getPropertyValue('--mwp-nav-ease'), expected);
        await cycle(f, 0, 0);
      } finally { f.close(); }
    });
  }

  test(`${delivery} settings: missing and blank strings retain established defaults`, async () => {
    const f = fixture(delivery);
    try {
      write(f, 'text', { layout: '', motion: '', alignment: '', iconLines: '', focusFirst: '', closeOutside: '', closeLink: '', scrollLock: '' });
      f.menu.dataset.mwpLayout = ''; f.root.dataset.motion = '';
      f.create();
      settings(f, { layout: 'dropdown', motion: 'dropdown', alignment: 'right', iconLines: '3',
        focusFirst: 'false', closeOutside: 'true', closeLink: 'true', scrollLock: 'auto' });
      assert.equal(f.root.style.getPropertyValue('--mwp-nav-duration-open'), '');
      assert.equal(f.root.style.getPropertyValue('--mwp-nav-duration-close'), '');
      await cycle(f, 280, 220);
    } finally { f.close(); }
  });

  for (const layout of ['dropdown', 'full-width', 'left', 'right', 'overlay']) {
    test(`${delivery} settings: prefixed ${layout} layout uses automatic scroll locking`, async () => {
      const f = fixture(delivery);
      try {
        write(f, 'text', { layout: `mwp-layout-${layout}`, motion: 'mwp-motion-none', scrollLock: 'auto' });
        f.create();
        assert.equal(f.root.dataset.layout, layout); assert.equal(f.root.dataset.motion, 'none');
        await cycle(f, 0, 0, { lock: ['left', 'right', 'overlay'].includes(layout) });
      } finally { f.close(); }
    });
  }

  for (const motion of ['dropdown', 'left', 'right', 'up', 'fade', 'none', 'custom']) {
    test(`${delivery} settings: native prefixed ${motion} motion keeps configured timing`, async () => {
      const f = fixture(delivery);
      try {
        f.menu.dataset.mwpMotion = ` mwp-motion-${motion} `;
        f.root.dataset.motion = 'fade';
        f.menu.dataset.mwpOpenDuration = '31ms'; f.menu.dataset.mwpCloseDuration = '7ms';
        f.create();
        assert.equal(f.root.dataset.motion, motion);
        assert.equal(f.root.style.getPropertyValue('--mwp-nav-duration-open'), '31ms');
        assert.equal(f.root.style.getPropertyValue('--mwp-nav-duration-close'), '7ms');
        await cycle(f, motion === 'none' ? 0 : 31, motion === 'none' ? 0 : 7);
      } finally { f.close(); }
    });
  }

  for (const collapse of ['never', 'always', 'tablet', 'mobile-landscape', 'mobile-portrait']) {
    test(`${delivery} settings: root collapse overrides the saved variant (${collapse})`, async () => {
      const f = fixture(delivery);
      try {
        f.root.dataset.collapse = collapse;
        f.root.setAttribute('data-wf--configuration-test--variant', collapse === 'never' ? 'always' : 'never');
        f.root.dataset.motion = 'none'; f.create();
        const expected = collapse === 'always' || collapse === 'tablet';
        assert.equal(f.root.dataset.mwpCollapsed, String(expected));
        if (expected) await cycle(f, 0, 0);
        else { f.root.mwpNavbarLight.close(); assert.equal(f.menu.open, true); assert.equal(f.root.dataset.state, 'expanded'); }
        f.resize(390);
        assert.equal(f.root.dataset.mwpCollapsed, String(collapse !== 'never'));
        if (collapse !== 'never') await cycle(f, 0, 0);
      } finally { f.close(); }
    });
  }

  test(`${delivery} settings: saved variant is used when root collapse is absent`, async () => {
    const f = fixture(delivery);
    try {
      f.root.removeAttribute('data-collapse');
      f.root.setAttribute('data-wf--configuration-test--variant', 'mobile-landscape');
      f.root.dataset.motion = 'none'; f.create();
      assert.equal(f.root.dataset.state, 'expanded');
      f.resize(700); await cycle(f, 0, 0);
    } finally { f.close(); }
  });

  for (let edition = 0; edition < 2; edition++) for (const override of [false, true]) {
    test(`${delivery} settings: saved Library ${edition === 0 ? 'Embed' : 'CDN'} bindings (${override ? 'overrides' : 'defaults'})`, async () => {
      const f = fixture(delivery);
      try {
        const definition = saved.editions[edition];
        const overrides = override ? { 'Layout': 'mwp-layout-overlay', 'Motion class': 'mwp-motion-custom',
          'Opening duration': '61ms', 'Closing duration': '11ms', 'Focus first link': true,
          'Close on outside click': false, 'Close on link click': false, 'Lock page scroll': 'false',
          'Layout presets': false, 'Panel width': '31rem' } : {};
        const resolve = binding => {
          if (typeof binding !== 'object') return String(binding);
          assert.equal(binding.sourceType, 'prop');
          const prop = definition.props.find(p => p.id === binding.propId);
          assert.ok(prop, binding.propName); assert.equal(prop.name, binding.propName);
          return String(Object.hasOwn(overrides, prop.name) ? overrides[prop.name] : prop.defaultValue);
        };
        let rows = 0, menuBindings = 0;
        for (const node of saved.trees[edition]) {
          const matches = saved.settings.find(row => row.label === `${edition}:${node.id.element}`)?.result[0].data.matches;
          const attrs = matches?.find(m => m.key === 'attributes')?.value || [];
          const key = attrs.find(a => a.name === 'data-mwp-config-value')?.value;
          if (key) { write(f, 'text', { [key]: resolve(matches.find(m => m.key === 'text').value) }); rows++; }
          const target = attrs.some(a => a.name === 'data-mwp-navbar') ? f.root
            : attrs.some(a => a.name === 'data-mwp-menu') ? f.menu : null;
          if (target) for (const attr of attrs) {
            if (typeof attr.value === 'object') {
              target.setAttribute(attr.name, resolve(attr.value));
              if (target === f.menu) menuBindings++;
            }
          }
        }
        assert.equal(rows, 14); assert.equal(menuBindings, 4);
        const block = f.root.querySelector('[data-mwp-config]');
        assert.notEqual(f.dom.window.getComputedStyle(block).display, 'none');
        f.create();
        assert.equal(f.dom.window.getComputedStyle(block).display, 'none');
        settings(f, { layout: override ? 'overlay' : 'dropdown', motion: override ? 'custom' : 'dropdown',
          alignment: 'right', iconLines: '3', panelWidth: override ? '31rem' : '24rem', stagger: '0ms',
          iconDuration: '220ms', submenuIconDuration: '220ms', submenuIconEasing: 'cubic-bezier(0.22, 1, 0.36, 1)', submenuIconRotation: '180deg',
          focusFirst: override ? 'true' : 'false', closeOutside: override ? 'false' : 'true',
          closeLink: override ? 'false' : 'true', scrollLock: override ? 'false' : 'auto' });
        assert.equal(f.root.style.getPropertyValue('--mwp-nav-duration-open'), override ? '61ms' : '280ms');
        assert.equal(f.root.style.getPropertyValue('--mwp-nav-duration-close'), override ? '11ms' : '220ms');
        assert.equal(f.root.style.getPropertyValue('--mwp-nav-distance'), '1.5rem');
        assert.equal(f.root.style.getPropertyValue('--mwp-nav-ease'), 'cubic-bezier(0.22, 1, 0.36, 1)');
        assert.equal(f.root.dataset.presets, String(!override));
        assert.equal(f.root.dataset.backdrop, 'true'); assert.equal(f.root.dataset.canvasOpen, 'false');
        const visualSelector = '[data-mwp-navbar][data-mwp-collapsed="true"]:not([data-presets="false" i]) [data-mwp-panel]';
        assert.equal(f.root.querySelector('[data-mwp-panel]').matches(visualSelector), !override);
        await cycle(f, override ? 61 : 280, override ? 11 : 220, { focus: override });
      } finally { f.close(); }
    });
  }
}
