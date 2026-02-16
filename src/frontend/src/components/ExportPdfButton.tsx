import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';
import { exportComicToPDF } from '@/lib/pdfExport';
import { STORY_PANELS, CREDITS_PANELS } from '@/lib/comicData';
import { toast } from 'sonner';

/**
 * Export PDF button component that triggers client-side printable document generation
 * and opens a print dialog where users can save as PDF.
 */
export function ExportPdfButton() {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await exportComicToPDF(STORY_PANELS, CREDITS_PANELS);
      toast.success('Print dialog opened! You can save as PDF from there.');
    } catch (error) {
      console.error('PDF export failed:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to export PDF. Please try again.');
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
      className="font-bold uppercase tracking-wide border-4 border-border shadow-[4px_4px_0_oklch(var(--border))] hover:shadow-[2px_2px_0_oklch(var(--border))] transition-all"
    >
      {isExporting ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Opening Print...
        </>
      ) : (
        <>
          <Download className="mr-2 h-5 w-5" />
          Export Full Story PDF
        </>
      )}
    </Button>
  );
}
