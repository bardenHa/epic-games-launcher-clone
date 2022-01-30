import React from 'react'

import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="mt-header">{children}</div>
      </div>
    </div>
  )
}

export default Layout
