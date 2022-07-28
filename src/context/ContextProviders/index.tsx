// ContextProviders
import { FC } from 'react'
import { ChildrenTypes } from '@/types'
import WeatherProvider from '@/context/WeatherContext'

const ContextProviders: FC<ChildrenTypes> = ({ children }) => {
  return <WeatherProvider>{children}</WeatherProvider>
}

export default ContextProviders
