// office-artifacts-3af971d2: one-line museum placard for an ordinary
// office object, written as if it were an ancient artifact. This
// program writes that single line to /output/entry.txt, where the
// gate reads it. That is all it has to do.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The placard turns a stapler into a ritual object: the Binding Rite
// joins two sheets that had never met, and the donor line — a whole
// department that no longer speaks to itself — sells the joke deadpan.
// Catalogue craft does the work: a date, a material (steel and
// resentment), a rite, a provenance. Every word earns its place; the
// punch lands on the last word.
const LINE =
  'Stapler, c. 1998. Steel and resentment. Used in the Binding Rite to join two sheets that had never met. Donated by the department that no longer speaks to itself.';

if (LINE.length < 1 || LINE.length > 180 || !LINE.trim()) {
  console.error(`entry line is ${LINE.length} chars, must be 1-180`);
  process.exit(1);
}
if (LINE !== LINE.trim()) {
  console.error('entry line must not start or end with whitespace');
  process.exit(1);
}
if (LINE.includes('\n')) {
  console.error('entry line must be a single line');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
console.log(LINE);
