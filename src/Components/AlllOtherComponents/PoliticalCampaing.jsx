import React from 'react'
import Slide from '../Slider/Slider'
import {cards} from '../../../src/data'
import CatCart from '../Cart/CatCart/CatCart'

const PoliticalCampaing = () => {

  return (
    <div className=''>
      <div className=''>
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