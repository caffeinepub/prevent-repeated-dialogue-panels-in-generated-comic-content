import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useComicSettings } from '@/contexts/ComicSettingsContext';

export function RepetitionRemovalControl() {
  const { repetitionRemovalEnabled, setRepetitionRemovalEnabled } = useComicSettings();

  return (
    <div className="flex items-center justify-between gap-4 p-4 comic-panel rounded-sm bg-card">
      <div className="flex flex-col gap-1">
        <Label htmlFor="repetition-removal" className="text-base font-bold">
          Remove Repeated Lines
        </Label>
        <p className="text-sm text-muted-foreground">
          Automatically deduplicate identical dialogue and panel text
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
