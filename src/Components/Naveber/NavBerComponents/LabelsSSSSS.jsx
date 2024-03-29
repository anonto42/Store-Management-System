import { useContext, useEffect, useState } from "react"
import { CiSettings } from "react-icons/ci"
import myContext from "../../../Context/myContext"

const LabelsSSSSS =()=>{
    const {setLabels} = useContext(myContext)
    const[top,setTop] = useState();

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
          window.scrollY > 0 ? setTop(true) : setTop(false);
    
          return ()=>{
            window.removeEventListener('scroll',()=>{
              window.scrollY > 0 ? setTop(true) : setTop(false);
            })
          }
        })
      },[])
    return(
        <>
            <div onMouseLeave={()=>{setLabels(false)}}  
                 onMouseEnter={()=> setLabels(true) } 
                 className={top ?'h-[85vh] hidden lg:flex xl:w-[85%] xl:mx-[7.5%] w-full absolute  bg-[#F8F7F5] left-0 overflow-auto top-[68px] z-[50]' : 'h-[85vh] hidden lg:flex xl:w-[85%] xl:mx-[7.5%] w-full absolute  bg-[#F8F7F5] left-0 top-[114px] z-[50]'}>
                <div className='w-full h-full'>
                    <div className='text-sm m-7 '>
                        <div className='text-xl font-semibold text-[#126CBA] mb-[7px]'>
                        <h1>Business Cards</h1>
                        </div>
                        <div className='border-t pt-4'>
                            <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Standar Business Cards</h3>
                            <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Die-Cut Business Cards</h3>
                            <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Foil Business Cards</h3>
                            <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Folded Business Cards</h3>
                            <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Painted Edge Business Cards</h3>
                            <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Plastic Business Cards</h3>
                            <h3 className='hover:text-[#008338] cursor-pointer mb-2'>All Business Cards</h3>
                        </div>
                    </div>
                    <div className=' text-sm m-7' >
                        <div className='text-xl font-semibold mb-[7px]'>
                            <h1>Brochures & Flyers</h1>
                        </div>
                        <div className='border-t pt-4'>
                            <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Brochures</h3>
                            <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Flyers</h3>
                            <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Club Flyers</h3>
                            <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Die-Cut Flyers</h3>
                            <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Leaflets</h3>
                            <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Mini Brochures</h3>
                            <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Mailing Brochures</h3>
                            <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Raised Spot UV Flyers</h3>
                        </div>
                    </div>
                    </div>
                <div className='w-full h-full'>
                <div className=' text-sm m-7 '>
                    <div className='text-xl font-semibold text-[#126CBA] mb-[7px]'>
                        <h1>Business Cards</h1>
                    </div>
                        <div className='border-t pt-4'>
                        <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Standar Business Cards</h3>
                        <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Die-Cut Business Cards</h3>
                        <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Foil Business Cards</h3>
                        <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Folded Business Cards</h3>
                        <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Painted Edge Business Cards</h3>
                        <h3 className='hover:text-[#008338] cursor-pointer mb-2'>Plastic Business Cards</h3>
                        <h3 className='hover:text-[#008338] cursor-pointer mb-2'>All Business Cards</h3>
                    </div>
                </div>
                <div className=' text-sm m-7' >
                    <div className='text-xl font-semibold mb-[7px]'>
                    <h1>Brochures & Flyers</h1>
                    </div>
                        <div className='border-t pt-4'>
                        <h3 className='hover:text-[#008338] mb-2'>Brochures</h3>
                        <h3 className='hover:text-[#008338] mb-2'>Flyers</h3>
                        <h3 className='hover:text-[#008338] mb-2'>Club Flyers</h3>
                        <h3 className='hover:text-[#008338] mb-2'>Die-Cut Flyers</h3>
                        <h3 className='hover:text-[#008338] mb-2'>Leaflets</h3>
                        <h3 className='hover:text-[#008338] mb-2'>Mini Brochures</h3>
                        <h3 className='hover:text-[#008338] mb-2'>Mailing Brochures</h3>
                        <h3 className='hover:text-[#008338] mb-2'>Raised Spot UV Flyers</h3>
                    </div>
                </div>
            </div>
                <div
                 className="w-[80%] h-full font-semibold text-sm mt-8 text-[#126CBA]">
                    <div
                    id="_with_box"
                    className="w-[200px] h-[200px] flex justify-center items-center bg-white ">
                        <div className=" w-full duration-150 h-[50px] bg-green-800" />
                        
                    </div>
                    <h1 className="mt-2">Custom Stickers</h1>
                    <div className="w-[200px] h-[200px] mt-5 bg-green-300 "></div>
                    <h1 className="mt-2">Custom Labels</h1>
                </div>
                <div className="w-[80%] h-full mt-8 text-sm text-[#126CBA] font-semibold">
                    <div className="w-[200px] h-[200px] bg-green-300 "></div>
                    <h1 className="mt-2">Roll Labels</h1>
                    <div className="w-[200px] h-[200px] mt-5 bg-green-300 "></div>
                    <h1 className="mt-2">Clear Stickers</h1>
                </div>
            <div className='w-full h-14 absolute bg-[#F8F7F5] flex justify-center items-center  -bottom-14 border-t'>
            <div className=' text-sm flex cursor-pointer justify-center items-center'> <strong className=''>Can't find what you're looking for?</strong> Try or <CiSettings className='mr-2'/> <span className='font-semibold text-[#126CBA]'>Custom Product Builder</span></div>
            </div>
        </div>
        </>
    )
}

export default LabelsSSSSS