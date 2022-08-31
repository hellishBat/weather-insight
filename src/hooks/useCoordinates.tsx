// useCoordinates
import { useContext } from 'react'
import { WeatherContext } from '@/context/WeatherContext'

const useCoordinates = () => {
  const { setCoords } = useContext(WeatherContext)

  const findCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({ lat: position.coords.latitude, lng: position.coords.longitude })
        },
        (positionError) => {
          alert(
            'A location error occurred. For the best experience, please turn on location services on your device.'
          )
          setCoords({ lat: '50.4501', lng: '30.5234' })
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
