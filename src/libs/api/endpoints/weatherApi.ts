// Weather API Key
const API_WEATHER_KEY = import.meta.env.VITE_API_KEY_WEATHERAPI

const WEATHER_API_URL_REALTIME = 'https://api.weatherapi.com/v1/current.json'
const WEATHER_API_URL_FORECAST = 'https://api.weatherapi.com/v1/forecast.json'

export { API_WEATHER_KEY, WEATHER_API_URL_REALTIME, WEATHER_API_URL_FORECAST }
