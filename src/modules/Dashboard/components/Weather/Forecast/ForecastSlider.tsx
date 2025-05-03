// ForecastSlider
import { Key } from 'react'

import { Slider } from '@/libs/Slider'
import type { ForecastSliderProps } from '@/types'

import { ForecastCard } from './'

export const ForecastSlider: React.FC<ForecastSliderProps> = ({ data }) => {
  return (
    <Slider>
      {data.map((hourlyData: any, idx: Key) => (
        <ForecastCard key={idx} data={hourlyData} />
      ))}
    </Slider>
  )
}
