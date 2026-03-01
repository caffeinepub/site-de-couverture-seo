import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useHealthCheck() {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['healthCheck'],
    queryFn: async () => {
      if (!actor) return 'unavailable';
      try {
        return await actor.healthCheck();
      } catch {
        return 'unavailable';
      }
    },
    enabled: !!actor && !isFetching,
    retry: false,
    staleTime: 60_000,
    gcTime: 120_000,
    throwOnError: false,
  });
}
