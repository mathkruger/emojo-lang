import { Args, SupportedTargets } from "../models/args";

export function parseArgs(argv: string[]) {
  if (argv.length < 3) {
    exitWithUsage();
  }

  const inputPath: string = argv[2];
  const outputPath: string = argv[3] || "./output.js";
  const target: SupportedTargets = argv[4] as SupportedTargets || SupportedTargets.JS;


  return <Args> {
    inputPath,
    outputPath,
    target
  };
}

function exitWithUsage() {
  console.error("❌ Usage: bun start -- input.emo [ouput.\js]");
  process.exit(1);
}