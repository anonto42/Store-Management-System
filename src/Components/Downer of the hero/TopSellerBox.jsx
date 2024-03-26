import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


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

  return (
    <div className='w-[full] px-2 lg:px-9 mt-2 mb-3'>
      <h1 className='text-xl mb-3 sm:text-2xl md:text-2xl font-bold'>Top Sellers</h1>
      <Swiper 
      spaceBetween={10}
      slidesPerView={4}
      pagination={{
        clickable:true
      }}
      modules={[]}
      className='mySwiper'
      >
        {
          data.map((item,index)=>{
            return(
              <a href="">
                <SwiperSlide className='hover:scale-105'> 
                  <img className='' src={item.img}  />
                  <h1 className='text-xl font-semibold'>{item.title}</h1>
                </SwiperSlide>
              </a>
            )
          })
        }
      </Swiper>
      </div>
  )
}

export default TopSellerBox





{/* <div className='w-[100%] h-[220px] sm:h-[350px] mb-[30px] md:pl-6 sm:pl-4 pl-2'>
<h1 className='text-xl sm:text-2xl md:text-2xl font-bold'>Top Sellers</h1>
      <div className='swiper w-[300px] h-[500px]'>
        <div className='swiper-wrapper card_slider'>
          {
            data.map((item,index)=>{
              return(
                <div className='swiper-slide '>
                  <div className='img_box'>
                    <img src={item.img} className='xyz w-full h-full ml-[14px] ' />
                    <h1 className='p-1 font-semibold absolute m-[3px] text-sm md:text-xl'>{item.title}</h1>
                  </div>
                </div>
                
              )
            })
          }
          </div>
      </div>
</div> */}