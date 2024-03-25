import React from 'react'
import Slider from "react-slick"
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const TopSellerBox = () => {
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

  let IsDrage = false,PrevPageX,PrevScrollLeft,
  CL = document.querySelector(".CCC")

  const Dar =(e)=>{
    IsDrage = true;
    PrevPageX = e.pageX;
    PrevScrollLeft = CL.scrollLeft;
  }
  
  const Daring =(e)=>{
    if (!IsDrage) return;
    e.preventDefault();
    let PositionDiff = e.pageX - PrevPageX;
    CL.scrollLeft = PrevScrollLeft - PositionDiff;
  }
  const DarStop =()=>{
    IsDrage = false;
  }


  return (
    <div className='w-[100%] h-[220px] sm:h-[350px] md:pl-6 sm:pl-4 pl-2'>
        <h1 className='text-xl sm:text-2xl md:text-2xl font-bold'>Top Sellers</h1>
          <div className='wrapper max-w-[1200px] mt- flex px- relative' > 
          {/* <FaArrowCircleLeft className='text-3xl cursor-pointer text-center absolute top-[50%] translate-y-[-50%] left-6 z-50 bg-white rounded-full' /> */}
              <div onMouseMove={Daring} onMouseDown={Dar} onMouseUp={DarStop} className='CCC flex cursor-pointer topSellersBar overflow-hidden'>
                  {
                    data.map((item,index)=>{
                      return(<a href='/product/678765' key={index} className=' w-auto h-[280px] ml-3 relative'>
                        <div className='w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] md:w-[220px] lg:w-[170px] lg:h-[170px] md:h-[220px] mt-5 hover:shadow-md hover:scale-105 duration-150 hover:drop-shadow-md'>
                            <img src={item.img} className='xyz w-full h-full ml-[14px] ' />
                            <h1 className='p-1 font-semibold absolute m-[3px] text-sm md:text-xl'>{item.title}</h1>
                        </div>
                        </a>
                      )
                    })
                  }
              </div>
          {/* <FaArrowCircleRight className='text-3xl cursor-pointer text-center absolute top-[50%] translate-y-[-50%] right-6 z-50 bg-white rounded-full' /> */}
          </div>
    </div>
  )
}

export default TopSellerBox