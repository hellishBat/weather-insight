// LocationContext
import { createContext, ReactNode, useState } from 'react'

interface ILocationContextProps {
  children: ReactNode
}

type LocationContextData = {
  location: string
  setLocation: (fn: string) => void
  lat: string
  setLat: (fn: string) => void
  lon: string
  setLon: (fn: string) => void
}

export const LocationContext = createContext({} as LocationContextData)

export const LocationProvider = ({ children }: ILocationContextProps) => {
  const [location, setLocation] = useState('')
  const [lat, setLat] = useState('50.4501')
  const [lon, setLon] = useState('30.5234')

  const locationValue = {
    location,
    setLocation,
    lat,
    setLat,
    lon,
    setLon,
  }

  return <LocationContext.Provider value={locationValue}>{children}</LocationContext.Provider>
}
