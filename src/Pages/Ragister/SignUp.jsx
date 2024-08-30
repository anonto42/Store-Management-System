import React, { useContext , useState } from 'react'
import { MdCancel } from "react-icons/md";
import myContext from '../../Context/myContext';
import Loader from './../../Components/loader/Loader';
import axios from 'axios';

const SignUp = () => {

  // const {setEmail , setFirstName , setPassword , setLastName , setNumber , loading , email , password , firstName , lastName , phone , register} = useContext(myContext)
  const [loading , setLoading ] = useState(false)
  const [email , setEmail ] = useState();
  const [password, setPassword] = useState();
  const [firstName , setFirstName ] = useState();
  const [lastName, setLastName ] = useState();
  const [phone, setNumber] = useState();
  const [ userData , setUserRagisterData ] = useState();

  const register = async (params) => {

    params.preventDefault()

    await axios.post("http://localhost:3000/api/user/register", { email : email , password : password , firstName : firstName , lastName : lastName , phone : phone})


  }
  function returnHome(){
    window.location.href = "/";
  }
  return (
    <div className='flex justify-center w-full h-screen '>
      { loading && <Loader/>}
      <div className='top-[] mt-14 shadow-2xl drop-shadow-2xl shadow-black absolute sm:w-[640px] w-full bg-white' >
          <div className='w-full h-10 px-6 flex justify-end items-center text-2xl'>
            <MdCancel onClick={returnHome} className=' hover:text-gray-400 cursor-pointer' />
          </div>
          <div className='flex justify-start mx-10 text-xl font-bold pb-2 border-b'>
            <h1 className='mx-5'>First Time Here?</h1>
          </div>
          <div className='px-10 w-full'>
            <form action="POST">
              <p className='mt-5 text-sm text-gray-400'>Create an accout to get updadte on yout order.</p>
              <div className='flex justify-between mt-3'>
                <input placeholder='*First Name' value={firstName} onChange={e=>setFirstName(e.target.value)} type="text" className='w-[48%] bg-slate-100 h-14 px-4 outline-none' />
                <input placeholder='*Last Name' value={lastName} onChange={e=>setLastName(e.target.value)} type="text" className='w-[48%] bg-slate-100 h-14 px-4 outline-none' />
              </div>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder='*Email Address' className='w-full mt-3 bg-slate-100 h-14 px-4 outline-none'  />
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder='*Password' className='w-full mt-3 bg-slate-100 h-14 px-4 outline-none'  />
              <input type="text" value={phone} onChange={e=>setNumber(e.target.value)} placeholder='*Number' className='w-full mt-3 bg-slate-100 h-14 px-4 outline-none'  />
              <p className='mt-3 text-sm text-gray-400'>*We use phone number only for orders,to maximize on-time printing.</p>
              <button onClick={register} className='w-full h-12 bg-green-600 mt-3 cursor-pointer font-bold text-white hover:bg-green-700'>CREATE MY ACCOUT</button>
            </form>
            <p className='mt-5 text-sm text-gray-400 pb-7 border-b'>By creating an account, you agree to UPrinting's Terms of Service and Privacy Policy, including your consent to UPrinting sending e-mails about promotions and discounts.</p>
          </div>
          <div className='px-10 w-full py-8  text-gray-400'>
            <h1>Already have an account? <a href="/login" style={{fontFamily:"initial"}} className='ml-4 underline italic'> Log In</a></h1>
          </div>
      </div>
    </div>
  )
}

export default SignUp