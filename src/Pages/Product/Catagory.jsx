import React from 'react'
import ProductCart from '../../Components/Cart/ProductCart/ProductCart'

const Catagory = () => {
  return (
    <div className=' w-full bg-[#3333] lg:pt-12 '>
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
      <div className='flex flex-wrap'>
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </div>
  )
}

export default Catagory