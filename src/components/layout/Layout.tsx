import React from 'react'

import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex overflow-x-hidden">
      <Sidebar />
      <div className="w-full px-6 2xl:px-8">
        <Header />
        <div className="min-h-main">{children}</div>
      </div>
    </div>
  )
}

export default Layout
