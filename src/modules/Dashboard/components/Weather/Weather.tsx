// Weather
import type { WeatherProps } from '@/types'

import { Forecast, Highlights, Loading, NotFound } from './'

export const Weather = ({
  weather,
  image,
  isFetching,
  isError,
}: WeatherProps) => {
  if (isFetching) return <Loading />
  if (isError) return <NotFound />

  return (
    <>
      {weather && image && !isFetching && (
        <>
          <Highlights data={weather} img={image} />
          <Forecast data={weather} />
        </>
      )}
    </>
  )
}
