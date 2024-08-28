import React from 'react'
import Page_cart from '../../Components/Cart/CartOfCartPage/Page_cart'

const Cart_page = () => {

    const dataForCart = [
        {
            "imageUrl" : "",
            "title" : "Logo",
            "price" : "12$",
            "status" : "edited",
            "itemAmount" : "3"
        }
    ]
  return (
    <div className='w-full min-h-svh lg:pt-[60px] pt-3 px-3 xl:px-[10%]'>
        {
            dataForCart.map(( e , i ) => <Page_cart key={i} cartData={e} /> )
        }
    </div>
  )
}

export default Cart_page