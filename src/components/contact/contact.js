
import React from 'react'

export const Contact = () => {
  return (
    <div name="contact" className='h-full w-full bg-slate-900'>
        <div className='flex flex-col '>
            <div className='text-white ml-28 mb-6'>
                <h1 className='inline border-b-4 border-gray-500 text-2xl font-bold'>Contact</h1>
                <p className='mt-3 text-slate-400'>submit the form to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>  
             <form action="https://getform.io/f/4c46c2d5-cea2-45d5-852c-1d6a9155786f" method="POST" className="flex flex-col gap-4 justify-ceneter items-center h-screen w-full " >
                <input  className='p-2 bg-transparent border-2 rounded-md text-white w-72  focus:outline-none'  type="text" name='name' placeholder='Enter your name' />
                <input className='p-2 bg-transparent border-2 rounded-md text-white w-72 focus:outline-none' type="text"  name='email' placeholder='Enter your email' />
                <textarea className='p-2 bg-transparent border-2 rounded-md text-white w-72f focus:outline-none' name="message" id="message" cols="30" rows="10"  placeholder='put your massage ' />
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
            </form> 
            </div>
        
        
        </div>
    </div>
  )
}


export default Contact;