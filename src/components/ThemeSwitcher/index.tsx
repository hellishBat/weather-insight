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
    <div className={`${styles.button.icon} ${styles.button.common}`}>
      <DarkModeSwitch checked={!theme} onChange={toggleDarkMode} size={32} sunColor="#334155" />
    </div>
  )
}

export default ThemeSwitcher
