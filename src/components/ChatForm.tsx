"use client"
import React, { useState } from 'react'

const ChatForm = () => {
    const [ message , setMessage ] = useState<string>();

    const handleSubmit = ( e : React.FormEvent ) => {
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <form 
        onSubmit={ e => handleSubmit(e) }
        className=''
    >
        <input 
            type="text" 
            onChange={ e => setMessage( e.target.value )}
            placeholder='Type your message here...'
            className='flex-1 px-4 border-2 py-2 rounded-lg focus:outline-none'
        />

    </form>
  )
}

export default ChatForm