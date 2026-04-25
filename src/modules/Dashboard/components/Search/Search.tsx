// Search
import { useState } from 'react'
import { SearchIcon } from '@/assets'
import type { SearchProps } from '@/types'
import { LocationButton, SearchBar } from './'

export const Search = ({
  onSearchChange,
  optionQuery,
  locationSearchHandler,
}: SearchProps) => {
  const [search, setSearch] = useState(null)

  const handleLocationClick = () => {
    setSearch(null)
    locationSearchHandler()
  }

  return (
    <div className="z-50 mb-12 flex justify-center p-6 text-slate-700 dark:text-white md:p-8">
      <div className="relative w-full max-w-lg group">
        <SearchIcon 
          className="pointer-events-none absolute left-4 top-1/2 z-20 -translate-y-1/2 text-2xl 
            transition-colors duration-300
            text-slate-500 dark:text-slate-400 
            group-focus-within:text-slate-700 group-focus-within:dark:text-white 
            group-focus-within:opacity-100 opacity-60 drop-shadow-sm" 
        />

        <SearchBar
          search={search}
          setSearch={setSearch}
          onSearchChange={onSearchChange}
          optionQuery={optionQuery}
        />

        <div className="absolute right-1 top-1/2 z-20 -translate-y-1/2">
          <LocationButton clickHandler={handleLocationClick} />
        </div>
      </div>
    </div>
  )
}