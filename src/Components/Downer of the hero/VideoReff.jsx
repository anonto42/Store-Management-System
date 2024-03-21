import React from 'react'

const VideoReff = () => {
  return (
    <>
        <div className='px-8 mt-14 w-full rounded-xl overflow-hidden relative'>
            <div className=' w-full'>
                <video autoPlay loop className='rounded-xl'  >
                    <source  src="https://images.uprinting.com/Landing-Pages/33lp-b.mp4" />
                </video>
                <div className='w-full px-8 overflow-hidden'><div className='w-full rounded-b-xl h-[200px] bg-[#02457C]  z-50'></div>
                </div>
            </div>
                
        </div>
    </>
  )
}

export default VideoReff