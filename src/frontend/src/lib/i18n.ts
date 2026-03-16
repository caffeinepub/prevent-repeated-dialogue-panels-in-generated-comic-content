import { deDict } from "./locales/de";
import { enDict } from "./locales/en";
import { esDict } from "./locales/es";
import { frDict } from "./locales/fr";
import { jaDict } from "./locales/ja";
import { zhDict } from "./locales/zh";

export type TranslationKey = keyof typeof enDict;
export type TranslationDict = Record<TranslationKey, string>;

const locales: Record<string, TranslationDict> = {
  en: enDict,
  es: esDict,
  fr: frDict,
  de: deDict,
  ja: jaDict,
  zh: zhDict,
  "zh-cn": zhDict,
  "zh-hans": zhDict,
};

export function normalizeLanguageTag(tag: string): string {
  const normalized = tag.toLowerCase().trim();
  if (locales[normalized]) return normalized;
  const base = normalized.split("-")[0];
  if (locales[base]) return base;
  return "en";
}

export function t(
  key: TranslationKey,
  lang = "en",
  vars?: Record<string, string | number>,
): string {
  const resolvedLang = normalizeLanguageTag(lang);
  const dict = locales[resolvedLang] || enDict;
  let text = dict[key] || enDict[key] || key;

  if (vars) {
    for (const [varKey, value] of Object.entries(vars)) {
      text = text.replace(new RegExp(`\\{${varKey}\\}`, "g"), String(value));
    }
  }

  return text;
}

export function getAvailableLanguages(): Array<{ code: string; name: string }> {
  return [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
    { code: "ja", name: "日本語" },
    { code: "zh", name: "中文" },
  ];
}
