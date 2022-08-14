// SearchForm
import { FC, useContext } from 'react'
import { WeatherContext } from '@/context/WeatherContext'
import SearchIcon from '@/assets/images/svg/search.svg'

type FunctionTypes = {
  submitHandler: (e: { preventDefault: () => void }) => void
  search: any
}

const SearchForm: FC<FunctionTypes> = ({ submitHandler, search }) => {
  const { setSearchTerm } = useContext(WeatherContext)

  return (
    <form className="group relative flex w-full max-w-lg" onSubmit={submitHandler}>
      <input
        className="peer w-full py-2 pl-9 pr-3 rounded-md border-none bg-slate-100 shadow-inner focus:transition-all focus:bg-slate-200 focus:pl-3 dark:bg-gray-900 dark:focus:bg-gray-900/50"
        type="text"
        placeholder="Search for a location"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={search}
      />
      <SearchIcon className="absolute inset-3 pointer-events-none peer-focus:-translate-x-3 peer-focus:scale-0 peer-focus:opacity-0 peer-focus:transition" />
    </form>
  )
}

export default SearchForm
