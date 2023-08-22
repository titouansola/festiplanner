import { useQuery } from '@tanstack/react-query';
import { User } from '@internal/types';

export function useMeQuery() {
  const { data, isLoading } = useQuery({
    queryKey: ['me'],
    queryFn: () =>
      fetch('/api/me').then(res => {
        if (res.ok) {
          return res.json() as Promise<User>;
        }
        return null;
      }),
  });

  return { user: data, isLoading };
}
