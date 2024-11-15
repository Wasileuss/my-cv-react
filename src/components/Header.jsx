import React, { useState, useEffect } from 'react';
import logo from '../assets/icons/logo_light.svg';
import Navigation from './Navigation';


function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('lock');
        } else {
            document.body.classList.remove('lock');
        }
    }, [isMenuOpen]);

    return(
        <header className='header'>
            <div className ="header__container">
                <img className='header__logo' src={logo} alt="logo" />
                <Navigation isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} closeMenu={() => setMenuOpen(false)} />
                <button className={`icon-menu ${isMenuOpen ? 'menu-open' : ''}`} onClick={handleMenuClick}><span></span></button>
            </div>
        </header>
    );
}

export default Header;

