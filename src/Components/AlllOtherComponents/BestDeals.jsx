import React, { useEffect, useState } from 'react'
import Slide from '../Slider/Slider.jsx'
import DealsCart from '../Cart/DealsCart/DealsCart'
import {cards} from '../../../src/data'

const BestDeals = () => {
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
    })
  return (
    <div className='p-3 lg:p-0'>
        <h1 className='text-xl sm:text-2xl font-bold mb-7'>Best Deals</h1>
        <div className='my-6'>
            <Slide slidesToShow={ MobileView ? 1 : 2} >
                {
                    cards.map((data)=> <DealsCart item={data} key={data.id}/>)
                }
            </Slide>
        </div>
    </div>
  )
}

export default BestDeals