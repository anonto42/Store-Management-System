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

  let isDrage = false,prevPageX,prevScrollLeft;

  const cllll = document.querySelector(".clgs")

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


  return (
    <div className='w-full h-auto'>

      <div>
        <img src=""/>
        <div>
        <div className='wrapper max-w-[1200px] mt-10 flex px-10 relative' > 
          <FaArrowCircleLeft className='text-3xl hidden lg:block cursor-pointer text-center absolute top-[50%] translate-y-[-50%] left-6 z-50 bg-white rounded-full' />
              <div onMouseMove={daring} onMouseDown={dar} onMouseUp={darStop} className='clgs flex cursor-pointer overflow-hidden'>
                  {
                    data.map((item,index)=>{
                      return(
                        <>
                            <img key={index} src={item.img} className='xyz sm:h-[220px] ml-[14px] object-cover w-[calc(100%/3)]' />
                        </>
                      )
                    })
                  }
              </div>
          <FaArrowCircleRight className='text-3xl hidden lg:block cursor-pointer text-center absolute top-[50%] translate-y-[-50%] right-6 z-50 bg-white rounded-full' />
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