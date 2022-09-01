// useImgFetch
import { useContext } from 'react'
import { WeatherContext } from '@/context/WeatherContext'
import { SEARCH_BY_WORD } from '@/api/imgApi'
import fetchData from '@/utils/fetchData'

const useImgFetch = () => {
  const { weather, setBgImg } = useContext(WeatherContext)

  const searchImgByWord = (word: string) => {
    fetchData(`${SEARCH_BY_WORD}${word}`).then((res) => {
      setBgImg(res?.data.results[Math.floor(Math.random() * 10)]?.urls?.regular)

      if (res?.data.results.length === 0 || res?.data.results.length < 10) {
        fetchData(`${SEARCH_BY_WORD}${weather?.weather?.[0]?.description}`).then((res) => {
          setBgImg(res?.data.results[Math.floor(Math.random() * 10)]?.urls?.regular)
        })
      }
    })
  }

  return { searchImgByWord }
}

export default useImgFetch
