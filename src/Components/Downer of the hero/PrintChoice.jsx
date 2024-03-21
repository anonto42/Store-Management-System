import React from 'react'

const PrintChoice = () => {
  return (
    <div className='flex justify-center items-center w-full mb-4'>
        <div className='w-full'>
            <h1 className='flex justify-center text-2xl font-semibold my-4'>Trusted Online Printer of Choice</h1>
            <div className=' w-full'>
                <div className='flex w-full md:w-[60%] md:ml-[9%] 
                items-center'>
                    <img className=' w-[28%] mx-[2%]' src="https://s3.uprinting.com/SmsImages/UP/list-widget/112558/active/jpeg/amazon.jpg" alt="" />
                    <img className='w-[28%] mx-7' src="https://s3.uprinting.com/SmsImages/UP/list-widget/112558/active/jpeg/google.jpg" alt="" />
                    <img className='max-[2%] w-[28%]' src="https://s3.uprinting.com/SmsImages/UP/list-widget/112558/active/jpeg/facebook.jpg" alt="" />
                    <img className='[28%] mx-[2%] hidden md:block' src="https://s3.uprinting.com/SmsImages/UP/list-widget/112558/active/jpeg/airbnb.jpg" alt="" />
                </div >
                <div className='flex md:hidden'>
                    <img className='[28%] mx-[2%]' src="https://s3.uprinting.com/SmsImages/UP/list-widget/112558/active/jpeg/airbnb.jpg" alt="" />
                    <img className='w-[28%] mx-7' src="https://s3.uprinting.com/SmsImages/UP/list-widget/112558/active/jpeg/nike.jpg" alt="" />
                    <img className='max-[2%] w-[28%]' src="https://s3.uprinting.com/SmsImages/UP/list-widget/112558/active/jpeg/netflix.jpg" alt="" />
                </div>
                <div className='flex md:hidden'>
                    <img className='w-[28%] mx-[2%]' src="https://s3.uprinting.com/SmsImages/UP/list-widget/112558/active/jpeg/adobe.jpg" alt="" />
                    <img className='w-[28%] mx-7' src="https://s3.uprinting.com/SmsImages/UP/list-widget/112558/active/jpeg/salesforce.jpg" alt="" />
                    <img className='max-[2%] w-[28%]' src="https://s3.uprinting.com/SmsImages/UP/list-widget/112558/active/jpeg/tesla.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PrintChoice