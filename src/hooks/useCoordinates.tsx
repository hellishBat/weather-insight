// useCoordinates
import { useContext } from 'react'
import { WeatherContext } from '@/context/WeatherContext'

const useCoordinates = () => {
  const { coords, setCoords } = useContext(WeatherContext)

  const findCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({ lat: position.coords.latitude, lng: position.coords.longitude })
          // console.log(position)
          console.log(coords)
        },
        (positionError) => {
          alert('An error occurred: ' + positionError)
          setCoords({ lat: '50.4501', lng: '30.5234' })
          console.log(positionError)
        }
      )
    } else {
      console.log("It's not supported by this browser.")
    }
  }

  // const updateLocation = (lat: any, lng: any) => {
  //   setCoords({ lat: lat, lng: lng })
  //   //console.log('Updated Location')
  // }

  return [findCoordinates]
}

export default useCoordinates
