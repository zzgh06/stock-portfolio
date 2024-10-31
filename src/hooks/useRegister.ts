import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from 'next/navigation';

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (userData: RegisterData) => {
      const { data } = await axios.post('/api/auth/register', userData);
      return data;
    },
    onSuccess: () => {
      router.push('/login?registered=true');
    },
    onError: (error: string) => {
      throw new Error(error || '회원가입에 실패했습니다.');
    },
  });
};