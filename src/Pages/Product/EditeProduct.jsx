import React, { useEffect, useRef } from 'react'
import { FaRegSquare } from "react-icons/fa";
import { GiPencilBrush } from "react-icons/gi";
import { IoTriangleOutline } from "react-icons/io5";
import { AiTwotoneDelete } from "react-icons/ai";
import { TbReplace } from "react-icons/tb";

const EditeProduct = () => {

  const canvasRef = useRef(null);

  useEffect(()=>{

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let isDrawing = false;

    window.addEventListener("load" , ()=>{
      canvas.width = canvas.offsetWitdth;
      canvas.height = canvas.offsetHeight;
    })

    const startDraw = () => { 
      isDrawing = true;
    }

    const drawing = (e) => {
      if(!isDrawing)return;
      ctx.lineTo(e.offsetX , e.offsetY);
      ctx.stroke();
    }

    canvas.addEventListener("mousedown" , startDraw);
    canvas.addEventListener("mousemove" , drawing);
    canvas.addEventListener("mouseup" , ()=> isDrawing = false);

  },[])

  return (
    <div className='w-full bg-[666b66] pt-[60px] pb-[40px] lg:pt-[90px]'>
        <div className='w-[470px] sm:w-[600px] md:w-[700px] lg:w-[800px] h-auto border-2 border-[#000000] m-auto flex'>
          <div className='h-full w-[100px] border-r-2 border-[#000000]'>
            <div className='w-full border-b-2 border-[#000000] h-[11.667vh] flex justify-center items-center'>
              <FaRegSquare className='text-[35px] cursor-pointer text-black active:scale-105' title='square' />
            </div>
            <div className='w-full border-b-2 border-[#000000] h-[11.667vh] flex justify-center items-center'>
              <div className='w-[35px] h-[35px] border-[5px] rounded-full active:scale-105 border-black cursor-pointer' title='round'></div>
            </div>
            <div className='w-full border-b-2 flex justify-center items-center border-[#000000] h-[11.667vh]'>
              < IoTriangleOutline className='text-[35px] cursor-pointer active:scale-105' />
            </div>
            <div className='w-full border-b-2 border-[#000000] h-[11.667vh] flex justify-center items-center'>
              < GiPencilBrush className='text-[35px] cursor-pointer active:scale-105' />
            </div>
            <div className='w-full border-b-2 border-[#000000] h-[11.667vh] flex justify-center items-center'>
            < TbReplace  className='text-[35px] cursor-pointer active:scale-105'/>
            </div>
            <div className='w-full border--2 border-[#000000] h-[11.667vh] flex justify-center items-center'>
            < AiTwotoneDelete className='text-[35px] cursor-pointer active:scale-105' />
            </div>
          </div>
          <canvas ref={canvasRef} className='h-[full] w-[370px] sm:w-[500px] md:w-[600px] lg:w-[700px] bg-[#cffff1] ative' />
        </div>
        <div className='w-[470px] sm:w-[600px] md:w-[700px] lg:w-[800px] h-auto m-auto flex mt-7 justify-between'>
          <button title='Buy this Design' className='h-[60px] w-[130px] text-[20px] font-bold text-white rounded-lg bg-[#2ea240] hover:bg-[#36a847] hover:scale-95 active:scale-100 hover:shadow-lg shadow-gray-900'>Buy Now</button>
          <button title='Add to cart for Buy this Design later' className='h-[60px] w-[130px] text-[20px] font-bold text-white rounded-lg bg-[#4f4ded] hover:bg-[#5956f1] hover:scale-95 active:scale-100 hover:shadow-lg shadow-gray-900'>Add to Cart</button>
        </div>
        <div className='w-[470px] sm:w-[600px] md:w-[700px] lg:w-[800px] h-auto m-auto flex mt-7 justify-center'>
          <button title='Download Preview file' className='h-[60px] w-[190px] text-[17px] font-semibold text-white hover:text-[#d5c8c8] rounded-lg bg-[#4cc1f8] hover:bg-[] hover:scale-95 active:scale-100 hover:shadow-lg shadow-gray-900 active:text-[#fbc66a]'>Download Preview</button>
        </div>
    </div>
  )
}

// 11.667
// 13.334

export default EditeProduct