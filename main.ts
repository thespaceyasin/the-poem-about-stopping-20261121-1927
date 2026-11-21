import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "The Letter He Did Not Finish" - a short poem about agency:
// the power to stop and to stay.
// A printer works all night on my father's letters, then stops
// mid-page and leaves the last line blank. The speaker refuses
// to fill it in: finishing his sentence would take his agency.
// Candidates considered:
// A (winner, printer): machine stops and hands the human line back,
//   twist ending "His sentence was never mine to finish."
// B (record player): I lift the needle before my mother's last verse;
//   "The song stays hers because I let it stop." Strong, but the
//   ending explains the insight instead of landing it.
// C (bus): mother waves me on from the step; I take her seat and
//   leave it empty all the way home. Moving, but less about the
//   power to act than about grief, and no handing back.
// Revision: cut "one after another, in his hand." It echoed the
// rank 3 handwriting machine and added nothing the poem needs.
// 214 Unicode code points, inside the 1 to 280 limit. No trailing newline.

const ENTRY = [
  "The printer works all night",
  "on my father's letters.",
  "At dawn it stops mid-page",
  "and leaves the last line blank.",
  "The ink dries where he stopped.",
  "I do not fill it in.",
  "His sentence was never mine",
  "to finish.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
