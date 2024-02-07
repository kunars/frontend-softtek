import { useEffect, useState } from 'react';

import { DateTime } from 'luxon';
import { Lato } from 'next/font/google';
import { useRouter } from 'next/router';

import { useGeneralContext } from '@/context';
import { IconNames } from '@/elements/atoms';
import { Stepper } from '@/elements/molecules';
import { Plan } from '@/interfaces';
import { PlansAndCoverages, Summary } from '@/modules/Quotation';
import { usePlanService } from '@/services';

export const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

const QuotationPage = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const { useGetPlans } = usePlanService();
  const { user } = useGeneralContext();
  const { replace } = useRouter();

  useEffect(() => {
    if (!user?.birthDay) {
      replace('/');
    }
  }, []);

  useEffect(() => {
    void getPlans();
  }, []);

  const getPlans = async () => {
    try {
      const { data } = await useGetPlans();
      const age = Math.floor(
        DateTime.local().diff(
          DateTime.fromFormat(user.birthDay, 'dd-MM-yyyy'),
          'years',
        ).years,
      );
      const filterPlans = data.list
        .filter((_) => _.age >= age)
        .map((_, i) => {
          return {
            ..._,
            isRecommended: i === 1,
            icon: (i === 1 ? 'ic_hospital' : 'ic_home') as IconNames,
          };
        });
      setPlans(filterPlans);
    } catch (e) {
      setPlans([]);
    }
  };

  return (
    <section className={`min-h-[calc(100vh-56px)] ${lato.className}`}>
      <Stepper
        step={currentStep}
        steps={[
          {
            title: 'Planes y coberturas',
            content: (
              <PlansAndCoverages
                plans={plans}
                onNextStep={() => setCurrentStep(1)}
              />
            ),
          },
          {
            title: 'Resumen',
            content: <Summary onPrevStep={() => setCurrentStep(0)} />,
          },
        ]}
        onPrev={() => setCurrentStep(currentStep - 1)}
      />
    </section>
  );
};

export default QuotationPage;
