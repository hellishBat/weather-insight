// Forecast
import { useState } from 'react'

import data from '@/data/index.json'
import type { ForecastProps } from '@/types'

import { ForecastButton, ForecastSlider } from './'

const { heading, buttons } = data?.forecast || {}

export const Forecast = ({ data }: ForecastProps) => {
  const [selectedDay, setSelectedDay] = useState(0)
  const forecastDays = data?.forecast?.forecastday || []
  const forecastCardsContent = forecastDays[selectedDay]?.hour || []

  return (
    <section>
      <div className="section-head intersect:motion-preset-rebound-up motion-duration-1000">
        <h2 className="section-heading">{heading}</h2>
        <div className="flex gap-2">
          {forecastDays.map((_: number[], index: number) => (
            <ForecastButton
              key={index}
              isSelected={selectedDay === index}
              onClick={() => setSelectedDay(index)}
              label={buttons?.[index] || `Day ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <ForecastSlider data={forecastCardsContent} />
    </section>
  )
}
