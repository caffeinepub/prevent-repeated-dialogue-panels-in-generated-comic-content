import { createContext, useContext, useState, type ReactNode } from 'react';

interface ComicSettingsContextType {
  repetitionRemovalEnabled: boolean;
  setRepetitionRemovalEnabled: (enabled: boolean) => void;
}

const ComicSettingsContext = createContext<ComicSettingsContextType | undefined>(undefined);

export function ComicSettingsProvider({ children }: { children: ReactNode }) {
  const [repetitionRemovalEnabled, setRepetitionRemovalEnabled] = useState(true);

  return (
    <ComicSettingsContext.Provider
      value={{
        repetitionRemovalEnabled,
        setRepetitionRemovalEnabled
      }}
    >
      {children}
    </ComicSettingsContext.Provider>
  );
}

export function useComicSettings() {
  const context = useContext(ComicSettingsContext);
  if (!context) {
    throw new Error('useComicSettings must be used within ComicSettingsProvider');
  }
  return context;
}
