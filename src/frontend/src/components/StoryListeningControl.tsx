import { useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';

interface StoryListeningControlProps {
  onTranscriptUpdate: (transcript: string, interim: string) => void;
  onError: (error: string | null) => void;
}

export function StoryListeningControl({ onTranscriptUpdate, onError }: StoryListeningControlProps) {
  const {
    isSupported,
    isListening,
    transcript,
    interimTranscript,
    error,
    startListening,
    stopListening,
  } = useSpeechRecognition();

  // Update parent component with transcript changes
  useEffect(() => {
    onTranscriptUpdate(transcript, interimTranscript);
  }, [transcript, interimTranscript, onTranscriptUpdate]);

  // Update parent component with error changes
  useEffect(() => {
    onError(error);
  }, [error, onError]);

  if (!isSupported) {
    return (
      <Alert variant="destructive" className="comic-panel rounded-none">
        <AlertDescription className="font-semibold">
          Speech recognition is not supported in your browser. Please try using Chrome, Edge, or Safari.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="flex items-center justify-between gap-4 p-5 comic-panel rounded-none bg-card">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3">
          <span className="text-base font-black uppercase tracking-wide">
            Listen to a Story
          </span>
          {isListening && (
            <Badge variant="default" className="rounded-none font-black uppercase text-xs animate-pulse">
              Listening...
            </Badge>
          )}
        </div>
        <p className="text-sm font-semibold text-muted-foreground">
          {isListening 
            ? 'Speak clearly into your microphone. Your words will appear below.'
            : 'Click the microphone button to start recording your story.'
          }
        </p>
      </div>
      <Button
        onClick={isListening ? stopListening : startListening}
        variant={isListening ? 'destructive' : 'default'}
        size="lg"
        className="rounded-none font-black uppercase shadow-comic"
      >
        {isListening ? (
          <>
            <MicOff className="mr-2 h-5 w-5" />
            Stop
          </>
        ) : (
          <>
            <Mic className="mr-2 h-5 w-5" />
            Start
          </>
        )}
      </Button>
    </div>
  );
}
