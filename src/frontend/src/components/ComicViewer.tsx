import { useMemo } from 'react';
import { ComicPanel } from './ComicPanel';
import { CaptionBox, SpeechBubble, ThoughtBubble, SfxText, SceneLabel } from './ComicParts';
import { useComicSettings } from '@/contexts/ComicSettingsContext';
import { deduplicatePanelParts, countPanelTextLines } from '@/lib/deduplication';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { STORY_PANELS, CREDITS_PANELS } from '@/lib/comicData';
import type { PanelPart } from '@/lib/comicModel';

function renderPanelPart(part: PanelPart, index: number, isOverlay: boolean = false) {
  const overlayClasses = isOverlay ? 'comic-bubble-overlay' : '';
  
  switch (part.type) {
    case 'caption':
      return <CaptionBox key={index} className={overlayClasses}>{part.text}</CaptionBox>;
    case 'dialogue':
      return (
        <SpeechBubble key={index} className={overlayClasses}>
          <span className="text-primary font-black uppercase text-xs tracking-wide">{part.speaker}:</span>{' '}
          {part.text}
        </SpeechBubble>
      );
    case 'thought':
      return (
        <ThoughtBubble key={index} className={overlayClasses}>
          <span className="text-foreground font-bold text-xs tracking-wide">{part.speaker}:</span>{' '}
          {part.text}
        </ThoughtBubble>
      );
    case 'sfx':
      return <SfxText key={index} className={overlayClasses}>{part.text}</SfxText>;
    case 'scene':
      return <SceneLabel key={index} className={overlayClasses}>{part.text}</SceneLabel>;
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
        <Badge variant="outline" className="text-sm font-bold border-3 px-4 py-2 shadow-[2px_2px_0_oklch(var(--border))]">
          <strong className="mr-2 uppercase tracking-wide">Panels:</strong> {storyPanels.length}
        </Badge>
        {repetitionRemovalEnabled && removedCount > 0 && (
          <Badge variant="default" className="text-sm font-bold border-3 px-4 py-2 shadow-[2px_2px_0_oklch(var(--border))]">
            <strong className="mr-2 uppercase tracking-wide">Removed:</strong> {removedCount}
          </Badge>
        )}
      </div>

      {/* Comic Page Container */}
      <div className="comic-page rounded-none p-6 md:p-8">
        <ScrollArea className="h-[700px] pr-4">
          <div className="comic-gutter flex flex-col">
            <h2 className="font-heading text-2xl md:text-3xl uppercase mb-6 text-foreground tracking-tight">
              Story Panels
            </h2>
            {storyPanels.map((panel, index) => {
              // Separate dialogue/thought bubbles from other parts for overlay rendering
              const bubbleParts = panel.parts.filter(p => p.type === 'dialogue' || p.type === 'thought');
              const otherParts = panel.parts.filter(p => p.type !== 'dialogue' && p.type !== 'thought');
              
              return (
                <ComicPanel
                  key={`story-${index}`}
                  variant={panel.parts.some(p => p.type === 'sfx') ? 'highlight' : 'default'}
                >
                  {panel.illustrationSrc ? (
                    // Panel with illustration: overlay bubbles on top of image
                    <div className="relative mb-4">
                      <img
                        src={panel.illustrationSrc}
                        alt={panel.illustrationAlt || 'Comic panel illustration'}
                        className="comic-illustration w-full h-auto"
                      />
                      {/* Overlay bubbles on illustration */}
                      {bubbleParts.length > 0 && (
                        <div className="absolute inset-0 flex flex-col justify-start items-start p-4 gap-2 pointer-events-none">
                          {bubbleParts.map((part, partIndex) => renderPanelPart(part, partIndex, true))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Panel without illustration: render bubbles inline
                    <>
                      {bubbleParts.map((part, partIndex) => renderPanelPart(part, partIndex, false))}
                    </>
                  )}
                  {/* Render other parts (captions, SFX, scene labels) below */}
                  {otherParts.map((part, partIndex) => renderPanelPart(part, partIndex, false))}
                </ComicPanel>
              );
            })}

            {/* Credits Section */}
            {creditPanels.length > 0 && (
              <div className="pt-8 mt-8 border-t-4 border-border">
                <h2 className="font-heading text-2xl md:text-3xl uppercase mb-6 text-foreground tracking-tight">
                  Credits
                </h2>
                <div className="comic-gutter flex flex-col">
                  {creditPanels.map((panel, index) => (
                    <ComicPanel key={`credit-${index}`} variant="credits">
                      {panel.parts.map((part, partIndex) => renderPanelPart(part, partIndex, false))}
                    </ComicPanel>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
