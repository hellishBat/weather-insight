// ServiceContext
import { createContext, ReactNode, useState } from 'react'

interface IServiceContextProps {
  children: ReactNode
}

type ServiceContextData = {
  error: boolean
  setError: (fn: boolean) => void
  loading: boolean
  setLoading: (fn: boolean) => void
}

const ServiceContext = createContext({} as ServiceContextData)

const ServiceProvider = ({ children }: IServiceContextProps) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const serviceValue = {
    error,
    setError,
    loading,
    setLoading,
  }

  return <ServiceContext.Provider value={serviceValue}>{children}</ServiceContext.Provider>
}

export { ServiceContext, ServiceProvider }
