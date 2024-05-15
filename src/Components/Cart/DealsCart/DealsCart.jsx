import React from 'react'

const DealsCart = ({item}) => {
    
  return (
        <a href={`/product/1234`} className='border-2 md:w-[350px] mr-4 md:h-[135px] xl:w-[400px] xl:h-[145px] 2xl:w-[450px] 2xl:h-[185px] flex hover:shadow-md hover:scale-[1.020] duration-[120ms] mb-3'>
            {/* <div className='w-[300px] md:w-[165px] 2xl:w-[200px] h-full'>
                <img  className='w-full h-full' src={item.img} />           
            </div> */}
            <div className='min-w-[60%] w-[165px] 2xl:w-[200px] h-full'>
                <img  className='w-full h-full' src={item.img} />           
            </div>
            <div className='p-3 w-[40%] overflow-clip'>
                <h2 className=' font-bold'>{item.title}</h2>
                <p>{item.desc}</p>
            </div>
        </a>
    )
}

export default DealsCart