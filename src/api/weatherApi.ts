// Weather API
// Open Weather API Key
const API_APPID = process.env.API_KEY_APPID

const API_URL_APPID = 'https://api.openweathermap.org/data/2.5/weather'
const SEARCH_BY_LOCATION = `${API_URL_APPID}?appid=${API_APPID}` //&lat={lat}&lon={lon}
const GET_NEXT_DAYS_HOURS = `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely&appid=${API_APPID}` //&lat={lat}&lon={lon}

export { API_APPID, API_URL_APPID, SEARCH_BY_LOCATION, GET_NEXT_DAYS_HOURS }
