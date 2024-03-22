import React from 'react'
import { CiMap, CiSettings } from 'react-icons/ci'
import { FaChevronRight, FaIdCard, FaIdCardAlt } from 'react-icons/fa'
import { PiPackageLight, PiSliders, PiSmileySticker, PiTShirtLight } from "react-icons/pi";
import { MdAddCircleOutline, MdInsertPageBreak, MdOutlineKeyboardArrowRight, MdOutlineShoppingBag } from "react-icons/md"
import { GiKnightBanner } from "react-icons/gi";
import { FiBox } from "react-icons/fi";
import { BsCardList } from 'react-icons/bs';
import TopSellerBox from './TopSellerBox';
import PoliticalCampaing from './PoliticalCampaing';
import UpdateProduct from './New&UpdatePro';
import BestDeals from './BestDeals';
import PrintChoice from './PrintChoice';
import VideoReff from './VideoReff';
import Services from './Services';

const HeroDown = () => {
  var i = {
    imgurl:"imgUrl",
    title:"Title"
  }
  return (
    <div className='h-auto  w-full mt-8 flex justify-center'>
        <div className='h-full hidden shadow-lg shadow-[#100f0f58] lg:block border border-[#E1E1E1] lg:w-[25%] xl:w-[270px]  mr-6 bg-[#ffff]'>
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

              {/* kkkkkk */}

              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>A-Frame Signs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>

              <div>
                <a className='text-[15px hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt- relative' href="">
                  <p>Advertising Flags</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>

              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Aluminum Signs</p>
                  {/* <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' /> */}
                </a>
              </div>

              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>
                    Apparel
                  </p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>

              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Appointment Cards</p>
                  {/* <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' /> */}
                </a>
              </div>

              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Asset Tags</p>
                  {/* <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' /> */}
                </a>
              </div>

              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Bags</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>


              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Bag Toppers</p>
                  {/* <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' /> */}
                </a>
              </div>


              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Banners</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>


              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Booklets</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>


              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Bookmarks</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>

              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Boxes</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Brochures</p>
                  {/* <MdOutlineKeyboardArrowRightyboardArrowRight className='right-4 text-xl absolute' /> */}
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Business Cards</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Calendars</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Canvas Prints</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Car and Vehical Decals</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Catalogs</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>


              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Carbonless Forms</p>
                  {/* <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' /> */}
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Chalkboard Markers</p>
                  {/* <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' /> */}
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Decals</p>
                  <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' />
                </a>
              </div>



              <div>
                <a className='text-[15px] hover:bg-[#EBF1F1] flex justify-start items-center pl-5 mb-4 mt-4 relative' href="">
                  <p>Counter Cards</p>
                  {/* <MdOutlineKeyboardArrowRight className='right-4 text-xl absolute' /> */}
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
        <div className='lg:w-[68%] xl:w-[60%] w-full '>
          <TopSellerBox />
          <PoliticalCampaing/>
          <UpdateProduct />
          <BestDeals />
          <PrintChoice/>
          <VideoReff/>
          <Services />
        </div>
    </div>
  )
}

export default HeroDown