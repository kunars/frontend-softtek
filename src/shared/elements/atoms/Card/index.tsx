import { PropsWithChildren } from 'react';

type Props = {
  className?: string;
  onClick?: () => void;
} & PropsWithChildren;

export const Card = ({ className, onClick, children }: Props) => {
  return (
    <div
      className={`bg-grey-0 shadow-01 rounded-3xl py-6 px-8 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
