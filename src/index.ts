import { parseCode } from "./functions/parser";
import { FileUtils } from "./functions/file-utils";

const inputPath: string = Bun.argv[2];
const outputPath: string = Bun.argv[3] || "./output.js";

if (!inputPath) {
  console.error("❌ Usage: bun start -- input.emo [ouput.\js]");
  process.exit(1);
}

const code = await FileUtils.open(inputPath);
const translated = parseCode(code);

await FileUtils.write(translated, outputPath);
console.log(`✅ Emojo code compiled to ${outputPath}`);


