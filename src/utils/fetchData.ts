// FetchData (w/Axios)
import axios from 'axios'

const fetchData = async (endpoint: string) => {
  try {
    const req = axios.get(endpoint)
    return await req
  } catch (err) {
    console.log(err)
  }
}
export default fetchData
