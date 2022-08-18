// Layout
import { FC } from 'react'
import { ChildrenTypes } from '@/types'
import Footer from '@/layouts/Footer'

const Layout: FC<ChildrenTypes> = ({ children }) => {
  return (
    <>
      <main className="bg-slate-100 text-gray-700 dark:bg-gray-900 dark:text-white">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
