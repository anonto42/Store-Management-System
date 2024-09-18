import React, { useEffect, useState } from 'react'
import myContext from './myContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const MyState = (props) => {

  const [ bar , barOnOff] = useState();
  const [ Products , setProducts] = useState();
  const [ Materials , setMaterials] = useState();
  const [ Packaging , setPackaging] = useState();
  const [ Labels , setLabels ] = useState();
  const [ Banners , setBanners ] = useState();
  const [ Promo , setPromo ] = useState();
  const [Collections, setCollections] = useState();

  
  const [loading, setLoading] = useState(false);

  const [email , setEmail ] = useState();
  const [password, setPassword] = useState();
  const [firstName , setFirstName ] = useState();
  const [lastName, setLastName ] = useState();
  const [phone, setNumber] = useState();
  const [ userData , setUserRagisterData ] = useState();
  const [editeProduct,setEditeProduct] = useState();

  const register = async (params) => {
//email , password , phone , firstName , lastName
    params.preventDefault();

    setLoading(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phone", phone);
    
      try {
        // const responc = await axios.post("/user/register", { email : email , password : password , firstName : firstName , lastName : lastName , phone : phone })
        	
        const responc = await axios({
          method:"post",
          baseURL:"http://localhost:3000/api/user",
          url:"/register",
          data:{
            email : email,
            password :  password,
            firstName : firstName,
            lastName : lastName,
            phone : phone
          }
        })
        
        setUserRagisterData(responc)
        
        setNumber("");
        setLastName("");
        setPassword("");
        setFirstName("");
        setEmail("");
    
        setLoading(false);
        
        toast.success(responc.data.message)
        
        window.location.href = "/"

      } catch (error) {
        setLoading(false);
        console.log(error)
      }
  }


  return (
    <myContext.Provider value={{editeProduct,setEditeProduct,setEmail , setFirstName , setPassword , setLastName , setNumber , loading , email , password , firstName , lastName , phone , register , bar,barOnOff,Materials, setMaterials,Products, setProducts,Packaging , setPackaging , Labels,setLabels,Banners,setBanners,Promo,setPromo,Collections,setCollections}}>
        {props.children}
    </myContext.Provider>
  )
}

export default MyState