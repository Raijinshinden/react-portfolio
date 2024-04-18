import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

function Sidenav() {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
        {
            nav ? (
                <div>
                    <a href="main">
                        <AiOutlineHome size={20} />
                        <span>Home</span>
                    </a>
                </div>
            )
            : (
                <div></div>
            )
        }
    </div>
  );
};

export default Sidenav