import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";

const Naveber = () => {
  const [nav,setNav] = useState(false);

  return (
    <div className='w-full h-[50px] bg-[#ffff] flex justify-between p-4 items-center text-3xl'>
      <div className=' cursor-pointer'><FaBars /></div>
      <div> <a href="/"><img className='w-[150px]' src="https://s1.uprinting.com/assets/img/uprinting-logo-new.webp" alt="" /></a></div>
      <div><a href="/cart"><FaOpencart/></a></div>
    </div>
  )
}

export default Naveber