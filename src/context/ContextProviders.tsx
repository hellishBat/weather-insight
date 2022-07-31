// ContextProviders
import { FC } from 'react'
import { ChildrenTypes } from '@/types'
import { WeatherProvider } from '@/context/WeatherContext'
import { ThemeProvider } from '@/context/ThemeContext'

const ContextProviders: FC<ChildrenTypes> = ({ children }) => {
  return (
    <ThemeProvider>
      <WeatherProvider>{children}</WeatherProvider>
    </ThemeProvider>
  )
}

export default ContextProviders
