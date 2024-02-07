import { useMemo } from 'react';

import { useGeneralContext } from '@/context';
import { ButtonBack, Card, Icon } from '@/elements/atoms';
import { GridWrapper } from '@/elements/organisms';
import { Divider } from '@/elements/particles';

type Props = {
  onPrevStep: () => void;
};

export const Summary = ({ onPrevStep }: Props) => {
  const { user, plan } = useGeneralContext();

  const getPrice = useMemo(() => {
    const discount = user.quoteId === 2 ? 0.05 : 0;
    return `$${plan.price - plan.price * discount} al mes`;
  }, [plan.price, user.quoteId]);

  return (
    <GridWrapper className="py-8 lg:py-16">
      <div className="col-span-full col-start-2 hidden lg:flex">
        <ButtonBack onClick={onPrevStep} />
      </div>
      <div className="col-span-full mb-8 text-default-neutral md:col-span-6 md:col-start-2 lg:mt-8 lg:col-span-10 lg:col-start-2">
        <h2 className="text-title-32 tracking-[-0.6px] font-bold text-center lg:text-title-40 lg:text-left">
          Resumen del seguro
        </h2>

        <Card className="flex flex-col gap-4 mt-10 xl:mt-12">
          <div>
            <span className="text-headline-22 uppercase font-black mb-2">
              Precios calculados para:
            </span>
            <div className="flex items-center gap-3">
              <Icon name="gl_family" />
              <h4 className="text-headline-13 font-bold">
                {user.name} {user.lastName}
              </h4>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col gap-1">
            <span className="text-headline-16 font-bold">
              Responsable de pago
            </span>
            <p className="text-paragraph-06">
              {user.documentType}: {user.documentNumber}
            </p>
            <p className="text-paragraph-06">Celular: {user.phone}</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-headline-16 font-bold">Plan elegido</span>
            <p className="text-paragraph-06">{plan.name}</p>
            <p className="text-paragraph-06">Costo del Plan: {getPrice}</p>
          </div>
        </Card>
      </div>
    </GridWrapper>
  );
};
