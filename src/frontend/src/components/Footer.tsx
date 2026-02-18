import { Heart } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

export function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'spider-verse-comic'
  );

  return (
    <footer className="border-t-3 border-border bg-card mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {t('footer.copyright')}
          </p>
          <p className="text-sm flex items-center gap-1">
            {t('footer.builtWith')}{' '}
            <Heart className="h-4 w-4 fill-primary text-primary inline" />{' '}
            {t('footer.using')}{' '}
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
            {t('footer.credits')}
            <br />
            {t('footer.creditsLine2')}
          </p>
        </div>
      </div>
    </footer>
  );
}
