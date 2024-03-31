import React from 'react'
import { Link } from 'react-router-dom';

const ProductCart = ({item}) => {
  return (
    <Link to='/product/xyz'>
        <div className=' w-[300px] h-[150px] border-2 border-white'>
            <img className='' src={''} />
            <div className=''>
                <h3 className=''>{'this is the title'}</h3>
                <h3 className=''>{'item.price'}</h3>
            </div>
        </div>
    </Link>
  )
}

export default ProductCart