import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Portfolio } from '@/types/type';
import api from '@/lib/api';

export function useCreatePortfolio() {
  const queryClient = useQueryClient();

  return useMutation<Portfolio, Error, string>({
    mutationFn: (name: string) => api.post<Portfolio>('/portfolio', { name }).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolios'] });
    },
    onError: (error) => {
      console.error('Failed to create portfolio:', error);
    },
  });
}
