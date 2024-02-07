import { createContext, PropsWithChildren, useContext, useState } from 'react';

import { Plan, User } from '@/interfaces';

type GeneralContextType = {
  user: User;
  plan: Plan;
  setUser: (e: User) => void;
  setPlan: (e: Plan) => void;
};

const contextDefaultValue: GeneralContextType = {
  user: {} as User,
  plan: {} as Plan,
  setUser: () => {},
  setPlan: () => {},
};

const GeneralContext = createContext<GeneralContextType>(contextDefaultValue);
export const useGeneralContext = () => useContext(GeneralContext);

export function GeneralProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User>(contextDefaultValue.user);
  const [plan, setPlan] = useState<Plan>(contextDefaultValue.plan);

  const value = { user, setUser, plan, setPlan };

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
}
