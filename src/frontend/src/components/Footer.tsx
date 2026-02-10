import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'spider-verse-comic'
  );

  return (
    <footer className="border-t-3 border-border bg-card mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Spider-Verse Comic Viewer
          </p>
          <p className="text-sm flex items-center gap-1">
            Built with{' '}
            <Heart className="h-4 w-4 fill-primary text-primary inline" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline text-primary"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Original Spider-Man created by Stan Lee & Steve Ditko
            <br />
            Miles Morales created by Brian Michael Bendis & Sara Pichelli
          </p>
        </div>
      </div>
    </footer>
  );
}
