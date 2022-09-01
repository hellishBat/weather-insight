// Dashboard
import { useContext, useEffect, useState } from 'react'
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
import Spinner from '@/components/Spinner'
import { convertTime } from '@/utils/convertTime'
import data from '@/data/index.json'
import { styles } from '@/styles'

const Dashboard = () => {
  const [isWeekMode, setWeekMode] = useState(false)
  const { weather, bgImg, searchTerm, setSearchTerm, coords, error, setError } =
    useContext(WeatherContext)
  const [findCoordinates] = useCoordinates()
  const [searchWeatherByWord, searchWeatherByCoords] = useWeatherFetch()
  const { searchImgByWord } = useImgFetch()

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
          className=" bg-center bg-no-repeat bg-cover dark:bg-gray-900 "
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="min-h-full pb-16 bg-slate-200/70 dark:bg-gray-900/[.85] backdrop-blur-[40px]">
            <Container>
              <div className="flex justify-end items-center pt-8 mb-8">
                <ThemeSwitcher />
              </div>

              <div
                className={`sticky flex justify-center gap-4 mb-12 p-6 md:p-8 ${styles.materialItem}`}
              >
                <SearchForm
                  submitHandler={handleSubmit}
                  inputChangeHandler={changeInput}
                  search={searchTerm}
                  error={error}
                />
                <LocationButton clickHandler={fetchCoordinates} />
              </div>

              <section>
                <div className="flex flex-wrap items-baseline mb-6 text-gray-500">
                  <h2 className="mr-auto text-3xl font-bold">{data.highlights.heading}</h2>
                  <p className="text-xl font-semibold">
                    {data.highlights.text} {convertTime(weather.dt, weather.timezone, 'fullDate')}
                  </p>
                </div>
                <Highlights data={weather} img={bgImg} />
              </section>

              <section>
                <div className="flex gap-3 mb-6 text-2xl font-bold text-gray-500">
                  <button
                    className={`p-0 ${isWeekMode ? '' : `${styles.dashboardBtn.active}`} ${
                      styles.dashboardBtn.normal
                    }`}
                    type="button"
                    onClick={showTodayForecast}
                  >
                    {data.forecast.heading[0]}
                  </button>
                  <button
                    className={`p-0 ${isWeekMode ? `${styles.dashboardBtn.active}` : ''} ${
                      styles.dashboardBtn.normal
                    }`}
                    type="button"
                    onClick={showWeekForecast}
                  >
                    {data.forecast.heading[1]}
                  </button>
                </div>
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
