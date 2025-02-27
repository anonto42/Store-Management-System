import React from 'react';


interface ChatMessageProps {
    isOwnerMessge: boolean;
    message: string;
    sender: string;
}

const Message = ( { sender, message, isOwnerMessge }: ChatMessageProps ) => {
    const isSystemMessage: boolean = sender === "system";
  return (
    <section 
        className={`
            flex
            ${
                isSystemMessage ? 
                    "justify-center" :
                        isOwnerMessge ?
                            "justify-end" :
                            "justify-start"
            }
        `}
    >
        <div className={`
            max-w-[300px] min-w-[50px] py-3 rounded-lg
            ${
                isSystemMessage ? 
                    "bg-gray-800 text-center text-xs" :
                        isOwnerMessge ?
                            "bg-blue-500" :
                            "bg-white text-[#0D1117]"
            }
        `}>
            {
                !isSystemMessage && (
                    <p className='text-sm font-medium'>{sender}</p>
                )
            }
            <p>{message}</p>
        </div>
    </section>
  )
}

export default Message