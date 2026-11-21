import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "I Lose It on Purpose" - a short poem about agency:
// the power to stop and to stay.
// My mother counted the steps to the well, one hundred and
// twelve, every morning for fifty years. Today she stops at
// nine, sits on the stone, and lets the bucket stay down.
// She hands me the count. I lose it on purpose.
// Candidates considered:
// A (scythe): father cuts the field forty years, stops mid-row,
//   hands me the handle, I lay it down beside him. Strong and
//   close to the rank 1 formula, but reads as a rank 1 variant
//   with a scythe instead of a wheel.
// B (winner, the count): a daily chain of counted steps, broken
//   at nine; the count itself is handed over, and losing it on
//   purpose is the act of agency. Freshest ritual, no tool,
//   ending lands as insight without explaining it.
// C (bell): father rings the town bell forty years, stops halfway
//   up, hands me the rope, "The silence rings." Good ending,
//   but the bell image is storybook and too near the rank 13
//   lighthouse keeper.
// Why B beats rounds 1 and 2: round 1 (sewing, 83.42%) had no
// time span and no handed lesson, and its ending stated the
// theme. Round 2 (printer, 86.00%) had the machine hand a line
// back, but its ending explained the insight. B keeps the mother
// and the long years of rank 1, adds a handed-over count, and its
// last line lands the insight instead of stating it.
// Revision: local test 1 passed, 217 chars, byte count verified,
// no trailing newline, no em dash. No poem line changed.
// 217 Unicode code points, inside the 1 to 280 limit. No trailing newline.

const ENTRY = [
  "My mother counted the steps to the well,",
  "one hundred and twelve, every morning,",
  "for fifty years.",
  "Today she stops at nine,",
  "sits on the stone,",
  "and lets the bucket stay down.",
  "She hands me the count.",
  "I lose it on purpose.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
