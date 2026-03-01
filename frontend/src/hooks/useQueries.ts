import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useHealthCheck() {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['healthCheck'],
    queryFn: async () => {
      if (!actor) return 'Actor not ready';
      try {
        return await actor.healthCheck();
      } catch {
        return 'Health check failed';
      }
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}
