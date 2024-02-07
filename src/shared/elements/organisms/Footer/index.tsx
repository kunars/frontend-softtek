import Image from 'next/image';

import { GridWrapper } from '../GridWrapper';

export const Footer = () => {
  return (
    <footer>
      <GridWrapper className="bg-grey-100 py-8">
        <div className="col-span-full flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <Image
            src="/svg/logo-white.svg"
            alt="Logo"
            width={138}
            height={20}
            className="md:hidden"
          />
          <Image
            src="/svg/logo-white-v2.svg"
            alt="Logo"
            width={85.39}
            height={42}
            className="hidden md:block"
          />
          <span className="h-[1px] bg-grey-80 w-full md:hidden"></span>
          <p className="text-body-12 text-grey-0 text-center md:text-comp-14">
            © {new Date().getFullYear()} RIMAC Seguros y Reaseguros.
          </p>
        </div>
      </GridWrapper>
    </footer>
  );
};
