import React, { useState } from 'react'

const Cart = (props) => {
  return (
    <a href='' className=' w-auto h-[300px] relative'>
        <div
            className='w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] md:w-[220px] lg:w-[170px] lg:h-[170px] md:h-[220px] mb-4 mr-2 md:mr-5 mt-5 hover:shadow-md hover:scale-105 duration-150 hover:drop-shadow-md'
        >
                <img src={''} className='w-full h-full' />
            
        </div>
            <h2 className='p-1 font-semibold absolute m-[3px] text-sm md:text-xl'>
                {'title'}
            </h2>
    </a>
  )
}

export default Cart