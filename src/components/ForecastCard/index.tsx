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
      <h3
        className={`w-full py-6 mb-4 bg-gradient-to-br from-gray-200 to-gray-300 ${styles.cardLabel.normal} dark:from-gray-700 dark:to-gray-800`}
      >
        {isWeekMode
          ? convertTime(data.dt, timezone, 'dayOfWeek')
          : convertTime(data.dt, timezone, '24Hours')}
      </h3>
      <figure className="w-24 h-w- mb-3 bg-slate-300 rounded-full shadow-inner dark:bg-gray-800">
        <img
          className=" object-contain"
          src={`http://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
          alt={data?.weather?.[0]?.main}
        ></img>
      </figure>
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
