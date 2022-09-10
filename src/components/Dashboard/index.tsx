// Dashboard
import { useContext, useEffect, useState } from 'react'
import { WeatherContext } from '@/context/WeatherContext'
import useWeatherFetch from '@/hooks/useWeatherFetch'
import useCoordinates from '@/hooks/useCoordinates'
import useImgFetch from '@/hooks/useImgFetch'
import Container from '@/components/Container'
import SearchForm from '@/components/SearchForm'
import LocationButton from '@/components/LocationButton'
import Highlights from '@/components/Highlights'
import Forecast from '@/components/Forecast'
import Spinner from '@/components/Spinner'
import { convertTime } from '@/utils/convertTime'
import data from '@/data/index.json'
import { TodayIcon, WeekIcon } from '@/assets'
import { styles } from '@/styles'

const Dashboard = () => {
  const [isWeekMode, setWeekMode] = useState(false)
  const { weather, bgImg, searchTerm, setSearchTerm, coords, error, setError } =
    useContext(WeatherContext)
  const findCoordinates = useCoordinates()
  const [searchWeatherByWord, searchWeatherByCoords] = useWeatherFetch()
  const searchImgByWord = useImgFetch()

  const fetchCoordinates = async () => {
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

  useEffect(() => {
    findCoordinates()
    searchWeatherByCoords(coords.lat, coords.lng)
    searchImgByWord(weather.name)
  }, [coords.lat, coords.lng])

  return (
    <>
      {typeof weather.main != 'undefined' ? (
        <div
          className=" bg-cover bg-center bg-no-repeat dark:bg-gray-900"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="min-h-full bg-slate-200/70 pt-36 pb-16 backdrop-blur-2xl dark:bg-gray-900/[.85]">
            <Container>
              <div className={`mb-12 flex justify-center gap-4 p-6 md:p-8 ${styles.card}`}>
                <SearchForm
                  submitHandler={handleSubmit}
                  inputChangeHandler={changeInput}
                  search={searchTerm}
                  error={error}
                />
                <LocationButton clickHandler={fetchCoordinates} />
              </div>

              <section className="mb-12">
                <div className="mb-4 flex flex-wrap items-baseline text-gray-500 sm:mb-6">
                  <h2 className="mr-auto text-3xl font-bold">{data.highlights.heading}</h2>
                  <p className="text-xl font-semibold">
                    {data.highlights.text} {convertTime(weather.dt, weather.timezone, 'fullDate')}
                  </p>
                </div>
                <Highlights data={weather} img={bgImg} />
              </section>

              <section>
                <div className="flex gap-4 dark:border-gray-700">
                  <button
                    className={`${
                      isWeekMode ? `${styles.tabBtn.inactive}` : `${styles.tabBtn.active}`
                    } ${styles.tabBtn.common}`}
                    type="button"
                    onClick={showTodayForecast}
                  >
                    <TodayIcon />
                    <span>{data.forecast.heading[0]}</span>
                  </button>
                  <button
                    className={`${
                      isWeekMode ? `${styles.tabBtn.active}` : `${styles.tabBtn.inactive}`
                    } ${styles.tabBtn.common}`}
                    type="button"
                    onClick={showWeekForecast}
                  >
                    <WeekIcon />
                    <span>{data.forecast.heading[1]}</span>
                  </button>
                </div>
                <div className="mb-4 h-[3px] bg-gray-200 shadow-inner dark:bg-gray-700 sm:mb-6"></div>
                <Forecast
                  data={isWeekMode ? weather?.daily : weather?.hourly}
                  isWeekMode={isWeekMode}
                  timezone={weather?.timezone}
                />
              </section>
            </Container>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default Dashboard
