// SearchForm
import { FC } from 'react'
import { SearchFormTypes } from '@/types'
import { SearchIcon } from '@/assets'

const SearchForm: FC<SearchFormTypes> = ({ submitHandler, inputChangeHandler, search, error }) => {
  return (
    <form className={'group relative flex w-full max-w-lg'} onSubmit={submitHandler}>
      <input
        className={`peer w-full py-2 pl-9 pr-3 rounded-md border-none bg-slate-300/70 shadow-inner focus:transition-all focus:bg-slate-300 focus:pl-3 dark:bg-gray-900/50 dark:focus:bg-gray-900/80 ${
          error
            ? 'bg-red-500/10 outline outline-4 outline-red-500/60 placeholder:text-red-500/60 dark:bg-red-900/10'
            : ''
        }`}
        type="text"
        placeholder={error ? 'Error! Please check spelling.' : 'Search for a location'}
        onChange={inputChangeHandler}
        value={search}
      />
      <SearchIcon
        className={`absolute inset-3 pointer-events-none peer-focus:-translate-x-3 peer-focus:scale-0 peer-focus:opacity-0 peer-focus:transition ${
          error ? 'text-red-500/60' : ''
        }`}
      />
    </form>
  )
}

export default SearchForm
