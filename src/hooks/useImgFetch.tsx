// useImgFetch
import { useContext, useEffect } from 'react'
import axios from 'axios'
import { SEARCH_BY_WORD, SEARCH_DEFAULT } from '@/api/imgApi'
import { WeatherContext } from '@/context/WeatherContext'

const useImgFetch = () => {
  const { setImg } = useContext(WeatherContext)

  const fetchImg = async (endpoint: string) => {
    try {
      const req = axios.get(endpoint)
      return await req
    } catch (err) {
      console.log(err)
    }
  }

  const searchImgByIWord = (word: string) => {
    fetchImg(`${SEARCH_BY_WORD}${word}`).then((res) => {
      setImg(res?.data.results[Math.floor(Math.random() * 10)]?.urls?.regular)
      // console.log(res)
    })
  }

  useEffect(() => {
    fetchImg(`${SEARCH_DEFAULT}`).then((res) => {
      setImg(res?.data.results[Math.floor(Math.random() * 10)]?.urls?.regular)
      // console.log(res)
    })
  }, [setImg])

  return { searchImgByIWord }
}

export default useImgFetch
