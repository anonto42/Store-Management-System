import React from 'react'
import { Link } from 'react-router-dom'

const CatCart = ({item}) => {
  return (
    <Link to={'/product/xyz'}>
        <div title='Click for product information' className='w-[185px] hover:scale-[1.015] duration-200 h-[232px] text-black cursor-pointer relative hover:shadow-md ml-3'>
            <img src={item.img} className='w-[100%] h-[85%] object-cover' />
            <div className='w-full h-[10%] text-[15px] ml-4 font-semibold'>{item.title}</div>
        </div>
    </Link>
  )
}

export default CatCart