"use client"
import React, { useState } from 'react'


interface onSendMessage {
    onSendMessage( message : string ) : void;
}

const ChatForm = (
        { onSendMessage } : onSendMessage 
    ) => {

    const [ message , setMessage ] = useState<string>("");

    const handleSubmit = ( e : React.FormEvent ) => {
        try {
            e.preventDefault();
            if( message?.trim() !== "" ){
                onSendMessage(message);
                setMessage('');
            };
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <form 
        onSubmit={ e => handleSubmit(e) }
        className='border flex justify-between overflow-y-hidden rounded-xl border-[#d8eef1] max-w-2xl'
    >

        <input 
            type="text" 
            value={message}
            onChange={ e => setMessage( e.target.value )}
            placeholder='Type your message here...'
            className='px-4 w-full focus:outline-none placeholder:italic'
        />

        <button
            type='submit'
            className='px-6 py-3 active:bg-blue-400 duration-150 cursor-pointer ease-in-out bg-blue-600 font-semibold'
        >
            Send
        </button>

    </form>
  )
}

export default ChatForm