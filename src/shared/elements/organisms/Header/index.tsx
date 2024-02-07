import { useEffect, useState } from 'react';

import Image from 'next/image';

import { Icon } from '@/elements/atoms';
import { useScrollPosition } from '@/hooks';

import { GridWrapper } from '../GridWrapper';

export const Header = () => {
  const [onScroll, setOnScroll] = useState<boolean>(false);

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    setOnScroll(scrollPosition > 10);
  }, [scrollPosition]);

  return (
    <GridWrapper
      className={`fixed w-full left-0 top-0 z-10 ${
        onScroll ? 'bg-grey-0' : 'bg-transparent'
      }`}
    >
      <div className="col-span-full h-14 flex justify-between lg:h-16">
        <Image
          src="/svg/logo.svg"
          alt="Logo"
          width={65.05}
          height={32}
          className="lg:hidden"
        />
        <Image
          src="/svg/logo.svg"
          alt="Logo"
          width={73.19}
          height={36}
          className="hidden lg:block"
        />
        <div className="flex items-center gap-4">
          <span className="text-subtitle-12 font-semibold hidden lg:block">
            ¡Compra por este medio!
          </span>
          <a
            href="tel:01 411 6001"
            className="flex items-center gap-2 font-bold text-comp-16 lg:text-comp-18"
          >
            <Icon name="gl_telephone" />
            (01) 411 6001
          </a>
        </div>
      </div>
    </GridWrapper>
  );
};
