import { PropsWithChildren } from 'react';

type Props = {
  className?: string;
  classNameContent?: string;
} & PropsWithChildren;

export const GridWrapper = ({
  className,
  classNameContent,
  children,
}: Props) => (
  <div className={className}>
    <div className="w-full h-full">
      <div className={`content-grid !gap-y-0 ${classNameContent}`}>
        {children}
      </div>
    </div>
  </div>
);
