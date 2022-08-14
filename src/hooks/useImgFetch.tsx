// useImgFetch
import { useContext, useEffect } from 'react'
import fetchData from '@/utils/fetchData'
import { SEARCH_BY_WORD, SEARCH_DEFAULT } from '@/api/imgApi'
import { WeatherContext } from '@/context/WeatherContext'

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

  useEffect(() => {
    fetchData(`${SEARCH_DEFAULT}`).then((res) => {
      setBgImg(res?.data.results[Math.floor(Math.random() * 10)]?.urls?.regular)
    })
  }, [setBgImg])

  return { searchImgByWord }
}

export default useImgFetch
