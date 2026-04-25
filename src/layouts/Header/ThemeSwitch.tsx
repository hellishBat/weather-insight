// ThemeSwitch
import { DarkModeIcon, LightModeIcon } from '@/assets'
import { useTheme } from '@/context/ThemeContext'

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()

  const toggleDarkMode = () => {
    setTheme((prevTheme) => !prevTheme)
  }

  return (
    <div className="relative inline-block w-14 select-none py-2 align-middle">
      {/* Ползунок (Thumb) - Выпуклое стекло */}
      <input
        type="checkbox"
        id="themeSwitch"
        checked={!theme}
        onChange={toggleDarkMode}
        className={`absolute top-1/2 z-20 h-6 w-6 -translate-y-1/2 cursor-pointer appearance-none rounded-full border border-white/60 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] dark:border-white/10 dark:bg-gray-700 dark:shadow-[0_2px_10px_rgba(0,0,0,0.5)] ${theme ? 'right-7' : 'right-1'}`}
      />

      {/* Дорожка (Track) - Углубление Glass Well */}
      <label
        aria-label="Toggle Dark Mode"
        htmlFor="themeSwitch"
        className="glass-well relative flex h-8 w-full cursor-pointer items-center overflow-hidden"
      >
        {/* Иконки теперь позиционируются абсолютно, чтобы не мешать движению ползунка */}
        <LightModeIcon
          className={`absolute left-[7px] z-20 text-[1rem] transition-all ${
            theme
              ? 'scale-100 opacity-100 duration-500 ease-out'
              : 'rotate-90 scale-50 opacity-0 duration-100 ease-in'
          } text-amber-500`}
        />
        <DarkModeIcon
          className={`absolute right-[7px] z-20 text-[1rem] transition-all ${
            theme
              ? '-rotate-90 scale-50 opacity-0 duration-100 ease-in'
              : 'scale-100 opacity-100 duration-500 ease-out'
          } text-blue-400`}
        />
      </label>
    </div>
  )
}
