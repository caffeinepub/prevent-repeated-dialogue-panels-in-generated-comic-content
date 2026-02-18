import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useComicSettings } from '@/contexts/ComicSettingsContext';
import { useI18n } from '@/hooks/useI18n';

export function RepetitionRemovalControl() {
  const { repetitionRemovalEnabled, setRepetitionRemovalEnabled } = useComicSettings();
  const { t } = useI18n();

  return (
    <div className="comic-panel p-6 space-y-3">
      <div className="flex items-center justify-between space-x-4">
        <div className="space-y-1 flex-1">
          <Label htmlFor="repetition-removal" className="text-base font-heading uppercase tracking-tight cursor-pointer">
            {t('controls.repetitionRemoval')}
          </Label>
          <p className="text-sm text-muted-foreground font-medium">
            {t('controls.repetitionRemovalDesc')}
          </p>
        </div>
        <Switch
          id="repetition-removal"
          checked={repetitionRemovalEnabled}
          onCheckedChange={setRepetitionRemovalEnabled}
        />
      </div>
    </div>
  );
}
