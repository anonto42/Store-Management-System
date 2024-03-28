import React, { useContext, useState } from 'react'
import { MdCancel } from 'react-icons/md';
import myContext from '../../../Context/myContext';

const EditeProducts = () => {
    const {bar,setBar,barOnOff,item , Materials , setMaterials,Products , setProducts,Packaging , setPackaging , Labels,setLabels,Banners,setBanners,Promo,setPromo,Collections,setCollections,ragiser,setRagister,number, logOut,setNumber,lastName,loading,setLoading,loginUser, setLastName,firstName, setFirstName,email, setEmail,password, setPassword,creactUser,user,setUser,setCategory,setPrice,setDescription,setTitle,setImg,setImgUrl,img,catagory,price,description,title,createProduct,imgUrl,section,setSection,editProduct,setEditeProduct} = useContext(myContext);
  return (
    <div className=' absolute top-[190%] left-[50%] bg-[#eef2c1] w-[500px] translate-y-[-50%] translate-x-[-50%]'>
        <div className='w-full flex justify-center  py-10 border text-xl font-semibold underline  '>Edite Product</div>
        <MdCancel className=' absolute text-3xl top-0 right-0 mr-3 mt-3 cursor-pointer' onClick={()=>setEditeProduct(false)}/>
              <div className='border w-full border-gray-300 h-[auto]'>
                <input type="file" id='imgTag' onChange={e=>setImg(e.target.files[0])} className='hidden'/>
                <label htmlFor="imgTag" className='flex justify-center text-center'>
                  <img src={"https://icons.veryicon.com/png/o/miscellaneous/simple-linear-icon/icon-img.png"} className=' cursor-pointer w-[130px] md:w-[200px]' alt="" />
                  <p className='mt-12 font-bold'>{img==null ? 'file wass not selected' : "file wass selected"}</p>
                </label>
                <p className='flex justify-center py-2 mb-3 text-sm text-stone-300'> *At First you should upload your image</p>
                <div className='flex justify-center'>
                  <button onClick className='px-4 h-[40px] rounded-md cursor-pointer font-bold text-white mb-5 bg-[#1aab1a]'>Upload image</button>
                </div>
                <input type="text" value={imgUrl} placeholder='This is your image url (dont change it)'className='w-[90%] bg-slate-100 my-2 outline-none text-sm placeholder:text-xl px-5 font-semibold text-center h-10 mx-[5%]'/>
                <select type="text" placeholder='wich section do you want to show it' className='w-[90%] bg-slate-100 my-2 outline-none text-xl px-5 font-semibold text-center h-10 mx-[5%]'>
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
                <input type="text" placeholder='Inter your product Titel' value={title} onChange={e=>setTitle(e.target.value)} className='w-[90%] bg-slate-100 my-2 outline-none text-xl px-5 font-semibold text-center h-10 mx-[5%]'/>
                <input type="text" placeholder='Product Price' value={price} onChange={e=>setPrice(e.target.value)} className='w-[90%] bg-slate-100 my-2 outline-none text-xl px-5 font-semibold text-center h-10 mx-[5%]'/>
                <textarea type="text" value={description} onChange={e=>setDescription(e.target.value)} placeholder='Product Description' className='w-[90%] bg-slate-100 my-2 pt-2 outline-none text-xl px-5 font-semibold text-center h-10 mx-[5%]'/>

                <div className='flex justify-center'>
                  <button className='px-4 h-[40px] rounded-md cursor-pointer font-bold text-white mb-5 bg-[#1aab1a]'>Upload edite's</button>
                </div>
              </div>
    </div>
  )
}

export default EditeProducts