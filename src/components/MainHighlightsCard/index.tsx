// MainHighlightsCard
import { FC } from 'react'
import { ReactCountryFlag } from 'react-country-flag'
import { convertTime } from '@/utils/convertTime'
import { HighlightsTypes } from '@/types'
import { SunriseIcon, SunsetIcon } from '@/assets'

const MainHighlightsCard: FC<HighlightsTypes> = ({ data, img }) => {
  return (
    <article
      className="overlay-30 flex aspect-square w-full flex-col justify-between overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-6 capitalize text-white shadow-md md:w-1/2 lg:w-4/12 "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex flex-col gap-3 lg:gap-4">
        <div className="flex items-baseline">
          <img
            className="h-12 w-12 object-contain"
            src={`http://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
            alt={data?.weather?.[0]?.main}
          ></img>
          <span className="text-5xl font-thin">{`${data?.main?.temp.toFixed(0)}`}</span>
          <span className="text-lg">°C</span>
        </div>

        <h4 className="text-2xl font-semibold text-white">{`${data?.weather?.[0]?.description}`}</h4>

        <ul className="text-sm capitalize">
          <li>
            Feels Like <span className="font-bold">{data?.main?.feels_like.toFixed(0)}</span>°C
          </li>
          <li>
            Min <span className="font-bold">{data?.main?.temp_min.toFixed(0)}</span>°C, Max{' '}
            <span className="font-bold">{data?.main?.temp_max.toFixed(0)}</span>°C
          </li>
        </ul>

        <ul className="flex items-center gap-1 text-lg font-semibold">
          <li className="flex items-center gap-1 after:content-['•']">
            <SunriseIcon />
            <span>{convertTime(data?.current?.sunrise, data?.timezone, '24Hours')}</span>
          </li>
          <li className="flex items-center gap-1">
            <SunsetIcon />
            <span>{convertTime(data?.current?.sunset, data?.timezone, '24Hours')}</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-3xl font-semibold">
          <span>{`${data?.city}`}</span>
        </h3>
        <p className="flex items-center gap-2">
          <ReactCountryFlag countryCode={data?.country_code} svg aria-label={data?.country} />
          <span>{`${data?.country}`}</span>
        </p>
      </div>
    </article>
  )
}

export default MainHighlightsCard
