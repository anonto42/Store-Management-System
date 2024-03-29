import React from 'react'
import { Link } from 'react-router-dom'

const CatCart = ({item}) => {
  return (
    <Link to={'/product/xyz'}>
        <div title='Click for product information' className='w-[90%] h-[135px] sm:h-[170px] md:h-[235px] xl:w-[185px] lg:h-[200px] hover:scale-[1.015] duration-200 xl:h-[232px] text-black cursor-pointer relative hover:shadow-md'>
            <img src={item.img} className='w-[100%] h-[85%] object-cover' />
            <div className='w-full h-[10%] text-[15px] ml-4 font-semibold'>{item.title}</div>
        </div>
    </Link>
  )
}

export default CatCart