import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action='' method='POST' encType='multiport/form-data'>
            <div>
                <div>
                    <label>Name</label>
                </div>
                <div>
                    <label>Phone Number</label>
                </div>
            </div> 
        </form>
    </div>
  )
}

export default Contact