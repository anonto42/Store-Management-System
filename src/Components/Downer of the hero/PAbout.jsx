import React from 'react'

const PAbout = () => {
  return (
    <div className='mt-10 w-full h-[auto] bg-[#F8F7F5]'>
        <div className='w-full -5 text-center h-[110px] pt-5'>
            <h1 className='text-xl font-bold px-5'>1,000,000+ business professionals trust us with their printing.</h1>
            <p className='px-5'>Our customers come back for out quality printing . See why were the printing company of choice by designers, marketers, and business owenrs. <a href='' className='text-[#00838D] hover:text-[rgb(0,131,56)]'>See all UPrinting reviews.</a></p>
        </div>
        <div className='flex justify-between px-[2%] mt-7 sm:pt-0 pt-10 pb-10'>
            <div className='bg-[#ffff] w-[49%] 2xl:w-[300px] h-[auto] lg:w-[260px] '>
                <div className='flex p-3'>
                    <div className='w-[66px] rounded-full'>
                        <img src="https://staticecp.uprinting.com/3514/Face1.png" alt="" />
                    </div>
                    <div className='pl-3'>
                        <h1 className='text-xl font-semibold lg:text-[14px]'>MaryAnn Halstead</h1>
                        <h2 className='text-sm lg:text-[12px]'>Graphic Designer</h2>
                        <h3 className='text-xs lg:text-[10px]'>Chester, SC</h3>
                        <div className='text-2xl text-yellow-400'>* * * * *</div>
                    </div>
                </div>
                <p className='text-sm italic px-3 lg:text-[12px] overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla perspiciatis suscipit nostrum dolores suscipit ....</p>
            </div>
            <div className='bg-[#ffff] w-[49%] h-[240px] 2xl:w-[300px] lg:w-[260px] '>
                <div className='flex p-3'>
                    <div className='w-[66px] rounded-full'>
                        <img src="https://staticecp.uprinting.com/3515/Face2.png" alt="" />
                    </div>
                    <div className='pl-3'>
                        <h1 className='text-xl font-semibold lg:text-[14px]'>MaryAnn Halstead</h1>
                        <h2 className='text-sm lg:text-[12px]'>Dr. Carole Ann Rollins</h2>
                        <h3 className='text-xs lg:text-[10px]'>DCI</h3>
                        <div className='text-2xl text-yellow-400'>* * * * *</div>
                    </div>
                </div>
                <p className='text-sm italic px-3 lg:text-[12px] overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla perspiciatis suscipit nostrum dolores suscipit ....</p>
            </div>
            <div className='bg-[#ffff] w-[49%] 2xl:w-[300px] hidden lg:block h-[240px] md:w-[250px] '>
                <div className='flex p-3'>
                    <div className='w-[66px] rounded-full'>
                        <img src="https://staticecp.uprinting.com/6274/Face-new.png" alt="" />
                    </div>
                    <div className='pl-3'>
                        <h1 className='text-xl font-semibold lg:text-[14px]'>Janna Berg</h1>
                        <h2 className='text-sm lg:text-[12px]'>Owner and Designer</h2>
                        <h3 className='text-xs lg:text-[10px]'>Home Decor</h3>
                        <div className='text-2xl text-yellow-400'>* * * * *</div>
                    </div>
                </div>
                <p className='text-sm italic px-3 lg:text-[12px] overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla perspiciatis suscipit nostrum dolores suscipit ....</p>
            </div>
        </div>
    </div>
  )
}

export default PAbout