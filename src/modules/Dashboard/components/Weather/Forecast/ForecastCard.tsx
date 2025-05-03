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
    <article className="card intersect:motion-preset-rebound-left flex flex-col items-center gap-6 overflow-hidden p-4 text-center motion-duration-500 motion-delay-200">
      <div className="w-full border-b-2 border-gray-500/30 pb-4 dark:border-gray-400/30">
        <h3 className="text-2xl">{time.split(' ')[1]}</h3>
      </div>
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-300 shadow-inner dark:bg-slate-800">
        <WeatherIcon className="text-6xl" icon={conditionCode} isDay={is_day} />
      </div>
      <p className="flex flex-col justify-between">
        <span className="card-label-sm mb-2 line-clamp-1">{conditionText}</span>
        <span className="card-highlighted-text text-3xl font-semibold">{`${temp_c.toFixed(0)}°C`}</span>
      </p>
    </article>
  )
}
