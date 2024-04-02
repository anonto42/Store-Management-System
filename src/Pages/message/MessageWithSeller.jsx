import React, { useEffect, useState } from 'react'
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { FcGallery } from "react-icons/fc";
import { IoMdSend } from "react-icons/io";

const MessageWithSeller = () => {
    const[top,setTop] = useState();

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
          window.scrollY > 0 ? setTop(true) : setTop(false);
    
          return ()=>{
            window.removeEventListener('scroll',()=>{
              window.scrollY > 0 ? setTop(true) : setTop(false);
            })
          }
        })
      },[])
  return (
    <div className={top ? 'w-full h-[80vh] bg-[url("/assets/message.jpg")] bg-cover' : 'w-full h-[80vh] lg:mt-[47px] bg-[url("/assets/message.jpg")] bg-cover'}>
        <div className='w-full h-full bg-[#282727a9] relative'>
            <div className='w-full h-[10vh] bg-[#fab22d] px-2 shadow-sm shadow-black flex justify-between items-center'>
                <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                    <img className='w-full h-full' src="https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=" alt="" />
                </div>
                <h4 className='text-[20px] font-medium text-[#464646] capitalize'>message with seller</h4>
                <div className='text-[40px] text-white cursor-pointer'>
                    <HiDotsCircleHorizontal />
                </div>
            </div>
            <div className='w-full h-[61vh] overflow-auto relative'>
                {/* seller message */}
                <div className='absolute left-4 bottom-[105px]'>
                    <div className='flex items-center relative'>
                            <img src="https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=" className='w-[30px] rounded-full h-[30px]' />
                            <div className='max-w-[300px] px-3 bg-[#ffffff9d] py-1 rounded-lg ml-5'>
                                <p>{'How can i help you'}</p>
                            </div>
                        </div>
                </div>
                {/* my message */}
                <div className='absolute right-3 bottom-3 pr-3 pb-5'>
                    <div className='flex items-center relative'>
                        <div className='max-w-[300px] px-3 bg-[#ffffff9d] py-1 rounded-lg mr-5'>
                            <p>{'what is the price lasdfsdf asldjfs df sdlfsdfkj sdkf of this logo'}</p>
                        </div>
                        <img src="https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=" className='w-[30px] rounded-full h-[30px]' />
                        <p className='absolute -bottom-1 right-[6.2px] text-white text-[8px] font-serif'>Send</p>
                    </div>
                </div>
                
            </div>
            <div className='absolute bottom-0 w-full h-[9vh] bg-[#283B45] flex justify-between px-6 items-center'>
                <div className=''>
                    <label title='Select image' className='cursor-pointer w-[30px]' htmlFor="innnp">
                        <FcGallery className='w-[6vh] h-[9vh]' />
                    </label>
                    <input className='hidden' type="file" id='innnp' />
                </div>
                <div className=''>
                    <input placeholder='Text' className='w-[300px] sm:w-[400px] md:w-[560px] lg:w-[780px] h-[5vh] rounded-md border-none outline-none px-5 text-[20px] font-[500] text-[#28163dcc]' type="text" id="" />
                </div>
                <div className='text-[35px] text-white'>
                    <IoMdSend title='Click for send message' className='cursor-pointer' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MessageWithSeller