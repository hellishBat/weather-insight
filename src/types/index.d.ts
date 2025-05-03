// Types
import type { LoadOptions } from 'react-select-async-paginate'

interface GenericData {
  [key: string]: any | unknown
}

interface ChangeHandler {
  (fn: any): void
}

interface ChildrenProps {
  children: ReactNode
}

// Libs-Related props
interface SliderProps {
  children: ReactNode[]
  className?: string
  spaceBetween?: number
  slidesPerView?: number
  breakpoints?: Record<number, { slidesPerView: number }>
}

// Search-related props
interface SearchProps {
  onSearchChange: ChangeHandler
  optionQuery: LoadOptions<any, GroupBase<any>, unknown>
  locationSearchHandler: () => void
}

interface SearchBarProps {
  search: SingleValue<SearchOption> | null
  setSearch: Dispatch<SetStateAction<SingleValue<SearchOption> | null>>
  onSearchChange: (value: SingleValue<SearchOption> | null) => void
  optionQuery: LoadOptions<SearchOption, any>
}

interface LocationButtonProps {
  clickHandler: ChangeHandler
}

// Weather-related props
interface WeatherProps {
  weather: GenericData
  image: string
  isFetching: number
  isError: boolean
}

interface WeatherIconProps {
  icon: number
  isDay: boolean
  className?: string
}

interface HighlightsProps {
  data: GenericData
  img?: string
}

interface ForecastProps {
  data: GenericData
  timezone?: number
  isWeekMode?: boolean
}

interface ForecastSliderProps {
  data: GenericData
}

interface ForecastButtonProps {
  isSelected: boolean
  onClick: () => void
  label: string
}

// Layout-related props
interface LinkProps {
  href: string
  children?: ReactNode
}

export {
  ChildrenProps,
  SliderProps,
  SearchProps,
  SearchBarProps,
  LocationButtonProps,
  WeatherProps,
  WeatherIconProps,
  HighlightsProps,
  ForecastProps,
  ForecastSliderProps,
  ForecastButtonProps,
  LinkProps,
}
