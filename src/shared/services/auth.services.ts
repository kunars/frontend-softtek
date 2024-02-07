import { api } from '@/api';
import { User } from '@/interfaces';

export const useAuthService = () => {
  const useGetUser = async () => {
    return await api.get<User>('user.json');
  };

  return {
    useGetUser,
  };
};
