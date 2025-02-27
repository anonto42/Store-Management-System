"use client"
import React from 'react'
import ChatForm from './ChatForm'

const CreateRoom = () => {

    const handelSendMessage = ( message : string ) => {
        console.log(message)
    }

  return (
    <section className='w-full'>
        <div className='mt-24 w-full'>
            <h1 className='mb-4 text-2xl font-bold'>Room: 1</h1>
        </div>
        <ChatForm onSendMessage={handelSendMessage}/>
    </section>
  )
}

export default CreateRoom