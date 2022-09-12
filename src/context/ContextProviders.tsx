// ContextProviders
import { FC } from 'react'
import { ThemeProvider } from '@/context/ThemeContext'
import { ServiceProvider } from '@/context/ServiceContext'
import { WeatherProvider } from '@/context/WeatherContext'
import { ChildrenTypes } from '@/types'

const ContextProviders: FC<ChildrenTypes> = ({ children }) => {
  return (
    <ThemeProvider>
      <ServiceProvider>
        <WeatherProvider>{children}</WeatherProvider>
      </ServiceProvider>
    </ThemeProvider>
  )
}

export default ContextProviders
