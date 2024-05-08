import React from 'react'
// import { Slider } from 'infinite-react-carousel'

const Slide = ({children,slidesToShow}) => {
  
  return (
      <div className='px-2 containers'>
        <div slidesToShow={slidesToShow} arrowsScroll={1} >
          {children}
        </div>
      </div>
  )
}

export default Slide