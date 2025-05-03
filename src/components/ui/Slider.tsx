// Slider
import { FreeMode, Keyboard, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { SliderProps } from '@/types'

import './slider.css'

export const Slider: React.FC<SliderProps> = ({
  children,
  className = '',
  spaceBetween = 24,
  slidesPerView = 2,
  breakpoints = {
    640: { slidesPerView: 4 },
    768: { slidesPerView: 5 },
    1024: { slidesPerView: 6 },
    1280: { slidesPerView: 7 },
  },
}) => {
  return (
    <Swiper
      className={`-my-2 ${className}`}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      freeMode
      keyboard={{ enabled: true }}
      mousewheel={{ forceToAxis: true }}
      modules={[FreeMode, Keyboard, Mousewheel]}
      breakpoints={breakpoints}
    >
      {children.map((child, idx) => (
        <SwiperSlide key={idx} className="py-2">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
