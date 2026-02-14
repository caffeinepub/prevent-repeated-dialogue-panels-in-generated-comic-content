import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="comic-masthead sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight leading-none">
              <span className="text-primary drop-shadow-[2px_2px_0_oklch(var(--background))]">
                🕷️ Spider-Verse
              </span>
            </h1>
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-muted-foreground mt-2">
              Comic Viewer • Into the Spider-Verse
            </p>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="border-4 shadow-comic hover:shadow-comic-lg transition-all"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
