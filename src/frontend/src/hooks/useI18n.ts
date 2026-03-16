import { useAppPreferences } from "@/contexts/AppPreferencesContext";
import { type TranslationKey, t as translate } from "@/lib/i18n";
import { useMemo } from "react";

export function useI18n() {
  const { language } = useAppPreferences();

  const t = useMemo(() => {
    return (key: TranslationKey, vars?: Record<string, string | number>) => {
      return translate(key, language, vars);
    };
  }, [language]);

  return { lang: language, t };
}
