// Dashboard
import { useEffect, useState } from 'react'

import { useIsFetching, useQuery } from '@tanstack/react-query'

import {
  fetchCitiesOptions,
  fetchImage,
  fetchLocationData,
  fetchWeatherByQuery,
} from '@/libs/api/fetchers'

import { Search, Weather } from './components'

const Dashboard = () => {
  const [query, setQuery] = useState('')
  const isFetching = useIsFetching()

  const { data: locationData, refetch } = useQuery({
    queryKey: ['location-name'],
    queryFn: async () => {
      const data = await fetchLocationData()
      if (!data) throw new Error('Location data is unavailable')
      return data
    },
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (locationData) {
      setQuery(locationData)
    }
  }, [locationData])

  const { data: weather, isError } = useQuery({
    queryKey: ['weather-data', query],
    queryFn: () => fetchWeatherByQuery(query),
    enabled: !!query,
  })

  const cityName = weather?.location?.name
  const imageQuery = cityName
  const weatherDescription = weather?.current?.condition?.text

  const { data: image } = useQuery({
    queryKey: ['bg-image', imageQuery, weatherDescription],
    queryFn: () => fetchImage(imageQuery as string, weatherDescription),
    enabled: !!imageQuery,
    refetchOnWindowFocus: false,
  })

  const handleLocationSearch = () => {
    refetch()
  }

  const handleOnSearchChange = (searchData: any) => {
    setQuery(searchData?.value)
  }

  return (
    <section
      id="dashboard"
      className="bg-cover bg-fixed bg-center bg-no-repeat transition-all duration-700"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="min-h-screen bg-slate-200/[.70] pb-16 pt-36 backdrop-blur-lg dark:bg-gray-900/[.85]">
        <div className="container">
          <Search
            onSearchChange={handleOnSearchChange}
            optionQuery={fetchCitiesOptions}
            locationSearchHandler={handleLocationSearch}
          />

          <Weather
            weather={weather}
            image={image}
            isFetching={isFetching}
            isError={isError}
          />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
