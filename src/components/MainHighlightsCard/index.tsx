// MainHighlightsCard
import { FC } from 'react'
import { ReactCountryFlag } from 'react-country-flag'
import { HighlightsTypes } from '@/types'
import convertRegionNames from '@/utils/convertRegionNames'

const MainHighlightsCard: FC<HighlightsTypes> = ({ data, img }) => {
  return (
    <article
      className="flex flex-col justify-between w-full lg:w-4/12 rounded-xl shadow-md p-6 bg-center bg-no-repeat bg-cover overlay-30 text-white capitalize aspect-square overflow-hidden"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="">
        <div className="flex items-center mb-4 text-5xl font-thin">
          <img
            className="w-[1em] h-[1em] object-contain"
            src={`http://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
            alt={data?.weather?.[0]?.main}
          ></img>
          <span>{`${data?.main?.temp.toFixed(0)}°C`}</span>
        </div>
        <h4 className="text-2xl font-semibold text-white">{`${data?.weather?.[0]?.description}`}</h4>
        <p className="flex flex-col text-sm capitalize text-white/75">
          <span>{`Feels Like ${data?.main?.feels_like.toFixed(0)}°C`}</span>
          <span>{`Min ${data?.main?.temp_min.toFixed(0)}°C, Max ${data?.main?.temp_max.toFixed(
            0
          )}°C`}</span>
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-semibold">
          <span>{`${data?.city}`}</span>
        </h3>
        <p className="flex items-center gap-2">
          <ReactCountryFlag countryCode={data?.country} svg aria-label={data?.country} />
          <span>{`${convertRegionNames(data?.country)}`}</span>
        </p>
      </div>
    </article>
  )
}

export default MainHighlightsCard
