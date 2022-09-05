// Header
import Container from '@/components/Container'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { Logo } from '@/assets'

const Header = () => {
  return (
    <header className="w-full py-4 text-gray-500 dark:bg-slate-800 dark:text-gray-400">
      <Container>
        <div className="flex items-center">
          <a className="w-40 mr-auto overflow-hidden md:w-48" href="/">
            <Logo width="auto" height="auto" title="WeatherInsight" />
            <span className="sr-only">WeatherInsight Home Page</span>
          </a>
          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  )
}

export default Header
