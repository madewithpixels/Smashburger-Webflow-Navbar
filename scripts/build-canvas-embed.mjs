import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { projectRoot, outputRoot } from './build-paths.mjs';

// The Canvas helper is a separate style-only Embed: Webflow never renders an
// Embed containing <script> on the Designer Canvas.
const css = await readFile(resolve(projectRoot, 'src/navbar-light-canvas.css'), 'utf8');
await writeFile(resolve(outputRoot, 'webflow/navbar-light-canvas-embed.html'), `<style>\n${css.trim()}\n</style>\n`);
