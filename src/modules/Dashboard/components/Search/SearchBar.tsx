// SearchBar
import { SetStateAction } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

import { SearchBarProps } from '@/types'

export const SearchBar = ({
  search,
  setSearch,
  onSearchChange,
  optionQuery,
}: SearchBarProps) => {
  const handleOnChange = (searchData: SetStateAction<null>) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  return (
    <AsyncPaginate
      placeholder="What's the weather like in..."
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={optionQuery}
      closeMenuOnScroll={true}
      unstyled
      classNames={{
        container: () => 'w-full',
        control: (state) =>
          `rounded-2xl py-3 pl-12 pr-14 transition-all duration-300
          glass-well
          ${state.isFocused ? 'bg-white/40 dark:bg-black/40 ring-2 ring-white/20 dark:ring-white/10' : ''}`,
        indicatorsContainer: () => 'hidden cursor-pointer',
        placeholder: () =>
          'text-slate-500 dark:text-slate-400 tracking-wide',
        input: () => 'text-slate-700 dark:text-white cursor-text',
        singleValue: () => 'text-slate-700 dark:text-white font-semibold',
        menu: () =>
          'cursor-pointer overflow-hidden absolute w-full z-50 py-4 mt-3 rounded-2xl bg-white/40 dark:bg-slate-700/80 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]',
        option: (state) =>
          `py-2 px-5  transition-[colors, font-weight] duration-300 cursor-pointer ${
            state.isFocused
              ? 'bg-slate-500/10 font-semibold dark:bg-slate-400/10 text-slate-700 dark:text-white backdrop-blur-3xl'
              : 'text-slate-500 dark:text-slate-400'
          }`,
      }}
    />
  )
}
