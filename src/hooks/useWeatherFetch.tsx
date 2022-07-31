// useWeatherFetch
import { useContext, useEffect } from 'react'
import axios from 'axios'
import {
  API_APPID,
  API_URL_APPID,
  DEFAULT_URL,
  // SEARCH_BY_LOCATION
} from '@/api/weatherApi'
import { WeatherContext } from '@/context/WeatherContext'

const useWeatherFetch = () => {
  const { setWeather } = useContext(WeatherContext)

  const fetchWeather = async (endpoint: string) => {
    try {
      const req = axios.get(endpoint)
      return await req
    } catch (err) {
      console.log(err)
    }
  }

  const searchLocByLocation = (location: string) => {
    fetchWeather(`${API_URL_APPID}/?q=${location}&appid=${API_APPID}&units=metric`).then((res) => {
      setWeather(res?.data)
      console.log(res?.data)
    })
  }

  useEffect(() => {
    fetchWeather(`${DEFAULT_URL}&units=metric`).then((res) => {
      setWeather(res?.data)
    })
  }, [setWeather])

  return [searchLocByLocation]
}

export default useWeatherFetch
