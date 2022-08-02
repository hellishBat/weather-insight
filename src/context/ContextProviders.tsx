// ContextProviders
import { FC } from 'react'
import { ThemeProvider } from '@/context/ThemeContext'
import { WeatherProvider } from '@/context/WeatherContext'
import { ChildrenTypes } from '@/types'

const ContextProviders: FC<ChildrenTypes> = ({ children }) => {
  return (
    <ThemeProvider>
      <WeatherProvider>{children}</WeatherProvider>
    </ThemeProvider>
  )
}

export default ContextProviders
