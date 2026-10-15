import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
const root = new URL('../', import.meta.url);
const read = path => readFile(new URL(path, root), 'utf8');
const after = JSON.parse(await read('webflow/evidence/library-sb-nav-candidate-2026-10-15.json'));
const baseline = JSON.parse(await read('webflow/evidence/library-sb-nav-baseline-2026-10-15.json'));
const markup = await read('webflow/evidence/library-cdn-designer-native-html-2026-10-15.html');
const loader = await read('candidate/webflow/library/navbar-light-cdn-candidate-loader.html');
const map = name => name.replace(/^mwp-css-nav/, 'sb-nav').replace(/_/g, '-');
const media = { xxl: '(min-width:1920px)', xl: '(min-width:1440px)', large: '(min-width:1280px)', medium: '(max-width:991px)', small: '(max-width:767px)', tiny: '(max-width:479px)' };
const rule = (selector, properties) => `${selector}{${Object.entries(properties).map(([key, value]) => `${key}:${value}`).join(';')}}`;
const wrap = (css, breakpoint) => breakpoint === 'main' ? css : `@media ${media[breakpoint]}{${css}}`;
// Recreate only the saved authored class declarations; this is local browser
// evidence, not an exported/published Webflow page or a linked-Library test.
let css = 'body{margin:0;font:14px/1.5 Arial,sans-serif;color:#222;background:#fff}*{box-sizing:border-box}';
for (const row of baseline.baseStyles) {
  const [, name, breakpoint, pseudo] = row.label.split('|');
  let properties = { ...row.result[0].properties };
  if (breakpoint === 'main' && ['mwp-css-nav_line', 'mwp-css-nav_submenu-icon-line-left', 'mwp-css-nav_submenu-icon-line-right'].includes(name)) {
    for (const side of ['top', 'right', 'bottom', 'left']) properties[`padding-${side}`] = '0px';
  }
  css += wrap(rule(`.${map(name)}${pseudo === 'noPseudo' ? '' : `:${pseudo}`}`, properties), breakpoint);
}
const marker = 'data-wf--smashburger-cdn-0-3-0-rc-1-candidate--variant';
for (const row of after.variantStyles.filter(row => row.label.startsWith('1|'))) {
  const [, variant, oldClass, breakpoint] = row.label.split('|');
  const name = variant.toLowerCase().replace(/ /g, '-');
  const selector = oldClass === 'mwp-css-nav' ? `[${marker}="${name}"].sb-nav` : `[${marker}="${name}"] .${map(oldClass)}`;
  css += wrap(rule(selector, row.result[0].properties), breakpoint);
}
const directory = new URL('candidate/webflow/library/browser-checks/', root);
await mkdir(directory, { recursive: true });
for (const variant of ['never', 'tablet', 'mobile-landscape', 'mobile-portrait', 'always']) {
  for (const nojs of [false, true]) {
    const dom = new JSDOM(markup), nav = dom.window.document.querySelector('[data-mwp-navbar]');
    nav.querySelectorAll('.w-embed').forEach(embed => embed.remove());
    nav.setAttribute(marker, variant);
    const delivery = nojs ? loader.replace(/<script\b[\s\S]*?<\/script>/g, '') : loader;
    const page = `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Unreleased native Library CDN verification</title><style>${css}</style><body>${nav.outerHTML}<p>Local reconstruction of saved native markup — ${variant}${nojs ? ', runtime script omitted' : ', exact commit CDN pin'}. Library installation and Webflow staging remain separate checks.</p>${delivery}</body></html>`;
    await writeFile(new URL(`${variant}${nojs ? '-nojs' : ''}.html`, directory), page);
    dom.window.close();
  }
}
