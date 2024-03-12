import React from 'react'
import { CiUser } from "react-icons/ci";
import { TfiHelpAlt } from "react-icons/tfi";
import { TbBrandRedux } from "react-icons/tb";

const SidebarLast = () => {
  return (
    <div className='flex bottom-0 w-full border border-cyan-700 bg-white h-[80px] text-sm justify-between px-3 items-center'>
        <div className='font-semibold'>
            <a href="/help">
                <TfiHelpAlt className='text-4xl ml-3 cursor-pointer' />
                <p>NeedHelp</p>
            </a>
        </div>
        <div className='font-semibold'>
            <a href="/user">
                <CiUser className='text-4xl ml-2 cursor-pointer'/>
                <p>Account</p>
            </a>
        </div>
        <div className='font-semibold'>
            <a href="/anyThink">
                <TbBrandRedux className='text-4xl ml-1 cursor-pointer'/>
                <p>Redux</p>
            </a>
        </div>
    </div>
  )
}

export default SidebarLast