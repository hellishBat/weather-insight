// ThemeSwitcher
import { useTheme } from '@/context/ThemeContext'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { styles } from '@/styles'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const toggleDarkMode = () => {
    setTheme(!theme)
  }

  return (
    <div className={`p-2 ${styles.materialItem}`}>
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
