import React, { useState } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)

  const handleSidebarToggle = () =>
    setSidebarOpen((sidebarOpen) => !sidebarOpen)

  return (
    <div className="flex">
      <Sidebar open={sidebarOpen} />
      <div className="w-full px-6 2xl:px-8">
        <Header toggleSidebar={handleSidebarToggle} />
        <div className="min-h-main">{children}</div>
      </div>
    </div>
  )
}

export default Layout
