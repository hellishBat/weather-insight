// SearchForm
import { useContext } from 'react'
import { WeatherContext } from '@/context/WeatherContext'
import useWeatherFetch from '@/hooks/useWeatherFetch'
import useCoordinates from '@/hooks/useCoordinates'

import useImgFetch from '@/hooks/useImgFetch'
import SearchIcon from '@/assets/images/svg/search.svg'
import LocationIcon from '@/assets/images/svg/location.svg'

const SearchForm = () => {
  const { weather, location, setLocation, lat, lon } = useContext(WeatherContext)
  const [searchWeatherByWord, searchWeatherByLocation] = useWeatherFetch()
  const { searchImgByIWord } = useImgFetch()
  const [findCoordinates] = useCoordinates()

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setLocation('')
    searchWeatherByWord(location)
    searchImgByIWord(location)
  }

  const fetchCoordinates = () => {
    setLocation('')
    findCoordinates(searchWeatherByLocation(lat, lon))
    searchImgByIWord(weather.name)
  }

  return (
    <form
      className="flex justify-center mb-12 p-6 md:p-8 rounded-xl shadow-md bg-white border border-white/5 dark:bg-slate-800"
      onSubmit={handleSubmit}
    >
      <div className="group relative flex gap-4 w-full max-w-lg">
        <input
          className="peer w-full py-2 pl-9 pr-3 rounded-md border-none bg-slate-100 shadow-inner focus:transition-all focus:bg-slate-200 focus:pl-3 dark:bg-gray-900"
          type="text"
          placeholder="Search for a location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
        <SearchIcon className="absolute inset-3  pointer-events-none peer-focus:-translate-x-3 peer-focus:scale-0 peer-focus:opacity-0 peer-focus:transition" />
        <button
          className="py-2 px-3 rounded-md bg-slate-700 border border-white/5 font-medium text-white hover:transition-colors  md:hover:shadow-sm md:hover:bg-slate-600 md:hover:dark:bg-slate-600"
          onClick={fetchCoordinates}
          type="button"
        >
          <LocationIcon />
        </button>
      </div>
    </form>
  )
}

export default SearchForm
