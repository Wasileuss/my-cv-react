import { NavLink } from 'react-router';
import { navigation } from '../router/navigation';

const Navigation = ({ id, isMenuOpen, closeMenu }) => {
    return (
        <nav id={id} className={`nav ${isMenuOpen ? 'active' : ''}`} aria-label="Main">
            <ul className="nav__list">
                {navigation.map((el, index) => (
                    <li
                        key={el.link}
                        className="nav__item"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <NavLink to={el.link} className="nav__link" onClick={closeMenu}>
                            {el.pageName}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
