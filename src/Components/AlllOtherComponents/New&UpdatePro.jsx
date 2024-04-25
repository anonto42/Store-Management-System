import React, { useEffect, useState } from 'react'
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import Slide from '../Slider/Slider';
import DealsCart from '../Cart/DealsCart/DealsCart';

const UpdateProduct = () => {
    const data =[
        {
            img:'https://staticecp.uprinting.com/10478/250x250/Metal_Prints_Art_Gallery.webp',
            title:"Metal Prints",
            desc:"Available in squares or rectangles"
        },{
            img:"https://staticecp.uprinting.com/10708/250x250/UP_Raised-Foild-Card-Flyer_Top.png",
            title:'Raised Foil Card Flyer',
            desc:'Elegant & shiny foil colors Suede-like, protective finish'
        },{
            img:"https://staticecp.uprinting.com/10407/250x250/UP_Raised-Emboss-Postcard_Quarter-Right.png",
            title:'F  R   P  ',
            desc:'anon........................................  ......................... ..................................... '
        },{
            img:"https://staticecp.uprinting.com/10492/250x250/Custom_Flag_Poles_C.webp",
            title:'Custopm f........ p............',
            desc:'available as ..............................'
        },{
            img:"https://staticecp.uprinting.com/10727/250x250/UP_Transfer-Sticker-Main.png",
            title:'faconbord sings',
            desc:'add ............d       .d         .dddddddf.fffffffff.ffffffffffg ........... ggggggg'
        }
    ]
    const [MobileView,setMobileView]= useState(false)

    useEffect(()=>{
        window.addEventListener("load",()=>{
            window.innerWidth < 769? setMobileView(true) : setMobileView(false)
        })
         return ()=>{
          window.removeEventListener('load',()=>{
            window.innerWidth < 769? setMobileView(true) : setMobileView(false)
          })
        }
    },[])
     
    // useEffect(()=>{
    //   window.innerWidth < 769? setMobileView(true) : setMobileView(false)
    // },[])
  return (
    <div className='p-3 lg:p-0'>
        <h1 className='text-xl sm:text-2xl font-bold mb-7'>New & Updated Products</h1>
        <div className='my-6'>
          <Slide slidesToShow={ MobileView ? 1 : 2} >
            {
              data.map((item,index)=><DealsCart item={item} key={index} />)
            }
          </Slide>
        </div>
    </div>
  )
}

export default UpdateProduct