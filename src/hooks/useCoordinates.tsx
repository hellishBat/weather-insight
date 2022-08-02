// useCoordinates
import { useContext } from 'react'
import { WeatherContext } from '@/context/WeatherContext'

const useCoordinates = () => {
  const { setLat, setLon } = useContext(WeatherContext)

  const findCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position)
          setLat(position?.coords?.latitude)
          setLon(position?.coords?.longitude)
        },
        (positionError) => {
          setLat('50.4501')
          setLon('30.5234')
          console.log(positionError)
        }
      )
    } else {
      console.log("It's not supported by this browser.")
    }
  }

  return [findCoordinates]
}

export default useCoordinates
