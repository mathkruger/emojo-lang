export enum Target {
  JS = "js",
  KL = "kl",
}

export interface Args {
  inputPath: string,
  outputPath: string,
  target: Target
}