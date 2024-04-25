import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const SemelerCompo = (props) => {
    const {value} = props
  return (
    <>
        <div className='w-full cursor-pointer h-[50px] pl-10 bg-[#c9c9c9] flex justify-between items-center px-4'>
          <span className='default-dropdown"'>
                <div className='text-sm '>
                  <p>{value}</p>
                </div>
          </span>
                <FaChevronRight className='text-sm' />
        </div>
        <hr className='cursor-wait border' />
    </>
  )
}

export default SemelerCompo