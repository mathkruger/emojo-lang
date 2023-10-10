import { parseCode } from "./functions/parser";
import { FileUtils } from "./functions/file-utils";
import { parseArgs } from "./functions/parse-args";

const { inputPath, outputPath, target } = parseArgs(Bun.argv);

const code = await FileUtils.open(inputPath);
const translated = parseCode(code, target);

await FileUtils.write(translated, outputPath);
console.log(`✅ Emojo code compiled to ${outputPath}`);


