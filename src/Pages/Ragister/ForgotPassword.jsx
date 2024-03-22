import React from 'react'
import { MdCancel } from 'react-icons/md';

const ForgotPassword = () => {
    function returnHome(){
        window.location.href = "/";
      }
  return (
    <div className='flex justify-center w-full h-full'>
      <div className='top-0 mt-14 shadow-2xl drop-shadow-2xl shadow-black absolute sm:w-[640px] w-full bg-white' >
          <div className='w-full h-10 px-6 flex justify-end items-center text-2xl'>
            <MdCancel onClick={returnHome} className=' hover:text-gray-400 cursor-pointer' />
          </div>
          <div className='flex justify-start mx-10 text-xl font-bold pb-2 border-b'>
            <h1 className='mx-5'>Forgot Password</h1>
          </div>
          <div className='px-10 w-full'>
            <input type="email" placeholder='*Email Address' className='w-full mt-3 bg-slate-100 h-14 px-4 outline-none'  />
            <button className='w-full h-12 bg-green-600 mt-3 cursor-pointer font-bold text-white hover:bg-green-700'>RESSATE PASSWORD</button>
            <p className='mt-5 text-sm text-gray-400 pb-2 border-b'></p>
          </div>
          <div className='w-full px-10 pb-5'>
            <a href="/ragister">  
                <button className='w-full b-8 border-green-600 h-12 bg-white border text-green-600 mt-3 cursor-pointer font-bold hover:text-white hover:bg-green-700'>CREATE A NEW ACCOUT</button>
            </a>
          </div>
      </div>
    </div>
  )
}

export default ForgotPassword