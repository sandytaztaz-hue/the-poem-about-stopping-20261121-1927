import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `You asked me to keep going.
I lifted my hand from the keys
mid-sentence —

the cursor still blinking,
the coffee gone cold,
the chair still warm.

Your hand closed over the mouse.
The screen went dark
on its own.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
