import React, { useState } from 'react'
import myContext from './myContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify';
import { FireDB, auth } from '../FireBase/FireBase';
import { Timestamp, addDoc, collection } from 'firebase/firestore';

const MyState = (props) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [number, setNumber] = useState();

  const [Materials , setMaterials] = useState(false);
  const [Products , setProducts] = useState(false);
  const [Packaging , setPackaging] = useState(false);
  const [Labels , setLabels] = useState(false);
  const [Banners , setBanners] = useState(false);
  const [Promo , setPromo] = useState(false);
  const [Collections , setCollections] = useState(false);

  const [ragiser,setRagister] = useState(true);

  const [loading,setLoading] = useState(false);

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

  const creactUser = async () =>{
    setLoading(true)

    if (email == null || password == null || number == null || firstName == null || lastName == null) {
      return toast.error("All fields are required")
    }

    try {
      
      const user = await createUserWithEmailAndPassword(auth,email,password);
      
      const userDoc = {
        firstName:firstName,
        lastName:lastName,
        number:number,
        email:email,
        time:Timestamp.now(),
        posts:[],
      }

      localStorage.setItem('user',JSON.stringify(user));
      
      const userRef = collection(FireDB,"user");
      await addDoc(userRef,userDoc);

      setNumber('');
      setEmail('');
      setFirstName('');
      setLastName('');
      setPassword('');
      
      setLoading(false);
      toast.success("Account Created");
      
      setTimeout(() => {
        if (localStorage.getItem("user")) {
            window.location.href ='/'
        }else{
            window.location.href ='/login'
        }
        }, 900);
      
    } catch (error) {
      setLoading(false);
      return toast.error(error.message)
    }

  }

  const loginUser = async () =>{
    setLoading(true);
    if (email == null || password == null) {
      return toast.error("All fields are required");
    }
    try {
      const user = await signInWithEmailAndPassword(auth,email,password);
      localStorage.setItem('user',JSON.stringify(user));
      toast.success('loagin successfully done');
      setLoading(false);
      setTimeout(() => {
        window.location.href ='/';
    }, 800);
    } catch (error) {
      setLoading(false);
      console.log(error.message)
      return toast.error(error.message);
    }
  }

  const logOut = ()=>{
    localStorage.removeItem('user');
    toast.success('Logged out successfull')
    setTimeout(()=>{
      window.location.href ='/';
    },800)
  }


  return (
    <myContext.Provider value={{bar,setBar,barOnOff,item , Materials , setMaterials,Products , setProducts,Packaging , setPackaging , Labels,setLabels,Banners,setBanners,Promo,setPromo,Collections,setCollections,ragiser,setRagister,number, logOut,setNumber,lastName,loading,setLoading,loginUser, setLastName,firstName, setFirstName,email, setEmail,password, setPassword,creactUser}}>
        {props.children}
    </myContext.Provider>
  )
}

export default MyState