import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAppPreferences } from "@/contexts/AppPreferencesContext";
import { useComicSettings } from "@/contexts/ComicSettingsContext";
import { useI18n } from "@/hooks/useI18n";
import { useMissingIllustrations } from "@/hooks/useMissingIllustrations";
import { useProgressivePanels } from "@/hooks/useProgressivePanels";
import { COMIC_CHAPTERS, CREDITS_PANELS } from "@/lib/comicData";
import { localizeChapters, localizePanels } from "@/lib/comicLocalization";
import { flattenChapters } from "@/lib/comicModel";
import type { Chapter, PanelPart } from "@/lib/comicModel";
import {
  countPanelTextLines,
  deduplicatePanelParts,
} from "@/lib/deduplication";
import { getPanelTimestamp } from "@/lib/timeline";
import { AlertCircle, ChevronDown, Layers } from "lucide-react";
import { useMemo } from "react";
import { ComicPanel } from "./ComicPanel";
import {
  CaptionBox,
  SceneLabel,
  SfxText,
  SpeechBubble,
  ThoughtBubble,
} from "./ComicParts";
import { VerifiedPanelImage } from "./VerifiedPanelImage";

// Images panel-07 through panel-19 = 13 unique images
const PANEL_IMAGE_COUNT = 13;
// Step of 7 is coprime to 13, ensuring all 13 images are visited before any repeats
const STEP = 7;

function getIllustrationSrc(globalIndex: number): string {
  const idx = (globalIndex * STEP) % PANEL_IMAGE_COUNT;
  const imageNum = idx + 7; // maps 0..12 -> panel-07..panel-19
  return `/assets/generated/spiderverse-panel-${String(imageNum).padStart(2, "0")}.dim_1024x768.png`;
}

function renderPanelPart(part: PanelPart, index: number, isOverlay = false) {
  const overlayClasses = isOverlay ? "comic-bubble-overlay" : "";

  switch (part.type) {
    case "caption":
      return (
        <CaptionBox key={index} className={overlayClasses}>
          {part.text}
        </CaptionBox>
      );
    case "dialogue":
      return (
        <SpeechBubble key={index} className={overlayClasses}>
          <span className="text-primary font-black uppercase text-xs tracking-wide">
            {part.speaker}:
          </span>{" "}
          {part.text}
        </SpeechBubble>
      );
    case "thought":
      return (
        <ThoughtBubble key={index} className={overlayClasses}>
          <span className="text-foreground font-bold text-xs tracking-wide">
            {part.speaker}:
          </span>{" "}
          {part.text}
        </ThoughtBubble>
      );
    case "sfx":
      return (
        <SfxText key={index} className={overlayClasses}>
          {part.text}
        </SfxText>
      );
    case "scene":
      return (
        <SceneLabel key={index} className={overlayClasses}>
          {part.text}
        </SceneLabel>
      );
  }
}

