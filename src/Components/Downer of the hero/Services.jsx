import React from 'react'

const Services = () => {
  return (
    <div>
        <div className='my-9'>
            <h1 className='flex justify-center items-center text-xl font-bold'>Quality custom printing. Guaranteed.</h1>
            <p style={{textAlign:'center'}} className='flex mt-2 justify-center items-center px-1'>From stickers to business cards, Uprinting Makes it easy for you to meet your business with our online printing services.</p>
        </div>
        <div className='md:flex justify-center items-center pl-9 md:pl-0 ml-3 md:mr-0 lg:ml-0'>
                <div className='w-[90%] md:w-[250px]  h-[200px] md:h-[250px] bg-[#F8F7F5] md:block  flex justify-center'>
                    <div className='w-[30%] md:mb-8 md:ml-10  md:mt-3 md:w-[180px] flex justify-center items-center'>
                        <img className=' md:w-[70px]' src="https://staticecp.uprinting.com/3/free-artwork.svg" alt="" />
                    </div>
                    <div style={{textAlign:"center"}} className='w-[70%] md:w-full md:px-2 flex flex-col justify-center' >
                        <h2 className='text-xl font-semibold'>Free Artwork</h2>
                        <p>Available in squares or rectangles</p>
                    </div>
                </div>
                <div className='w-[90%] md:w-[250px] h-[200px] md:mx-5 my-3 md:h-[250px] bg-[#F8F7F5] md:block  flex justify-center'>
                    <div className='w-[30%] md:mb-8 md:ml-10 md:mt-3 md:w-[180px] flex justify-center items-center'>
                        <img className=' md:w-[90px]' src="https://staticecp.uprinting.com/3518/Custom%20Product%20Builder.svg" alt="" />
                    </div>
                    <div style={{textAlign:"center"}} className='w-[70%] md:w-full md:px-2 flex flex-col justify-center' >
                        <h2 className='text-xl font-semibold'>Free Artwork</h2>
                        <p>Available in squares or rectangles</p>
                    </div>
                </div>
                <div className='w-[90%] md:w-[250px] h-[200px] md:h-[250px] bg-[#F8F7F5] md:block  flex justify-center'>
                    <div className='w-[30%] md:ml-10  md:mb-8 md:mt-3 md:w-[180px] flex justify-center items-center'>
                        <img className=' md:w-[90px]' src="https://staticecp.uprinting.com/2/reliable.svg" alt="" />
                    </div>
                    <div style={{textAlign:"center"}} className='w-[70%] md:w-full md:px-2 flex flex-col justify-center' >
                        <h2 className='text-xl font-semibold'>Free Artwork</h2>
                        <p>Available in squares or rectangles</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Services