import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppPreferences } from "@/contexts/AppPreferencesContext";
import { useComicSettings } from "@/contexts/ComicSettingsContext";
import { useI18n } from "@/hooks/useI18n";
import { useSpeechSynthesisVoices } from "@/hooks/useSpeechSynthesisVoices";
import { type VoiceConfig, useStoryNarration } from "@/hooks/useStoryNarration";
import { COMIC_CHAPTERS } from "@/lib/comicData";
import { localizeChapters } from "@/lib/comicLocalization";
import { flattenChapters } from "@/lib/comicModel";
import { deriveNarrationScript } from "@/lib/narration";
import { Pause, Play, Square, Volume2 } from "lucide-react";
import { useMemo, useState } from "react";

const DEFAULT_VOICE_SENTINEL = "__default__";

export function StoryNarrationControl() {
  const { repetitionRemovalEnabled } = useComicSettings();
  const { language } = useAppPreferences();
  const { t } = useI18n();
  const { voices, isLoading, isReady } = useSpeechSynthesisVoices();

  const [milesVoiceId, setMilesVoiceId] = useState<string>(
    DEFAULT_VOICE_SENTINEL,
  );
  const [jeffersonVoiceId, setJeffersonVoiceId] = useState<string>(
    DEFAULT_VOICE_SENTINEL,
  );
  const [defaultVoiceId, setDefaultVoiceId] = useState<string>(
    DEFAULT_VOICE_SENTINEL,
  );

  // Derive narration script with localization
  const narrationScript = useMemo(() => {
    const localizedChapters = localizeChapters(COMIC_CHAPTERS, language);
    const localizedPanels = flattenChapters(localizedChapters);
    return deriveNarrationScript(localizedPanels, repetitionRemovalEnabled);
  }, [language, repetitionRemovalEnabled]);

  const voiceConfig = useMemo<VoiceConfig>(() => {
    const config: VoiceConfig = {};

    if (milesVoiceId && milesVoiceId !== DEFAULT_VOICE_SENTINEL) {
      config.milesVoice = voices.find((v) => v.voiceURI === milesVoiceId);
    }
    if (jeffersonVoiceId && jeffersonVoiceId !== DEFAULT_VOICE_SENTINEL) {
      config.jeffersonVoice = voices.find(
        (v) => v.voiceURI === jeffersonVoiceId,
      );
    }
    if (defaultVoiceId && defaultVoiceId !== DEFAULT_VOICE_SENTINEL) {
      config.defaultVoice = voices.find((v) => v.voiceURI === defaultVoiceId);
    }

    return config;
  }, [voices, milesVoiceId, jeffersonVoiceId, defaultVoiceId]);

  const { status, isSupported, error, start, pause, resume, stop } =
    useStoryNarration({
      script: narrationScript,
      voiceConfig,
    });

  const isPlaying = status === "playing";
  const isPaused = status === "paused";
  const isIdle = status === "idle";

  return (
    <div className="comic-panel space-y-4">
      <div className="flex items-center gap-3">
        <Volume2 className="w-6 h-6 text-primary" />
        <h3 className="font-heading text-xl uppercase tracking-tight text-foreground">
          {t("narration.title")}
        </h3>
      </div>

      {!isSupported && (
        <Alert variant="destructive" className="border-4">
          <AlertDescription className="font-bold">
            {t("narration.browserError")}
          </AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="destructive" className="border-4">
          <AlertDescription className="font-bold">{error}</AlertDescription>
        </Alert>
      )}

      {isSupported && (
        <div className="space-y-3 p-4 bg-muted/30 border-4 border-border rounded-none">
          <h4 className="font-bold uppercase text-sm tracking-wide">
            {t("narration.voiceStyle")}
          </h4>

          {isLoading && (
            <p className="text-sm text-muted-foreground">
              {t("narration.loadingVoices")}
            </p>
          )}

          {!isLoading && !isReady && (
            <Alert className="border-4">
              <AlertDescription className="font-medium">
                {t("narration.noVoices")}
              </AlertDescription>
            </Alert>
          )}

          {isReady && (
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="space-y-2">
                <label
                  htmlFor="miles-voice"
                  className="text-xs font-bold uppercase tracking-wide"
                >
                  {t("narration.milesVoice")}
                </label>
                <Select value={milesVoiceId} onValueChange={setMilesVoiceId}>
                  <SelectTrigger
                    id="miles-voice"
                    className="border-3 font-medium"
                  >
                    <SelectValue placeholder={t("narration.default")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={DEFAULT_VOICE_SENTINEL}>
                      {t("narration.default")}
                    </SelectItem>
                    {voices.map((voice) => (
                      <SelectItem key={voice.voiceURI} value={voice.voiceURI}>
                        {voice.name} {voice.lang && `(${voice.lang})`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="jefferson-voice"
                  className="text-xs font-bold uppercase tracking-wide"
                >
                  {t("narration.jeffersonVoice")}
                </label>
                <Select
                  value={jeffersonVoiceId}
                  onValueChange={setJeffersonVoiceId}
                >
                  <SelectTrigger
                    id="jefferson-voice"
                    className="border-3 font-medium"
                  >
                    <SelectValue placeholder={t("narration.default")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={DEFAULT_VOICE_SENTINEL}>
                      {t("narration.default")}
                    </SelectItem>
                    {voices.map((voice) => (
                      <SelectItem key={voice.voiceURI} value={voice.voiceURI}>
                        {voice.name} {voice.lang && `(${voice.lang})`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="default-voice"
                  className="text-xs font-bold uppercase tracking-wide"
                >
                  {t("narration.othersVoice")}
                </label>
                <Select
                  value={defaultVoiceId}
                  onValueChange={setDefaultVoiceId}
                >
                  <SelectTrigger
                    id="default-voice"
                    className="border-3 font-medium"
                  >
                    <SelectValue placeholder={t("narration.default")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={DEFAULT_VOICE_SENTINEL}>
                      {t("narration.default")}
                    </SelectItem>
                    {voices.map((voice) => (
                      <SelectItem key={voice.voiceURI} value={voice.voiceURI}>
                        {voice.name} {voice.lang && `(${voice.lang})`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <p className="text-xs text-muted-foreground">
            {t("narration.voiceHelp")}
          </p>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <Button
          onClick={start}
          disabled={!isSupported || isPlaying || isPaused}
          variant="default"
          size="lg"
          className="font-bold uppercase tracking-wide border-4 shadow-comic"
        >
          <Play className="w-5 h-5 mr-2" />
          {t("narration.start")}
        </Button>

        {(isPlaying || isPaused) && (
          <Button
            onClick={isPlaying ? pause : resume}
            disabled={!isSupported}
            variant="secondary"
            size="lg"
            className="font-bold uppercase tracking-wide border-4 shadow-comic"
          >
            <Pause className="w-5 h-5 mr-2" />
            {isPlaying ? t("narration.pause") : t("narration.resume")}
          </Button>
        )}

        {!isIdle && (
          <Button
            onClick={stop}
            disabled={!isSupported}
            variant="destructive"
            size="lg"
            className="font-bold uppercase tracking-wide border-4 shadow-comic"
          >
            <Square className="w-5 h-5 mr-2" />
            {t("narration.stop")}
          </Button>
        )}

        <Badge
          variant={isPlaying ? "default" : isPaused ? "secondary" : "outline"}
          className="text-sm font-bold border-3 px-4 py-2 shadow-[2px_2px_0_oklch(var(--border))] uppercase tracking-wide"
        >
          {isPlaying
            ? `▶ ${t("narration.playing")}`
            : isPaused
              ? `⏸ ${t("narration.paused")}`
              : `⏹ ${t("narration.idle")}`}
        </Badge>
      </div>

      <p className="text-sm text-muted-foreground font-medium">
        {isSupported ? (
          <>
            {t("narration.description")}
            {repetitionRemovalEnabled &&
              ` ${t("narration.descriptionWithDedup")}`}
          </>
        ) : (
          t("narration.notSupported")
        )}
      </p>
    </div>
  );
}
