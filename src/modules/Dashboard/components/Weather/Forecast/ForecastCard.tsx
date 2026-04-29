// ForecastCard
import { WeatherIcon } from '@/components/ui'
import type { ForecastProps } from '@/types'

export const ForecastCard = ({ data }: ForecastProps) => {
  const {
    time,
    temp_c,
    condition: { text: conditionText, code: conditionCode },
    is_day,
  } = data || {}

  return (
    <article className="flex flex-col items-center gap-2 text-center">
      <h3 className="relative z-10 mb-6 flex w-full flex-col justify-between">
        <span className="card-highlighted-text !text-2xl">
          {temp_c !== undefined ? `${temp_c.toFixed(0)}°C` : 'N/A'}
        </span>
      </h3>
      <div className="relative z-10 flex items-center justify-center">
        <WeatherIcon
          className="text-4xl drop-shadow-md"
          icon={conditionCode}
          isDay={is_day}
          title={conditionText}
        />
      </div>
      <p className="text-md">{time ? time.split(' ')[1] : '--:--'}</p>
    </article>
  )
}
