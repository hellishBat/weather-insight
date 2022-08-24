// Dashboard
import { Suspense, useContext, useState } from 'react'
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
import data from '@/data/index.json'

// import WeatherIcon01d from '@/assets/images/svg/01d.svg'
// import WeatherIcon01n from '@/assets/images/svg/01n.svg'
// import WeatherIcon02d from '@/assets/images/svg/02d.svg'
// import WeatherIcon02n from '@/assets/images/svg/02n.svg'
// import WeatherIcon03d from '@/assets/images/svg/03d.svg'
// import WeatherIcon03n from '@/assets/images/svg/03n.svg'
// import WeatherIcon04d from '@/assets/images/svg/04d.svg'
// import WeatherIcon04n from '@/assets/images/svg/04n.svg'
// import WeatherIcon09d from '@/assets/images/svg/09d.svg'
// import WeatherIcon09n from '@/assets/images/svg/09n.svg'
// import WeatherIcon10d from '@/assets/images/svg/10d.svg'
// import WeatherIcon10n from '@/assets/images/svg/10n.svg'
// import WeatherIcon11d from '@/assets/images/svg/11d.svg'
// import WeatherIcon11n from '@/assets/images/svg/11n.svg'
// import WeatherIcon13d from '@/assets/images/svg/13d.svg'
// import WeatherIcon13n from '@/assets/images/svg/13n.svg'
// import WeatherIcon50d from '@/assets/images/svg/50d.svg'
// import WeatherIcon50n from '@/assets/images/svg/50n.svg'

// const weatherIcons = [
//   { w01d: <WeatherIcon01d /> },
//   { w01n: <WeatherIcon01n /> },
//   { w02d: <WeatherIcon02d /> },
//   { w02n: <WeatherIcon02n /> },
//   { w03d: <WeatherIcon03d /> },
//   { w03n: <WeatherIcon03n /> },
//   { w04d: <WeatherIcon04d /> },
//   { w04n: <WeatherIcon04n /> },
//   { w09d: <WeatherIcon09d /> },
//   { w09n: <WeatherIcon09n /> },
//   { w10d: <WeatherIcon10d /> },
//   { w10n: <WeatherIcon10n /> },
//   { w11d: <WeatherIcon11d /> },
//   { w11n: <WeatherIcon11n /> },
//   { w13d: <WeatherIcon13d /> },
//   { w13n: <WeatherIcon13n /> },
//   { w50d: <WeatherIcon50d /> },
//   { w50n: <WeatherIcon50n /> },
// ]

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
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  )
}

export default Dashboard
