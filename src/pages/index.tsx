import Image from 'next/image';

import { Tag } from '@/elements/atoms';
import { GridWrapper } from '@/elements/organisms';
import { Divider } from '@/elements/particles';
import { Form } from '@/modules/Home';

const HomePage = () => {
  return (
    <GridWrapper className="pb-24 md:min-h-[calc(100vh-162px)] xl:min-h-[calc(100vh-170px)] lg:pt-8">
      <div className="col-span-6 hidden relative z-[2] start-of-column h-[560px] xl:block">
        <Image
          src="/images/hero.png"
          alt="Hero"
          fill
          className="object-contain"
        />
      </div>

      <div className="col-span-full md:col-span-4 md:col-start-3 lg:col-span-6 lg:col-start-4 xl:col-span-5 xl:col-start-7 xl:start-of-column xl:pl-8">
        <div className="flex items-center gap-3 relative z-[2] xl:gap-4">
          <div className="flex flex-col gap-2">
            <Tag text="Seguro Salud Flexible" />
            <h1 className="text-title-28 font-bold xl:text-title-32">
              Creado para ti y tu familia
            </h1>
          </div>
          <Image
            src="/images/hero.png"
            alt="Hero"
            width={136}
            height={160}
            className="xl:hidden"
          />
        </div>
        <Divider className="my-6 xl:hidden" />
        <div className="relative z-[1] xl:mt-2">
          <h4 className="text-subtitle-14 font-semibold">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría, 100% online.
          </h4>
          <Form />
        </div>

        <div className="bg-aqua"></div>
        <div className="bg-violet"></div>
      </div>
    </GridWrapper>
  );
};

export default HomePage;
