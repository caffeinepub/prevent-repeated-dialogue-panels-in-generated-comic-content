import { useMemo } from 'react';
import { ComicPanel } from './ComicPanel';
import { useComicSettings } from '@/contexts/ComicSettingsContext';
import { deduplicateTextLines } from '@/lib/deduplication';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

const ORIGINAL_SCENES = [
  "🕷️ Miles: Alright… let's do this. My name is Miles Morales.",
  "Jefferson: You're going to be late! This school is important!",
  "Miles: I know, Dad… I just need space.",
  "Aaron: You don't have to be what everyone expects. Be yourself.",
  "*A strange spider bites Miles in the subway tunnel.*",
  "Miles: Why am I stuck to the ceiling?!",
  "Kingpin: Activate the collider.",
  "Peter Parker: That machine will tear reality apart!",
  "*Battle erupts. Explosions shake the chamber.*",
  "Peter Parker: Take this device. Finish what I started.",
  "*Kingpin strikes. Silence falls.*",
  "Miles: I should've helped him…",
  "Gwen: You're not the only one like this.",
  "Peter B. Parker: Kid, being Spider-Man isn't about perfection.",
  "Prowler: You don't belong here.",
  "Miles: Uncle…?",
  "Aaron: You're going to be better than me.",
  "*Gunshot echoes.*",
  "Miles: I won't run anymore.",
  "Peter B.: Then jump.",
  "*Miles leaps from the skyscraper. The city rises toward him.*",
  "Miles: I'm Spider-Man.",
  "*Final battle inside the collider.*",
  "Kingpin: You're nothing!",
  "Miles: I'm not supposed to be you.",
  "*Venom blast shatters the chamber.*",
  "Gwen: You're amazing.",
  "Peter B.: You've got this from here.",
  "*Portals close one by one.*",
  "Miles: Anyone can wear the mask. You just have to take the leap."
];

const CREDITS_PANELS = [
  "Original Spider-Man created by Stan Lee & Steve Ditko",
  "Miles Morales created by Brian Michael Bendis & Sara Pichelli",
  "Inspired by the animated film Spider-Man: Into the Spider-Verse",
  "Comic Script Adaptation Version",
  "Thank you for reading."
];

export function ComicViewer() {
  const { repetitionRemovalEnabled } = useComicSettings();

  const displayedScenes = useMemo(() => {
    return repetitionRemovalEnabled ? deduplicateTextLines(ORIGINAL_SCENES) : ORIGINAL_SCENES;
  }, [repetitionRemovalEnabled]);

  const displayedCredits = useMemo(() => {
    return repetitionRemovalEnabled ? deduplicateTextLines(CREDITS_PANELS) : CREDITS_PANELS;
  }, [repetitionRemovalEnabled]);

  const removedCount = ORIGINAL_SCENES.length - displayedScenes.length;

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="flex flex-wrap gap-3">
        <Badge variant="outline" className="text-sm border-3 px-4 py-2">
          <strong className="mr-2">Total Panels:</strong> {displayedScenes.length}
        </Badge>
        {repetitionRemovalEnabled && removedCount > 0 && (
          <Badge variant="default" className="text-sm border-3 px-4 py-2">
            <strong className="mr-2">Duplicates Removed:</strong> {removedCount}
          </Badge>
        )}
      </div>

      {/* Comic Panels */}
      <ScrollArea className="h-[600px] rounded-sm border-3 border-border p-4">
        <div className="space-y-4">
          <h2 className="text-xl font-black uppercase mb-4">Story Panels</h2>
          {displayedScenes.map((scene, index) => (
            <ComicPanel
              key={`scene-${index}`}
              variant={scene.startsWith('*') ? 'highlight' : 'default'}
            >
              {scene}
            </ComicPanel>
          ))}

          {/* Credits Section */}
          <div className="pt-8 mt-8 border-t-3 border-border">
            <h2 className="text-xl font-black uppercase mb-4">Credits</h2>
            <div className="space-y-4">
              {displayedCredits.map((credit, index) => (
                <ComicPanel key={`credit-${index}`} variant="credits">
                  {credit}
                </ComicPanel>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
