// Slider
import { FreeMode, Keyboard, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { SliderProps } from '@/types'

import './slider.css'

export const Slider: React.FC<SliderProps> = ({
  children,
  className = '',
  spaceBetween = 16,
  slidesPerView = 5,
  breakpoints = {
    640: { slidesPerView: 7 },
    768: { slidesPerView: 9 },
    1024: { slidesPerView: 12 },
  },
}) => {
  return (
    <Swiper
      className={`${className}`}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      freeMode
      keyboard={{ enabled: true }}
      mousewheel={{ forceToAxis: true }}
      modules={[FreeMode, Keyboard, Mousewheel]}
      breakpoints={breakpoints}
    >
      <div>
        {children.map((child, idx) => (
          <SwiperSlide key={idx} className="">
            {child}
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  )
}
