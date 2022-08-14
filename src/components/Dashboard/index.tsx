// Dashboard
import { useContext, useState } from 'react'
import { WeatherContext } from '@/context/WeatherContext'
import useWeatherFetch from '@/hooks/useWeatherFetch'
import useCoordinates from '@/hooks/useCoordinates'
import useImgFetch from '@/hooks/useImgFetch'
import Container from '@/components/Container'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import SearchForm from '@/components/SearchForm'
import LocationButton from '@/components/LocationButton'
import HighlightsCard from '@/components/HighlightsCard'
import Forecast from '@/components/Forecast'
// import convertRegionNames from '@/utils/convertRegionNames'
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

const Dashboard = () => {
  const [isWeekMode, setWeekMode] = useState(false)
  const { weather, bgImg, searchTerm, setSearchTerm, coords } = useContext(WeatherContext)
  const [findCoordinates] = useCoordinates()
  const [searchWeatherByWord, searchWeatherByCoords] = useWeatherFetch()
  const { searchImgByWord } = useImgFetch()

  const fetchCoordinates = () => {
    setSearchTerm('')
    findCoordinates()
    searchWeatherByCoords(coords.lat, coords.lng)
    searchImgByWord(weather.name)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setSearchTerm('')
    searchWeatherByWord(searchTerm)
    searchImgByWord(searchTerm)
  }

  const showWeekForecast = () => {
    setWeekMode(true)
  }

  const showTodayForecast = () => {
    setWeekMode(false)
  }

  return (
    <div
      className=" bg-center bg-no-repeat bg-cover dark:bg-gray-900 "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="min-h-full pb-16 bg-slate-200/70 dark:bg-gray-900/90 backdrop-blur-md">
        <Container>
          <div className="flex justify-end items-center pt-8 mb-8">
            <ThemeSwitcher />
          </div>

          <div className="flex justify-center gap-4 mb-12 p-6 md:p-8 rounded-xl shadow-md bg-white border border-white/5 dark:bg-slate-800">
            <SearchForm submitHandler={handleSubmit} search={searchTerm} />
            <LocationButton clickHandler={fetchCoordinates} />
          </div>

          <section>
            <h2 className="mb-4 text-3xl font-bold text-gray-500">{`Today's Highlights`}</h2>
            <div className="flex gap-8 flex-wrap mb-12 md:flex-nowrap">
              <article
                className="flex flex-col w-full lg:w-4/12 rounded-xl shadow-md p-6 bg-center bg-no-repeat bg-cover overlay-30 text-white aspect-square overflow-hidden"
                style={{ backgroundImage: `url(${bgImg})` }}
              >
                <div className="mb-2 text-3xl font-semibold">{`${weather?.city}, 
                ${weather?.country}`}</div>
                <div className="mb-auto">
                  <div className="flex items-center mb-4 text-5xl font-thin">
                    <img
                      className="w-[1em] h-[1em] object-contain"
                      src={`http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}.png`}
                      alt={weather?.weather?.[0]?.main}
                    ></img>
                    <span>{`${weather?.main?.temp.toFixed(0)}°C`}</span>
                  </div>
                  <p className="inline-flex gap-1 capitalize">
                    <span className="text-white/60">Feels Like</span>
                    <span className="">{` ${weather?.main?.feels_like.toFixed(0)}°C, ${
                      weather?.weather?.[0]?.description
                    }`}</span>
                  </p>
                </div>
                <div className="text-2xl text-white/60">
                  <div className="flex items-center gap-2">
                    <TempMaxIcon />
                    <span>Max</span>
                    <span className="text-white">{`${weather?.main?.temp_max.toFixed(0)}°C`}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TempMinIcon />
                    <span>Min</span>
                    <span className="text-white">{`${weather?.main?.temp_min.toFixed(0)}°C`}</span>
                  </div>
                </div>
              </article>

              <div className="grid gap-8 auto-cols-fr auto-rows-fr w-full sm:grid-cols-2 lg:w-2/3 lg:grid-cols-3">
                <HighlightsCard>
                  <h3 className="mb-2 text-2xl font-semibold text-gray-400">Sunrise & Sunset</h3>
                  <div className="flex items-center gap-2 text-xl">
                    <SunriseIcon />
                    <span>{timeToHrsMins(weather?.sys?.sunrise)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xl">
                    <SunsetIcon />
                    <span>{timeToHrsMins(weather?.sys?.sunset)}</span>
                  </div>
                </HighlightsCard>

                <HighlightsCard>
                  <h3 className="mb-2 text-2xl font-semibold text-gray-400">Cloudiness</h3>
                  <div className="flex items-center gap-2 text-2xl">
                    <CloudIcon />
                    <span>{`${weather?.clouds?.all}%`}</span>
                  </div>
                </HighlightsCard>

                <HighlightsCard>
                  <h3 className="mb-2 text-2xl font-semibold text-gray-400">Wind Status</h3>
                  <div className="flex items-center gap-2 text-2xl">
                    <WindIcon />
                    <span>{`${weather?.wind?.speed}m/s`}</span>
                  </div>
                </HighlightsCard>

                <HighlightsCard>
                  <h3 className="mb-2 text-2xl font-semibold text-gray-400">Pressure</h3>
                  <div className="flex items-center gap-2 text-2xl">
                    <GaugeIcon />
                    <span>{`${weather?.main?.pressure}hPa`}</span>
                  </div>
                </HighlightsCard>

                <HighlightsCard>
                  <h3 className="mb-2 text-2xl font-semibold text-gray-400">Humidity</h3>
                  <div className="flex items-center gap-2 text-2xl">
                    <DropletIcon />
                    <span>{`${weather?.main?.humidity}%`}</span>
                  </div>
                </HighlightsCard>

                <HighlightsCard>
                  <h3 className="mb-2 text-2xl font-semibold text-gray-400">Visibility</h3>
                  <div className="flex items-center gap-2 text-2xl">
                    <EyeIcon />
                    <span>{`${(weather?.visibility / 1000).toFixed(1)}km `}</span>
                  </div>
                </HighlightsCard>
              </div>
            </div>
          </section>

          <section>
            <h2 className="flex gap-4 mb-4 text-3xl font-bold text-gray-500">
              <button
                className={`p-0 ${
                  isWeekMode ? '' : 'underline'
                } transition-colors md:hover:text-gray-600 dark:md:hover:text-gray-400`}
                type="button"
                onClick={showTodayForecast}
              >
                Today
              </button>
              <button
                className={`p-0 ${
                  isWeekMode ? 'underline' : ''
                } transition-colors md:hover:text-gray-600 dark:md:hover:text-gray-400`}
                type="button"
                onClick={showWeekForecast}
              >
                Week
              </button>
            </h2>
            <Forecast
              data={isWeekMode ? weather?.daily : weather?.hourly}
              isWeekMode={isWeekMode}
            />
          </section>
        </Container>
      </div>
    </div>
  )
}

export default Dashboard
