// Layout
import { FC } from 'react'
import { ChildrenTypes } from '@/types'
// import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

const Layout: FC<ChildrenTypes> = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <main className="text-gray-700 bg-slate-100">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
