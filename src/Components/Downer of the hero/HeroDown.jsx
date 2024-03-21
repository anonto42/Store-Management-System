import React from 'react'
import { CiMap, CiSettings } from 'react-icons/ci'
import { FaChevronRight, FaIdCard, FaIdCardAlt } from 'react-icons/fa'
import { PiPackageLight, PiSliders, PiSmileySticker, PiTShirtLight } from "react-icons/pi";
import { MdAddCircleOutline, MdInsertPageBreak, MdOutlineKeyboardArrowRight, MdOutlineShoppingBag } from "react-icons/md"
import { GiKnightBanner } from "react-icons/gi";
import { FiBox } from "react-icons/fi";
import { BsCardList } from 'react-icons/bs';
import Cart from '../Cart/Cart';

const HeroDown = () => {
  var i = {
    imgurl:"imgUrl",
    title:"Title"
  }
  return (
    <div className='h-auto md:px-10 xl:px-28 w-full mt-8 flex justify-center'>
        <div className='h-full hidden shadow-lg shadow-[#100f0f58] lg:block border border-[#E1E1E1] lg:w-[25%] mr-6 bg-[#ffff]'>
              <div className='bg-[#F8F7F5] w-full h-14 flex justify-start pl-5 items-center text-black text-xl font-semibold mb-5'>
                Popular Products
              </div>
              <div className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4'>
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
                <a className='text-[15px] hover:bg-[#EBF1F1] border-b border-[#9F9F9F] flex justify-start items-center pl-5 pb-4 relative' href="">
                  <PiSmileySticker className='text-2xl text-[#9F9F9F] mr-1'/>
                  <p>Stickers</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>

              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>

              <div>
                <a className='text-[15px hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt- relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>

              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>

              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>

              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>

              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>

              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>


              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>


              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>


              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>


              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>


              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>


              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>

              {/* last component */}

              <div>
                <a className='text-[15px] font-bold hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-8 mt-4 relative' href="">
                  <p>See More Products</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>


        </div>
        <div className='w-[100%] p-[4%] md:p-6 lg:w-[75%] h-[50vh]'>
          <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Top Collections</h1>
          <div className='flex overflow-auto'>
            <Cart />
            <Cart />
            <Cart />
          </div>
        </div>
    </div>
  )
}

export default HeroDown