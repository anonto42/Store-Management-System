import React from 'react'
import { Slider } from 'infinite-react-carousel'

const Slide = ({children,slidesToShow}) => {
  
  return (
      <div className='px-2 sm:pl-4 md:pl-6 lg:pl-8 containers'>
        <Slider className="" slidesToShow={slidesToShow} arrowsScroll={1} >
          {children}
        </Slider>
      </div>
  )
}

export default Slide