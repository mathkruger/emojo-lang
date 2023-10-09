export class FileUtils {
  static open(path: string) {
    return Bun.file(path).text();
  }

  static write(content: string, path: string) {
    const destination = Bun.file(path);
    return Bun.write(destination, content);
  }
}