/**
 * Structured comic panel data model with distinct panel types, parts, chapters, and localization support.
 */

export type PanelKind = 'story' | 'credits';

export interface CaptionPart {
  type: 'caption';
  text: string;
  translations?: Record<string, string>;
}

export interface DialoguePart {
  type: 'dialogue';
  speaker: string;
  text: string;
  translations?: Record<string, string>;
}

export interface ThoughtPart {
  type: 'thought';
  speaker: string;
  text: string;
  translations?: Record<string, string>;
}

export interface SfxPart {
  type: 'sfx';
  text: string;
  translations?: Record<string, string>;
}

export interface SceneLabelPart {
  type: 'scene';
  text: string;
  translations?: Record<string, string>;
}

export type PanelPart = CaptionPart | DialoguePart | ThoughtPart | SfxPart | SceneLabelPart;

export interface ComicPanel {
  kind: PanelKind;
  parts: PanelPart[];
  illustrationSrc?: string;
  illustrationAlt?: string;
  timestamp?: number; // Seconds from start (0-6960 for 1h56m)
  timestampEnd?: number; // Optional end timestamp for ranges
}

export interface Chapter {
  id: string;
  title: string;
  titleTranslations?: Record<string, string>;
  panels: ComicPanel[];
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

/**
 * Flatten chapters into a continuous panel array.
 */
export function flattenChapters(chapters: Chapter[]): ComicPanel[] {
  return chapters.flatMap(chapter => chapter.panels);
}
