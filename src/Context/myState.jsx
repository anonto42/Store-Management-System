import React, { useState } from 'react'
import myContext from './myContext';

const MyState = (props) => {
  const [bar,setBar] = useState(false);
  const barOnOff =()=> {
    if (bar == false) {
      setBar(true);
    }else{
      setBar(false);
    } 
  }
  const item = [
    "Marketing Materials",
    "Stickers & Labels",
    "Boxes & Packaging",
    "Signs, Banners & Decals",
    "Apparel",
    "Events and Holidays",
    "Forms and Stationery",
    "Mailing Services",
    "Promotioal Products",
    "Photo Products",
    "Cusrom Quote",
    "Design Services",
    "",
    "",
    ""
];

  return (
    <myContext.Provider value={{bar,setBar,barOnOff,item}}>
        {props.children}
    </myContext.Provider>
  )
}

export default MyState