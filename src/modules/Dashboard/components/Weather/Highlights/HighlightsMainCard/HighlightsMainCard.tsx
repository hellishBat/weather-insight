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
    <div className='w-full border border-white/20 dark:border-white/10 shadow-md md:w-1/2 lg:w-4/12 overflow-hidden rounded-3xl motion-duration-500 motion-delay-200 intersect:motion-preset-slide-up'>
      <article
        className="relative overlay-30 flex aspect-square flex-col justify-between bg-cover bg-center bg-no-repeat p-6 capitalize text-white"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex flex-col gap-3">
          <WeatherIcon className="text-7xl drop-shadow-xl" icon={conditionCode} isDay={is_day} />
  
          <div className="flex gap-2">
            <span className="relative inset-y-0 text-4xl drop-shadow-md after:absolute after:-right-2 after:h-full after:w-0.5 after:bg-white after:content-['']">
              {`${temp_c.toFixed(0)}°C`}
            </span>
            <ul className="flex flex-col pl-2 text-sm drop-shadow-sm">
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
            <h4 className="text-2xl font-semibold drop-shadow-md">{conditionText}</h4>
            <ul className="text-sm drop-shadow-sm">
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
  
          <ul className="text-sm capitalize drop-shadow-sm">
            <li>
              Real Feel{' '}
              <span className="font-bold">{feelslike_c.toFixed(0)}</span>°C
            </li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-2xl font-semibold drop-shadow-md">
            {locationName}, {regionName}
          </h3>
          <div className="flex items-center gap-2 drop-shadow-sm">
            <CountryFlag countryName={countryName} />
            <span>{countryName}</span>
          </div>
        </div>
      </article>
    </div>
  )
}