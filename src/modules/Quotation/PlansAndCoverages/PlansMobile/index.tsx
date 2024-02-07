import { useRef, useState } from 'react';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Icon } from '@/elements/atoms';
import { Plan } from '@/interfaces';
import { CardPlan } from '@/elements/molecules';

import 'swiper/css';

type Props = {
  plans: Plan[];
  quoteId: number;
  onSelect: (e: Plan) => void;
};

export const PlansMobile = ({ plans, quoteId, onSelect }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const swiperRef = useRef<any>(null);

  return (
    <div className="relative pb-8 lg:hidden">
      <Swiper
        ref={swiperRef}
        slidesPerView="auto"
        grabCursor
        spaceBetween={16}
        onBeforeInit={(swiper: any) => (swiperRef.current = swiper)}
        onSlideChange={() => setCurrentIndex(swiperRef.current.activeIndex + 1)}
        breakpoints={{
          320: {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
        modules={[Navigation]}
        className="!pl-12 !pr-6 !pt-10 !pb-[66px]"
      >
        {plans.map((_) => (
          <SwiperSlide
            key={_.name}
            className="!h-auto md:!flex md:justify-center"
          >
            <CardPlan plan={_} quoteId={quoteId} onSelect={onSelect} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center gap-4 justify-center">
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentIndex > 1 ? 'border-blue-berry-600' : 'border-neutrals-500'}`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Icon
            name="gl_left"
            className={`w-4 h-4 ic-inherit ${currentIndex > 1 ? 'fill-blue-berry-600' : 'fill-neutrals-500'}`}
          />
        </div>
        <span className="text-headline-16 text-neutrals-700">
          {currentIndex} / {plans.length}
        </span>
        <div
          className={` w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentIndex < plans.length ? 'border-blue-berry-600' : 'border-neutrals-500'}`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Icon
            name="gl_right"
            className={`ic-inherit ${currentIndex < plans.length ? 'fill-blue-berry-600' : 'fill-neutrals-500'}`}
          />
        </div>
      </div>
    </div>
  );
};
