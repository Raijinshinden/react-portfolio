import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action='' method='POST' encType='multiport/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input type='text' name='name' />
                </div>
                <div>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input type="text" name='phone' />
                </div>
            </div>
            <div>
                <label className='uppercase text-sm py-2'>Email</label>
                <input type='email' name='name' />    
            </div>
            <div>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input type='text' name='subject' />    
            </div>
            <div>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea rows='10' name='message' />    
            </div> 
        </form>
    </div>
  )
}

export default Contact