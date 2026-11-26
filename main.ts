// office-artifacts-3af971d2: a museum placard for a stapler, catalogued
// as though it were an ancient artifact. One line of deadpan label
// copy; the program writes it to entry.txt and nothing else.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke lives in the catalogue voice: a date, a material that is
// half steel and half grudge, a solemn rite (the Binding Rite) for
// joining two sheets that had never met, and a donor credit for a
// department that no longer speaks to itself. The last word is the
// punchline, so the line is built to land there and stop.
const LINE =
  'Stapler, c. 1998. Steel and resentment. Used in the Binding Rite to join two sheets that had never met. Donated by the department that no longer speaks to itself.';

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

if (LINE.length > 180) fail(`placard is ${LINE.length} chars, over the 180 limit`);
if (LINE.length < 1) fail('placard is empty');
if (LINE.trim() !== LINE) fail('placard must not start or end with whitespace');
if (LINE.includes('\n')) fail('placard must be a single line');

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, 'entry.txt'), LINE, 'utf8');
console.log(`placard written (${LINE.length} chars)`);
console.log(LINE);
