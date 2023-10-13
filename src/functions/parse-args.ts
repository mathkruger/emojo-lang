import { Args, Target } from "../models/args";

export function parseArgs(argv: string[]) {
  if (argv.length < 3) {
    exitWithUsage();
  }

  const inputPath: string = argv[2];
  const outputPath: string = argv[3] || "./output.js";
  const target: Target = argv[4] as Target || Target.JS;


  return <Args> {
    inputPath,
    outputPath,
    target
  };
}

function exitWithUsage() {
  console.info("❌ Usage: bun start -- input.emo [ouput] [target]");
  process.exit(1);
}