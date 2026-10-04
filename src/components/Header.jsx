import { useEffect, useState } from 'react';
import logo from '../assets/icons/logo_light.svg';
import Navigation from './Navigation';

const NAV_ID = 'main-nav';

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (!isMenuOpen) return;

        const onKeyDown = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };

        document.body.classList.add('lock');
        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.classList.remove('lock');
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [isMenuOpen]);

    return (
        <header className="header">
            <div className="header__container">
                <img className="header__logo" src={logo} alt="Vasyl Bezkorovainyi logo" />
                <Navigation
                    id={NAV_ID}
                    isMenuOpen={isMenuOpen}
                    closeMenu={() => setMenuOpen(false)}
                />
                <button
                    type="button"
                    className={`icon-menu ${isMenuOpen ? 'menu-open' : ''}`}
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls={NAV_ID}
                >
                    <span></span>
                </button>
            </div>
        </header>
    );
}

export default Header;
