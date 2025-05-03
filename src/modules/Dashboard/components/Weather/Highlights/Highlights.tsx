// Highlights
import {
  CloudIcon,
  MeterIcon,
  SunIcon,
  VisibilityIcon,
  WaterIcon,
  WindIcon,
} from '@/assets'
import data from '@/data/index.json'
import { formatDate } from '@/libs/utils'
import type { HighlightsProps } from '@/types'

import { HighlightsCard, HighlightsMainCard } from '.'

const { highlights } = data
const { heading, text: highlightsText, cards: cardText } = highlights

export const Highlights = ({ data, img }: HighlightsProps) => {
  const {
    current: { humidity, cloud, wind_kph, uv, pressure_mb, vis_km },
    location: { localtime } = {},
  } = data || {}

  const highlightsCardsData = [
    {
      label: cardText[0].label,
      icon: <CloudIcon />,
      value: cloud,
      unit: cardText[0].unit,
      color: 'text-sky-400 dark:text-sky-300',
    },
    {
      label: cardText[1].label,
      icon: <WaterIcon />,
      value: humidity,
      unit: cardText[1].unit,
      color: 'text-blue-400 dark:text-blue-300',
    },

    {
      label: cardText[2].label,
      icon: <WindIcon />,
      value: wind_kph,
      unit: cardText[2].unit,
      color: 'text-cyan-400 dark:text-cyan-300',
    },

    {
      label: cardText[3].label,
      icon: <VisibilityIcon />,
      value: vis_km,
      unit: cardText[3].unit,
      color: 'text-indigo-400 dark:text-indigo-300',
    },
    {
      label: cardText[4].label,
      icon: <SunIcon />,
      value: uv,
      unit: cardText[4].unit,
      color: 'text-amber-400 dark:text-amber-300',
    },
    {
      label: cardText[5].label,
      icon: <MeterIcon />,
      value: pressure_mb,
      unit: cardText[5].unit,
      color: 'text-red-400 dark:text-red-300',
    },
  ]

  return (
    <section className="mb-12">
      <div className="section-head">
        <h2 className="section-heading">{heading}</h2>
        <p className="text-xl font-semibold">
          {highlightsText} {formatDate(localtime)}
        </p>
      </div>
      <div className="flex flex-wrap gap-6 md:flex-nowrap lg:gap-8">
        <HighlightsMainCard data={data} img={img} />
        <div className="grid w-full auto-cols-fr auto-rows-fr gap-6 sm:grid-cols-2 lg:w-2/3 lg:grid-cols-3 lg:gap-8">
          {highlightsCardsData.map((cardData, idx) => (
            <HighlightsCard data={cardData} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
