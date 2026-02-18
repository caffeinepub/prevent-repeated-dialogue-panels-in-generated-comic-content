import { useMemo } from 'react';
import { useAppPreferences } from '@/contexts/AppPreferencesContext';
import { t as translate, type TranslationKey } from '@/lib/i18n';

export function useI18n() {
  const { language } = useAppPreferences();

  const t = useMemo(() => {
    return (key: TranslationKey, vars?: Record<string, string | number>) => {
      return translate(key, language, vars);
    };
  }, [language]);

  return { lang: language, t };
}
