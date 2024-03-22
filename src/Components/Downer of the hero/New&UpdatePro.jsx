import React, { useState } from 'react'
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';

const UpdateProduct = () => {
    const data =[
        {
            url:'https://staticecp.uprinting.com/10478/250x250/Metal_Prints_Art_Gallery.webp',
            title:"Metal Prints",
            description:"Available in squares or rectangles"
        },{
            url:"https://staticecp.uprinting.com/10708/250x250/UP_Raised-Foild-Card-Flyer_Top.png",
            title:'Raised Foil Card Flyer',
            description:'Elegant & shiny foil colors Suede-like, protective finish'
        },{
            url:"https://staticecp.uprinting.com/10407/250x250/UP_Raised-Emboss-Postcard_Quarter-Right.png",
            title:'F  R   P  ',
            description:'anon........................................  ......................... ..................................... '
        },{
            url:"https://staticecp.uprinting.com/10492/250x250/Custom_Flag_Poles_C.webp",
            title:'Custopm f........ p............',
            description:'available as ..............................'
        },{
            url:"https://staticecp.uprinting.com/10727/250x250/UP_Transfer-Sticker-Main.png",
            title:'faconbord sings',
            description:'add ............d       .d         .dddddddf.fffffffff.ffffffffffg ........... ggggggg'
        }
    ]
      const [i,setI] = useState(0) ;
      
      function carcoual(){
        if ((i+2) == data.length) {
          setI(1)
        }else{
          setI(i+1)
        }
      }
      function carcoual2(){
        if (i == 0){
          setI(data.length-2)
        }else{
          setI(i-1)
        }
      }
  return (
    <div className='w-full md:pl-6 sm:pl-4 pl-2 mb-7'>
        <h1 className='text-xl sm:text-2xl font-bold mb-7'>New & Updated Products</h1>
        
        
        <div className='flex items-center justify-between topSellersBar md:overflow-auto'>
           <CiCircleChevLeft  onClick={()=>carcoual2()} className='mr-4 hidden md:block text-5xl text-gray-500 cursor-pointer'/>
            
            <a href='' className='w-[98%] h-[270px] border-2 md:w-[350px] mr-4 md:h-[135px] flex hover:shadow-md hover:scale-[1.020] duration-[120ms]'>
                <div className='md:w-[270px] md:h-[50%] h-full'>
                        <img  className='w-full duration-200 h-full md:h-[132px]' src={data[i].url} />
                        
                </div>
                <div className='p-3'>
                    <h2 className=' font-bold'>{data[i].title}</h2>
                    <p>{data[i].description}</p>
                </div>
            </a>

            <a href='' className='w-[98%] hidden h-[270px] border-2 md:w-[350px] md:h-[135px] md:flex hover:shadow-md hover:scale-[1.020] duration-[120ms]'>
                <div className='md:w-[270px] md:h-[50%] h-full'>
                        <img  className='w-[auto] h-full md:h-[132px]' src={data[i+1].url} />
                        
                </div>
                <div className='p-3'>
                    <h2 className=' font-bold'>{data[i+1].title}</h2>
                    <p>{data[i+1].description}</p>
                </div>
            </a>

             <CiCircleChevRight onClick={()=>carcoual()} className='ml-4 hidden md:block text-5xl text-gray-500 cursor-pointer' />
        </div>
    </div>
  )
}

export default UpdateProduct