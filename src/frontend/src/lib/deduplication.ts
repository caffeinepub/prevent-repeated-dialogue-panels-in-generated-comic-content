import type { ComicPanel, PanelPart } from './comicModel';

/**
 * Extended deduplication utilities supporting both simple text lines
 * and structured panel parts, with functions to suppress repeated content
 * while preserving panel order and counting total lines.
 * CRITICAL: Deduplication only affects text content, never removes entire panels.
 */

/**
 * Deduplicate an array of text lines, keeping only the first occurrence of each.
 */
export function deduplicateTextLines(lines: string[]): string[] {
  const seen = new Set<string>();
  return lines.filter(line => {
    if (seen.has(line)) {
      return false;
    }
    seen.add(line);
    return true;
  });
}

/**
 * Convert a panel part to a unique string key for deduplication.
 */
function panelPartToKey(part: PanelPart): string {
  switch (part.type) {
    case 'caption':
    case 'sfx':
    case 'scene':
      return `${part.type}:${part.text}`;
    case 'dialogue':
    case 'thought':
      return `${part.type}:${part.speaker}:${part.text}`;
  }
}

/**
 * Deduplicate panel parts across all panels, removing repeated identical lines
 * while preserving ALL panel structures and order.
 * IMPORTANT: This function NEVER removes entire panels, only duplicate text content within them.
 */
export function deduplicatePanelParts(panels: ComicPanel[]): ComicPanel[] {
  const seen = new Set<string>();
  
  return panels.map(panel => {
    const deduplicatedParts = panel.parts.filter(part => {
      const key = panelPartToKey(part);
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
    
    // CRITICAL FIX: Always return the panel, even if all text parts were deduplicated
    // Panels with illustrations or empty panels after deduplication must still be preserved
    return {
      ...panel,
      parts: deduplicatedParts
    };
  });
  // REMOVED: .filter(panel => panel.parts.length > 0 || panel.illustrationSrc);
  // This filter was incorrectly removing entire panels when all their text was deduplicated
}

/**
 * Count the total number of text lines across all panels.
 */
export function countPanelTextLines(panels: ComicPanel[]): number {
  return panels.reduce((count, panel) => count + panel.parts.length, 0);
}
