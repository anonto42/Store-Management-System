import React from 'react'
import ProductCart from '../../Components/Cart/ProductCart/ProductCart'

const Catagory = () => {
  const data =[
    {
      img:"https://staticecp.uprinting.com/10796/250x250/DM-4881-01.jpg",
      title:"Mailer Boxes",
      reating:2
    },
    {
      img:"https://staticecp.uprinting.com/260/250x250/Vinyl_Banners_Marketing_Materials_A.jpg",
      title:"Vinyl Banners",
      reating:2
    },
    {
      img:"https://staticecp.uprinting.com/10910/250x250/Custom_Stickers_Gallery_Badge.jpg",
      title:"Stickers",
      reating:5
    },
    {
      img:"https://staticecp.uprinting.com/1812/250x250/Standard_Postcards_Marketing_Materials_B.jpg",
      title:"Postcards",
      reating:4
    },
    {
      img:"https://staticecp.uprinting.com/71/250x250/Business_Flyers_Restaurant_Advertising_Materials_A.jpg",
      title:"Flyers",
      reating:3
    },
    {
      img:"https://staticecp.uprinting.com/10176/250x250/Brochures_Marketing_Materials_A.webp",
      title:"Brochures",
      reating:1
    },
    {
      img:"https://staticecp.uprinting.com/6975/250x250/UP_CTS_Label_PDP_Image_B.jpg",
      title:"Labels",
      reating:4
    },
    {
      img:"https://staticecp.uprinting.com/7829/250x250/Apparel-Jackets-J317.png",
      title:"Jackets",
      reating:4
    },
    {
      img:"https://staticecp.uprinting.com/6987/250x250/UP_Roll_Stickers_PDP_Image_A.jpg",
      title:"Roll Stickers",
      reating:5
    },
    {
      img:"https://staticecp.uprinting.com/1070/250x250/Window_Decals_Small_Busisness_Advertising_Materials_A.jpg",
      title:"Decals",
      reating:5
    }
  ]
  return (
    <div className=' w-full bg-[#3333] lg:pt-12 pb-8'>
      <div className='w-full p-5 sm:p-7 md:pl-12 bg-gradient-to-r  from-[#003654] vi-[#FEDDB3] to-[#004425]'>
        <h1 className='text-[25px] md:mb-2 sm:text-[28px] md:text-[31px] lg:text-[34px] font-semibold text-white'>
          {"The product catagory name"}
        </h1>
          <div className='flex items-center'>
            <div className='text-[24px] mr-5 text-yellow-300'>
              <span> &#9733; {/* this is the full star */}</span>
              <span> &#9733; {/* this is the full star */}</span>
              <span> &#9733; {/* this is the full star */}</span>
              <span> &#9733; {/* this is the full star */}</span>
              <span> &#9734; {/* this is the not full size star */} </span>

            </div>
            <h4 className=' text-[16px] lg:text-[18px] font-serif text-white font-[350]'> <span className='font-sans text-[18px]'>({'1224'})</span> Reviews</h4>
          </div>
        <ul className=' text-white list-inside list-[circle] mt-3 mb-2 font-light'>
          <li className=''>Round, slim, square, and custom shapes available</li>
          <li className=''>Premium finish and cardstock choices</li>
          <li className=''>Design your business cards online or upload your own design</li>
        </ul>
      </div>
      <div className='flex flex-wrap px-[2px] justify-center'>
        {
          data.map((item,index)=><ProductCart item={item} key={index} />)
        }
        
      </div>
    </div>
  )
}

export default Catagory