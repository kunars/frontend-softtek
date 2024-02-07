import { useEffect, useState } from 'react';

import { CardPlan } from '@/elements/molecules';
import { Plan } from '@/interfaces';

type Props = {
  plans: Plan[];
  quoteId: number;
  onSelect: (e: Plan) => void;
};

export const PlansDesktop = ({ plans, quoteId, onSelect }: Props) => {
  const [list, setList] = useState<Plan[]>([]);

  useEffect(() => {
    setList([...plans]);
  }, [plans]);

  return (
    <div className="col-span-full justify-between gap-8 mt-5 hidden lg:flex xl:col-span-10 xl:col-start-2">
      {list.map((_) => (
        <CardPlan
          key={`desk-${_.name}`}
          plan={_}
          quoteId={quoteId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};
