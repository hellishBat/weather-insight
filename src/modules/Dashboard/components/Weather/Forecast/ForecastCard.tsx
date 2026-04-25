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
    <article className="card flex flex-col items-center gap-6 p-4 text-center motion-duration-500 motion-delay-200 intersect:motion-preset-rebound-left">
      <div className="glass-highlight" />
      <div className="w-full border-b-2 border-slate-500/10 pb-4 dark:border-slate-400/10">
        <h3 className="text-2xl">{time ? time.split(' ')[1] : '--:--'}</h3>
      </div>
      <div className="glass-well relative z-10 flex h-24 w-24 items-center justify-center rounded-full">
        <WeatherIcon
          className="text-6xl drop-shadow-md"
          icon={conditionCode}
          isDay={is_day}
        />
      </div>
      <p className="relative z-10 flex w-full flex-col justify-between">
        <span className="card-label mb-2 line-clamp-1">{conditionText}</span>
        <span className="card-highlighted-text">
          {temp_c !== undefined ? `${temp_c.toFixed(0)}°C` : 'N/A'}
        </span>
      </p>
    </article>
  )
}
