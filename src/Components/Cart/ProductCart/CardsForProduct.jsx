import React from 'react'
import { Link } from 'react-router-dom';

const CardsForProduct = ({item}) => {
    
    return (
      <Link to='/product/xyz'>
          <div title='Click for view product' className=' w-[460px] sm:w-[540px] md:mr-7 md:w-[350px] mt-5 h-[350px] lg:mx-6 lg:w-[250px] lg:h-[280px] hover:scale-105 hover:shadow-md duration-100 ease-in border-2 bg-white rounded-lg pb-2'>
              <img className='w-full h-[75%]' src={item.img} />
              <div className='flex justify-between items-center px-5 pt-2'>
                <div className='tracking-tight leading-6 lg:leading-5'>  
                    <h3 className='text-[20px] lg:text-[17px]  font-[670] font-serif'>{item.title}</h3>
                    {/* Rating */}
  
                    <div className='text-yellow-400 text-[20px] font-[670] font-serif lg:text-[16.2px]'>
                      {
                        item.reating == 1? 
                        <div>
                          <span>&#9733;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                        </div> : <></> 
                              && 
                      item.reating == 2 ? 
                        <div>
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                        </div>  : <></>
                                &&
                      item.reating == 3 ?
                      <div>
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9733;</span> 
                          <span>&#9734;</span> 
                          <span>&#9734;</span> 
                        </div>  : <></>
                        &&
                        item.reating == 4 ?
                        <div>
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9734;</span> 
                          </div>  : <></>
                        &&
                        item.reating == 5 ?
                        <div>
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                            <span>&#9733;</span> 
                          </div>  : <></>
                      }
                      
                      
                      
                    </div>
  
                    <h3 className='text-sm font-[670] font-serif'>{'item.price'}</h3>
                </div>
                <button className='w-[85px] rounded-md hover:bg-[#f8aa19] duration-150 hover:scale-95 bg-[#3bbb3b] text-white font-[600] text-[20px] h-[40px]'>View</button>
              </div>
          </div>
      </Link>
    )
}

export default CardsForProduct