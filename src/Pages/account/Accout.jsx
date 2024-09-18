import React, {useContext, useEffect, useState } from 'react'
import { FaMagnifyingGlass, FaPenToSquare } from "react-icons/fa6";
import Loader from './../../Components/loader/Loader';
import { MdDeleteForever } from "react-icons/md";
import EditeProducts from '../Admin/Products/EditeProducts';
import axios from 'axios';
import { IoMdSend } from 'react-icons/io';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import myContext from '../../Context/myContext';

const Accout = () => {

  const [user, setUser] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const [loader , setLoader] = useState();
  const [img , useImg] = useState();
  const [product , setProduct] = useState();
  const [cookies, setCookie] = useCookies(["refreshtoken","accestokens"]);
  const {editeProduct,setEditeProduct} = useContext(myContext);
  

  useEffect(()=>{
    axios.get("/user/getUser")
    .then(res=> setUser(res.data.user))
    .catch(err => console.log(err));

    axios.get("/user/getUser")
    .then(res=> setIsAdmin(res.data.user.isAdmin))
    .catch(err => console.log(err));

    axios.get('/user/getProducts')
    .then( res => setProduct(res.data.products))
    .catch(err => console.log(err));

  },[])

  // console.log(user)

  const logOut = async () =>{
    try {
      const res = await axios.post("/user/logout")

      setCookie('refreshtoken', '');
      setCookie('accestokens', '');

      toast.success(res.data.message)

      setTimeout(() => {
        window.location.href = '/'
      }, 4000);

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div>
      {
        isAdmin == false ? <div>
      <div className='flex justify-center'>
        <div className='w-[90%] text-xl font-bold border-b-2 pt-6 pb-9'>
          <h1 className='text-center'>Welcome,{}!</h1>
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
        <div className='border-2 px-4 border-black rounded-md w-[400px] mt-10 h-[200px] md:ml-5 overflow-auto'>

          <div className='flex w-full h-10 justify-between items-center mt-2 border'>
            <img src="https://s1.uprinting.com/assets/img/uprinting-logo-new.webp" className='w-[40px] h-[40px]' />
            <p>Lorem ipsum dolor sit amet.</p>
            <p className='w-9 h-full bg-green-400 text-center flex justify-center items-center text-white font-bold'>${'40'}</p>
          </div>

          <div className='flex w-full h-10 justify-between items-center mt-2 border'>
            <img src="https://s1.uprinting.com/assets/img/uprinting-logo-new.webp" className='w-[40px] h-[40px]' />
            <p>Lorem ipsum dolor sit amet.</p>
            <p className='w-9 h-full bg-green-400 text-center flex justify-center items-center text-white font-bold'>${'40'}</p>
          </div>

          <div className='flex w-full h-10 justify-between items-center mt-2 border'>
            <img src="https://s1.uprinting.com/assets/img/uprinting-logo-new.webp" className='w-[40px] h-[40px]' />
            <p>Lorem ipsum dolor sit amet.</p>
            <p className='w-9 h-full bg-green-400 text-center flex justify-center items-center text-white font-bold'>${'40'}</p>
          </div>

          <div className='flex w-full h-10 justify-between items-center mt-2 border'>
            <img src="https://s1.uprinting.com/assets/img/uprinting-logo-new.webp" className='w-[40px] h-[40px]' />
            <p>Lorem ipsum dolor sit amet.</p>
            <p className='w-9 h-full bg-green-400 text-center flex justify-center items-center text-white font-bold'>${'40'}</p>
          </div>

          <div className='flex w-full h-10 justify-between items-center mt-2 border'>
            <img src="https://s1.uprinting.com/assets/img/uprinting-logo-new.webp" className='w-[40px] h-[40px]' />
            <p>Lorem ipsum dolor sit amet.</p>
            <p className='w-9 h-full bg-green-400 text-center flex justify-center items-center text-white font-bold'>${'40'}</p>
          </div>

          <div className='flex w-full h-10 justify-between items-center mt-2 border'>
            <img src="https://s1.uprinting.com/assets/img/uprinting-logo-new.webp" className='w-[40px] h-[40px]' />
            <p>Lorem ipsum dolor sit amet.</p>
            <p className='w-9 h-full bg-green-400 text-center flex justify-center items-center text-white font-bold'>${'40'}</p>
          </div>


        </div>
      </div>

      <div className='text-center text-xl font-semibold my-6'>
        <h1>QUOTES</h1>
      </div>

      <div className='flex flex-col md:flex-row justify-center ml-[10%] sm:ml-[20%] md:ml-0'>
        <div className='border-2 border-black rounded-md w-[400px] sm:h-[150px] mt-10'>
          <div className=' hover:bg-slate-300 flex border-b-2 pb-2 justify-between  px-5 text-[18px] lg:text-xl my-3'><p>All Quotes</p> <p className='text-green-600'>{0}</p></div>
          <div className=' hover:bg-slate-300 flex border-b-2 pb-2 justify-between  px-5 text-[18px] lg:text-xl my-3'><p>Ready</p> <p className='text-red-600'>{0}</p></div>
          <div className=' hover:bg-slate-300 flex justify-between  px-5 text-[18px] pb-3 lg:text-xl '><p>On Hold</p> <p className='text-yellow-400'>{0}</p></div>
        </div>
        <div className='border-2 px-4 border-black rounded-md w-[400px] mt-10 h-[200px] md:ml-5 overflow-auto'>

          <div className='flex w-full h-10 justify-between items-center mt-2 border'>
            <img src="https://s1.uprinting.com/assets/img/uprinting-logo-new.webp" className='w-[40px] h-[40px]' />
            <p>Lorem ipsum dolor sit amet.</p>
            <p className='w-9 h-full bg-green-400 text-center flex justify-center items-center text-white font-bold'>${'40'}</p>
          </div>
        </div>
      </div>
      </div> :  <div className='mx-5'>
              <div className='w-full flex justify-center mt-8 py-10 border text-xl font-semibold underline'>Add Product</div>
              <div className='border w-full border-gray-300 h-[auto]'>
                <input type="file" id='imgTag' value={img} onChange={e=>useImg(e.target.files[0])} className='hidden'/>
                <label htmlFor="imgTag" className='flex justify-center text-center'>
                  <img src={"https://icons.veryicon.com/png/o/miscellaneous/simple-linear-icon/icon-img.png"} className=' cursor-pointer w-[130px] md:w-[200px]' alt="" />
                  <p className='mt-12 font-bold'>{img==null ? 'file wass not selected' : "file wass selected"}</p>
                </label>
                <p className='flex justify-center py-2 mb-3 text-sm text-stone-300'> *At First you should upload your image</p>
                <div className='flex justify-center'>
                  <button 
                    onClick={e => e}
                  className='px-4 h-[40px] rounded-md cursor-pointer font-bold text-white mb-5 bg-[#1aab1a]'>Upload image</button>
                </div>
                <input type="text" value={''} placeholder='This is your image url (dont change it)'className='w-[90%] bg-slate-100 my-2 outline-none text-sm placeholder:text-xl px-5 font-semibold text-center h-10 mx-[5%]'/>
                <select type="text" placeholder='wich section do you want to show it' value={''} onChange={e => e} className='w-[90%] bg-slate-100 my-2 outline-none text-xl px-5 font-semibold text-center h-10 mx-[5%]'>
                  <option className='text-stone-500' value="wich section do you want to show it">Select your product Catagory ....</option>
                  <option  value="Busness Card's">Busness Card's</option>
                  <option value="Bookets & Catalogs">Bookets & Catalogs</option>
                  <option value="Cardl & Events">Cardl & Events</option>
                  <option value="Advertising">Advertising</option>
                  <option value="Brochures & Flyers">Brochures & Flyers</option>
                  <option value='PostCards' >PostCards</option>
                  <option value='Forms & Stationery'>Forms & Stationery</option>
                  <option value='Restaurents'>Restaurants</option>
                  {/* stickers and labels */}
                  <option value="Stickers">Stickers</option>
                  <option value="Specialty Stickers">Specialty Stickers</option>
                  <option value="Product Labels">Product Labels</option>
                  <option value="Business Labels">Business Labels</option>
                  {/* {boxess & packaging} */}
                  <option value="Cuntom Boxes">Custom Boxes</option>
                  <option value="Product Packaging">Product Packaging</option>
                  <option value="Shipping Supplies">Shipping Supplies</option>
                  <option value="Labels,Tags and Sleves">Labels,Tags and Sleves</option>
                  <option value="Shopping Bags">Shopping Bags</option>
                  <option value="Gift Wrapping">Gift Wrapping</option>
                  {/* Signs & Banners */}
                  <option value="Banners">Banners</option>
                  <option value="Banners with Stands">Banners with Stands</option>
                  <option value="Posters">Posters</option>
                  <option value="Yard Signs">Yard Signs</option>
                  <option value="Decals & Magnetic Signs">Decals & Magnetic Signs</option>
                  <option value="Rigid Signs">Rigid Signs</option>
                  <option value="Flags">Flags</option>
                  <option value="Photo prints">photo Prints</option>
                  {/* Apparel & Promo */}
                  <option value="Apparel">Apparel</option>
                  <option value="Promotional Products">Promotional Products</option>
                  <option value="Brands">Brands</option>
                  {/* Featured Collections */}
                  <option value="Trade Show & Events">Trade Show & Events</option>
                  <option value="Featured Collections">Featured Collections</option>
                 </select>
                <input type="text" placeholder='Inter your product Titel' value={''} onChange={e => e} className='w-[90%] bg-slate-100 my-2 outline-none text-xl px-5 font-semibold text-center h-10 mx-[5%]'/>
                <input type="text" placeholder='Product Price' value={''} onChange={e => e} className='w-[90%] bg-slate-100 my-2 outline-none text-xl px-5 font-semibold text-center h-10 mx-[5%]'/>
                <textarea type="text" value={''} onChange={e => e} placeholder='Product Description' className='w-[90%] bg-slate-100 my-2 pt-2 outline-none text-xl px-5 font-semibold text-center h-10 mx-[5%]'/>

                <div className='flex justify-center'>
                  <button 
                    onClick={e=>e} 
                  className='px-4 h-[40px] rounded-md cursor-pointer font-bold text-white mb-5 bg-[#1aab1a]'>Upload product</button>
                </div>
              </div>
              <div className='border border-[#3333] mt-8 w-full'>
                <div className='flex border-b border-[#3333] justify-center py-10 text-xl font-semibold underline'>Manage Products</div>
                  <h1 className='text-xl font-semibold text-[#0e0e0e76] py-3 ml-3'>All Product's :</h1>
                <div className='ml-[4%] overflow-auto h-[400px]'>
                <div className='w-[95%] h-[40px] border border-[#0e0e0e76] my-5 flex justify-between'>
                      <div className='font-bold border-[#0e0e0e76] text-center h-full border-l border-r flex justify-center items-center w-[105px]'>Image</div>
                      <div className='w-[80px] font-bold border-[#0e0e0e76] text-center h-full border-l border-r flex justify-center items-center'>
                        <p>Title:</p>
                      </div>
                      <div className='w-[80px] font-bold border-[#0e0e0e76] text-center justify-center items-center h-full border-l border-r flex'>
                        Price:
                      </div>
                      <div className='w-[80px] font-bold hidden border-[#0e0e0e76] border-r text-center justify-center py-3 px-6 h-full border-l items-center lg:flex'>
                        Catagory:
                      </div>
                      <div className='w-[80px] border-l text-center h-full border-[#0e0e0e76]'>
                        <div className='w-full h-[50%] bg-green-300 flex justify-center items-center text-2xl'>
                            <p className='text-xs font-bold uppercase'>Edit</p>
                        </div>
                        <div className='w-full h-[50%] bg-red-400 flex justify-center items-center text-3xl'>
                            <p className='text-xs font-bold uppercase'>delet</p>
                        </div>
                      </div>
                    </div>
                  {/* {product.map((item,index)=>{
                      return(
                        <Link to='' >
                    <div className='w-[95%] h-[80px] border border-[#0e0e0e76] my-5 flex justify-between'>
                      <div className='h-full w-[105px]'>
                        <img src={item.imageUrl} className='w-full h-full' />
                      </div>
                      <div className='w-[80px] px-1 font-bold border-[#0e0e0e76] text-center justify-center flex items-center h-full border-l border-r'>
                        <p className='text-xs'>
                          {item.title}
                        </p>
                      </div>
                      <div className='w-[80px] font-bold border-[#0e0e0e76] text-center justify-center items-center h-full border-l border-r flex'>
                        {item.price}
                      </div>
                      <div className='w-[80px] font-bold hidden border-[#0e0e0e76] border-r text-center justify-center h-full border-l lg:flex items-center'>
                        {item.catagory}
                      </div>
                      <div className='w-[80px] border-l text-center h-full border-[#0e0e0e76]'>
                        <div className='w-full h-[50%] bg-green-300 flex justify-center items-center text-2xl'>
                          <a href="" 
                            onClick={''}
                          >
                            <FaPenToSquare  className='' />                  
                          </a>
                        </div>
                        <div className='w-full h-[50%] bg-red-400 flex justify-center items-center text-3xl'>
                          <a href="" onClick={''}>
                            <MdDeleteForever className='' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Link>
                      )
                    })
                  } */}
                            {
                              editeProduct && <EditeProducts />
                            }
                </div>
              </div>
            </div>
      }
    
      <button onClick={()=>logOut()} className='w-[80px] mt-6 h-[40px] rounded-lg active:scale-105 absolute right-8 bg-yellow-300'>Sign out</button>
      {
        loader && <Loader className='mt-[25%]'/>
      }
      

    </div>
  )
}

export default Accout