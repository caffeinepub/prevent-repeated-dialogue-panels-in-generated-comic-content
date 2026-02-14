import { Copy, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface TranscriptPanelProps {
  transcript: string;
  interimTranscript: string;
  onClear: () => void;
}

export function TranscriptPanel({ transcript, interimTranscript, onClear }: TranscriptPanelProps) {
  const fullText = transcript + interimTranscript;
  const wordCount = fullText.trim().split(/\s+/).filter(Boolean).length;

  const handleCopy = async () => {
    if (!transcript) {
      toast.error('No transcript to copy');
      return;
    }

    try {
      await navigator.clipboard.writeText(transcript);
      toast.success('Transcript copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy transcript:', err);
      toast.error('Failed to copy transcript');
    }
  };

  const handleClear = () => {
    if (transcript) {
      onClear();
      toast.success('Transcript cleared');
    }
  };

  if (!fullText) {
    return null;
  }

  return (
    <div className="comic-panel rounded-none bg-card p-6 space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-black uppercase tracking-wide">
            Your Story Transcript
          </h3>
          <Badge variant="secondary" className="rounded-none font-black uppercase text-xs">
            {wordCount} {wordCount === 1 ? 'word' : 'words'}
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleCopy}
            variant="outline"
            size="sm"
            className="rounded-none font-black uppercase"
            disabled={!transcript}
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy
          </Button>
          <Button
            onClick={handleClear}
            variant="destructive"
            size="sm"
            className="rounded-none font-black uppercase"
            disabled={!transcript}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Clear
          </Button>
        </div>
      </div>

      <div className="transcript-content max-h-64 overflow-y-auto p-4 bg-background border-4 border-border">
        <p className="text-base leading-relaxed whitespace-pre-wrap break-words">
          {transcript}
          {interimTranscript && (
            <span className="text-muted-foreground italic">
              {interimTranscript}
            </span>
          )}
        </p>
      </div>

      <p className="text-xs font-semibold text-muted-foreground italic">
        Tip: Your transcript updates in real-time as you speak. Use "Copy" to save it elsewhere.
      </p>
    </div>
  );
}
