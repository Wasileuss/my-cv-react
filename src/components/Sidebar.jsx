import contacts from '../data/contacts.json';
import avatar from '../assets/images/photo.webp';
import { LuSmartphone } from 'react-icons/lu';
import { FiMail } from 'react-icons/fi';
import { PiTelegramLogo } from 'react-icons/pi';

const icons = {
    phone: LuSmartphone,
    email: FiMail,
    telegram: PiTelegramLogo,
};

function Sidebar() {
    return (
        <div className="sidebar">
            <img
                className="sidebar__avatar"
                src={avatar}
                alt="Vasyl Bezkorovainyi"
                width="250"
                height="322"
            />
            <ul className="sidebar__list">
                {contacts.map((item) => {
                    const Icon = icons[item.icon];
                    return (
                        <li className="sidebar__item" key={item.href}>
                            {Icon && <Icon className="sidebar__icon" aria-hidden="true" />}
                            <a
                                className="sidebar__contact"
                                href={item.href}
                                title={item.title}
                                target={item.target}
                                rel={item.rel}
                            >
                                {item.body}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;
