// ForecastSlider
import { Key } from 'react'

import { Slider } from '@/components/ui'
import type { ForecastSliderProps } from '@/types'

import { ForecastCard } from './'

export const ForecastSlider: React.FC<ForecastSliderProps> = ({ data }) => {
  return (
    <div className="card p-6 py-8 motion-duration-500 motion-delay-200 intersect:motion-preset-rebound-up">
      <div className="glass-highlight z-50" />

      <Slider>
        {data.map((hourlyData: any, idx: Key) => (
          <ForecastCard key={idx} data={hourlyData} />
        ))}
      </Slider>
    </div>
  )
}
