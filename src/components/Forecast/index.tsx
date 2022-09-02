// Forecast
import { FC, Key } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Keyboard, Mousewheel } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/free-mode'
import 'swiper/scss/keyboard'
import ForecastCard from '@/components/ForecastCard'
import { ForecastTypes } from '@/types'

const Forecast: FC<ForecastTypes> = ({ data, isWeekMode, timezone }) => {
  return (
    <Swiper
      className="-my-2"
      slidesPerView={2}
      spaceBetween={24}
      freeMode={true}
      keyboard={{
        enabled: true,
      }}
      mousewheel={{
        forceToAxis: true,
      }}
      modules={[FreeMode, Keyboard, Mousewheel]}
      breakpoints={{
        640: { slidesPerView: 4, spaceBetween: 32 },
        1024: { slidesPerView: 6, spaceBetween: 32 },
      }}
    >
      {data &&
        data.map((forecastItem: any, idx: Key | undefined) => (
          <SwiperSlide className="py-2" key={idx}>
            <ForecastCard data={forecastItem} isWeekMode={isWeekMode} timezone={timezone} />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default Forecast
