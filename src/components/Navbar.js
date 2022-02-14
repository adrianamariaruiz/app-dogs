import React, { useState } from 'react'
import logo from "../imagenes/logo.png";
import { BiMenu } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';


export const Navbar = () => {

    const [inputValue, setInputValue] = useState('Search')

    const [sidebar, setSidebar] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <div className='navbar'>

            <img
                src={logo}
                className='logo'
                alt='logo'
            />

            <div className='menu-input-search'>
                <div className='boton-menu'>
                    <BiMenu size='40px' onClick={showSidebar} />
                </div>

                <div className='input-lupa'>
                    <input
                        className='input-search'
                        type='text'
                        value={inputValue}
                        onChange={handleInputChange}
                    />

                    <button className='boton-search'>
                        <BiSearch size='23px' />
                    </button>
                </div>
            </div>

            <nav className={sidebar ? 'nav-menu active animate__animated animate__fadeIn' : 'nav-menu animate__fadeOutLeft'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <MdClose
                            onClick={showSidebar}
                            className='close-x'
                        />
                        <p className='nav-text'>Home</p>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

