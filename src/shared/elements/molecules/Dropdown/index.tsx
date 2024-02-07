import { Fragment, useState, useEffect, PropsWithChildren } from 'react';

import { Listbox, Transition } from '@headlessui/react';

import { Icon } from '../../atoms/Icon';

type ItemProps = {
  value: any;
} & PropsWithChildren;

export const DropdownItem = ({ value, children }: ItemProps) => {
  return (
    <Listbox.Option
      className={({ active }) =>
        `relative min-h-14 cursor-default select-none !border-b !border-b-grey-60 p-4 text-comp-16 leading-6 last:!border-none ${
          active ? 'bg-grey-30' : 'bg-grey-0'
        }`
      }
      value={value}
    >
      {children}
    </Listbox.Option>
  );
};

type Props = {
  defaultValue?: any;
  className?: string;
  valueSelected?: string;
  onChange: (e: any) => void;
} & PropsWithChildren;

export const Dropdown = ({
  defaultValue,
  children,
  className,
  valueSelected,
  onChange,
}: Props) => {
  const [selected, setSelected] = useState<any>();

  useEffect(() => {
    setSelected(defaultValue);
  }, [defaultValue]);

  return (
    <div className="block w-full">
      <Listbox
        defaultValue={defaultValue}
        onChange={(e) => {
          if (e !== selected) {
            setSelected(e);
            onChange(e);
          }
        }}
      >
        {({ open }) => (
          <div className="relative">
            <Listbox.Button
              className={`relative flex h-14 w-full cursor-pointer items-center rounded-lg border border-grey-60 p-4 text-left ${className}`}
            >
              {selected && !valueSelected && (
                <span className="block truncate text-comp-16 leading-6">
                  {selected}
                </span>
              )}
              {valueSelected && (
                <span className="block truncate text-comp-16 leading-6">
                  {valueSelected}
                </span>
              )}
              <span
                className={`absolute inset-y-0 flex items-center pointer-events-none right-4 transition-all ${open && 'rotate-180'}`}
              >
                <Icon name="gl_arrow_down" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-[2] w-full overflow-auto rounded-lg !border !border-grey-60 bg-grey-0">
                {children}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
};
