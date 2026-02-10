/**
 * Deduplicates an array of text lines, keeping only the first occurrence of each unique line.
 * Preserves the original order of the remaining lines.
 */
export function deduplicateTextLines(lines: string[]): string[] {
  const seen = new Set<string>();
  return lines.filter((line) => {
    if (seen.has(line)) {
      return false;
    }
    seen.add(line);
    return true;
  });
}
