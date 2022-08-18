// Forecast
import { FC, Key } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Keyboard, Mousewheel } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/free-mode'
import 'swiper/scss/keyboard'
import ForecastCard from '@/components/ForecastCard'
import { ForecastTypes } from '@/types'

const Forecast: FC<ForecastTypes> = ({ data, isWeekMode }) => {
  return (
    <Swiper
      className="-my-8"
      slidesPerView={2}
      spaceBetween={32}
      freeMode={true}
      keyboard={{
        enabled: true,
      }}
      mousewheel={{
        forceToAxis: true,
      }}
      modules={[FreeMode, Keyboard, Mousewheel]}
      breakpoints={{ 640: { slidesPerView: 4 }, 1024: { slidesPerView: 6 } }}
    >
      {data &&
        data.map((forecastItem: any, idx: Key | undefined) => (
          <SwiperSlide className="py-8" key={idx}>
            <ForecastCard data={forecastItem} isWeekMode={isWeekMode} />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default Forecast
