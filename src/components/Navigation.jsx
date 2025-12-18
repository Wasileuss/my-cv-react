import { NavLink } from 'react-router-dom';
import { navigation } from '../router/navigation';

const Navigation = ({ isMenuOpen, closeMenu }) => {

    const handleNavLinkClick = (e) => {
        closeMenu();
    };

    return (
        <div className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className='nav__list'>
                {navigation.map((el, index) => (
                    <li
                        key={Math.random() * 100}
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
