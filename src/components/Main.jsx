import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Main() {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' 
        src='https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=843&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
        />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/25'>
        <div>
            <h1>I'm Ryan</h1>
            <h2>
              I'm a 
              <TypeAnimation
                sequence={[
                // Same substring at the start will only be typed out once, initially
                'Developer',
                2000, // wait 2s before replacing "Developer" with "Coder"
                'Coder',
               2000,
                'Tech Enthusiast',
                2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', paddingLeft: '5px'}}
                repeat={Infinity}
                />
            </h2>
            <div>
                <FaTwitter size={20}/>
                <FaFacebook size={20}/>
                <FaInstagram size={20}/>
                <FaLinkedin />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Main