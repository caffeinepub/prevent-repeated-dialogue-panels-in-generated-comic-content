import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Play, Pause, Square, Volume2 } from 'lucide-react';
import { useStoryNarration, type VoiceConfig } from '@/hooks/useStoryNarration';
import { useSpeechSynthesisVoices } from '@/hooks/useSpeechSynthesisVoices';
import { useComicSettings } from '@/contexts/ComicSettingsContext';
import { deriveNarrationScript } from '@/lib/narration';
import { STORY_PANELS } from '@/lib/comicData';

export function StoryNarrationControl() {
  const { repetitionRemovalEnabled } = useComicSettings();
  const { voices, isLoading, isReady } = useSpeechSynthesisVoices();

  // Voice selection state
  const [milesVoiceId, setMilesVoiceId] = useState<string>('');
  const [jeffersonVoiceId, setJeffersonVoiceId] = useState<string>('');
  const [defaultVoiceId, setDefaultVoiceId] = useState<string>('');

  // Derive narration script based on current settings
  const narrationScript = useMemo(() => {
    return deriveNarrationScript(STORY_PANELS, repetitionRemovalEnabled);
  }, [repetitionRemovalEnabled]);

  // Build voice config from selected voice IDs
  const voiceConfig = useMemo<VoiceConfig>(() => {
    const config: VoiceConfig = {};
    
    if (milesVoiceId) {
      config.milesVoice = voices.find(v => v.voiceURI === milesVoiceId);
    }
    if (jeffersonVoiceId) {
      config.jeffersonVoice = voices.find(v => v.voiceURI === jeffersonVoiceId);
    }
    if (defaultVoiceId) {
      config.defaultVoice = voices.find(v => v.voiceURI === defaultVoiceId);
    }
    
    return config;
  }, [voices, milesVoiceId, jeffersonVoiceId, defaultVoiceId]);

  const { status, isSupported, error, start, pause, resume, stop } = useStoryNarration({
    script: narrationScript,
    voiceConfig,
  });

  const isPlaying = status === 'playing';
  const isPaused = status === 'paused';
  const isIdle = status === 'idle';

  return (
    <div className="comic-panel space-y-4">
      <div className="flex items-center gap-3">
        <Volume2 className="w-6 h-6 text-primary" />
        <h3 className="font-heading text-xl uppercase tracking-tight text-foreground">
          Story Narration
        </h3>
      </div>

      {!isSupported && (
        <Alert variant="destructive" className="border-4">
          <AlertDescription className="font-bold">
            Text-to-speech is not supported in your browser. Please try Chrome, Edge, or Safari.
          </AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="destructive" className="border-4">
          <AlertDescription className="font-bold">{error}</AlertDescription>
        </Alert>
      )}

      {/* Voice Style Section */}
      {isSupported && (
        <div className="space-y-3 p-4 bg-muted/30 border-4 border-border rounded-none">
          <h4 className="font-bold uppercase text-sm tracking-wide">Voice Style</h4>
          
          {isLoading && (
            <p className="text-sm text-muted-foreground">Loading available voices...</p>
          )}
          
          {!isLoading && !isReady && (
            <Alert className="border-4">
              <AlertDescription className="font-medium">
                No selectable voices are available. Narration will use your browser's default voice.
              </AlertDescription>
            </Alert>
          )}
          
          {isReady && (
            <div className="grid gap-3 sm:grid-cols-3">
              {/* Miles Voice */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wide">Miles</label>
                <Select value={milesVoiceId} onValueChange={setMilesVoiceId}>
                  <SelectTrigger className="border-3 font-medium">
                    <SelectValue placeholder="Default" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Default</SelectItem>
                    {voices.map((voice) => (
                      <SelectItem key={voice.voiceURI} value={voice.voiceURI}>
                        {voice.name} {voice.lang && `(${voice.lang})`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Jefferson Voice */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wide">Jefferson</label>
                <Select value={jeffersonVoiceId} onValueChange={setJeffersonVoiceId}>
                  <SelectTrigger className="border-3 font-medium">
                    <SelectValue placeholder="Default" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Default</SelectItem>
                    {voices.map((voice) => (
                      <SelectItem key={voice.voiceURI} value={voice.voiceURI}>
                        {voice.name} {voice.lang && `(${voice.lang})`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Default Voice */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wide">Others</label>
                <Select value={defaultVoiceId} onValueChange={setDefaultVoiceId}>
                  <SelectTrigger className="border-3 font-medium">
                    <SelectValue placeholder="Default" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Default</SelectItem>
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
            Select different voices for characters. Changes take effect on next playback.
          </p>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        {/* Start Button */}
        <Button
          onClick={start}
          disabled={!isSupported || isPlaying || isPaused}
          variant="default"
          size="lg"
          className="font-bold uppercase tracking-wide border-4 shadow-comic"
        >
          <Play className="w-5 h-5 mr-2" />
          Start
        </Button>

        {/* Pause/Resume Button */}
        {(isPlaying || isPaused) && (
          <Button
            onClick={isPlaying ? pause : resume}
            disabled={!isSupported}
            variant="secondary"
            size="lg"
            className="font-bold uppercase tracking-wide border-4 shadow-comic"
          >
            <Pause className="w-5 h-5 mr-2" />
            {isPlaying ? 'Pause' : 'Resume'}
          </Button>
        )}

        {/* Stop Button */}
        {!isIdle && (
          <Button
            onClick={stop}
            disabled={!isSupported}
            variant="destructive"
            size="lg"
            className="font-bold uppercase tracking-wide border-4 shadow-comic"
          >
            <Square className="w-5 h-5 mr-2" />
            Stop
          </Button>
        )}

        {/* Status Badge */}
        <Badge
          variant={isPlaying ? 'default' : isPaused ? 'secondary' : 'outline'}
          className="text-sm font-bold border-3 px-4 py-2 shadow-[2px_2px_0_oklch(var(--border))] uppercase tracking-wide"
        >
          {isPlaying ? '▶ Playing' : isPaused ? '⏸ Paused' : '⏹ Idle'}
        </Badge>
      </div>

      <p className="text-sm text-muted-foreground font-medium">
        {isSupported ? (
          <>
            The story will be read aloud using your browser's text-to-speech.
            {repetitionRemovalEnabled && ' Repeated text will be skipped based on your current setting.'}
          </>
        ) : (
          'Your browser does not support text-to-speech narration.'
        )}
      </p>
    </div>
  );
}
