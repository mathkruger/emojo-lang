import { input } from "./functions/input";
import { output } from "./functions/output";
import { parseCode } from "./functions/parser";

const inputPath: string = Bun.argv[2];
const outputPath: string = Bun.argv[3] || "./output.js";

if (!inputPath) {
  console.error("❌ Usage: bun start -- input.emo [ouput.js]");
  process.exit(1);
}

const code = await input(inputPath);
const translated = parseCode(code);

await output(translated, outputPath);
console.log(`✅ Emojo code compiled to ${outputPath}`);


