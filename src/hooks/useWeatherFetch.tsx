// useWeatherFetch
import { useContext, useEffect } from 'react'
import axios from 'axios'
import { API_APPID, API_URL_APPID, DEFAULT_URL, SEARCH_BY_LOCATION } from '@/api/weatherApi'
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

  const searchWeatherByWord = (location: string) => {
    fetchWeather(`${API_URL_APPID}?q=${location}&appid=${API_APPID}&units=metric`).then(
      (res: any) => {
        if (res.cod !== '404') {
          setWeather(res?.data)
          console.log(res?.data)
        }
      }
    )
  }

  const searchWeatherByCoordinates = (lat: string, lon: string) => {
    if (lat && lon) {
      fetchWeather(`${SEARCH_BY_LOCATION}&lat=${lat}&lon=${lon}&units=metric`).then((res: any) => {
        if (res.cod !== '404') {
          setWeather(res?.data)
          console.log(res?.data)
        }
      })
    }
  }

  useEffect(() => {
    fetchWeather(`${DEFAULT_URL}&units=metric`).then((res: any) => {
      if (res.cod !== '404') {
        setWeather(res?.data)
      }
    })
  }, [setWeather])

  return [searchWeatherByWord, searchWeatherByCoordinates]
}

export default useWeatherFetch
