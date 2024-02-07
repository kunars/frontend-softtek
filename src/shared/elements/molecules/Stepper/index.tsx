import { ReactNode, useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Icon } from '@/elements/atoms';

type Props = {
  steps: {
    title: string;
    content: ReactNode;
  }[];
  step: number;
  onPrev?: () => void;
};

export const Stepper = ({ steps, step = 0, onPrev }: Props) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const { back } = useRouter();

  useEffect(() => {
    setCurrentStep(step);
  }, [step]);

  const showProgress = useMemo(() => {
    return (
      <div className="h-[6px] flex-1 bg-neutrals-400 rounded-[20px] relative">
        <div
          className="absolute top-0 left-0 h-full rounded-[20px] z-[2] bg-blue-berry-600"
          style={{ width: ((currentStep + 1) / steps.length) * 100 + '%' }}
        ></div>
      </div>
    );
  }, [currentStep]);

  return (
    <div>
      {/* Desktop Stepper */}
      <div className="items-center justify-center h-14 bg-neutrals-200 hidden lg:flex">
        {steps.map((step, i) => (
          <div key={`step-${i}`} className="flex items-center">
            <div className="flex items-center gap-4">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-headline-20 font-bold ${currentStep === i ? 'bg-blue-berry-600 text-grey-0' : 'border border-neutrals-600 text-neutrals-600'}`}
              >
                {i + 1}
              </div>
              <span
                className={`text-headline-16 ${currentStep === i ? 'font-bold text-neutrals-700' : 'text-neutrals-600'}`}
              >
                {step.title}
              </span>
            </div>
            {i < steps.length - 1 && (
              <Image
                src="/images/line.png"
                alt="Line"
                width={32}
                height={24}
                className="mx-4"
              />
            )}
          </div>
        ))}
      </div>
      {/* Mobile Stepper */}
      <div className="h-14 px-6 border-b border-b-neutrals-400 lg:hidden">
        <div className="h-full mx-auto flex items-center gap-4 md:max-w-[300px]">
          <button
            type="button"
            className="w-6 h-6 rounded-full border-2 border-neutrals-500 flex items-center justify-center"
            onClick={() => {
              if (currentStep === 0) {
                back();
              } else {
                setCurrentStep(currentStep - 1);
                onPrev?.();
              }
            }}
          >
            <Icon name="gl_arrow_left" />
          </button>
          <span className="text-headline-22 font-black text-neutrals-700 uppercase">
            Paso {currentStep + 1} de {steps.length}
          </span>
          {showProgress}
        </div>
      </div>
      {/* Content */}
      <div>{steps[currentStep].content}</div>
    </div>
  );
};
