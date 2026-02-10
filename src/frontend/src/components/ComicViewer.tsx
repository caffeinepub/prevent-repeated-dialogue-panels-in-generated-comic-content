import { useMemo } from 'react';
import { ComicPanel } from './ComicPanel';
import { CaptionBox, SpeechBubble, ThoughtBubble, SfxText, SceneLabel } from './ComicParts';
import { useComicSettings } from '@/contexts/ComicSettingsContext';
import { deduplicatePanelParts, countPanelTextLines } from '@/lib/deduplication';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { STORY_PANELS, CREDITS_PANELS } from '@/lib/comicData';
import type { PanelPart } from '@/lib/comicModel';

function renderPanelPart(part: PanelPart, index: number) {
  switch (part.type) {
    case 'caption':
      return <CaptionBox key={index}>{part.text}</CaptionBox>;
    case 'dialogue':
      return (
        <SpeechBubble key={index}>
          <span className="text-primary font-black uppercase text-xs">{part.speaker}:</span>{' '}
          {part.text}
        </SpeechBubble>
      );
    case 'thought':
      return (
        <ThoughtBubble key={index}>
          <span className="text-secondary font-bold text-xs">{part.speaker}:</span>{' '}
          {part.text}
        </ThoughtBubble>
      );
    case 'sfx':
      return <SfxText key={index}>{part.text}</SfxText>;
    case 'scene':
      return <SceneLabel key={index}>{part.text}</SceneLabel>;
  }
}

export function ComicViewer() {
  const { repetitionRemovalEnabled } = useComicSettings();

  const allPanels = useMemo(() => [...STORY_PANELS, ...CREDITS_PANELS], []);
  
  const displayedPanels = useMemo(() => {
    return repetitionRemovalEnabled ? deduplicatePanelParts(allPanels) : allPanels;
  }, [repetitionRemovalEnabled, allPanels]);

  const storyPanels = displayedPanels.filter(p => p.kind === 'story');
  const creditPanels = displayedPanels.filter(p => p.kind === 'credits');

  const originalLineCount = countPanelTextLines(allPanels);
  const displayedLineCount = countPanelTextLines(displayedPanels);
  const removedCount = originalLineCount - displayedLineCount;

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="flex flex-wrap gap-3">
        <Badge variant="outline" className="text-sm border-3 px-4 py-2">
          <strong className="mr-2">Total Panels:</strong> {storyPanels.length}
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
          {storyPanels.map((panel, index) => (
            <ComicPanel
              key={`story-${index}`}
              variant={panel.parts.some(p => p.type === 'sfx') ? 'highlight' : 'default'}
            >
              {panel.parts.map((part, partIndex) => renderPanelPart(part, partIndex))}
            </ComicPanel>
          ))}

          {/* Credits Section */}
          {creditPanels.length > 0 && (
            <div className="pt-8 mt-8 border-t-3 border-border">
              <h2 className="text-xl font-black uppercase mb-4">Credits</h2>
              <div className="space-y-4">
                {creditPanels.map((panel, index) => (
                  <ComicPanel key={`credit-${index}`} variant="credits">
                    {panel.parts.map((part, partIndex) => renderPanelPart(part, partIndex))}
                  </ComicPanel>
                ))}
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
