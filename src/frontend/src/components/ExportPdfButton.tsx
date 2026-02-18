import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';
import { exportComicToPDF } from '@/lib/pdfExport';
import { COMIC_CHAPTERS, CREDITS_PANELS } from '@/lib/comicData';
import { flattenChapters } from '@/lib/comicModel';
import { localizeChapters, localizePanels } from '@/lib/comicLocalization';
import { useAppPreferences } from '@/contexts/AppPreferencesContext';
import { toast } from 'sonner';
import { useI18n } from '@/hooks/useI18n';

export function ExportPdfButton() {
  const [isExporting, setIsExporting] = useState(false);
  const { language, authorName, timelineMode } = useAppPreferences();
  const { t } = useI18n();

  const handleExport = async () => {
    setIsExporting(true);
    try {
      // Localize chapters and credits
      const localizedChapters = localizeChapters(COMIC_CHAPTERS, language);
      const localizedStoryPanels = flattenChapters(localizedChapters);
      const localizedCredits = localizePanels(CREDITS_PANELS, language);

      await exportComicToPDF(
        localizedStoryPanels,
        localizedCredits,
        language,
        authorName,
        timelineMode,
        localizedChapters
      );
      toast.success(t('controls.exportSuccess'));
    } catch (error) {
      console.error('PDF export failed:', error);
      toast.error(error instanceof Error ? error.message : t('controls.exportError'));
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button
      onClick={handleExport}
      disabled={isExporting}
      variant="default"
      size="lg"
      className="w-full font-bold uppercase tracking-wide border-4 border-border shadow-[4px_4px_0_oklch(var(--border))] hover:shadow-[2px_2px_0_oklch(var(--border))] transition-all"
    >
      {isExporting ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          {t('controls.exporting')}
        </>
      ) : (
        <>
          <Download className="mr-2 h-5 w-5" />
          {t('controls.exportPdf')}
        </>
      )}
    </Button>
  );
}
