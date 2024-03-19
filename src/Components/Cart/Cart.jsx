import React, { useState } from 'react'

const Cart = () => {
    const [state,setState] = useState(true);

  return (
    <div>
        <div
            className='w-[290px] h-[340px] mb-4 relative mx-5 rounded-lg bg-white overflow-hidden shadow-md drop-shadow-md'
        >
            {
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
            


            <div
                 onMouseOver ={()=> setState(true)}
                 onMouseLeave={()=> setState(false)}
            
            className='hover:blur-sm w-[290px] h-[290px]'>
                <img src="" className='w-full h-full' />
            </div>
            <h2 className='p-2 text-xl font-[450]'>
                {"Mailer Boxes"}
            </h2>

            
        </div>
    </div>
  )
}

export default Cart