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
    setSearch(null) // Clear input
    locationSearchHandler() // Trigger geolocation
  }

  return (
    <div className="card mb-12 flex justify-center p-6 text-slate-700 dark:text-white md:p-8">
      <div className="relative w-full max-w-lg">
        <SearchIcon className="pointer-events-none absolute inset-2 text-2xl" />
        <SearchBar
          search={search}
          setSearch={setSearch}
          onSearchChange={onSearchChange}
          optionQuery={optionQuery}
        />
        <LocationButton clickHandler={handleLocationClick} />
      </div>
    </div>
  )
}
