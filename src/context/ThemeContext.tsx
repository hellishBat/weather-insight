// ThemeContext
import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface IThemeContextProps {
  children: ReactNode
}
type ThemeContextData = {
  theme: boolean
  setTheme: React.Dispatch<SetStateAction<boolean>>
}
const ThemeContext = createContext({} as ThemeContextData)
const ThemeProvider = ({ children }: IThemeContextProps) => {
  const [theme, setTheme] = useState(() => localStorage.theme === 'light')
  useEffect(() => {
    const rootElement = window.document.documentElement
    const currentTheme = theme
    const prevTheme = currentTheme ? 'dark' : 'light'
    rootElement.classList.remove(prevTheme)
    const nextTheme = currentTheme ? 'light' : 'dark'
    rootElement.classList.add(nextTheme)
    localStorage.setItem('theme', nextTheme)
  }, [theme])
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
const useTheme = () => useContext(ThemeContext)

export { ThemeProvider, useTheme }
