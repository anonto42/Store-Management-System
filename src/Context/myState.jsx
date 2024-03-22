import React, { useState } from 'react'
import myContext from './myContext';

const MyState = (props) => {

  const [Materials , setMaterials] = useState(false);
  const [Products , setProducts] = useState(false);
  const [Packaging , setPackaging] = useState(false);
  const [Labels , setLabels] = useState(false);
  const [Banners , setBanners] = useState(false);
  const [Promo , setPromo] = useState(false);
  const [Collections , setCollections] = useState(false);

  const [ragiser,setRagister] = useState(true)

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
    <myContext.Provider value={{bar,setBar,barOnOff,item , Materials , setMaterials,Products , setProducts,Packaging , setPackaging , Labels,setLabels,Banners,setBanners,Promo,setPromo,Collections,setCollections,ragiser,setRagister}}>
        {props.children}
    </myContext.Provider>
  )
}

export default MyState