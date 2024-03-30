import React, { useEffect, useState } from 'react'

const DealsCart = ({item}) => {
    
  return (
        <a href='/product/1234' className='w-[98%] h-[270px] border-2 md:w-[350px] mr-4 md:h-[135px] flex hover:shadow-md hover:scale-[1.020] duration-[120ms]'>
            <div className='md:w-[50%] md:h-[50%] h-full'>
                <img  className='w-full h-full md:h-[132px]' src={item.img} />           
            </div>
            <div className='p-3'>
                <h2 className=' font-bold'>{item.title}</h2>
                <p>{item.desc}</p>
            </div>
        </a>
    )
}

export default DealsCart