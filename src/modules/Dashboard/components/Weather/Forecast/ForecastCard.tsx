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
    <article className="card motion-preset-rebound-left flex flex-col items-center gap-6 overflow-hidden p-4 text-center motion-duration-500 motion-delay-200">
      <div className="w-full border-b-2 border-gray-500/30 pb-4 dark:border-gray-400/30">
        <h3 className="motion-preset-rebound-up text-2xl motion-duration-300 motion-delay-300">
          {time.split(' ')[1]}
        </h3>
      </div>
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-300 shadow-inner dark:bg-slate-800">
        <WeatherIcon
          className="motion-preset-pop text-6xl motion-duration-300 motion-delay-300"
          icon={conditionCode}
          isDay={is_day}
        />
      </div>
      <p className="flex flex-col justify-between">
        <span className="card-label-sm motion-preset-rebound-up mb-2 line-clamp-1 motion-duration-300 motion-delay-500">
          {conditionText}
        </span>
        <span className="card-highlighted-text motion-preset-rebound-up text-3xl font-semibold motion-duration-200 motion-delay-500">{`${temp_c.toFixed(0)}°C`}</span>
      </p>
    </article>
  )
}
