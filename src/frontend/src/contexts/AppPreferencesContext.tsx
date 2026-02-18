import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AppPreferences {
  language: string;
  authorName: string;
  timelineMode: boolean;
}

interface AppPreferencesContextValue extends AppPreferences {
  setLanguage: (lang: string) => void;
  setAuthorName: (name: string) => void;
  setTimelineMode: (enabled: boolean) => void;
}

const AppPreferencesContext = createContext<AppPreferencesContextValue | undefined>(undefined);

const STORAGE_KEY = 'spider-verse-preferences';
const DEFAULT_LANGUAGE = 'en';

function validateLanguageTag(tag: string): string {
  // Basic BCP-47 validation - allow alphanumeric and hyphens
  const cleaned = tag.trim().toLowerCase();
  if (!cleaned || !/^[a-z]{2,3}(-[a-z0-9]+)*$/i.test(cleaned)) {
    return DEFAULT_LANGUAGE;
  }
  return cleaned;
}

export function AppPreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<AppPreferences>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          language: validateLanguageTag(parsed.language || DEFAULT_LANGUAGE),
          authorName: parsed.authorName || '',
          timelineMode: parsed.timelineMode || false,
        };
      }
    } catch (error) {
      console.error('Failed to load preferences:', error);
    }
    return {
      language: DEFAULT_LANGUAGE,
      authorName: '',
      timelineMode: false,
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    } catch (error) {
      console.error('Failed to save preferences:', error);
    }
  }, [preferences]);

  const setLanguage = (lang: string) => {
    const validated = validateLanguageTag(lang);
    setPreferences(prev => ({ ...prev, language: validated }));
  };

  const setAuthorName = (name: string) => {
    setPreferences(prev => ({ ...prev, authorName: name.trim() }));
  };

  const setTimelineMode = (enabled: boolean) => {
    setPreferences(prev => ({ ...prev, timelineMode: enabled }));
  };

  return (
    <AppPreferencesContext.Provider
      value={{
        ...preferences,
        setLanguage,
        setAuthorName,
        setTimelineMode,
      }}
    >
      {children}
    </AppPreferencesContext.Provider>
  );
}

export function useAppPreferences() {
  const context = useContext(AppPreferencesContext);
  if (!context) {
    throw new Error('useAppPreferences must be used within AppPreferencesProvider');
  }
  return context;
}
