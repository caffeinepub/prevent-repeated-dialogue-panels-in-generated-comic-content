import type { ComicPanel, PanelPart } from './comicModel';
import { deduplicatePanelParts } from './deduplication';

export interface NarrationScriptItem {
  text: string;
  speaker?: string; // For voice selection
}

/**
 * Converts a panel part to speakable text without speaker-label prefixes.
 * Returns both the text and optional speaker metadata for voice selection.
 */
function panelPartToNarrationItem(part: PanelPart): NarrationScriptItem {
  switch (part.type) {
    case 'caption':
      return { text: part.text };
    case 'dialogue':
      return { text: part.text, speaker: part.speaker };
    case 'thought':
      return { text: part.text, speaker: part.speaker };
    case 'sfx':
      return { text: `Sound effect: ${part.text}` };
    case 'scene':
      return { text: `Scene: ${part.text}` };
    default:
      return { text: '' };
  }
}

/**
 * Derives the narration script (ordered list of speakable items) from comic panels.
 * Respects the repetition removal setting by applying deduplication when enabled.
 * 
 * @param panels - The comic panels to narrate
 * @param repetitionRemovalEnabled - Whether to apply deduplication
 * @returns Array of narration items with text and optional speaker metadata
 */
export function deriveNarrationScript(
  panels: ComicPanel[],
  repetitionRemovalEnabled: boolean
): NarrationScriptItem[] {
  // Apply deduplication if enabled, otherwise use raw panels
  const effectivePanels = repetitionRemovalEnabled 
    ? deduplicatePanelParts(panels) 
    : panels;

  // Extract narration items from all panel parts in order
  const narrationItems: NarrationScriptItem[] = [];
  
  for (const panel of effectivePanels) {
    for (const part of panel.parts) {
      const item = panelPartToNarrationItem(part);
      if (item.text.trim()) {
        narrationItems.push(item);
      }
    }
  }

  return narrationItems;
}
