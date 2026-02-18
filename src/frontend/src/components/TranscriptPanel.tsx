import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Copy, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { useI18n } from '@/hooks/useI18n';

interface TranscriptPanelProps {
  transcript: string;
  interimTranscript: string;
  onClear: () => void;
}

export function TranscriptPanel({ transcript, interimTranscript, onClear }: TranscriptPanelProps) {
  const { t } = useI18n();
  const [isCopying, setIsCopying] = useState(false);

  const wordCount = transcript.split(/\s+/).filter(word => word.length > 0).length;

  const handleCopy = async () => {
    setIsCopying(true);
    try {
      await navigator.clipboard.writeText(transcript);
      toast.success(t('transcript.copied'));
    } catch (error) {
      console.error('Failed to copy:', error);
      toast.error(t('transcript.copyError'));
    } finally {
      setIsCopying(false);
    }
  };

  return (
    <div className="comic-panel p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="font-heading text-xl uppercase tracking-tight text-foreground">
            {t('transcript.title')}
          </h3>
          <Badge variant="outline" className="text-xs font-bold border-2 px-3 py-1">
            {wordCount} {t('transcript.words')}
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleCopy}
            disabled={!transcript || isCopying}
            variant="outline"
            size="sm"
            className="font-bold uppercase text-xs border-3"
          >
            <Copy className="w-4 h-4 mr-1" />
            {t('transcript.copy')}
          </Button>
          <Button
            onClick={onClear}
            disabled={!transcript && !interimTranscript}
            variant="destructive"
            size="sm"
            className="font-bold uppercase text-xs border-3"
          >
            <Trash2 className="w-4 h-4 mr-1" />
            {t('transcript.clear')}
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[200px] w-full border-4 border-border rounded-none p-4 bg-background transcript-scroll">
        <div className="space-y-2">
          {transcript && (
            <p className="text-sm leading-relaxed font-medium">{transcript}</p>
          )}
          {interimTranscript && (
            <p className="text-sm leading-relaxed text-muted-foreground italic">
              {interimTranscript}
            </p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
