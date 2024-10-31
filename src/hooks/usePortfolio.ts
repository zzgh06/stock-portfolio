import api from '@/lib/api';
import { Portfolio } from '@/types/type';
import { useQuery } from '@tanstack/react-query';

export function usePortfolios() {
  return useQuery<Portfolio[]>({
    queryKey: ['portfolios'],
    queryFn: () => api.get<Portfolio[]>('/portfolio').then(res => res.data),
  });
}