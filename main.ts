import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "The Place She Stopped" - a short poem about agency:
// the power to stop and to stay.
// A foot lifts off a sewing machine pedal; the needle stops
// half a stitch from done, and the speaker keeps the place
// her grandmother stopped instead of finishing it.
// Chosen over a washing machine poem (ending did not land)
// and a tape recorder poem (last lines turned abstract).
// 241 Unicode code points, inside the 1 to 280 limit. No trailing newline.

const ENTRY = [
  "The sewing machine hums on.",
  "My foot is still on the pedal",
  "when I lift it.",
  "The needle stops above the cloth,",
  "half a stitch from done.",
  "My grandmother's scarf waits,",
  "one loose thread in my hand.",
  "I do not finish it.",
  "I keep the place she stopped.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
