// ForecastCard
import { FC } from 'react'
import { unixTimeToHrsMins, unixTimeToWeekDay } from '@/utils/convertTime'
import { ForecastTypes } from '@/types'

const ForecastCard: FC<ForecastTypes> = ({ data, isWeekMode, timezone }) => {
  return (
    <article className="flex justify-center rounded-xl px-4 py-8 bg-white border border-white/5 shadow-md text-center dark:bg-slate-800">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-2xl font-semibold text-gray-400">
          {isWeekMode ? unixTimeToWeekDay(data.dt, timezone) : unixTimeToHrsMins(data.dt, timezone)}
        </h3>
        <img
          className="w-24 h-w-24 object-contain"
          src={`http://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
          alt={data?.weather?.[0]?.main}
        ></img>
        <p className="flex flex-col items-center text-2xl">
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
      </div>
    </article>
  )
}

export default ForecastCard
