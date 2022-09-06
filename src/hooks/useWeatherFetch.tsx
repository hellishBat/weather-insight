// useWeatherFetch
import { useContext } from 'react'
import { WeatherContext } from '@/context/WeatherContext'
import { API_APPID, API_URL_APPID, GET_NEXT_DAYS_HOURS, SEARCH_BY_LOCATION } from '@/api/weatherApi'
import fetchData from '@/utils/fetchData'
import convertRegionNames from '@/utils/convertRegionNames'

const useWeatherFetch = () => {
  const { setWeather, setError } = useContext(WeatherContext)

  const searchWeatherByWord = (location: string) => {
    fetchData(`${API_URL_APPID}?q=${location}&appid=${API_APPID}&units=metric`).then((res: any) => {
      if (res?.status === 200) {
        setWeather({
          ...res?.data,
          city: res?.data?.name,
          country_code: res?.data?.sys?.country,
          country: convertRegionNames(res?.data?.sys?.country),
        })

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

        setError(false)
      } else {
        setError(true)
      }
    })
  }

  const searchWeatherByCoordinates = (lat: any, lng: any) => {
    if (lat && lng) {
      fetchData(`${SEARCH_BY_LOCATION}&lat=${lat}&lon=${lng}&units=metric`).then((res: any) => {
        setWeather({
          ...res?.data,
          city: res?.data?.name,
          country_code: res?.data?.sys?.country,
          country: convertRegionNames(res?.data?.sys?.country),
        })
      })

      fetchData(`${GET_NEXT_DAYS_HOURS}&lat=${lat}&lon=${lng}&units=metric`).then((res) => {
        setWeather((prev: any) => ({
          ...prev,
          daily: res?.data?.daily,
          hourly: res?.data?.hourly,
          current: res?.data?.current,
        }))
      })

      setError(false)
    }
  }

  return [searchWeatherByWord, searchWeatherByCoordinates]
}

export default useWeatherFetch
