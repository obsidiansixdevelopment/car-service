import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[60vh]">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout