// WeatherContext
import { createContext, ReactNode, useState } from 'react'

interface IWeatherContext {
  location: string
  setLocation: (fn: string) => void
  weather: string | any
  setWeather: (fn: string | any) => void | any
  img: string
  setImg: (fn: string) => void | any
}

export const WeatherContext = createContext({} as IWeatherContext)

const WeatherProvider = ({ children }: { children: ReactNode }) => {
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

export default WeatherProvider
