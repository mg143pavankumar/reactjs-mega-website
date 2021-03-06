import React, { useState } from 'react'
import { MdFingerprint } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMoblileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };


    return (
        <>
            <IconContext.Provider value={{ color: ' #fff' }}>
                <div className='navbar'>
                    <div className='navbar-container container'>
                        <Link to='/' className='navbar-logo' onClick = {closeMoblileMenu}>
                            <MdFingerprint className='navbar-icon' />
                        MEGA
                    </Link>

                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className='nav-links'onClick = {closeMoblileMenu}>
                                    Home
                          </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/services' className='nav-links' onClick = {closeMoblileMenu}>
                                    Services
                          </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/products' className='nav-links' onClick = {closeMoblileMenu}>
                                    Products
                          </Link>
                            </li>

                            <li className='nav-btn'>
                                {button ? (
                                    <Link to='/sign-up' className='btn-link'>
                                        <Button buttonStyle='btn--outline'>SIGN UP</Button>
                                    </Link>
                                ) : (
                                        <Link to='/sign-up' className='btn-link' onClick = {closeMoblileMenu}>
                                            <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>SIGN UP</Button>
                                        </Link>
                                    )}
                            </li>
                        </ul>

                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
