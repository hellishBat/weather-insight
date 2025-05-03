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
      className="overlay-30 motion-preset-slide-up flex aspect-square w-full flex-col justify-between overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-6 capitalize text-white shadow motion-duration-500 motion-delay-200 md:w-1/2 lg:w-4/12"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex flex-col gap-3">
        <WeatherIcon
          className="motion-preset-rebound-up text-7xl motion-duration-300 motion-delay-300"
          icon={conditionCode}
          isDay={is_day}
        />

        <div className="motion-preset-rebound-up flex gap-2 motion-duration-300 motion-delay-300">
          <span className="motion-preset-rebound-up relative inset-y-0 text-4xl motion-duration-300 motion-delay-500 after:absolute after:-right-2 after:h-full after:w-0.5 after:bg-white after:content-['']">
            {`${temp_c.toFixed(0)}°C`}
          </span>
          <ul className="motion-preset-rebound-right flex flex-col pl-2 text-sm motion-duration-300 motion-delay-500">
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

        <div className="motion-preset-rebound-up motion-duration-300 motion-delay-300">
          <h4 className="text-2xl font-semibold">{conditionText}</h4>
          <ul className="motion-preset-rebound-up text-sm motion-duration-300 motion-delay-500">
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

        <ul className="motion-preset-rebound-up text-sm capitalize motion-duration-300 motion-delay-700">
          <li>
            Real Feel{' '}
            <span className="font-bold">{feelslike_c.toFixed(0)}</span>°C
          </li>
        </ul>
      </div>

      <div>
        <h3 className="motion-preset-rebound-up text-2xl font-semibold motion-duration-300 motion-delay-500">
          {locationName}, {regionName}
        </h3>
        <div className="motion-preset-rebound-down flex items-center gap-2 motion-duration-300 motion-delay-500">
          <CountryFlag countryName={countryName} />
          <span className="motion-preset-rebound-right motion-duration-300 motion-delay-700">
            {countryName}
          </span>
        </div>
      </div>
    </article>
  )
}
