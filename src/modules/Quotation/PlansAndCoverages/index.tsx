import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import { QUOTE_LIST } from '@/constants';
import { useGeneralContext } from '@/context';
import { ButtonBack } from '@/elements/atoms';
import { CardQuote } from '@/elements/molecules';
import { GridWrapper } from '@/elements/organisms';
import { Plan } from '@/interfaces';

import { PlansDesktop } from './PlansDesktop';
import { PlansMobile } from './PlansMobile';

type Props = {
  plans: Plan[];
  onNextStep: () => void;
};

export const PlansAndCoverages = ({ plans, onNextStep }: Props) => {
  const [selectedQuote, setSelectedQuote] = useState<number>();

  const { user, setUser, setPlan } = useGeneralContext();
  const { back } = useRouter();

  useEffect(() => {
    if (user.quoteId) {
      setSelectedQuote(user.quoteId);
    }
  }, [user.quoteId]);

  const handleSelectPlan = (plan: Plan) => {
    setPlan(plan);
    setUser({ ...user, quoteId: selectedQuote });
    onNextStep();
  };

  return (
    <section>
      <GridWrapper className="pt-8 lg:pt-10 lg:pb-20">
        <div className="col-span-full col-start-2 hidden lg:flex">
          <ButtonBack onClick={() => back()} />
        </div>
        <div className="col-span-full mb-8 text-default-neutral md:col-span-6 md:col-start-2 lg:col-start-4 lg:mt-14">
          <h2 className="text-headline-9 font-bold md:text-center lg:text-title-40">
            {user?.name} ¿Para quién deseas cotizar?
          </h2>
          <p className="text-paragraph-05 mt-2 md:text-center">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>
        </div>
        {QUOTE_LIST.map((_, i) => (
          <div
            key={_.id}
            className={`col-span-full md:col-span-6 md:col-start-2 lg:col-span-3 ${i === 0 && 'mb-6 lg:col-start-4 lg:mb-0'}`}
          >
            <CardQuote
              quote={_}
              selected={selectedQuote === _.id}
              onSelect={() => setSelectedQuote(_.id)}
            />
          </div>
        ))}
        {/* Desktop Plans */}
        {selectedQuote && (
          <PlansDesktop
            quoteId={selectedQuote!}
            plans={plans}
            onSelect={handleSelectPlan}
          />
        )}
      </GridWrapper>

      {/* Mobile Plans */}
      {selectedQuote && (
        <PlansMobile
          quoteId={selectedQuote!}
          plans={plans}
          onSelect={handleSelectPlan}
        />
      )}
    </section>
  );
};
