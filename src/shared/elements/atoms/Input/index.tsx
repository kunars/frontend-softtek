import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react';

import { transformNumber } from '@/utils';

type Props = {
  label?: string;
  className?: string;
  onlyNumber?: boolean;
  hasError?: boolean;
  onChange: (e: any) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Component = (
  { label, className, onlyNumber, hasError, onChange, ...props }: Props,
  ref: any,
) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onlyNumber) {
      const val = transformNumber(e.target.value);
      e.target.value = val;
    }

    onChange(e);
  };

  return (
    <div className="relative">
      <input
        ref={ref}
        id={props.id}
        className={`pt-4 px-4 rounded-lg h-14 border border-grey-60 outline-none text-comp-16 leading-6 bg-grey-10 placeholder:text-grey-60 floating-input ${hasError && '!border-red'} ${className}`}
        autoComplete="off"
        placeholder=" "
        onChange={handleChange}
        {...props}
      />
      {label && (
        <label
          htmlFor={props.id}
          className="text-comp-16 text-grey-60 absolute pointer-events-none line-clamp-1 left-4 pr-4 top-[18px] transition-all ease-in duration-200 floating-label"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export const Input = forwardRef<HTMLInputElement, Props>(Component);
