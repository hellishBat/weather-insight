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
import Highlights from '@/components/Highlights'
import Forecast from '@/components/Forecast'
import data from '@/data/index.json'

const Dashboard = () => {
  const [isWeekMode, setWeekMode] = useState(false)
  const { weather, bgImg, searchTerm, setSearchTerm, coords, error, setError } =
    useContext(WeatherContext)
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
    setError(false)
    setSearchTerm('')
    searchWeatherByWord(searchTerm)
    searchImgByWord(searchTerm)
  }

  const changeInput = (e: { target: { value: string } }) => {
    setError(false)
    setSearchTerm(e.target.value)
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
      <div className="min-h-full pb-16 bg-slate-200/70 dark:bg-gray-900/[.85] backdrop-blur-[40px]">
        <Container>
          <div className="flex justify-end items-center pt-8 mb-8">
            <ThemeSwitcher />
          </div>

          <div className="flex justify-center gap-4 mb-12 p-6 md:p-8 rounded-xl shadow-md bg-white border border-white/5 dark:bg-slate-800">
            <SearchForm
              submitHandler={handleSubmit}
              inputChangeHandler={changeInput}
              search={searchTerm}
              error={error}
            />
            <LocationButton clickHandler={fetchCoordinates} />
          </div>

          <section>
            <h2 className="mb-4 text-3xl font-bold text-gray-500">{`${data.highlights.heading}`}</h2>
            <Highlights data={weather} img={bgImg} />
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
                {data.forecast.heading[0]}
              </button>
              <button
                className={`p-0 ${
                  isWeekMode ? 'underline' : ''
                } transition-colors md:hover:text-gray-600 dark:md:hover:text-gray-400`}
                type="button"
                onClick={showWeekForecast}
              >
                {data.forecast.heading[1]}
              </button>
            </h2>
            <Forecast
              data={isWeekMode ? weather?.daily : weather?.hourly}
              isWeekMode={isWeekMode}
              timezone={weather?.timezone}
            />
          </section>
        </Container>
      </div>
    </div>
  )
}

export default Dashboard
