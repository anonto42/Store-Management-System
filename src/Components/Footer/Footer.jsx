import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' w-full h-auto bg-[#F8F7F5]'>
      <div className='my-16 pt-16 px-6 md:px-0 flex justify-center'>
        <input type="text" className='outline-none w-[98%] border-2 md:w-[60%] h-12 px-5' placeholder='Enter your email' />
        <button className='h-12 bg-[#B2B1B1] w-20 text-[12px] md:text-[15px] md:w-28 text-white font-bold'>SUBSCRIBE</button>
      </div>
      <div className='text-xl text-[#0082C6] md:flex justify-center'>
        <div className='mx-3 flex justify-center items-center py-2'><a className='hover:text-green-600' href="">Help & FAQs</a></div>
        <div className='mx-3 flex justify-center items-center py-2'><a className='hover:text-green-600' href="">About Us</a></div>
        <div className='mx-3 flex justify-center items-center py-2'><a className='hover:text-green-600' href="">Contact Us</a></div>
        <div className='mx-3 flex justify-center items-center py-2'><a className='hover:text-green-600' href="">Resellers </a></div>
        <div className='mx-3 flex justify-center items-center py-2'><a className='hover:text-green-600' href="">Temples </a></div>
        <div className='mx-3 flex justify-center items-center py-2'><a className='hover:text-green-600' href="">Samples</a></div>
        <div className='mx-3 flex justify-center items-center py-2'><a className='hover:text-green-600' href="">Blog</a></div>
      </div>
      <div className='flex text-3xl justify-center items-center py-2'>
        <a href=""><FaFacebookSquare  className=' hover:text-green-600 text-[#0082C6]' /></a>
        <a href=""><FaTwitterSquare className='mx-8  hover:text-green-600 text-[#0082C6]' /></a>
        <a href=""><AiFillInstagram className='text-4xl hover:text-green-600 text-[#0082C6]' /></a>
        <a href=""><FaLinkedin  className='mx-8 hover:text-green-600 text-[#0082C6]' /></a>
        <a href=""><GrYoutube className='text-3xl hover:text-green-600 text-[#0082C6]' /></a>
      </div>

      <div className='py-2 font-thin'>
        <div className='md:flex justify-center items-center py-2'>
          <p className=' flex justify-center items-center'>
            <FaRegCopyright /> 2000-2024 UPrinting.com.
          </p>
          <p className='flex items-center justify-center'>
            All rights reserved.
          </p>
        </div>
      </div>
        <div className=' ml-[10%] md:ml-0 flex justify-center  pb-10 '>
          <p className='text-[#0082C6]'>
            <a className='px-3 hover:text-green-600' href="">Terms of Service</a>
            <a className='px-3 hover:text-green-600' href="">Privacy Policy</a>
            <a className='px-3 hover:text-green-600' href="">Do Not Share of Sell My Information</a>
            <a className='px-3 hover:text-green-600' href=""> Accessibility</a>
            <a className='px-3 hover:text-green-600' href="">Sitemap</a>
            <a className='px-3 hover:text-green-600' href="">CA Transparency Act</a>
          </p>
        </div>
    </div>
  )
}

export default Footer