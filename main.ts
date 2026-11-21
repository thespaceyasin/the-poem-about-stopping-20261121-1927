import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "The Loom" - a short poem about agency:
// the power to stop and to stay.
// My grandmother's loom stops mid-thread; the shuttle hangs
// half a row from done. I do not cut the thread and I do not
// finish it. The pattern waits for a hand I have not grown
// into yet: an unresolved ending, a lesson still to learn.
// Candidates considered:
// A (winner, loom, 201 chars): machine stops itself mid-task,
//   grandmother's shuttle, unresolved ending. Follows round 2's
//   winning structure (printer stops mid-page, 86.00%) but ends
//   unresolved like rank 1 ("Learn the other thing") and rank 2
//   ("I still haven't"), instead of resolving into a principle
//   the way round 2 did ("never mine to finish").
// B (record, 224 chars): the record stops mid-song, my mother's
//   voice stays in the groove, I do not lift the needle, I do
//   not know whose turn it is to finish. Strong, but the ending
//   "and the song stays hers" resolves too neatly, and the music
//   scene sits close to rank 5's bar thirty-two.
// C (projector, 205 chars): the projector stops mid-reel, the
//   hero freezes half a step from the door, nobody stands, the
//   dark holds us, my father still does not reach for the light.
//   Good staying, but no handed thing and no parent until the
//   last line, and the scene is less personal than the loom.
// Why A beats round 2 (printer, 86.00%): same machine-stops
//   structure, but the ending stays open. "Half a life, half a
//   cloth" doubles the image, and the hand I have not grown
//   into yet turns stopping into something to grow into, not
//   something already understood. Fresh scene: no loom anywhere
//   in the top 20.
// Revision: local test passed twice, byte-identical output,
// 201 Unicode code points, inside the 1 to 280 limit. No trailing newline.

const ENTRY = [
  "The loom stops mid-thread.",
  "My grandmother's shuttle hangs,",
  "half a row from done.",
  "I do not cut it.",
  "I do not finish it.",
  "The pattern waits,",
  "half a life, half a cloth,",
  "for a hand I have not grown into yet.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
