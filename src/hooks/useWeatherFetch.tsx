// useWeatherFetch
import { useContext, useEffect } from 'react'
import fetchData from '@/utils/fetchData'
import {
  API_APPID,
  API_URL_APPID,
  DEFAULT_URL,
  GET_NEXT_DAYS_HOURS,
  SEARCH_BY_LOCATION,
} from '@/api/weatherApi'
import { WeatherContext } from '@/context/WeatherContext'

const useWeatherFetch = () => {
  const { setWeather, setError, weather } = useContext(WeatherContext)

  const searchWeatherByWord = (location: string) => {
    fetchData(`${API_URL_APPID}?q=${location}&appid=${API_APPID}&units=metric`).then((res: any) => {
      if (res?.status === 200) {
        setWeather({ ...res?.data, city: res?.data?.name, country: res?.data?.sys?.country })
        setError(false)

        fetchData(
          `${GET_NEXT_DAYS_HOURS}&lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&units=metric`
        ).then((res) => {
          setWeather((prev: any) => ({
            ...prev,
            daily: res?.data?.daily,
            hourly: res?.data?.hourly,
            current: res?.data?.current,
          }))
        })
      } else {
        setError(true)
        console.log('error is set!')
      }
    })
    console.log(weather)
    console.log(weather.timezone)
  }

  const searchWeatherByCoordinates = (lat: any, lng: any) => {
    if (lat && lng) {
      setError(false)
      fetchData(`${SEARCH_BY_LOCATION}&lat=${lat}&lon=${lng}&units=metric`).then((res: any) => {
        setWeather({ ...res?.data, city: res?.data?.name, country: res?.data?.sys?.country })
      })

      fetchData(`${GET_NEXT_DAYS_HOURS}&lat=${lat}&lon=${lng}&units=metric`).then((res) => {
        setWeather((prev: any) => ({
          ...prev,
          daily: res?.data?.daily,
          hourly: res?.data?.hourly,
          current: res?.data?.current,
        }))
      })
    }
  }

  useEffect(() => {
    fetchData(`${DEFAULT_URL}&units=metric`).then((res: any) => {
      if (res.status === 200) {
        setWeather({ ...res?.data, city: res?.data?.name, country: res?.data?.sys?.country })

        fetchData(
          `${GET_NEXT_DAYS_HOURS}&lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&units=metric`
        ).then((res) => {
          setWeather((prev: any) => ({
            ...prev,
            daily: res?.data?.daily,
            hourly: res?.data?.hourly,
            current: res?.data?.current,
          }))
        })
      }
    })
  }, [setWeather])

  return [searchWeatherByWord, searchWeatherByCoordinates]
}

export default useWeatherFetch
