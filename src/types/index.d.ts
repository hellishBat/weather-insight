// Types
import { ReactNode } from 'react'

type ChildrenTypes = {
  children: ReactNode | ReactNode[]
}

type SearchFormTypes = {
  submitHandler: (e: { preventDefault: () => void }) => void
  inputChangeHandler: (e: { target: { value: string } }) => void
  search: string
  error: boolean
}

type LocationButtonTypes = {
  clickHandler: () => void
}

type HighlightsTypes = {
  data: any
  img?: string
}

type ForecastTypes = {
  data: any
  timezone: any
  isWeekMode: boolean
}

type LinkTypes = {
  href: string
  children: ReactNode
}

export {
  ChildrenTypes,
  SearchFormTypes,
  LocationButtonTypes,
  HighlightsTypes,
  ForecastTypes,
  LinkTypes,
}
