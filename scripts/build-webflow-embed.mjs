import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { projectRoot, outputRoot } from './build-paths.mjs';
import { transform } from 'esbuild';

const css = await readFile(resolve(projectRoot, 'src/navbar-light.css'), 'utf8');
const moduleSource = await readFile(resolve(projectRoot, 'src/navbar-light.js'), 'utf8');
const browserSource = moduleSource
  .replace(/^export class /m, 'class ')
  .replace(/^export function /m, 'function ')
  .concat('\n\nglobalThis.NavbarLight = NavbarLight;\nglobalThis.initNavbarLight = initNavbarLight;\n');
const compactBrowserSource = (await transform(browserSource, { loader: 'js', minify: true, target: 'es2020' })).code;

const embed = `<style>\n${css.trim()}\n</style>\n<script>\n${compactBrowserSource}\n</script>\n`;
await writeFile(resolve(outputRoot, 'webflow/navbar-light-embed.html'), embed);
await writeFile(resolve(outputRoot, 'demo/navbar-light.browser.js'), `${browserSource.trim()}\n`);
