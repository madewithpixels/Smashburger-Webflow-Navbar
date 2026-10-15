import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// Never overwrite the committed v0.2.6 distribution or installed loader.
export const outputRoot = resolve(projectRoot, 'candidate');
for (const directory of ['dist', 'webflow', 'demo']) {
  mkdirSync(resolve(outputRoot, directory), { recursive: true });
}
