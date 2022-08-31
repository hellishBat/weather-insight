// Highlights
import { FC } from 'react'
import MainHighlightsCard from '@/components/MainHighlightsCard'
import HighlightsCard from '@/components/HighlightsCard'
import { HighlightsTypes } from '@/types'
import { SunIcon, CloudIcon, WaterIcon, WindIcon, MeterIcon, VisibilityIcon } from '@/assets'
import data from '@/data/index.json'

const highlightsTextContent = data.highlights.cards

const Highlights: FC<HighlightsTypes> = ({ data, img }) => {
  const highlightsData = [
    {
      label: highlightsTextContent[0].label,
      icon: <SunIcon />,
      value: data?.current?.uvi,
      unit: highlightsTextContent[0].unit,
    },
    {
      label: highlightsTextContent[1].label,
      icon: <CloudIcon />,
      value: data?.current?.clouds,
      unit: highlightsTextContent[1].unit,
    },
    {
      label: highlightsTextContent[2].label,
      icon: <WindIcon />,
      value: data?.current?.wind_speed,
      unit: highlightsTextContent[2].unit,
    },
    {
      label: highlightsTextContent[3].label,
      icon: <MeterIcon />,
      value: data?.current?.pressure,
      unit: highlightsTextContent[3].unit,
    },
    {
      label: highlightsTextContent[4].label,
      icon: <WaterIcon />,
      value: data?.current?.humidity,
      unit: highlightsTextContent[4].unit,
    },
    {
      label: highlightsTextContent[5].label,
      icon: <VisibilityIcon />,
      value: (data?.current?.visibility / 1000).toFixed(1),
      unit: highlightsTextContent[5].unit,
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
