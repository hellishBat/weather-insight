// ThemeSwitcher
import { useTheme } from '@/context/ThemeContext'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const toggleDarkMode = () => {
    setTheme(!theme)
  }

  return (
    <div className="p-2 rounded-md shadow-md bg-white border border-white/5 dark:bg-slate-800 ">
      <DarkModeSwitch
        checked={!theme}
        onChange={toggleDarkMode}
        size={32}
        sunColor="rgb(55 65 81)"
      />
    </div>
  )
}

export default ThemeSwitcher
