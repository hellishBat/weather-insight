// Dashboard
import { useContext } from 'react'
import { WeatherContext } from '@/context/WeatherContext'
import Container from '@/components/Container'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import SearchForm from '@/components/SearchForm'
import convertTime from '@/utils/convertTime'
import HighlightsCard from '@/components/HighlightsCard'
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
  const { weather, img } = useContext(WeatherContext)

  return (
    <div
      className=" bg-center bg-no-repeat bg-cover dark:bg-gray-900 "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="min-h-full pb-16 bg-slate-200/70 dark:bg-gray-900/90 backdrop-blur-md">
        <Container>
          <div className="flex justify-end items-center pt-8 mb-8">
            <ThemeSwitcher />
          </div>

          <SearchForm />

          <section>
            <h2 className="mb-4 text-3xl font-bold text-gray-500">{`Today's Highlights`}</h2>
            <div className="flex gap-8 flex-wrap mb-12 md:flex-nowrap">
              <article
                className="flex flex-col w-full lg:w-4/12 rounded-xl shadow-md p-6 bg-center bg-no-repeat bg-cover overlay-30 text-white aspect-square overflow-hidden"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="mb-2 text-3xl font-semibold">{weather?.name}</div>
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
                    <span>{convertTime(weather?.sys?.sunrise)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xl">
                    <SunsetIcon />
                    <span>{convertTime(weather?.sys?.sunset)}</span>
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
            <h2 className="mb-4 text-3xl font-bold text-gray-500">Daily Forecast</h2>
          </section>
        </Container>
      </div>
    </div>
  )
}

export default Dashboard
