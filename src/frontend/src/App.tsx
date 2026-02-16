import { useState, useCallback } from 'react';
import { ThemeProvider } from 'next-themes';
import { ComicSettingsProvider } from './contexts/ComicSettingsContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ComicViewer } from './components/ComicViewer';
import { RepetitionRemovalControl } from './components/RepetitionRemovalControl';
import { StoryListeningControl } from './components/StoryListeningControl';
import { TranscriptPanel } from './components/TranscriptPanel';
import { StoryNarrationControl } from './components/StoryNarrationControl';
import { ExportPdfButton } from './components/ExportPdfButton';
import { Toaster } from '@/components/ui/sonner';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function App() {
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [speechError, setSpeechError] = useState<string | null>(null);

  const handleTranscriptUpdate = useCallback((newTranscript: string, interim: string) => {
    setTranscript(newTranscript);
    setInterimTranscript(interim);
  }, []);

  const handleError = useCallback((error: string | null) => {
    setSpeechError(error);
  }, []);

  const handleClearTranscript = useCallback(() => {
    setTranscript('');
    setInterimTranscript('');
    setSpeechError(null);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ComicSettingsProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          
          <main className="flex-1 container mx-auto px-4 py-8">
            <div className="max-w-5xl mx-auto space-y-8">
              {/* Title Section - Comic Cover Style */}
              <div className="text-center space-y-3 mb-8">
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-none text-primary drop-shadow-[3px_3px_0_oklch(var(--background))]">
                  Spider-Man: Into the Spider-Verse
                </h2>
                <p className="text-lg md:text-xl font-bold uppercase tracking-wide text-muted-foreground">
                  A Comic Adaptation
                </p>
              </div>

              {/* Story Narration Section */}
              <div className="space-y-4">
                <h3 className="font-heading text-2xl uppercase tracking-tight text-foreground">
                  Story Narration
                </h3>
                <StoryNarrationControl />
              </div>

              {/* Story Listening Section */}
              <div className="space-y-4">
                <h3 className="font-heading text-2xl uppercase tracking-tight text-foreground">
                  Story Listening Mode
                </h3>
                <StoryListeningControl
                  onTranscriptUpdate={handleTranscriptUpdate}
                  onError={handleError}
                />
                {speechError && (
                  <Alert variant="destructive" className="border-4">
                    <AlertDescription>{speechError}</AlertDescription>
                  </Alert>
                )}
                {(transcript || interimTranscript) && (
                  <TranscriptPanel
                    transcript={transcript}
                    interimTranscript={interimTranscript}
                    onClear={handleClearTranscript}
                  />
                )}
              </div>

              {/* Controls Section */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <RepetitionRemovalControl />
                <ExportPdfButton />
              </div>

              {/* Comic Viewer */}
              <ComicViewer />
            </div>
          </main>

          <Footer />
          <Toaster />
        </div>
      </ComicSettingsProvider>
    </ThemeProvider>
  );
}
