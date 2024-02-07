import { api } from '@/api';
import { Plan } from '@/interfaces';

export const usePlanService = () => {
  const useGetPlans = async () => {
    return await api.get<{ list: Plan[] }>('plans.json');
  };

  return {
    useGetPlans,
  };
};
