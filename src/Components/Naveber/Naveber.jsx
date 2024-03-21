import React, { useContext, useState } from 'react'
import { FaBars } from "react-icons/fa";
import SideBar from '../SideBar/SideBar';
import { GrCart } from "react-icons/gr";
import myContext from '../../Context/myContext';
import { CiSearch, CiSettings } from 'react-icons/ci';
import NarltemAfterLg from '../NevBerLetterxl/NarItemAfterLg';
import PackagingCompo from '../NevBerLetterxl/PackagingCompo';
import LabelsSSSSS from '../NevBerLetterxl/LabelsSSSSS';
import BannerSSSS from '../NevBerLetterxl/BannerSSSS';
import PromoSSSS from '../NevBerLetterxl/PromoSSSS';
import CollectionSSSS from '../NevBerLetterxl/CollectionSSSS';
import AllProduct from '../NevBerLetterxl/AllProduct';

const Naveber = () => {
  const {bar,barOnOff,Materials , setMaterials,Products , setProducts,Packaging , setPackaging , Labels,setLabels,Banners,setBanners,Promo,setPromo,Collections,setCollections} = useContext(myContext);
  
  return (
    <div className='w-full h-[50px] bg-[#ffff]  flex justify-between p-4 xl:px-[8%] items-center text-3xl'>
      {bar && <SideBar/>}
      {/* main bar */}
      <div className='cursor-pointer lg:hidden'><FaBars onClick={()=> barOnOff()} /></div>
        <div className='lg:w-full lg:h-full flex '>
         <a href="/">
            <img className='w-[150px]' src="https://s1.uprinting.com/assets/img/uprinting-logo-new.webp" alt="" />
          </a>

          <div className='absolute ml-[170px]'>
            <a href="" className='hidden absolute -mt-1 text-[#225ab5] font-bold lg:block text-sm'>
              <p>888.888.4211</p>
            </a>
            <a href="" className='hidden lg:block text-sm mt-4 font-semibold'>
              Quality Customer Service
            </a>
          </div>
          {/*  */}
          <div className='w-[45%] left-[26%] hidden mt-3 lg:flex justify-center items-center relative'>
            <input type="text"placeholder='Search (e.g. labels, boxes, etc)' className=' placeholder:text-black outline-none placeholder:text-sm text-sm border h-[40px] p-[20px] border-[#88B5DA] w-[100%]' />
            <CiSearch className=' absolute right-[0px] cursor-pointer w-[40px] h-[40px] bg-[#126CB5] text-[#fff] outline-none ' />
          </div>
          <div className=' hidden lg:block absolute xl:right-[12%] right-[6%] text-sm border-r pr-[1%] -mt-2 h-11 w-22'>
            <h3>Hi, Log In! <br /> <span className='text-[#126CB5] font-semibold '>Your Account</span></h3>
            <div></div>
          </div>
        </div>
      <div className='relative'>
        <a href="/cart"><GrCart title="Cart's"/></a>
        <div className=' absolute text-xs w-4 h-4 flex justify-center items-center rounded-full bg-red-700 text-white top-[46px] cursor-help -right-1 -mt-[54px]'>{1}</div>
      </div>

      {/* destop */}

      <div className='lg:flex hidden w-full h-14 border-t border-[#3333] absolute left-0 right-0 top-[102px] text-[15px] justify-between items-center text-[#126CBA] font-semibold px-[3%] xl:px-[10%] 2xl:px-[13%]'>
        <div className='h-[110%] mt-1 cursor-pointer pt-2 border border-transparent hover:bg-[#f8f7f5] hover:border-[#3333]' onMouseLeave={()=>{setProducts(false)}}  
        onMouseEnter={()=> setProducts(true) }>View All Products</div>
        <div className='h-[110%] mt-1 cursor-pointer pt-2 border border-transparent hover:bg-[#f8f7f5] hover:border-[#3333] b-5' 
        onMouseLeave={()=>{setMaterials(false)}}  
        onMouseEnter={()=> setMaterials(true) }>Marketing Materials</div>
        <div className='h-[110%] mt-1 cursor-pointer pt-2 border border-transparent hover:bg-[#f8f7f5] hover:border-[#3333]' 
        onMouseLeave={()=>{setPackaging(false)}}  
        onMouseEnter={()=> setPackaging(true) }>Boxes & Packaging</div>
        <div className='h-[110%] mt-1 cursor-pointer pt-2 border border-transparent hover:bg-[#f8f7f5] hover:border-[#3333]'
        onMouseEnter={()=>setLabels(true)}
        onMouseLeave={()=>setLabels(false)}>Stickets & Labels</div>
        <div className='h-[110%] mt-1 cursor-pointer pt-2 border border-transparent hover:bg-[#f8f7f5] hover:border-[#3333]' 
        onMouseEnter={()=>setBanners(true)}
        onMouseLeave={()=>setBanners(false)}>Signs & Banners</div>
        <div className='h-[110%] mt-1 cursor-pointer pt-2 border border-transparent hover:bg-[#f8f7f5] hover:border-[#3333]' 
        onMouseEnter={()=>setPromo(true)}
        onMouseLeave={()=>setPromo(false)}>Apparel & Promo</div>
        <div className='h-[110%] mt-1 cursor-pointer pt-2 border border-transparent hover:bg-[#f8f7f5] hover:border-[#3333]' 
        onMouseEnter={()=>setCollections(true)}
        onMouseLeave={()=>setCollections(false)}>Featured Collections</div>
      </div>
      {
        Products && <AllProduct/>
      }
      {
        Materials && <NarltemAfterLg/>
      }
      {
        Packaging && <PackagingCompo />
      }
      {
        Labels && <LabelsSSSSS/>
      }
      {
        Banners && <BannerSSSS />
      }
      {
        Promo && <PromoSSSS/>
      }
      {
        Collections && <CollectionSSSS/>
      }
    </div>
  )
}

export default Naveber