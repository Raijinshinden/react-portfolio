import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

function Sidenav() {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div>
        <AiOutlineMenu />

    </div>
  );
};

export default Sidenav