import React, { useContext, useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";
import SideBar from '../SideBar/SideBar';
import { GrCart } from "react-icons/gr";
import myContext from '../../Context/myContext';
import { CiSearch } from 'react-icons/ci';
import AllProduct from './NavBerComponents/AllProduct';
import NarltemAfterLg from './NavBerComponents/NarItemAfterLg';
import PackagingCompo from './NavBerComponents/PackagingCompo';
import LabelsSSSSS from './NavBerComponents/LabelsSSSSS';
import BannerSSSS from './NavBerComponents/BannerSSSS';
import PromoSSSS from './NavBerComponents/PromoSSSS';
import CollectionSSSS from './NavBerComponents/CollectionSSSS';

const Naveber = () => {
  
  const usr = JSON.parse(localStorage.getItem("user"));

  const {bar,barOnOff,Materials, setMaterials,Products,item , setProducts,Packaging , setPackaging , Labels,setLabels,Banners,setBanners,Promo,setPromo,Collections,setCollections} = useContext(myContext);

  const [maneuBar,setManeuBar] = useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY > 0 ? setManeuBar(true) : setManeuBar(false);

      return ()=>{
        window.removeEventListener('scroll',()=>{
          window.scrollY > 0 ? setManeuBar(true) : setManeuBar(false);
        })
      }
    })
  },[])

  return (
    <div className='w-full mt-3 lg:mt-0 pb-[90px] shadow-md lg:pb-[48px] h-[0px] bg-[#ffff] sticky top-0 flex justify-between p-4 xl:px-[8%] items-center text-3xl z-50'>
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
          <div className=' hidden lg:block absolute xl:right-[12%] right-[6%] text-sm border-r pr-[1%] -mt-2 '>
            <a href={usr ? "account" : "ragister"}>{usr ? '' :"Hi, Log In !"} <br /> <span className='text-[#126CB5] font-semibold '>Your Account</span></a>
            <div></div>
          </div>
        </div>
      <div className='relative lg:mt-7'>
        <a href="/cart"><GrCart title="Cart's"/></a>
        <div className=' absolute text-xs w-4 h-4 flex justify-center items-center rounded-full bg-red-700 text-white top-[46px] cursor-help -right-1 -mt-[54px]'>{1}</div>
      </div>

      <div className='w-[95%] mt-28 absolute lg:hidden flex justify-center items-center'>
        <input type="text" placeholder='Search (e.g. labels, boxes, etc)' className=' placeholder:text-black outline-none text-sm border h-[40px] p-[20px] border-[#88B5DA] w-[100%]' />
        <CiSearch className=' absolute right-[-2px] cursor-pointer w-[40px] h-[40px] bg-[#126CB5] text-[#fff] outline-none ' />
      </div>
      {/* destop */}

      <div className={  maneuBar ? '-top-[150px] duration-200 ease-in lg:flex hidden w-full h-14 border-t shadow-md border-[#3333] absolute left-0 right-0 bg-white text-[15px] justify-between items-center text-[#126CBA] font-semibold px-[3%] xl:px-[10%] 2xl:px-[13%]' : 'duration-100 ease-in top-[58px] lg:flex hidden w-full h-14 border-t shadow-md border-[#3333] absolute left-0 right-0 bg-white text-[15px] justify-between items-center text-[#126CBA] font-semibold px-[3%] xl:px-[10%] 2xl:px-[13%]'}>
        <div className='h-[100%] cursor-pointer pt-2 border-l border-r px-[4px] border-transparent hover:bg-[#f8f7f5] hover:border-[#3333]' onMouseLeave={()=>{setProducts(false)}}  
        onMouseEnter={()=> setProducts(true) }>View All Products</div>
        <div className='h-[100%] cursor-pointer pt-2 border-l border-r px-[4px] border-transparent hover:bg-[#f8f7f5] hover:border-[#3333] b-5' 
        onMouseLeave={()=>{setMaterials(false)}}  
        onMouseEnter={()=> setMaterials(true) }>Marketing Materials</div>
        <div className='h-[100%] cursor-pointer pt-2 border-l border-r px-[4px] border-transparent hover:bg-[#f8f7f5] hover:border-[#3333]' 
        onMouseLeave={()=>{setPackaging(false)}}  
        onMouseEnter={()=> setPackaging(true) }>Boxes & Packaging</div>
        <div className='h-[100%] cursor-pointer pt-2 border-l border-r px-[4px] border-transparent hover:bg-[#f8f7f5] hover:border-[#3333]'
        onMouseEnter={()=>setLabels(true)}
        onMouseLeave={()=>setLabels(false)}>Stickets & Labels</div>
        <div className='h-[100%] cursor-pointer pt-2 border-l border-r px-[4px] border-transparent hover:bg-[#f8f7f5] hover:border-[#3333]' 
        onMouseEnter={()=>setBanners(true)}
        onMouseLeave={()=>setBanners(false)}>Signs & Banners</div>
        <div className='h-[100%] cursor-pointer pt-2 border-l border-r px-[4px] border-transparent hover:bg-[#f8f7f5] hover:border-[#3333]' 
        onMouseEnter={()=>setPromo(true)}
        onMouseLeave={()=>setPromo(false)}>Apparel & Promo</div>
        <div className='h-[100%] cursor-pointer pt-2 border-l border-r px-[4px] border-transparent hover:bg-[#f8f7f5] hover:border-[#3333]' 
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