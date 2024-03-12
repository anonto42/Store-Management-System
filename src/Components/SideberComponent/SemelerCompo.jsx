import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const SemelerCompo = (props) => {
    const {value} = props
  return (
    <a href="">
        <div className='w-full h-[50px] pl-10 bg-white flex justify-between items-center px-4'>
                <p className='text-sm'>{value}</p>
                <FaChevronRight className='text-sm' />
        </div>
        <hr className=' border' />
    </a>
  )
}

export default SemelerCompo