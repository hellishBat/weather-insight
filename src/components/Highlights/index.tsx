// Highlights
import { FC } from 'react'
import MainHighlightsCard from '@/components/MainHighlightsCard'
import HighlightsCard from '@/components/HighlightsCard'
import { unixTimeToHrsMins } from '@/utils/convertTime'
import { HighlightsTypes } from '@/types'
import {
  CloudIcon,
  SunriseIcon,
  SunsetIcon,
  DropletIcon,
  WindIcon,
  GaugeIcon,
  EyeIcon,
} from '@/assets'

const Highlights: FC<HighlightsTypes> = ({ data, img }) => {
  return (
    <div className="flex gap-8 flex-wrap mb-12 md:flex-nowrap">
      <MainHighlightsCard data={data} img={img} />

      <div className="grid gap-8 auto-cols-fr auto-rows-fr w-full sm:grid-cols-2 lg:w-2/3 lg:grid-cols-3">
        <HighlightsCard>
          <h3 className="mb-2 text-2xl font-semibold text-gray-400">Sunrise & Sunset</h3>
          <div className="flex items-center gap-2 text-xl">
            <SunriseIcon />
            <span>{unixTimeToHrsMins(data?.current?.sunrise, data?.timezone)}</span>
          </div>
          <div className="flex items-center gap-2 text-xl">
            <SunsetIcon />
            <span>{unixTimeToHrsMins(data?.current?.sunset, data?.timezone)}</span>
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
