// Header
import { useScrollDirection } from '@/hooks'

import { Logo, ThemeSwitch } from './'

export const Header = () => {
  const scrollDirection = useScrollDirection()

  return (
    <header
      className={`layout fixed left-0 top-0 z-50 w-full py-4 shadow transition-[transform,opacity] duration-500 ${
        scrollDirection === 'down'
          ? '-translate-y-full opacity-5'
          : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="container">
        <div className="flex items-center">
          <Logo />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}
