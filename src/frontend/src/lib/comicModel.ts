/**
 * Structured comic panel data model with distinct panel types and parts.
 */

export type PanelKind = 'story' | 'credits';

export interface CaptionPart {
  type: 'caption';
  text: string;
}

export interface DialoguePart {
  type: 'dialogue';
  speaker: string;
  text: string;
}

export interface ThoughtPart {
  type: 'thought';
  speaker: string;
  text: string;
}

export interface SfxPart {
  type: 'sfx';
  text: string;
}

export interface SceneLabelPart {
  type: 'scene';
  text: string;
}

export type PanelPart = CaptionPart | DialoguePart | ThoughtPart | SfxPart | SceneLabelPart;

export interface ComicPanel {
  kind: PanelKind;
  parts: PanelPart[];
}

/**
 * Extract all text lines from a panel for deduplication purposes.
 */
export function extractPanelTextLines(panel: ComicPanel): string[] {
  return panel.parts.map(part => {
    switch (part.type) {
      case 'caption':
      case 'sfx':
      case 'scene':
        return part.text;
      case 'dialogue':
      case 'thought':
        return `${part.speaker}: ${part.text}`;
    }
  });
}

/**
 * Extract all unique text lines from all panels.
 */
export function extractAllTextLines(panels: ComicPanel[]): string[] {
  return panels.flatMap(extractPanelTextLines);
}
