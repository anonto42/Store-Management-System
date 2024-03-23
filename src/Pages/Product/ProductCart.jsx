import React from 'react'
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const ProductCart = () => {


  const data =[
    {
      img:"https://staticecp.uprinting.com/10796/250x250/DM-4881-01.jpg",
      title:"Mailer Boxes"
    },
    {
      img:"https://staticecp.uprinting.com/260/250x250/Vinyl_Banners_Marketing_Materials_A.jpg",
      title:"Vinyl Banners"
    },
    {
      img:"https://staticecp.uprinting.com/10910/250x250/Custom_Stickers_Gallery_Badge.jpg",
      title:"Stickers"
    },
    {
      img:"https://staticecp.uprinting.com/1812/250x250/Standard_Postcards_Marketing_Materials_B.jpg",
      title:"Postcards"
    },
    {
      img:"https://staticecp.uprinting.com/71/250x250/Business_Flyers_Restaurant_Advertising_Materials_A.jpg",
      title:"Flyers"
    },
    {
      img:"https://staticecp.uprinting.com/10176/250x250/Brochures_Marketing_Materials_A.webp",
      title:"Brochures"
    },
    {
      img:"https://staticecp.uprinting.com/6975/250x250/UP_CTS_Label_PDP_Image_B.jpg",
      title:"Labels"
    },
    {
      img:"https://staticecp.uprinting.com/7829/250x250/Apparel-Jackets-J317.png",
      title:"Jackets"
    },
    {
      img:"https://staticecp.uprinting.com/6987/250x250/UP_Roll_Stickers_PDP_Image_A.jpg",
      title:"Roll Stickers"
    },
    {
      img:"https://staticecp.uprinting.com/1070/250x250/Window_Decals_Small_Busisness_Advertising_Materials_A.jpg",
      title:"Decals"
    }
  ]

  let isDrage = false,prevPageX,prevScrollLeft,
  cllll = document.querySelector(".clgs")

  const dar =(e)=>{
    isDrage = true;
    prevPageX = e.pageX;
    prevScrollLeft = cllll.scrollLeft;
  }
  
  const daring =(e)=>{
    if (!isDrage) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    cllll.scrollLeft = prevScrollLeft - positionDiff;
  }
  const darStop =()=>{
    isDrage = false;
  }

  let i = 0;


  return (
    <div className='w-full h-auto'>

      <div className='mt-16'>
        <div className='flex justify-center'>
          <img className='w-[450px] h-[410px]' src={data[i].img}/>
        </div>
        <div>
          <div className='wrapper  min-w-[450px] max-w-[1200px] mt-10 flex overflow-hidden relative' >
                <div onMouseMove={daring} onMouseDown={dar} onMouseUp={darStop} className='clgs flex cursor-pointer overflow-scroll min-w-[450px] px-10 max-w-[1200px] invisible-scrollbar'>
                    {
                      data.map((item,index)=>{
                        return(
                          <>
                              <img key={index} src={item.img} className='xyz sm:h-[220px] ml-[14px] object-cover w-[calc(100%/6)]' />
                          </>
                        )
                      })
                    }
                </div>
          </div>
          <div className='flex justify-between'>
            <h1 className='text-2xl font-bold'>Custom Stickers</h1>
            <div className='text-xs flex justify-center items-center'>
              <img src="data:image/png;base64,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" className='w-4' />
              <p>1889 Reviews |</p>
            </div>
          </div>
        </div>
      </div>













      <div className='fixed md:hidden flex w-full justify-between px-4 items-center h-[80px] bg-white shadow-2xl shadow-black bottom-0'>
        <div>
          <p>Printing Cost:</p>
          <h1 className='text-[#008338] text-3xl font-semibold'>${"43.90"}</h1>
        </div>
        <div>
          <a href="">
            <div className='text-xl flex justify-center items-center font-bold text-white w-[200px] h-[50px] hover:bg-[#1b9650] bg-[#008338] '>ORDER NOW</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductCart