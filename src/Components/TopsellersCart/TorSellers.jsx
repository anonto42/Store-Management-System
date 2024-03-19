import React from 'react'
import Cart from '../Cart/Cart'

const TorSellers = () => {
  return (
    <div className='w-full h-[65vh] bg-[#eafaa3]'>
        <h1 className='text-2xl md:text-3xl font-semibold pl-10 pt-5'>Top Sellers</h1>
        <div className='mt-7 ml-5 flex overflow-auto topSellersBar '>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
        </div>
    </div>
  )
}

export default TorSellers