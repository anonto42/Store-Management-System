import React, { useContext, useState } from 'react'
import { MdCancel } from 'react-icons/md';
import Loader from '../../Components/loader/Loader';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

const Login = () => {
  const[loading ,setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookie] = useCookies(["refreshtoken","accestokens"]);

  const login = async (params) => {

    setLoading(true)

    params.preventDefault();

    try {

     const data = await axios.post("/user/login", { email , password});

     setCookie("accestokens",data.data.accestokens , { path:"/"} );
     setCookie("refreshtoken",data.data.refreshtoken , { path:"/"} );

     setEmail('')
     setPassword("")

     setLoading(false)

     toast.success(`User logged in successfully`);
     
     setTimeout(() => {
       
      window.location.href = "/"

     }, 4000);

      
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(`Failed to log in. Please check your credentials.`);
    }
  }

    function returnHome(){
        window.location.href = "/";
      }

  return (
    <div className='flex justify-center w-full h-[70vh]'>
      { loading  && <Loader/>}
      <div className='top mt-14 shadow-2xl drop-shadow-2xl shadow-black absolute sm:w-[640px] w-full bg-white' >
          <div className='w-full h-10 px-6 flex justify-end items-center text-2xl'>
            <MdCancel onClick={returnHome} className=' hover:text-gray-400 cursor-pointer' />
          </div>
          <div className='flex justify-start mx-10 text-xl font-bold pb-2 border-b'>
            <h1 className='mx-5'>Log In</h1>
          </div>
          <form action="POST">
            <div className='px-10 w-full'>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder='*Email Address' className='w-full mt-3 bg-slate-100 h-14 px-4 outline-none'  />
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder='*Password' className='w-full mt-3 bg-slate-100 h-14 px-4 outline-none'  />
              <button onClick={login} className='w-full h-12 bg-green-600 mt-3 cursor-pointer font-bold text-white hover:bg-green-700'>SIGNIN MY ACCOUT</button>
              <p className='mt-5 text-sm text-gray-400 pb-2 border-b'></p>
            </div>
           </form>
          <div className='flex justify-between items-center px-10'>
                <p className='my-3 mx-10 font-light'>New to UPrinting?</p> <a className=' underline italic font-thin' href='/forgot'>Forgot Password?</a>
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

export default Login