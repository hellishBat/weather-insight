// Image API
// Unsplash API Key

const API_UNPSLASH = process.env.API_KEY_UNSPLASH

const URL_UNSPLASH = 'https://api.unsplash.com/search/photos'
const SEARCH_BY_WORD = `${URL_UNSPLASH}?client_id=${API_UNPSLASH}&page=1&query=`
const SEARCH_DEFAULT = `${URL_UNSPLASH}?client_id=${API_UNPSLASH}&page=1&query=kyiv`

export { SEARCH_BY_WORD, SEARCH_DEFAULT }
