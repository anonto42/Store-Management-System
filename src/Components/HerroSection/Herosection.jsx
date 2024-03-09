import React from 'react'

const Herosection = () => {
  return (
    <div className='w-full relative h-[330px]'>
      <img src="https://staticecp.uprinting.com/11160/1024x336/halgas_wrath_banner_tablet.jpg" className= 'w-full -z-20 absolute h-full' />
      <div className='w-full h-full'>
        <div className='h-[22%] w-full'></div>
        <div className='flex h-[45%] w-full'>
          <div className=' pl-7 w-[50%]'>
            <h1 className='text-white text-3xl font-semiboldz'>Print Like A Pro</h1>
            <p className='my-4 text-white text-[15px]'>When it has to be right the first time</p>
            <button className='w-[170px]  font-bold text-white cursor-pointer text-xl border-[2px] h-[50px]'>SHOP NOW</button>
          </div>
          <div className='w-[50%]'></div>
        </div>
        <div className='h-[33%] px-[10%] w-full flex justify-center items-center'>
          <div className=' hidden md:flex justify-between items-center md:w-[550px] '>
            <button className='w-[110px] h-[40px] rounded-full text-white hover:bg-blue-600 bg-blue-700 font-semibold'>Packaging</button>
            <button className='w-[110px] mx-4 h-[40px] rounded-full text-white hover:bg-blue-600 bg-blue-700 font-semibold'>Stickers</button>
            <button className='w-[110px] h-[40px] rounded-full text-white hover:bg-blue-600 bg-blue-700 font-semibold'>Brochures</button>
            <button className='w-[110px] mx-4 h-[40px] rounded-full text-white hover:bg-blue-600 bg-blue-700 font-semibold'>Bookets</button>
            <button className='w-[110px] h-[40px] rounded-full text-white hover:bg-blue-600 bg-blue-700 font-semibold'>Postcards</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection