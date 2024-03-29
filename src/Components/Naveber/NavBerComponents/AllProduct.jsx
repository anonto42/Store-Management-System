import React, { useContext, useEffect, useState } from 'react'
import { BsCardList } from 'react-icons/bs'
import { CiMap, CiSettings } from 'react-icons/ci'
import { FaIdCard, FaIdCardAlt } from 'react-icons/fa'
import { FiBox } from 'react-icons/fi'
import { GiKnightBanner } from 'react-icons/gi'
import { MdInsertPageBreak, MdOutlineKeyboardArrowRight, MdOutlineShoppingBag } from 'react-icons/md'
import { PiPackageLight, PiSliders, PiSmileySticker, PiTShirtLight } from 'react-icons/pi'
import myContext from '../../../Context/myContext'

const AllProduct = () => {
    const {setProducts,Products} = useContext(myContext);

    const[ttop,setTTop] = useState();

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
          window.scrollY > 0 ? setTTop(true) : setTTop(false);
    
          return ()=>{
            window.removeEventListener('scroll',()=>{
              window.scrollY > 0 ? setTTop(true) : setTTop(false);
            })
          }
        })
      },[])
     
  return (
    <div className=''>
        <div 
        onMouseEnter={()=> setProducts(true)}
        onMouseLeave={()=>{setProducts(false)}}  
     className={ ttop ? 'left-0 top-[68px] h-auto pt-5  absolute hidden shadow-lg shadow-[#100f0f58] lg:block border border-[#E1E1E1] lg:w-[25%] mr-6 bg-[#F8F7F5]' : 'h-auto left-0 top-[113px] pt-5  absolute hidden shadow-lg shadow-[#100f0f58] lg:block border border-[#E1E1E1] lg:w-[25%] mr-6 bg-[#F8F7F5]'}>
                <div className='text-[15px] flex justify-start items-center pl-5 mb-4'>
                <CiSettings className='text-2xl text-[#9F9F9F]'/>
                <p>Custom Product Builder</p>
                </div>
                
                <div className=''>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 relative' href="">
                    <PiTShirtLight className='text-2xl text-[#9F9F9F] mr-1'/>
                    <p>Apparel</p>
                    <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
                </div>

                <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 relative' href="">
                    <GiKnightBanner className='text-2xl text-[#9F9F9F] mr-1'/>
                    <p>Banner</p>
                    <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
                </div>

                <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 relative' href="">
                    <FiBox className='text-2xl text-[#9F9F9F] mr-1'/>
                    <p>Boxes</p>
                    <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
                </div>

                <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 relative' href="">
                    <CiMap className='text-2xl text-[#9F9F9F] mr-1'/>
                    <p>Brochures</p>
                    <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
                </div>

                <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 relative' href="">
                    <FaIdCard className='text-xl text-[#9F9F9F] mr-1'/>
                    <p>Business Cards</p>
                    <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
                </div>

                <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 relative' href="">
                    <BsCardList className='text-2xl text-[#9F9F9F] mr-1'/>
                    <p>Flyers</p>
                    <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
                </div>

                <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 relative' href="">
                    <MdInsertPageBreak className='text-2xl text-[#9F9F9F] mr-1'/>
                    <p>Labels</p>
                    <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
                </div>

                <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 relative' href="">
                    <PiPackageLight className='text-2xl text-[#9F9F9F] mr-1'/>
                    <p>Packaging</p>
                    <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
                </div>

                <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 relative' href="">
                    <FaIdCardAlt className='text-xl text-[#9F9F9F] mr-1'/>
                    <p>Postcards</p>
                    <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
                </div>

                <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 relative' href="">
                    <MdOutlineShoppingBag className='text-2xl text-[#9F9F9F] mr-1'/>
                    <p>Promotional Products</p>
                    <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
                </div>

                <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 relative' href="">
                    <PiSliders className='text-2xl text-[#9F9F9F] mr-1'/>
                    <p>Signs</p>
                    <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
                </div>

                <div>
                <a className='text-[15px] hover:bg-[#9F9F9F] flex justify-start items-center pl-5 pb-4 relative' href="">
                    <PiSmileySticker className='text-2xl text-[#9F9F9F] mr-1'/>
                    <p>Stickers</p>
                    <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
                </div>
            </div>
    </div>
  )
}

export default AllProduct