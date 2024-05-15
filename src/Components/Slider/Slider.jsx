import React from 'react'
// import { Slider } from 'infinite-react-carousel'

const Slide = ({children}) => {
  
  return (
      <div className='px-2 containers'>
        <div className='flex overflow-auto overflow-y-hidden slider-container-div' >
          {children}
        </div>
      </div>
  )
}

export default Slide