export function ComicViewer() {
  const { repetitionRemovalEnabled } = useComicSettings();
  const { language, timelineMode } = useAppPreferences();
  const { t } = useI18n();
  const { missingFiles, reportMissing, hasMissing } = useMissingIllustrations();

  const localizedChapters = useMemo(() => {
    return localizeChapters(COMIC_CHAPTERS, language);
  }, [language]);

  const allStoryPanels = useMemo(() => {
    return flattenChapters(localizedChapters);
  }, [localizedChapters]);

  const localizedCredits = useMemo(() => {
    return localizePanels(CREDITS_PANELS, language);
  }, [language]);

  const allPanels = useMemo(() => {
    return [...allStoryPanels, ...localizedCredits];
  }, [allStoryPanels, localizedCredits]);

  const displayedPanels = useMemo(() => {
    return repetitionRemovalEnabled
      ? deduplicatePanelParts(allPanels)
      : allPanels;
  }, [repetitionRemovalEnabled, allPanels]);

  const storyPanelCount = allStoryPanels.length;
  const displayedStoryPanels = displayedPanels.slice(
    0,
    Math.min(displayedPanels.length, storyPanelCount),
  );
  const displayedCreditPanels = displayedPanels.slice(storyPanelCount);

  const { visibleCount, canLoadMore, loadMore, loadAll } = useProgressivePanels(
    {
      totalCount: displayedStoryPanels.length,
      initialCount: 20,
      incrementSize: 20,
    },
  );

  const visibleStoryPanels = useMemo(() => {
    return displayedStoryPanels.slice(0, visibleCount);
  }, [displayedStoryPanels, visibleCount]);

  const originalLineCount = countPanelTextLines(allPanels);
  const displayedLineCount = countPanelTextLines(displayedPanels);
  const removedCount = originalLineCount - displayedLineCount;

  const chaptersWithPanels = useMemo(() => {
    const result: Array<{
      chapter: Chapter;
      panels: typeof visibleStoryPanels;
      globalOffset: number;
    }> = [];
    let panelIndex = 0;

    for (const chapter of localizedChapters) {
      const chapterPanels = visibleStoryPanels.slice(
        panelIndex,
        panelIndex + chapter.panels.length,
      );
      result.push({ chapter, panels: chapterPanels, globalOffset: panelIndex });
      panelIndex += chapter.panels.length;
    }

    return result;
  }, [localizedChapters, visibleStoryPanels]);

  return (
    <div className="space-y-6">
      {hasMissing && (
        <Collapsible>
          <Alert variant="destructive" className="border-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle className="font-heading uppercase flex items-center justify-between">
              {t("viewer.missingAssetsTitle")}
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="h-auto p-1">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
            </AlertTitle>
            <AlertDescription>
              <p className="mb-2">{t("viewer.missingAssetsDesc")}</p>
              <CollapsibleContent>
                <ul className="list-disc list-inside text-sm space-y-1 max-h-40 overflow-auto">
                  {missingFiles.map((file) => (
                    <li key={file} className="font-mono text-xs">
                      {file}
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </AlertDescription>
          </Alert>
        </Collapsible>
      )}

      <div className="flex flex-wrap gap-3">
        <Badge
          variant="outline"
          className="text-sm font-bold border-3 px-4 py-2 shadow-[2px_2px_0_oklch(var(--border))]"
        >
          <strong className="mr-2 uppercase tracking-wide">
            {t("stats.panels")}:
          </strong>{" "}
          {visibleCount} / {displayedStoryPanels.length}
        </Badge>
        {repetitionRemovalEnabled && removedCount > 0 && (
          <Badge
            variant="default"
            className="text-sm font-bold border-3 px-4 py-2 shadow-[2px_2px_0_oklch(var(--border))]"
          >
            <strong className="mr-2 uppercase tracking-wide">
              {t("stats.removed")}:
            </strong>{" "}
            {removedCount}
          </Badge>
        )}
      </div>

      <div className="comic-page rounded-none p-6 md:p-8">
        <ScrollArea className="h-[700px] pr-4">
          <div className="comic-gutter flex flex-col">
            <h2 className="font-heading text-2xl md:text-3xl uppercase mb-6 text-foreground tracking-tight">
              {t("section.storyPanels")}
            </h2>

            {chaptersWithPanels.map(
              ({ chapter, panels, globalOffset }, chapterIdx) => (
                <div key={chapter.id} className="mb-8">
                  <h3 className="font-heading text-xl md:text-2xl uppercase mb-4 text-primary tracking-tight border-b-4 border-border pb-2">
                    {t("stats.chapter")} {chapterIdx + 1}: {chapter.title}
                  </h3>

                  {panels.length === 0 ? (
                    <Alert className="border-3">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        {t("viewer.emptyChapter")} ({chapter.title})
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <div className="comic-gutter flex flex-col">
                      {panels.map((panel, panelIdx) => {
                        const bubbleParts =
                          panel.parts?.filter(
                            (p) =>
                              p.type === "dialogue" || p.type === "thought",
                          ) || [];
                        const otherParts =
                          panel.parts?.filter(
                            (p) =>
                              p.type !== "dialogue" && p.type !== "thought",
                          ) || [];
                        const timestamp = timelineMode
                          ? getPanelTimestamp(panel)
                          : null;

                        const globalPanelIndex = globalOffset + panelIdx;
                        const illustrationSrc =
                          getIllustrationSrc(globalPanelIndex);

                        return (
                          <ComicPanel
                            key={`${chapter.id}-${panelIdx}`}
                            variant={
                              panel.parts?.some((p) => p.type === "sfx")
                                ? "highlight"
                                : "default"
                            }
                          >
                            {timestamp && (
                              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2 bg-muted/50 px-2 py-1 inline-block">
                                ⏱ {timestamp}
                              </div>
                            )}
                            <div className="relative mb-4 aspect-[4/3]">
                              <VerifiedPanelImage
                                src={illustrationSrc}
                                alt={
                                  panel.illustrationAlt ||
                                  "Comic panel illustration"
                                }
                                className="comic-illustration w-full h-full object-cover"
                                onError={reportMissing}
                              />
                              {bubbleParts.length > 0 && (
                                <div className="absolute inset-0 flex flex-col justify-start items-start p-4 gap-2 pointer-events-none">
                                  {bubbleParts.map((part, partIndex) =>
                                    renderPanelPart(part, partIndex, true),
                                  )}
                                </div>
                              )}
                            </div>
                            {otherParts.map((part, partIndex) =>
                              renderPanelPart(part, partIndex, false),
                            )}
                          </ComicPanel>
                        );
                      })}
                    </div>
                  )}
                </div>
              ),
            )}

            {canLoadMore && (
              <div className="flex flex-col items-center gap-4 py-8 border-t-4 border-border">
                <p className="font-heading text-lg uppercase text-muted-foreground">
                  <Layers className="inline-block mr-2 h-5 w-5" />
                  {displayedStoryPanels.length - visibleCount} more panels
                  available
                </p>
                <div className="flex gap-4">
                  <Button
                    onClick={loadMore}
                    size="lg"
                    className="font-heading uppercase border-4 shadow-[4px_4px_0_oklch(var(--border))]"
                  >
                    Load 20 More Panels
                  </Button>
                  <Button
                    onClick={loadAll}
                    variant="outline"
                    size="lg"
                    className="font-heading uppercase border-4 shadow-[4px_4px_0_oklch(var(--border))]"
                  >
                    Load All Panels
                  </Button>
                </div>
              </div>
            )}

            {displayedCreditPanels.length > 0 && !canLoadMore && (
              <div className="pt-8 border-t-4 border-border">
                <h2 className="font-heading text-2xl md:text-3xl uppercase mb-6 text-foreground tracking-tight">
                  {t("section.credits")}
                </h2>
                <div className="comic-gutter flex flex-col">
                  {displayedCreditPanels.map((panel) => (
                    <ComicPanel
                      key={
                        panel.parts?.[0]?.text ??
                        panel.illustrationSrc ??
                        Math.random().toString()
                      }
                      variant="credits"
                    >
                      {panel.parts?.map((part, partIdx) =>
                        renderPanelPart(part, partIdx, false),
                      )}
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
