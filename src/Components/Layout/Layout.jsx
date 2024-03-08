import React from 'react'
import Naveber from '../Naveber/Naveber'
import Footer from './../Footer/Footer';
import Top from '../TopEr/Top';

const Layout = ({children}) => {
  return (
    <div>
      <Top/>
      <Naveber/>
      <div className='content'>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout