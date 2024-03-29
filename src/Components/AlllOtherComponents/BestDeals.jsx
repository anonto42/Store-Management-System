import React from 'react'
import { Link } from 'react-router-dom'

const BestDeals = () => {
  return (
    <div className='w-full md:pl-6 sm:pl-4 pl-2 mb-7'>
        <h1 className='text-xl sm:text-2xl font-bold mb-7'>Best Deals</h1>
        <div className='flex'>
                <a href='' className='w-[98%] h-[270px] border-2 md:w-[350px] mr-4 md:h-[135px] flex hover:shadow-md hover:scale-[1.020] duration-[120ms]'>
                    <div className='md:w-[50%] md:h-[50%] h-full'>
                            <img  className='w-full h-full md:h-[132px]' src="https://staticecp.uprinting.com/11180/250x250/UP_Water_Activated_Tapes_PDP.jpg" />
                            
                    </div>
                    <div className='p-3'>
                        <h2 className=' font-bold'>Metal Prints</h2>
                        <p>Available in squares or rectangles</p>
                    </div>
                </a>
                <a href='' className='w-[98%] hidden h-[270px] border-2 md:w-[350px] md:h-[135px] md:flex hover:shadow-md hover:scale-[1.020] duration-[120ms]'>
                    <div className='md:w-[50%] md:h-[50%] h-full'>
                            <img  className='w-full h-full md:h-[132px]' src="https://staticecp.uprinting.com/11182/250x250/UP_Stand_Up_Pouches_PDP.jpg" />
                            
                    </div>
                    <div>
                        <h2>Metal Prints</h2>
                        <p>Available in squares or rectangles</p>
                    </div>
                </a>
        </div>
    </div>
  )
}

export default BestDeals