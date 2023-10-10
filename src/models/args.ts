export enum SupportedTargets {
  JS = "js",
  KL = "kl",
}

export interface Args {
  inputPath: string,
  outputPath: string,
  target: SupportedTargets
}