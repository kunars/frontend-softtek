import { useState, useEffect, PropsWithChildren } from 'react';

import { Icon } from '@/elements/atoms';

type Props = {
  defaultChecked?: boolean;
  onChecked: (checked: boolean) => void;
} & PropsWithChildren;

export const Checkbox = ({ defaultChecked, children, onChecked }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    setIsChecked(defaultChecked || false);
  }, [defaultChecked]);

  return (
    <div className="flex items-center gap-3">
      <div
        className="relative flex items-center justify-center cursor-pointer"
        onClick={() => {
          setIsChecked(!isChecked);
          onChecked(!isChecked);
        }}
      >
        <div
          className={`relative flex h-5 w-5 cursor-pointer appearance-none items-center justify-center rounded-[4px] border border-grey-100 ${
            isChecked ? 'bg-grey-100' : 'bg-transparent'
          }`}
        ></div>
        {isChecked && (
          <Icon name="gl_check" className="absolute z-[3] w-4 h-4" />
        )}
      </div>
      {children}
    </div>
  );
};
