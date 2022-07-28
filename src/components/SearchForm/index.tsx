// SearchForm
import { useContext } from 'react'
import { WeatherContext } from '@/context/WeatherContext'
import useWeatherFetch from '@/hooks/useWeatherFetch'
import useImgFetch from '@/hooks/useImgFetch'
import SearchIcon from '@/assets/images/svg/search.svg'
// import LocationIcon from '@/assets/images/svg/location.svg'

const SearchForm = () => {
  const { location, setLocation } = useContext(WeatherContext)
  const [searchLocByLocation] = useWeatherFetch()
  const { searchImgByIWord } = useImgFetch()

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setLocation('')
    searchLocByLocation(location)
    searchImgByIWord(location)
  }

  return (
    <form
      className="flex justify-center mb-12 p-8 rounded-xl shadow-md bg-white"
      onSubmit={handleSubmit}
    >
      <div className="group relative flex gap-4 w-full max-w-lg">
        <input
          className="peer w-full py-2 pl-9 pr-3 rounded-md border-none bg-slate-100 shadow-inner transition-all focus:bg-slate-200 focus:pl-3"
          type="text"
          placeholder="Search for a location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
        <SearchIcon className="absolute inset-3 transition-all pointer-events-none peer-focus:-translate-x-3 peer-focus:scale-0 peer-focus:opacity-0" />
        {/* <button
          className="py-2 px-3 rounded-md border-none bg-gray-700 text-white font-medium transition-colors md:hover:bg-gray-600 md:hover:shadow-sm"
          onClick={fetchCoordinates}
          type="button"
        >
          <LocationIcon />
        </button> */}
      </div>
    </form>
  )
}

export default SearchForm
