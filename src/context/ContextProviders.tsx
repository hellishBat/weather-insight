// ContextProviders
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import type { ChildrenProps } from '@/types'

import { ObserverProvider } from './ObserverProvider'
import { ThemeProvider } from './ThemeContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

const ContextProviders = ({ children }: ChildrenProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ObserverProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ObserverProvider>
    </QueryClientProvider>
  )
}

export default ContextProviders
