import { useState, useCallback } from 'react';

/**
 * Hook to track missing illustration assets across the app.
 * Collects filenames of images that fail to load with safe error handling.
 */
export function useMissingIllustrations() {
  const [missingFiles, setMissingFiles] = useState<Set<string>>(new Set());

  const reportMissing = useCallback((src: string) => {
    try {
      setMissingFiles((prev) => {
        const next = new Set(prev);
        // Extract just the filename from the path and sanitize
        const filename = (src || '').split('/').pop() || src || 'unknown';
        // Cap the set size to prevent memory issues
        if (next.size < 100) {
          next.add(filename);
        }
        return next;
      });
    } catch (err) {
      console.error('Error reporting missing illustration:', err);
    }
  }, []);

  const clearMissing = useCallback(() => {
    setMissingFiles(new Set());
  }, []);

  return {
    missingFiles: Array.from(missingFiles),
    reportMissing,
    clearMissing,
    hasMissing: missingFiles.size > 0
  };
}
