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
      color: 'text-amber-400 dark:text-amber-300 ',
    },
    {
      label: highlightsTextContent[1].label,
      icon: <CloudIcon />,
      value: data?.current?.clouds,
      unit: highlightsTextContent[1].unit,
      color: 'text-sky-400 dark:text-sky-300 ',
    },
    {
      label: highlightsTextContent[2].label,
      icon: <WindIcon />,
      value: data?.current?.wind_speed,
      unit: highlightsTextContent[2].unit,
      color: 'text-cyan-400 dark:text-cyan-300 ',
    },
    {
      label: highlightsTextContent[3].label,
      icon: <MeterIcon />,
      value: data?.current?.pressure,
      unit: highlightsTextContent[3].unit,
      color: 'text-red-400 dark:text-red-300',
    },
    {
      label: highlightsTextContent[4].label,
      icon: <WaterIcon />,
      value: data?.current?.humidity,
      unit: highlightsTextContent[4].unit,
      color: 'text-blue-400 dark:text-blue-300 ',
    },
    {
      label: highlightsTextContent[5].label,
      icon: <VisibilityIcon />,
      value: (data?.current?.visibility / 1000).toFixed(1),
      unit: highlightsTextContent[5].unit,
      color: 'text-indigo-400 dark:text-indigo-300 ',
    },
  ]

  return (
    <div className="flex flex-wrap gap-6 sm:gap-8 md:flex-nowrap">
      <MainHighlightsCard data={data} img={img} />
      <div className="grid w-full auto-cols-fr auto-rows-fr gap-6 sm:grid-cols-2 sm:gap-8 lg:w-2/3 lg:grid-cols-3">
        {highlightsData.map((highlightsCardData, idx) => (
          <HighlightsCard data={highlightsCardData} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default Highlights
