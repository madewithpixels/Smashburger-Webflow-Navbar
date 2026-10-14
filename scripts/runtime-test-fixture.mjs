import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';

export const deliveries = ['source', 'dist', 'minified', 'embed'];
const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

export function runtimeFixture(delivery, { width = 820, reducedMotion = false, javascript = true, includeCss = true } = {}) {
  const source = delivery === 'source'
    ? read('src/navbar-light.js').replace(/^export /gm, '') + '\nglobalThis.NavbarLight = NavbarLight; globalThis.initNavbarLight = initNavbarLight;'
    : delivery === 'embed'
      ? read('webflow/navbar-light-embed.html').match(/<script>\s*([\s\S]*?)<\/script>/)[1]
      : read(`dist/navbar-light${delivery === 'minified' ? '.min' : ''}.js`);
  const css = delivery === 'source' ? read('src/navbar-light.css')
    : delivery === 'embed' ? read('webflow/navbar-light-embed.html').match(/<style>\s*([\s\S]*?)<\/style>/)[1]
      : read(`dist/navbar-light${delivery === 'minified' ? '.min' : ''}.css`);
  const stylesheet = includeCss ? `<style>${css}</style>` : '';
  const dom = new JSDOM(`<!doctype html>${stylesheet}<header data-mwp-navbar data-collapse="always" data-motion="none">
    <div data-mwp-inner><details data-mwp-menu><summary data-mwp-trigger aria-label="Navigation menu">
    <span data-mwp-icon style="row-gap:7px"><span data-mwp-line style="height:3px"></span><span data-mwp-line style="height:3px"></span><span data-mwp-line style="height:3px"></span></span>
    </summary></details><nav data-mwp-panel><a href="#first" data-mwp-item>First</a>
    <details data-mwp-submenu><summary>More</summary><div class="mwp-css-nav_submenu-list"><a href="#nested">Nested</a></div></details></nav></div>
    <div data-mwp-backdrop></div></header><button id="outside">Outside</button>`, { runScripts: 'outside-only' });
  const media = new Set();
  let currentWidth = width;
  dom.window.CSS = { supports: () => true }; // jsdom has no CSS.supports implementation.
  dom.window.MWP_NAVBAR_LIGHT_AUTO_INIT = false;
  dom.window.matchMedia = (query) => {
    const listeners = new Set();
    const item = { get matches() { return query.includes('prefers-reduced-motion') ? reducedMotion : currentWidth <= Number(query.match(/max-width: (\d+)px/)?.[1]); },
      addEventListener(type, listener) { if (type === 'change') listeners.add(listener); },
      removeEventListener(type, listener) { if (type === 'change') listeners.delete(listener); }, listeners };
    media.add(item);
    return item;
  };
  if (javascript) dom.window.eval(source);
  const root = dom.window.document.querySelector('[data-mwp-navbar]');
  return { dom, root, create: () => new dom.window.NavbarLight(root),
    resize(next) { const before = new Map([...media].map(item => [item, item.matches])); currentWidth = next;
      for (const item of media) if (before.get(item) !== item.matches) for (const listener of item.listeners) listener({ matches: item.matches }); },
    close: () => dom.window.close() };
}

export function event(target, name) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => { target.removeEventListener(name, done); reject(new Error(`Timed out: ${name}`)); }, 1500);
    function done(e) { clearTimeout(timer); resolve(e); }
    target.addEventListener(name, done, { once: true });
  });
}

export async function change(fixture, action, name) {
  const completed = event(fixture.root, `mwp-nav:${name}`);
  action();
  await completed;
}
