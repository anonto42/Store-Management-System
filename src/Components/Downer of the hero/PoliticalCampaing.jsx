import React, { useState } from 'react'
import Cart from '../Cart/Cart'
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const PoliticalCampaing = () => {
  const data =[
    {
      img:"https://staticecp.uprinting.com/10796/250x250/DM-4881-01.jpg",
      title:"Mailer Boxes"
    },
    {
      img:"https://staticecp.uprinting.com/260/250x250/Vinyl_Banners_Marketing_Materials_A.jpg",
      title:"Vinyl Banners"
    },
    {
      img:"https://staticecp.uprinting.com/10910/250x250/Custom_Stickers_Gallery_Badge.jpg",
      title:"Stickers"
    },
    {
      img:"https://staticecp.uprinting.com/1812/250x250/Standard_Postcards_Marketing_Materials_B.jpg",
      title:"Postcards"
    },
    {
      img:"https://staticecp.uprinting.com/71/250x250/Business_Flyers_Restaurant_Advertising_Materials_A.jpg",
      title:"Flyers"
    },
    {
      img:"https://staticecp.uprinting.com/10176/250x250/Brochures_Marketing_Materials_A.webp",
      title:"Brochures"
    },
    {
      img:"https://staticecp.uprinting.com/6975/250x250/UP_CTS_Label_PDP_Image_B.jpg",
      title:"Labels"
    },
    {
      img:"https://staticecp.uprinting.com/7829/250x250/Apparel-Jackets-J317.png",
      title:"Jackets"
    },
    {
      img:"https://staticecp.uprinting.com/6987/250x250/UP_Roll_Stickers_PDP_Image_A.jpg",
      title:"Roll Stickers"
    },
    {
      img:"https://staticecp.uprinting.com/1070/250x250/Window_Decals_Small_Busisness_Advertising_Materials_A.jpg",
      title:"Decals"
    }
  ]
  const [i,setI] = useState(1) ;
  
  function carcoual(){
    if ((i+3) == data.length) {
      setI(1)
    }else{
      setI(i+1)
    }
  }
  function carcoual2(){
    if (i == 0){
      setI(data.length-3)
    }else{
      setI(i-1)
    }
  }
  return (
    <div className='w-[100%] md:pl-6 sm:pl-4 pl-2 mb-[60px]'>
        <h1 className='text-xl sm:text-2xl font-bold'>Polical Campaign Materials</h1>
        <div className='flex justify-center items-center '>
           {/* <CiCircleChevLeft onClick={()=>carcoual2()} className='text-5xl mr-4 hidden md:block text-gray-500 cursor-pointer' /> */}
          <div className='flex overflow-auto topSellersBar'>
            {
              data.map((item,index)=> <a href='/product/678765' key={index} className=' w-auto h-[280px] ml-3 relative'>
                    <div className='w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] md:w-[220px] lg:w-[170px] lg:h-[170px] md:h-[220px] mt-5 hover:shadow-md hover:scale-105 duration-150 hover:drop-shadow-md'>
                      <img src={item.img} className='w-full h-full' />
                    </div>
                    <h2 className='p-1 font-semibold absolute m-[3px] text-sm md:text-xl'>
                        {item.title}
                    </h2>
                  </a>)
            }
                 
                  {/* <a href='' keyclassName=' w-auto h-[300px] relative'>
                    <div className='w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] md:w-[220px] lg:w-[170px] lg:h-[170px] md:h-[220px] mt-5 hover:shadow-md hover:scale-105 duration-150 hover:drop-shadow-md mx-2 lg:mx-10'>
                      <img src={data[i+1].img} className='w-full h-full' />
                    </div>
                    <h2 className='p-1 font-semibold absolute m-[3px] text-sm md:text-xl'>
                        {data[i+1].title}
                    </h2>
                  </a>
                  <a href='' keyclassName=' w-auto h-[300px] relative'>
                    <div className='w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] md:w-[220px] lg:w-[170px] lg:h-[170px] md:h-[220px] mt-5 hover:shadow-md hover:scale-105 duration-150 hover:drop-shadow-md'>
                      <img src={data[i+2].img} className='w-full h-full' />
                    </div>
                    <h2 className='p-1 font-semibold absolute m-[3px] text-sm md:text-xl'>
                        {data[i+2].title}
                    </h2>
                  </a> */}
          </div>
          {/* <CiCircleChevRight onClick={()=>carcoual()} className='ml-4 hidden md:block text-5xl text-gray-500 cursor-pointer' /> */}
        </div>
    </div>
  )
}

export default PoliticalCampaing