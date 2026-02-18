import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ComicViewer } from '@/components/ComicViewer';
import { CharactersGallery } from '@/components/CharactersGallery';
import { RepetitionRemovalControl } from '@/components/RepetitionRemovalControl';
import { StoryNarrationControl } from '@/components/StoryNarrationControl';
import { StoryListeningControl } from '@/components/StoryListeningControl';
import { TranscriptPanel } from '@/components/TranscriptPanel';
import { ExportPdfButton } from '@/components/ExportPdfButton';
import { AppPreferencesProvider } from '@/contexts/AppPreferencesContext';
import { ComicSettingsProvider } from '@/contexts/ComicSettingsContext';
import { AppErrorBoundary } from '@/components/AppErrorBoundary';
import { useI18n } from '@/hooks/useI18n';
import { useState } from 'react';

const queryClient = new QueryClient();

function AppContent() {
  const { t } = useI18n();
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [listeningError, setListeningError] = useState<string | null>(null);

  const handleTranscriptUpdate = (newTranscript: string, interim: string) => {
    setTranscript(newTranscript);
    setInterimTranscript(interim);
  };

  const handleClearTranscript = () => {
    setTranscript('');
    setInterimTranscript('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 space-y-12">
        {/* Title Section */}
        <section className="text-center space-y-3">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase text-foreground tracking-tight">
            {t('title.main')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-semibold uppercase tracking-wide">
            {t('title.subtitle')}
          </p>
        </section>

        {/* Characters Gallery */}
        <CharactersGallery />

        {/* Controls Section */}
        <section className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <RepetitionRemovalControl />
            <ExportPdfButton />
          </div>
        </section>

        {/* Narration Section */}
        <section className="space-y-4">
          <h2 className="font-heading text-2xl md:text-3xl uppercase text-foreground tracking-tight">
            {t('section.narration')}
          </h2>
          <StoryNarrationControl />
        </section>

        {/* Listening Section */}
        <section className="space-y-4">
          <h2 className="font-heading text-2xl md:text-3xl uppercase text-foreground tracking-tight">
            {t('section.listening')}
          </h2>
          <StoryListeningControl 
            onTranscriptUpdate={handleTranscriptUpdate}
            onError={setListeningError}
          />
          {(transcript || interimTranscript) && (
            <TranscriptPanel 
              transcript={transcript}
              interimTranscript={interimTranscript}
              onClear={handleClearTranscript}
            />
          )}
        </section>

        {/* Comic Viewer */}
        <ComicViewer />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <AppErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AppPreferencesProvider>
            <ComicSettingsProvider>
              <AppContent />
            </ComicSettingsProvider>
          </AppPreferencesProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </AppErrorBoundary>
  );
}
