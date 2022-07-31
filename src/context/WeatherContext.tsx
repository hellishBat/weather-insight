// WeatherContext
import { createContext, ReactNode, useState } from 'react'

interface IThemeContextProps {
  children: ReactNode
}

type WeatherContextData = {
  location: string
  setLocation: (fn: string) => void
  weather: string | any
  setWeather: (fn: string | any) => void | any
  img: string
  setImg: (fn: string) => void | any
}

export const WeatherContext = createContext({} as WeatherContextData)

export const WeatherProvider = ({ children }: IThemeContextProps) => {
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState('')
  const [img, setImg] = useState('')

  const weatherValue = {
    location,
    setLocation,
    weather,
    setWeather,
    img,
    setImg,
  }

  return <WeatherContext.Provider value={weatherValue}>{children}</WeatherContext.Provider>
}
