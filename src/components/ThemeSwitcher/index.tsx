// ThemeSwitcher
import { useState } from 'react'
import useDarkTheme from '@/hooks/useDarkTheme'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

const ThemeSwitcher = () => {
  const [colorTheme, setTheme] = useDarkTheme()
  const [darkMode, setDarkMode] = useState(colorTheme === 'light' ? true : false)

  const toggleDarkMode = (checked: boolean | ((prevState: boolean) => boolean)) => {
    setTheme(colorTheme)
    setDarkMode(checked)
  }

  return (
    <div className="flex justify-end py-8">
      <div className="p-2 rounded-md shadow-md bg-white border border-white/5 dark:bg-slate-800 ">
        <DarkModeSwitch
          checked={darkMode}
          onChange={toggleDarkMode}
          size={32}
          sunColor="rgb(55 65 81)"
        />
      </div>
    </div>
  )
}

export default ThemeSwitcher
