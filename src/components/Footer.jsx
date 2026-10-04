import linkedin from '../assets/icons/linkedin.svg';
import github from '../assets/icons/github.svg';
import instagram from '../assets/icons/instagram.svg';
import upwork from '../assets/icons/upwork.svg';

const socials = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/vasyl-bezkorovainyi-ukraine/',
        icon: linkedin,
    },
    { name: 'Instagram', href: 'https://www.instagram.com/webuimaster/', icon: instagram },
    { name: 'GitHub', href: 'https://github.com/Wasileuss/', icon: github },
    {
        name: 'Upwork',
        href: 'https://www.upwork.com/freelancers/~0141d3a4d86d1ac72b',
        icon: upwork,
    },
];

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="sidebar__socials">
                    {socials.map(({ name, href, icon }) => (
                        <a
                            key={name}
                            className="sidebar__link"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={name}
                        >
                            <img src={icon} alt="" />
                        </a>
                    ))}
                </div>
                <div className="footer__copyright">
                    <p>Copyright © {year} All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
