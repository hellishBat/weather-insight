// Fetchers
import axios from 'axios'

import {
  API_WEATHER_KEY,
  GEO_API_OPTIONS,
  GEO_API_URL,
  GET_IMG_BY_WORD,
  LOCATION_DATA_API,
  WEATHER_API_URL_FORECAST,
  WEATHER_API_URL_REALTIME,
} from './endpoints'

export const fetchCitiesOptions = (inputValue: string) => {
  return fetch(
    `${GEO_API_URL}/cities?minPopulation=250000&namePrefix=${inputValue}`,
    GEO_API_OPTIONS
  )
    .then((response) => response.json())
    .then((response) => {
      return {
        options: response.data.map(
          (city: {
            latitude: string
            longitude: string
            name: string
            region: string
            countryCode: string
          }) => {
            return {
              value: `${city.name},${city.countryCode}`,
              label: `${city.name}, ${city.region}, ${city.countryCode}`,
            }
          }
        ),
      }
    })
}

export const fetchLocationData = async () => {
  const { data: resLocationData } = await axios.get(LOCATION_DATA_API)

  const query = `${resLocationData?.city},${resLocationData?.country_code}`

  return query
}

export const fetchWeatherByQuery = async (query: string) => {
  if (query) {
    // Fetch current weather data
    const { data: resWeather } = await axios.get(
      `${WEATHER_API_URL_REALTIME}?key=${API_WEATHER_KEY}&q=${query}`
    )

    const weather = {
      ...resWeather,
      city: resWeather?.location?.name,
      country: resWeather?.location?.country,
    }

    // Fetch weather forecast data
    const { data: resWeatherForecast } = await axios.get(
      `${WEATHER_API_URL_FORECAST}?key=${API_WEATHER_KEY}&q=${resWeather.location.lat},${resWeather.location.lon}&days=3`
    )

    const weatherNextDaysHours = {
      ...weather,
      forecast: resWeatherForecast?.forecast,
    }

    return weatherNextDaysHours
  }
}

export const fetchImage = async (
  word: string,
  weatherDescription: string | any
) => {
  const { data: imgResData } = await axios.get(`${GET_IMG_BY_WORD}${word}`)

  if (imgResData.results.length === 0 || imgResData.results.length < 20) {
    const { data: imgResData } = await axios.get(
      `${GET_IMG_BY_WORD}nature ${weatherDescription}`
    )
    const randomImage =
      imgResData?.results[Math.floor(Math.random() * 20)]?.urls?.regular

    return randomImage
  } else {
    const randomImage =
      imgResData.results[Math.floor(Math.random() * 20)]?.urls?.regular

    return randomImage
  }
}
