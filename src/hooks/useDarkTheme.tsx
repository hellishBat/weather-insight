// useDarkTheme
import { useState, useEffect } from 'react'

const useDarkTheme = () => {
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

  return [theme, setTheme]
}

export default useDarkTheme
