import React, { useState } from 'react'

const Cart = (props) => {
    const [state,setState] = useState(true);
  return (
    <div className=' w-auto h-[300px] relative'>
        <div
            className='w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] md:w-[220px] lg:w-[170px] lg:h-[170px] md:h-[220px] mb-4 mr-2 md:mr-5 mt-5 rounded-lg bg-white overflow-hidden shadow-md drop-shadow-md'
        >
            {/* {
                state && <div 
                onMouseOver ={()=> setState(true)}
                onMouseLeave={()=> setState(false)}
            className=''>
                <button
                onMouseOver ={()=> setState(true)}
                onMouseLeave={()=> setState(false)}
                className='z-[9999] hover:bg-[crimson] hover:scale-125 duration-150  w-[200px] mb-10 h-[40px] bg-[#00a200] text-white absolute mt-[130px] ml-12 font-bold rounded-lg'>SHOP NOW</button>
            </div>
            }
             */}


                {/* //  onMouseOver ={()=> setState(true)}
                //  onMouseLeave={()=> setState(false)} */}

                <img src="" className='w-full h-full' />
            
        </div>
            <h2 className='p-1 font-semibold absolute m-[3px] text-sm md:text-xl'>
                {'title'}
            </h2>
    </div>
  )
}

export default Cart