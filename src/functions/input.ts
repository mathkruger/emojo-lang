export function input(path: string) {
  return Bun.file(path).text();
}