export function output(content: string, path: string) {
  const destination = Bun.file(path);
  return Bun.write(destination, content);
}