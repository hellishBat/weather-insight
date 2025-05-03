// SearchBar
import { SetStateAction } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

import { SearchBarProps } from '@/types'

// import type { SearchBarProps } from '@/types'

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
          `rounded-md border-none py-2 pl-9 pr-12 shadow-inner ${
            state.isFocused
              ? 'pl-[16px] bg-slate-300 dark:bg-slate-800 transition-all'
              : 'bg-slate-300/70 dark:bg-slate-800/80'
          }`,
        indicatorsContainer: () => 'cursor-pointer',
        placeholder: () => 'text-gray-400 dark:text-gray-500',
        input: () => 'peer cursor-text',
        menu: () =>
          'py-2 rounded-md backdrop-blur-2xl bg-slate-200/70 shadow dark:bg-gray-800/70 translate-y-2',
        option: (state) =>
          `py-2 px-4 ${state.isFocused && 'bg-slate-900/10 dark:bg-white/10'}`,
      }}
    />
  )
}
