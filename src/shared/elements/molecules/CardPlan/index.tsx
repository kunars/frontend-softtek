import { useMemo } from 'react';

import { Card, Icon } from '@/elements/atoms';
import { Divider } from '@/elements/particles';
import { Plan } from '@/interfaces';

type Props = {
  plan: Plan;
  quoteId: number | undefined;
  onSelect: (plan: Plan) => void;
};

export const CardPlan = ({ plan, quoteId, onSelect }: Props) => {
  const getPrice = useMemo(() => {
    const discount = quoteId === 2 ? 0.05 : 0;
    return `$${plan.price - plan.price * discount} al mes`;
  }, [plan.price, quoteId]);

  return (
    <Card className="relative !pt-10 !px-8 !pb-12 h-full flex flex-col justify-between w-full max-w-[288px] lg:!pt-17">
      {plan.isRecommended && (
        <div className="bg-gree-aqua-400 py-0.5 px-2 rounded-md text-special-02 font-black absolute top-4 left-8 lg:top-10">
          Plan recomendado
        </div>
      )}
      <div>
        <div className="flex gap-4">
          <h3 className="text-headline-11 font-black">{plan.name}</h3>
          <div className="flex-1">
            <Icon name={plan.icon} />
          </div>
        </div>
        <div className="mt-6">
          <h5 className="text-headline-21 font-black uppercase text-neutrals-600">
            Costo del plan
          </h5>
          <span className="text-headline-13 font-black">{getPrice}</span>
        </div>
        <Divider className="my-6" />
        <ul className="flex flex-col gap-6 list-disc pl-5">
          {plan.description.map((_, i) => (
            <li key={`description-${i}`}>
              <p className="text-paragraph-05">{_}</p>
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className="button-md button-primary mt-[67px] w-full"
        onClick={() => onSelect(plan)}
      >
        <span className="line-clamp-1 text-[inherit] !text-grey-0">
          Seleccionar Plan
        </span>
      </button>
    </Card>
  );
};
