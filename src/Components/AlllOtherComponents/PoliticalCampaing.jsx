import React from 'react'
import Slide from '../Slider/Slider.jsx'
import {cards} from '../../../src/data'
import CatCart from '../Cart/CatCart/CatCart'

const PoliticalCampaing = () => {

  return (
    <div className='p-3 lg:p-0'>
      <h1 className='text-xl mb-3 sm:text-2xl md:text-2xl font-bold'>Political Campaign Materials</h1>
      <div className='my-6'>
        <Slide slidesToShow={4}>
          {
            cards.map((information)=><CatCart key={information.id} item={information} />)
          }
        </Slide>
      </div>
    </div>
  )
}

export default PoliticalCampaing