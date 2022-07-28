// Weather API
// Open Weather API Key
const API_APPID = process.env.API_KEY_APPID

const API_URL_APPID = 'https://api.openweathermap.org/data/2.5/weather'
const DEFAULT_URL = `${API_URL_APPID}?appid=${API_APPID}&q=kyiv`
const SEARCH_BY_LOCATION = `${API_URL_APPID}?appid=${API_APPID}` //&lat={lat}&lon={lon}

export { API_APPID, API_URL_APPID, DEFAULT_URL, SEARCH_BY_LOCATION }
