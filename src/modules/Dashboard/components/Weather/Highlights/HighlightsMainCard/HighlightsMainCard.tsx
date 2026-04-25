// HighlightsMainCard
import { WeatherIcon } from '@/components/ui'
import type { HighlightsProps } from '@/types'

import { CountryFlag } from './'

export const HighlightsMainCard = ({ data, img }: HighlightsProps) => {
  const {
    current: {
      temp_c,
      feelslike_c,
      condition: { text: conditionText, code: conditionCode },
      is_day,
    },
    forecast: {
      forecastday: [
        {
          day: {
            maxtemp_c,
            mintemp_c,
            daily_chance_of_rain,
            daily_chance_of_snow,
          },
        },
      ],
    },
    location: { name: locationName, region: regionName, country: countryName },
  } = data || {}

  return (
    <article
      className="overlay-30 flex aspect-square w-full flex-col justify-between overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-6 capitalize text-white shadow motion-duration-500 motion-delay-200 intersect:motion-preset-slide-up md:w-1/2 lg:w-4/12"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex flex-col gap-3">
        <WeatherIcon className="text-7xl" icon={conditionCode} isDay={is_day} />

        <div className="flex gap-2">
          <span className="relative inset-y-0 text-4xl after:absolute after:-right-2 after:h-full after:w-0.5 after:bg-white after:content-['']">
            {`${temp_c.toFixed(0)}°C`}
          </span>
          <ul className="flex flex-col pl-2 text-sm">
            <li>
              <span className="font-bold">{maxtemp_c?.toFixed(0)}</span>
              °C
            </li>
            <li>
              <span className="font-bold">{mintemp_c?.toFixed(0)}</span>
              °C
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-2xl font-semibold">{conditionText}</h4>
          <ul className="text-sm">
            {daily_chance_of_rain ? (
              <li className="font-semibold">
                Possibility of rain {daily_chance_of_rain.toFixed(0)}%
              </li>
            ) : (
              ''
            )}
            {daily_chance_of_snow ? (
              <li className="font-semibold">
                Possibility of snow {daily_chance_of_snow.toFixed(0)}%
              </li>
            ) : (
              ''
            )}
          </ul>
        </div>

        <ul className="text-sm capitalize">
          <li>
            Real Feel{' '}
            <span className="font-bold">{feelslike_c.toFixed(0)}</span>°C
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold">
          {locationName}, {regionName}
        </h3>
        <div className="flex items-center gap-2">
          <CountryFlag countryName={countryName} />
          <span>{countryName}</span>
        </div>
      </div>
    </article>
  )
}
