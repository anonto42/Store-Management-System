import React from 'react'

//             "imageUrl" : "",
//             "title" : "Logo",
//             "price" : "12$",
//             "Status" : "edited",
//             "itemAmount" : "3"

const Page_cart = ({cartData}) => {
  return (
    <div className='w-full h-[80px] overflow-hidden mb-3 rounded-xl flex shadow-sm bg-slate-600'>
        <div className='w-[130px] h-full overflow-hidden'>
            <img src="/assets/message.jpg" className='w-full h-full' alt="*" />
        </div>
        <div className='w-full h-full flex justify-between text-white'>
            <div className='w-auto h-full pl-5 pt-2'>
                <h3 className='text-[23px] font-semibold'>
                    {
                        cartData.title
                    }
                </h3>
                <h4 className='text-[12px] font-light'>
                    {
                        cartData.Status
                    }.
                </h4>
            </div>
            <div className='w-[60px] h-full text-center pt-2'>
                <p className='font-bold'>
                    {
                        cartData.price
                    }
                </p>
                <div className='w-full h-[30px] mt-1 rounded-md overflow-hidden text-black bg-white'>
                    <input className='w-full h-full font-semibold italic px-6 outline-none' type="text" value={cartData.itemAmount} name="" id="" />
                </div>
            </div>
            <div className='w-[90px] h-full'>
                    <div className='flex justify-around pt-3'>
                        <div className='w-[30px] h-[30px] rounded-full bg-red-600 active:scale-105 ease-in-out'></div>
                        <div className='w-[30px] h-[30px] rounded-full bg-red-600 active:scale-105 ease-in-out'></div>
                    </div>
                    <div className='w-full h-full mt-1 flex justify-center'>
                        <div className='w-[35px] h-[27px] rounded-lg bg-red-600 active:scale-105 ease-in-out'></div>
                    </div>
            </div>
            <div className='w-auto h-full flex justify-center items-center'>
                <div className='w-[45px] h-[40px] bg-[green] rounded-lg active:scale-105 ease-in-out mr-4'></div>
            </div>
        </div>
    </div>
  )
}

export default Page_cart