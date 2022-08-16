// WeatherContext
import { createContext, ReactNode, useState } from 'react'

interface IWeatherContextProps {
  children: ReactNode
}

type WeatherContextData = {
  coords: { lat: string; lng: string } | any
  setCoords: (fn: any) => void
  searchTerm: string
  setSearchTerm: (fn: string) => void
  weather: any
  setWeather: (fn: string | any) => void | any
  bgImg: string
  setBgImg: (fn: string) => void | any
  error: boolean
  setError: (fn: boolean) => void
}

const WeatherContext = createContext({} as WeatherContextData)

const WeatherProvider = ({ children }: IWeatherContextProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [coords, setCoords] = useState({ lat: '', lng: '' })
  const [weather, setWeather] = useState({})
  const [bgImg, setBgImg] = useState('')
  const [error, setError] = useState(false)

  const weatherValue = {
    coords,
    setCoords,
    searchTerm,
    setSearchTerm,
    weather,
    setWeather,
    bgImg,
    setBgImg,
    error,
    setError,
  }

  return <WeatherContext.Provider value={weatherValue}>{children}</WeatherContext.Provider>
}

export { WeatherContext, WeatherProvider }
