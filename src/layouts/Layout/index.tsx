// Layout
import { FC } from 'react'
import { ChildrenTypes } from '@/types'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

const Layout: FC<ChildrenTypes> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-slate-100 text-gray-700 dark:bg-gray-900 dark:text-white">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
