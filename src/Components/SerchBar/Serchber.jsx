import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import ResuldBar from '../ResuldBar/ResuldBar';
import { ImCross } from "react-icons/im";

const Serchber = () => {

  const [resuldBar,SetResuldBar] = useState(false)
  const [serchText,SetSerchText] = useState('')
  let l =''
  if (serchText.length >= 3) {
    l = serchText
  }
  return (
    <div className='h-[60px] w-full flex lg:shadow-md shadow-black  justify-center mt-[5px] mb-5 pb-[10px] bg-white'>
      {l.length >= 3 && resuldBar ? <ImCross onClick={()=> {SetResuldBar(false)
      SetSerchText("")} } className='text-3xl absolute bg-white z-10 left-4 top-14 cursor-pointer'/>  : ""}
      
      {/* serchBar */}
      <div className='w-[95%]  lg:hidden flex justify-center items-center relative'>
        <input type="text" value={serchText}
         onBlur={()=>{
          if (l.length >= 3) {
            SetResuldBar(true)
          }else{
            SetResuldBar(false)
          }
         }} 
        onChange={(e)=>{SetSerchText(e.target.value) 
        SetResuldBar(true)}} placeholder='Search (e.g. labels, boxes, etc)' className=' placeholder:text-black outline-none border h-[40px] p-[20px] border-[#88B5DA] w-[100%]' />
        <CiSearch className=' absolute right-[1px] cursor-pointer w-[40px] h-[40px] bg-[#126CB5] text-[#fff] outline-none ' />
      </div>
      {/* serch resuld box */}
      {resuldBar && <ResuldBar/>}
    </div>
  )
}

export default Serchber