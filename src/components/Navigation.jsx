import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigation } from '../router/navigation';
// import 'animate.css';

const Navigation = ({ isMenuOpen, closeMenu }) => {

    const handleNavLinkClick = (e) => {
        // Обробка кліку на посилання
        closeMenu();
    };

    return (
        <div className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className='nav__list'>
                {navigation.map((el, index) => (
                    <li
                        key={Math.random() * 100} // Використання індексу як ключа (краще використовувати унікальні значення, якщо доступні)
                        className={`nav__item`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <NavLink to={el.link} className="nav__link" onClick={handleNavLinkClick}>
                            {el.pageName}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;
                        // ${ shouldAnimate ? 'animate__animated animate__fadeInUp' : '' shouldAnimate, }