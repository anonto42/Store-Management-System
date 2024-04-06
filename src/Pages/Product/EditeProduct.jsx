import React from 'react'

const EditeProduct = () => {
  return (
    <div className='w-full bg-[666b66] pt-[60px] pb-[40px] lg:pt-[90px]'>
        <div className='w-[470px] sm:w-[600px] md:w-[700px] lg:w-[800px] h-auto border-2 border-[#2cfd2c] m-auto flex'>
          <div className='h-full w-[100px] border-r-2 border-[#2cfd2c]'>
            <div className='w-full border-b-2 border-[#2cfd2c] h-[11.667vh]'></div>
            <div className='w-full border-b-2 border-[#2cfd2c] h-[11.667vh]'></div>
            <div className='w-full border-b-2 border-[#2cfd2c] h-[11.667vh]'></div>
            <div className='w-full border-b-2 border-[#2cfd2c] h-[11.667vh]'></div>
            <div className='w-full border-b-2 border-[#2cfd2c] h-[11.667vh]'></div>
            <div className='w-full border--2 border-[#2cfd2c] h-[11.667vh]'></div>
          </div>
          <div className='h-[full] w-[370px] sm:w-[500px] md:w-[600px] lg:w-[700px] bg-slate-700 relative'>
            <div className='border-2  absolute'>
             <span className='text-white text-[20px]'>this is an art bord</span>
            </div>
          </div>
        </div>
        <div className='w-[470px] sm:w-[600px] md:w-[700px] lg:w-[800px] h-auto m-auto flex mt-7 justify-between'>
          <button title='Buy this Design' className='h-[60px] w-[130px] text-[20px] font-bold text-white rounded-lg bg-[#2ea240] hover:bg-[#36a847] hover:scale-95 active:scale-100 hover:shadow-lg shadow-gray-900'>Buy Now</button>
          <button title='Add to cart for Buy this Design later' className='h-[60px] w-[130px] text-[20px] font-bold text-white rounded-lg bg-[#4f4ded] hover:bg-[#5956f1] hover:scale-95 active:scale-100 hover:shadow-lg shadow-gray-900'>Add to Cart</button>
        </div>
        <div className='w-[470px] sm:w-[600px] md:w-[700px] lg:w-[800px] h-auto m-auto flex mt-7 justify-center'>
          <button title='Download Preview file' className='h-[60px] w-[190px] text-[17px] font-semibold text-white hover:text-[#d5c8c8] rounded-lg bg-[#4cc1f8] hover:bg-[] hover:scale-95 active:scale-100 hover:shadow-lg shadow-gray-900 active:text-[#fbc66a]'>Download Preview</button>
        </div>
    </div>
  )
}

// 11.667
// 13.334

export default EditeProduct