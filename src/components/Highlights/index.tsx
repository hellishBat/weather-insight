// Highlights
import HighlightsCard from '@/components/HighlightsCard'
import { timeToHrsMins } from '@/utils/convertTime'
import TempMinIcon from '@/assets/images/svg/temperature-low.svg'
import TempMaxIcon from '@/assets/images/svg/temperature-high.svg'
import CloudIcon from '@/assets/images/svg/cloud.svg'
import SunriseIcon from '@/assets/images/svg/sunrise.svg'
import SunsetIcon from '@/assets/images/svg/sunset.svg'
import DropletIcon from '@/assets/images/svg/droplet.svg'
import WindIcon from '@/assets/images/svg/wind.svg'
import GaugeIcon from '@/assets/images/svg/gauge.svg'
import EyeIcon from '@/assets/images/svg/eye.svg'

const Highlights = ({ data, img }: { data: any; img: string }) => {
  return (
    <div className="flex gap-8 flex-wrap mb-12 md:flex-nowrap">
      <article
        className="flex flex-col w-full lg:w-4/12 rounded-xl shadow-md p-6 bg-center bg-no-repeat bg-cover overlay-30 text-white aspect-square overflow-hidden"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="mb-2 text-3xl font-semibold">{`${data?.city}, 
                ${data?.country}`}</div>
        <div className="mb-auto">
          <div className="flex items-center mb-4 text-5xl font-thin">
            <img
              className="w-[1em] h-[1em] object-contain"
              src={`http://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
              alt={data?.weather?.[0]?.main}
            ></img>
            <span>{`${data?.main?.temp.toFixed(0)}°C`}</span>
          </div>
          <p className="inline-flex gap-1 capitalize">
            <span className="text-white/60">Feels Like</span>
            <span className="">{` ${data?.main?.feels_like.toFixed(0)}°C, ${
              data?.weather?.[0]?.description
            }`}</span>
          </p>
        </div>
        <div className="text-2xl text-white/60">
          <div className="flex items-center gap-2">
            <TempMaxIcon />
            <span>Max</span>
            <span className="text-white">{`${data?.main?.temp_max.toFixed(0)}°C`}</span>
          </div>
          <div className="flex items-center gap-2">
            <TempMinIcon />
            <span>Min</span>
            <span className="text-white">{`${data?.main?.temp_min.toFixed(0)}°C`}</span>
          </div>
        </div>
      </article>

      <div className="grid gap-8 auto-cols-fr auto-rows-fr w-full sm:grid-cols-2 lg:w-2/3 lg:grid-cols-3">
        <HighlightsCard>
          <h3 className="mb-2 text-2xl font-semibold text-gray-400">Sunrise & Sunset</h3>
          <div className="flex items-center gap-2 text-xl">
            <SunriseIcon />
            <span>{timeToHrsMins(data?.current?.sunrise)}</span>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <SunsetIcon />
            <span>{timeToHrsMins(data?.current?.sunset)}</span>
          </div>
        </HighlightsCard>

        <HighlightsCard>
          <h3 className="mb-2 text-2xl font-semibold text-gray-400">Cloudiness</h3>
          <div className="flex items-center gap-2 text-2xl">
            <CloudIcon />
            <span>{`${data?.current?.clouds}%`}</span>
          </div>
        </HighlightsCard>

        <HighlightsCard>
          <h3 className="mb-2 text-2xl font-semibold text-gray-400">Wind Status</h3>
          <div className="flex items-center gap-2 text-2xl">
            <WindIcon />
            <span>{`${data?.current?.wind_speed}m/s`}</span>
          </div>
        </HighlightsCard>

        <HighlightsCard>
          <h3 className="mb-2 text-2xl font-semibold text-gray-400">Pressure</h3>
          <div className="flex items-center gap-2 text-2xl">
            <GaugeIcon />
            <span>{`${data?.current?.pressure}hPa`}</span>
          </div>
        </HighlightsCard>

        <HighlightsCard>
          <h3 className="mb-2 text-2xl font-semibold text-gray-400">Humidity</h3>
          <div className="flex items-center gap-2 text-2xl">
            <DropletIcon />
            <span>{`${data?.current?.humidity}%`}</span>
          </div>
        </HighlightsCard>

        <HighlightsCard>
          <h3 className="mb-2 text-2xl font-semibold text-gray-400">Visibility</h3>
          <div className="flex items-center gap-2 text-2xl">
            <EyeIcon />
            <span>{`${(data?.current?.visibility / 1000).toFixed(1)}km `}</span>
          </div>
        </HighlightsCard>
      </div>
    </div>
  )
}

export default Highlights
