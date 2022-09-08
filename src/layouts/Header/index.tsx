// Header
import useScrollDirection from '@/hooks/useScrollDirection'
import Container from '@/components/Container'
import Logo from '@/components/Logo'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { styles } from '@/styles'

const Header = () => {
  const scrollDirection = useScrollDirection()

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full py-4 ${
        styles.layout
      } shadow-md transition-[transform,opacity] duration-500 ${
        scrollDirection === 'down' ? '-translate-y-full opacity-5' : 'translate-y-0 opacity-100'
      }`}
    >
      <Container>
        <div className="flex items-center">
          <Logo />
          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  )
}

export default Header
