import type { ComicPanel, PanelPart } from './comicModel';

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

/**
 * Deduplicates panel parts by removing repeated identical text lines.
 * Returns panels with suppressed duplicate parts while preserving panel order.
 */
export function deduplicatePanelParts(panels: ComicPanel[]): ComicPanel[] {
  const seenLines = new Set<string>();
  
  return panels.map(panel => {
    const filteredParts = panel.parts.filter(part => {
      // Generate a unique key for this part's text content
      let textKey: string;
      switch (part.type) {
        case 'caption':
        case 'sfx':
        case 'scene':
          textKey = part.text;
          break;
        case 'dialogue':
        case 'thought':
          textKey = `${part.speaker}: ${part.text}`;
          break;
      }
      
      if (seenLines.has(textKey)) {
        return false; // Suppress duplicate
      }
      seenLines.add(textKey);
      return true; // Keep first occurrence
    });
    
    return {
      ...panel,
      parts: filteredParts
    };
  }).filter(panel => panel.parts.length > 0); // Remove panels with no parts left
}

/**
 * Count total text lines across all panel parts.
 */
export function countPanelTextLines(panels: ComicPanel[]): number {
  return panels.reduce((count, panel) => count + panel.parts.length, 0);
}
