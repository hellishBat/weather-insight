// Highlights
import { FC } from 'react'
import MainHighlightsCard from '@/components/MainHighlightsCard'
import HighlightsCard from '@/components/HighlightsCard'
import { HighlightsTypes } from '@/types'
import { SunIcon, CloudIcon, WaterIcon, WindIcon, MeterIcon, VisibilityIcon } from '@/assets'

const Highlights: FC<HighlightsTypes> = ({ data, img }) => {
  const highlightsData = [
    {
      label: 'UV Index',
      icon: <SunIcon />,
      value: data?.current?.uvi,
      unit: '',
    },
    {
      label: 'Cloudiness',
      icon: <CloudIcon />,
      value: data?.current?.clouds,
      unit: '%',
    },
    {
      label: 'Wind Status',
      icon: <WindIcon />,
      value: data?.current?.wind_speed,
      unit: 'm/s',
    },
    {
      label: 'Pressure',
      icon: <MeterIcon />,
      value: data?.current?.pressure,
      unit: 'hPa',
    },
    {
      label: 'Humidity',
      icon: <WaterIcon />,
      value: data?.current?.humidity,
      unit: '%',
    },
    {
      label: 'Visibility',
      icon: <VisibilityIcon />,
      value: (data?.current?.visibility / 1000).toFixed(1),
      unit: 'km',
    },
  ]

  return (
    <div className="flex gap-8 flex-wrap mb-12 md:flex-nowrap">
      <MainHighlightsCard data={data} img={img} />
      <div className="grid gap-8 auto-cols-fr auto-rows-fr w-full sm:grid-cols-2 lg:w-2/3 lg:grid-cols-3">
        {highlightsData.map((highlightsCardData, idx) => (
          <HighlightsCard data={highlightsCardData} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default Highlights
