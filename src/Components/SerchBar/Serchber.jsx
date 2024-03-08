import React from 'react'
import { CiSearch } from "react-icons/ci";

const Serchber = () => {
  return (
    <div className='h-[40px] w-full flex justify-center'>
      <div className='w-[90%] flex justify-center items-center relative'>
      <input type="text" placeholder='Search (e.g. labels, boxes, etc)' className=' outline-none border h-[40px] p-[20px] border-[#88B5DA] w-[100%]' />
      <CiSearch className=' absolute right-[1px] cursor-pointer w-[40px] h-[40px] bg-[#126CB5] text-[#fff] outline-none '  />
      </div>
    </div>
  )
}

export default Serchber