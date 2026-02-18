import { useState, useCallback, useMemo } from 'react';

interface UseProgressivePanelsOptions {
  totalCount: number;
  initialCount?: number;
  incrementSize?: number;
}

/**
 * Hook to manage progressive panel visibility for large comic datasets.
 * Renders panels in batches to avoid performance issues and crashes.
 */
export function useProgressivePanels({
  totalCount,
  initialCount = 20,
  incrementSize = 20,
}: UseProgressivePanelsOptions) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const canLoadMore = useMemo(() => {
    return visibleCount < totalCount;
  }, [visibleCount, totalCount]);

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + incrementSize, totalCount));
  }, [incrementSize, totalCount]);

  const loadAll = useCallback(() => {
    setVisibleCount(totalCount);
  }, [totalCount]);

  const reset = useCallback(() => {
    setVisibleCount(initialCount);
  }, [initialCount]);

  return {
    visibleCount,
    canLoadMore,
    loadMore,
    loadAll,
    reset,
  };
}
