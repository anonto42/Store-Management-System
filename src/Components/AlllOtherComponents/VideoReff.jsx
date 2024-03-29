import React from 'react'

const VideoReff = () => {
  return (
    <>
        <div className='px-8 mt-14 w-full rounded-xl overflow-hidden relative'>
            <div className=' w-full'>
                <video autoPlay loop className='rounded-xl'  >
                    <source  src="https://images.uprinting.com/Landing-Pages/33lp-b.mp4" />
                </video>
                <div className='w-full -mt-14 overflow-hidden'>
                  <div className='w-full rounded-b-xl h-[200px] bg-[#02457C] text-white'>
                    <div className='absolute bottom-[100px] md:bottom-20 text-sm md:text-xl flex ml-[8%]'>
                      <img className='mr-10 w-[100px]' src="https://staticecp.uprinting.com/10397/brilliantly-white-img.png" alt="" />
                      <p>33 checkpoints for printing perfection</p>
                    </div>
                    <div className=' absolute flex justify-center bottom-5 cursor-pointer'>
                      <button className=' w-[200px] ml-[9%] h-[50px] duration-150 hover:bg-green-700 hover:rounded-lg bg-green-500'>LEARN MORE</button>
                    </div>
                  </div>
                </div>
            </div>
                
        </div>
    </>
  )
}

export default VideoReff