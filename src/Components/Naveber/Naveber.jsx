import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
import SideBar from '../SideBar/SideBar';

const Naveber = () => {
  const [nav,setNav] = useState(false);
  const [bar,SerBar]=useState(true);

  return (
    <div className='w-full h-[50px] bg-[#ffff] flex justify-between p-4 items-center text-3xl'>
      {bar && <SideBar/>}
      {/* main bar */}
      <div className=' cursor-pointer'><FaBars /></div>
      <div> <a href="/"><img className='w-[150px]' src="https://s1.uprinting.com/assets/img/uprinting-logo-new.webp" alt="" /></a></div>
      <div>
        <a href="/cart"><FaOpencart/></a>
        <div className=' absolute text-xs w-4 h-4 flex justify-center items-center rounded-full bg-red-700 text-white top-[46px] cursor-help right-3'>{1}</div>
      </div>
    </div>
  )
}

export default Naveber