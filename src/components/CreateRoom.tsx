"use client"
import React, { useState } from 'react';
import ChatForm from './ChatForm';
import Message from './Message';
import { MdPrivateConnectivity } from "react-icons/md";
import { CircleLoader } from 'react-spinners';

const CreateRoom = () => {
  const [room,setRoom] = useState<string>('');
  const [joined,setjoined] = useState<boolean>(false);
  const [messages,setMessages] = useState<{sender:string,message:string}[]>([]);
  const [userName,setUserName] = useState<string>('');
  const [loading,setLoading] = useState<boolean>(false);

  const handelSendMessage = ( message : string ) : void => {
    console.log(message)
  }
  const handelJoinRoom = () => {
    try {
      setLoading(true)
      
      setjoined(true)
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <section className='w-full h-full relative'>
      {
        loading? (
          <div className='flex justify-center items-center w-full h-svh absolute blur rounded-full'>
            <CircleLoader 
              color='#fffff'
              size={150}  
            />
          </div>
          ):<></>
      }
      {
        !joined ? (
          <div className='w-[300px] h-[60svh] mx-auto pt-[20svh]'>
            <h1 className='text-3xl font-medium text-center pb-4'>Join a room.</h1>
            <div className='w-full'>
              <input
                className='border-2 border-gray-400 rounded-md p-3 w-full mb-4 placeholder:font-light placeholder:italic'
                type='text'
                placeholder='Enter room id'
                value={room}
                onChange={(e)=>setRoom(e.target.value)}
              />
              <input
                className='border-2 border-gray-400 rounded-md p-3 w-full mb-4 placeholder:font-light placeholder:italic'
                type='text'
                placeholder='Enter your user name'
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
              />
              <div className='flex justify-center items-center'>
                <button
                  className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-md flex justify-center items-center gap-1 active:scale-110'
                  onClick={()=>handelJoinRoom()}
                >
                  Join
                  <MdPrivateConnectivity className='text-xl' />
                </button>
              </div>
            </div>
          </div>
        ):(
          <>
            <div className='md:pt-20 xl:pt-14 pt-10 w-full h-full'>
                <h1 className='pb-4 text-2xl font-bold'>Room: 1</h1>
            </div>
            <div className='md:h-[70vh] lg:h-[85vh] xl:h-[75vh] h-[75vh] overflow-y-auto p-4 mb-4 border bg-[#1a1a1b8a] rounded-lg'>
              {
                messages.map((msg,index)=>(
                  <Message 
                    key={index}
                    sender={msg.sender}
                    message={msg.message}
                    isOwnerMessge={msg.sender === userName}
                  />
                ))
              }
            </div>
            <ChatForm onSendMessage={handelSendMessage}/>
          </>
        )
      }
    </section>
  )
}

export default CreateRoom