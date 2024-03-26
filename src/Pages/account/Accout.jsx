import React, { useContext, useState } from 'react'
import myContext from '../../Context/myContext';
import { FaMagnifyingGlass } from "react-icons/fa6";

const Accout = () => {
  const{logOut}=useContext(myContext);
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div>

      <div className='flex justify-center'>
        <div className='w-[90%] text-xl font-bold border-b-2 pt-6 pb-9'>
          <h1 className='text-center'>Welcome,{'~~'}!</h1>
        </div>
      </div>

      <div className='text-center text-xl font-semibold my-6'>
        <h1>ORDERS & PROOFS</h1>
      </div>


      <div className='flex justify-center'>
        <div className=' w-[80%] lg:w-[60%] h-12 flex bg-slate-500'>
          <input type="text" className=' text-[15px] h-full px-5 font-semibold w-[94.8%] outline-none border-2 border-[#126CB5]' />
          <div className=' w-12 h-12 bg-[#126CB5] flex justify-center items-center text-white text-2xl cursor-pointer'>
            <FaMagnifyingGlass />
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center ml-[10%] sm:ml-[20%] md:ml-0'>
        <div className='border-2 border-black rounded-md w-[400px] sm:h-[150px] mt-10'>
          <div className=' hover:bg-slate-300 flex border-b-2 pb-2 justify-between  px-5 text-[18px] lg:text-xl my-3'><p>Orders On Hold</p> <p className='text-green-600'>{0}</p></div>
          <div className=' hover:bg-slate-300 flex border-b-2 pb-2 justify-between  px-5 text-[18px] lg:text-xl my-3'><p>Open Orders</p> <p className='text-red-600'>{0}</p></div>
          <div className=' hover:bg-slate-300 flex justify-between  px-5 text-[18px] pb-3 lg:text-xl '><p>All Orders </p> <p className='text-yellow-400'>{0}</p></div>
        </div>
        <div className='border-2 border-black rounded-md w-[400px] mt-10 min-h-[200px] md:ml-5'>
          <h4 className=''>{'resuld'}</h4>
        </div>
      </div>


    </div>
  )
}

export default Accout