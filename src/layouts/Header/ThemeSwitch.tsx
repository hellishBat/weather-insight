// ThemeSwitch
import { DarkModeIcon, LightModeIcon } from '@/assets'
import { useTheme } from '@/context/ThemeContext'

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()

  const toggleDarkMode = () => {
    setTheme((prevTheme) => !prevTheme)
  }

  return (
    <div className="relative inline-block w-10 select-none py-2 align-middle">
      <input
        type="checkbox"
        id="themeSwitch"
        checked={!theme}
        onChange={toggleDarkMode}
        className={`absolute right-0 z-10 h-6 w-6 cursor-pointer appearance-none overflow-hidden rounded-full border-0 bg-white shadow dark:bg-slate-700 ${
          theme ? '-translate-x-4' : 'translate-x-0'
        } duration-400 transition`}
      />
      <label
        aria-label="Toggle Dark Mode"
        htmlFor="themeSwitch"
        className="transition-background-color relative flex h-6 cursor-pointer overflow-hidden rounded-full bg-slate-300/70 text-slate-700 shadow-inner duration-200 hover:transition-colors dark:bg-slate-800 dark:text-white md:hover:text-gray-400"
      >
        <LightModeIcon
          className={`theme-switch-icon left-0 ml-1 ${
            theme ? 'theme-switch-icon-active' : 'theme-switch-icon-inactive'
          }`}
        />
        <DarkModeIcon
          className={`theme-switch-icon right-0 mr-1 ${
            theme ? 'theme-switch-icon-inactive' : 'theme-switch-icon-active'
          }`}
        />
      </label>
    </div>
  )
}
