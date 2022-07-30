import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'
import Button from "./Button";

const Navbar = () => {
    const [menuState, setMenuState] = useState(false)

    const menuIconHandler = () => {
        setMenuState(!menuState)
    }

    const closeMenuHandler = () => {
        setMenuState(false)
    }

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    Iran Travel<i className="fab fa-typo3"/>
                </Link>
                <div className='menu-icon' onClick={menuIconHandler}>
                    <i className={menuState ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={menuState ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMenuHandler}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMenuHandler}>
                            Tourism
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMenuHandler}>
                            Tours
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links-mobile' onClick={closeMenuHandler}>
                            Sign up
                        </Link>
                    </li>
                    <Button to='/' children='Sign Up' buttonStyle='btn--outline' buttonSize='btn--medium'/>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;