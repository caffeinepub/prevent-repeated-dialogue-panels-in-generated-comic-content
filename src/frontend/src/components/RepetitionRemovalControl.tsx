import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useComicSettings } from '@/contexts/ComicSettingsContext';

export function RepetitionRemovalControl() {
  const { repetitionRemovalEnabled, setRepetitionRemovalEnabled } = useComicSettings();

  return (
    <div className="flex items-center justify-between gap-4 p-5 comic-panel rounded-none bg-card">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="repetition-removal" className="text-base font-black uppercase tracking-wide">
          Remove Repeated Lines
        </Label>
        <p className="text-sm font-semibold text-muted-foreground">
          Automatically deduplicate identical captions, dialogue, and SFX across panels
        </p>
      </div>
      <Switch
        id="repetition-removal"
        checked={repetitionRemovalEnabled}
        onCheckedChange={setRepetitionRemovalEnabled}
      />
    </div>
  );
}
