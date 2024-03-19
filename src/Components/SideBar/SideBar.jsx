import React, { useContext, useState } from 'react'
import { CiSearch, CiSettings } from "react-icons/ci";
import myContext from '../../Context/myContext';
import { RxCross1 } from "react-icons/rx";
import { MdOutlineHelpOutline } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
import { FaChevronRight } from "react-icons/fa";
import { GrDocumentConfig } from "react-icons/gr";
import { BsInputCursorText } from "react-icons/bs";

const SideBar = () => {
  const {barOnOff,item} = useContext(myContext);
  const [resuldBar,SetResuldBar] = useState(false)
  const [serchText,SetSerchText] = useState('')
  let l =''
  if (serchText.length >= 3) {
    l = serchText
  }
  return (
    <div className='fixed bottom-1 right-0 bg-[#000000a5] z-[9999] w-full h-full'>
          
          {/* SideBar */}
          
        <div className='w-[90%] h-full bg-white '>
    
            {/* Serch box */}
          <div className='h-[60px] w-full flex justify-center mt-[5px] mb-2 pb-[10px] bg-white'>
            <div className='w-full'>
              <div className='w-[95%] ml-4 mt-2 flex justify-center items-center relative'>
                <input type="text" value={serchText} onChange={(e)=>{SetSerchText(e.target.value); SetResuldBar(true)}} placeholder='Search (e.g. labels, boxes, etc)' className=' placeholder:text-[#757575] text-sm placeholder:mb-2 outline-none border h-[40px] p-[20px] border-[#88B5DA] w-[100%] placeholder:text-sm' />
                <CiSearch className=' absolute right-[-1px] cursor-pointer w-[40px] h-[40px] bg-[#126CB5] text-[#fff] outline-none ' />
              </div>
            </div>
          </div>
          {/* MidBar */}

          <div className='w-full h-[81vh] pl-4'>
            <div className='w-full h-full border-t pt-2 px-2 overflow-auto'>
              <div className='text-[15px] flex justify-start items-center mb-5'>
                <CiSettings className='text-2xl mr-3'/>
                <p>Custom Product Builder</p>
              </div>
              <div>
                <a className='text-[15px] flex justify-between items-center mb-5 pr-2' href="">
                  <p>Marketing Materials</p>
                  <FaChevronRight />
                </a>
              </div>
              <div>
                <a className='text-[15px] flex justify-between items-center mb-5 pr-2' href="">
                  <p>Stickers & Packaging</p>
                  <FaChevronRight />
                </a>
              </div>
              <div>
                <a className='text-[15px] flex justify-between items-center mb-5 pr-2' href="">
                  <p>Boxes & Packaging</p>
                  <FaChevronRight />
                </a>
              </div>
              <div>
                <a className='text-[15px] flex justify-between items-center mb-5 pr-2' href="">
                  <p>Signs,Banners & Decals</p>
                  <FaChevronRight />
                </a>
              </div>
              <div>
                <a className='text-[15px] flex justify-between items-center mb-5 pr-2' href="">
                  <p>Apparel</p>
                  <FaChevronRight />
                </a>
              </div>
              <div>
                <a className='text-[15px] flex justify-between items-center mb-5 pr-2' href="">
                  <p>Events and Holidays</p>
                  <FaChevronRight />
                </a>
              </div>
              <div>
                <a className='text-[15px] flex justify-between items-center mb-5 pr-2' href="">
                  <p>Forms and Stationery</p>
                  <FaChevronRight />
                </a>
              </div>
              <div>
                <a className='text-[15px] flex justify-between items-center mb-5 pr-2' href="">
                  <p>Mailing Servises</p>
                  <FaChevronRight />
                </a>
              </div>
              <div>
                <a className='text-[15px] flex justify-between items-center mb-5 pr-2' href="">
                  <p>Promotional Products</p>
                  <FaChevronRight />
                </a>
              </div>
              <div>
                <a className='text-[15px] flex justify-between items-center mb-5 pr-2' href="">
                  <p>Photo Products</p>
                  <FaChevronRight />
                </a>
              </div>
              {/*  */}
              <div>
                <a className='text-[15px] flex justify-start items-center mb-5 pr-2' href="">
                  <GrDocumentConfig />
                  <p className='ml-2'>Custom Quote</p>
                </a>
              </div>
              <div>
                <a className='text-[15px] flex justify-start items-center mb-5 pr-2' href="">
                  <BsInputCursorText />
                  <p className='ml-2'>Design Services</p>
                </a>
              </div>
              {/*  */}
                <div className=' border-t '>
                  <a className='text-[15px] pt-4 flex justify-between items-center mb-5 pr-2' href="">
                    <p>My Account</p>
                    <FaChevronRight />
                  </a>
                </div>
                <div>
                <a className='text-[15px] flex justify-between items-center mb-5 pr-2' href="">
                  <p>My Orders</p>
                </a>
              </div>
            </div>
            
          </div>

          {/* LastBar */}
            <div className='flex justify-between items-center w-full h-[70px] bg-[#ffff] text-4xl px-5'>
              <div className='mb-4 relative'>
                <a href="/help">
                  <p className='text-[10px] absolute w-[180%] mt-7'>Need Help?</p>
                  <MdOutlineHelpOutline />
                </a>
              </div>
              <div className='mb-4 relative'>
                <a href="account">
                  <p className='text-[10px] mt-7 absolute'>Account</p>
                  <LuUser2 />
                </a>
              </div>
              <div className='mb-4 relative'>
                <a href="cart">
                  <p className='text-[10px] absolute mt-7 ml-[11px]'>Cart</p>
                  <GrCart/>
                </a>
              </div>
            </div>
{/*  */}
      </div>

        <RxCross1 onClick={barOnOff}
        className='absolute text-6xl right-[2%] text-[#BFC8C3] w-10 cursor-pointer -top-1'/>
    </div>
  )
}

export default SideBar