import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useDeduplicateComicText() {
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (textLines: string[]) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }
      if (textLines.length === 0) {
        return [];
      }
      return actor.deduplicateComicText(textLines);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comic-text'] });
    }
  });
}
