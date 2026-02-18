import type { ComicPanel, PanelPart, Chapter } from './comicModel';
import { normalizeLanguageTag } from './i18n';

/**
 * Resolve localized text for a panel part with English fallback.
 */
function localizePartText(part: PanelPart, lang: string): string {
  const resolvedLang = normalizeLanguageTag(lang);
  
  if (resolvedLang === 'en' || !part.translations) {
    return part.text;
  }
  
  return part.translations[resolvedLang] || part.text;
}

/**
 * Create a localized copy of a panel part.
 */
function localizePanelPart(part: PanelPart, lang: string): PanelPart {
  const localizedText = localizePartText(part, lang);
  
  switch (part.type) {
    case 'caption':
      return { ...part, text: localizedText };
    case 'dialogue':
      return { ...part, text: localizedText };
    case 'thought':
      return { ...part, text: localizedText };
    case 'sfx':
      return { ...part, text: localizedText };
    case 'scene':
      return { ...part, text: localizedText };
  }
}

/**
 * Create a localized copy of a panel.
 */
export function localizePanel(panel: ComicPanel, lang: string): ComicPanel {
  return {
    ...panel,
    parts: panel.parts.map(part => localizePanelPart(part, lang)),
  };
}

/**
 * Create localized copies of all panels.
 */
export function localizePanels(panels: ComicPanel[], lang: string): ComicPanel[] {
  return panels.map(panel => localizePanel(panel, lang));
}

/**
 * Localize chapter title.
 */
export function localizeChapterTitle(chapter: Chapter, lang: string): string {
  const resolvedLang = normalizeLanguageTag(lang);
  
  if (resolvedLang === 'en' || !chapter.titleTranslations) {
    return chapter.title;
  }
  
  return chapter.titleTranslations[resolvedLang] || chapter.title;
}

/**
 * Create a localized copy of a chapter.
 */
export function localizeChapter(chapter: Chapter, lang: string): Chapter {
  return {
    ...chapter,
    title: localizeChapterTitle(chapter, lang),
    panels: localizePanels(chapter.panels, lang),
  };
}

/**
 * Create localized copies of all chapters.
 */
export function localizeChapters(chapters: Chapter[], lang: string): Chapter[] {
  return chapters.map(chapter => localizeChapter(chapter, lang));
}
