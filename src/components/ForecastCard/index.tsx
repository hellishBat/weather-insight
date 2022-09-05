// ForecastCard
import { FC } from 'react'
import { convertTime } from '@/utils/convertTime'
import { ForecastTypes } from '@/types'
import { styles } from '@/styles'

const ForecastCard: FC<ForecastTypes> = ({ data, isWeekMode, timezone }) => {
  return (
    <article
      className={`flex flex-col items-center pb-6 text-center overflow-hidden ${styles.card}`}
    >
      <h3 className={`w-full py-6 bg-slate-200/70 ${styles.cardLabel.normal} dark:bg-gray-900/30`}>
        {isWeekMode
          ? convertTime(data.dt, timezone, 'dayOfWeek')
          : convertTime(data.dt, timezone, '24Hours')}
      </h3>
      <img
        className="w-24 h-w-24 object-contain"
        src={`http://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
        alt={data?.weather?.[0]?.main}
      ></img>
      <p className="flex flex-col items-center w-full px-4 text-2xl">
        {isWeekMode ? (
          <>
            <span className="font-semibold">{`${data?.temp?.day.toFixed(0)}°C`}</span>
            <span className="text-gray-400">{`${data?.temp?.night.toFixed(0)}°C`}</span>
          </>
        ) : (
          <>
            <span className="text-gray-400">{data?.weather?.[0]?.main}</span>
            <span className="font-semibold">{`${data?.temp?.toFixed(0)}°C`}</span>
          </>
        )}
      </p>
    </article>
  )
}

export default ForecastCard
