// Header
import { useScrollDirection } from '@/hooks'

import { Logo, ThemeSwitch } from './'

export const Header = () => {
  const scrollDirection = useScrollDirection()

  return (
    <header
      className={`layout fixed left-0 top-0 z-50 w-full border-b py-4 shadow-sm transition-[opacity,transform] duration-500 ${
        scrollDirection === 'down'
          ? '-translate-y-full opacity-0'
          : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}
