// WeatherContext
import { createContext, ReactNode, useState } from 'react'

interface IWeatherContextProps {
  children: ReactNode
}

type WeatherContextData = {
  location: string
  setLocation: (fn: string) => void
  lat: string
  setLat: (fn: string) => void
  lon: string
  setLon: (fn: string) => void
  weather: string | any
  setWeather: (fn: string | any) => void | any
  img: string
  setImg: (fn: string) => void | any
}

export const WeatherContext = createContext({} as WeatherContextData)

export const WeatherProvider = ({ children }: IWeatherContextProps) => {
  const [location, setLocation] = useState('')
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [weather, setWeather] = useState('')
  const [img, setImg] = useState('')

  const weatherValue = {
    location,
    setLocation,
    lat,
    setLat,
    lon,
    setLon,
    weather,
    setWeather,
    img,
    setImg,
  }

  return <WeatherContext.Provider value={weatherValue}>{children}</WeatherContext.Provider>
}
