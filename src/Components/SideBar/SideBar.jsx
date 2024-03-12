import React from 'react'
import { ImCross } from "react-icons/im";
import SidebarLast from '../SideberComponent/SidebarLast';
import SemelerCompo from '../SideberComponent/SemelerCompo';
import { CiSettings } from "react-icons/ci";

const SideBar = () => {
  const item = [
    "Marketing Materials",
    "Stickers & Labels",
    "Boxes & Packaging",
    "Signs, Banners & Decals",
    "Apparel",
    "Events and Holidays",
    "Forms and Stationery",
    "Mailing Services",
    "Promotioal Products",
    "Photo Products",
    "Cusrom Quote",
    "Design Services",
    "",
    "",
    ""
];
  return (
    <div className='bsolute'>
    {/* SideBar */}
        <div className='w-[80%] h-full left-0 top-0 absolute z-[9999999999] bg-[#06649e] overflow-y-scroll'>
          <div className='w-full h-[50px] bg-[#89b6d2] px-6 flex items-center'>
            <CiSettings />
            <h6 className=' pl-5 font-semibold text-xs'>Custom Product Builder</h6>
          </div>
          {item.map((item, index) => {
            return (
              <SemelerCompo key={index} value={item} />
            )
          })}

          {/* <SemelerCompo value={item} /> */}
          
          {/* Last Component */}
          <SidebarLast/>
        </div>
        <ImCross className=' absolute right-[12%] text-white bg-slate-600 w-10 rounded-full cursor-pointer p-1 top-2'/>
    </div>
  )
}

export default SideBar