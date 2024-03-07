import React from 'react'
import Naveber from '../Naveber/Naveber'
import Footer from './../Footer/Footer';

const Layout = ({children}) => {
  return (
    <div>
      <Naveber/>
      <div className='content'>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout