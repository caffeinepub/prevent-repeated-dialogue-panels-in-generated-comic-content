import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAppPreferences } from '@/contexts/AppPreferencesContext';
import { getAvailableLanguages } from '@/lib/i18n';
import { Globe } from 'lucide-react';

export function LanguageSelector() {
  const { language, setLanguage } = useAppPreferences();
  const languages = getAvailableLanguages();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <Select value={language} onValueChange={setLanguage}>
        <SelectTrigger className="w-[140px] border-3 font-medium">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
