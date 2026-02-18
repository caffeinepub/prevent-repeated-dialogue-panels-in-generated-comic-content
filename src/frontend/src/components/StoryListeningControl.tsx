import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Mic, MicOff } from 'lucide-react';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { useI18n } from '@/hooks/useI18n';

interface StoryListeningControlProps {
  onTranscriptUpdate: (transcript: string, interim: string) => void;
  onError: (error: string | null) => void;
}

export function StoryListeningControl({ onTranscriptUpdate, onError }: StoryListeningControlProps) {
  const { t } = useI18n();
  const {
    isListening,
    isSupported,
    transcript,
    interimTranscript,
    error,
    startListening,
    stopListening,
    resetTranscript,
  } = useSpeechRecognition();

  // Update parent component when transcript changes
  useEffect(() => {
    onTranscriptUpdate(transcript, interimTranscript);
  }, [transcript, interimTranscript, onTranscriptUpdate]);

  // Update parent component when error changes
  useEffect(() => {
    onError(error);
  }, [error, onError]);

  const handleToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      resetTranscript();
      startListening();
    }
  };

  return (
    <div className="comic-panel p-6 space-y-4">
      {!isSupported && (
        <Alert variant="destructive" className="border-4">
          <AlertDescription className="font-bold">
            {t('listening.notSupported')}
          </AlertDescription>
        </Alert>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <Button
          onClick={handleToggle}
          disabled={!isSupported}
          variant={isListening ? 'destructive' : 'default'}
          size="lg"
          className="font-bold uppercase tracking-wide border-4 shadow-comic"
        >
          {isListening ? (
            <>
              <MicOff className="w-5 h-5 mr-2" />
              {t('listening.stop')}
            </>
          ) : (
            <>
              <Mic className="w-5 h-5 mr-2" />
              {t('listening.start')}
            </>
          )}
        </Button>

        <Badge
          variant={isListening ? 'default' : error ? 'destructive' : 'outline'}
          className="text-sm font-bold border-3 px-4 py-2 shadow-[2px_2px_0_oklch(var(--border))] uppercase tracking-wide"
        >
          {isListening ? `🎤 ${t('listening.listening')}` : error ? `⚠ ${t('listening.error')}` : t('listening.idle')}
        </Badge>
      </div>

      <p className="text-sm text-muted-foreground font-medium">
        {t('listening.guidance')}
      </p>
    </div>
  );
}
