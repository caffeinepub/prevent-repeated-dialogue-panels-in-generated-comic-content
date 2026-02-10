import { ThemeProvider } from 'next-themes';
import { ComicSettingsProvider } from './contexts/ComicSettingsContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ComicViewer } from './components/ComicViewer';
import { RepetitionRemovalControl } from './components/RepetitionRemovalControl';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ComicSettingsProvider>
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          
          <main className="flex-1 container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Title Section */}
              <div className="text-center space-y-2 mb-8">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                  Spider-Man: Into the Spider-Verse
                </h2>
                <p className="text-lg text-muted-foreground">
                  A Full Comic Experience
                </p>
              </div>

              {/* Controls */}
              <RepetitionRemovalControl />

              {/* Comic Content */}
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
