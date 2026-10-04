import Sidebar from './Sidebar';
import useDocumentTitle from '../hooks/useDocumentTitle';

const CV_URL = 'https://drive.google.com/file/d/1b0gtzffMXFrQx6oY1AOyiKt0K5lWFjg3/view?usp=sharing';

const About = () => {
    useDocumentTitle();

    return (
        <div className="about">
            <Sidebar />
            <div className="about__content">
                <h1 className="about__title">
                    <span className="about__hello">Hello I&apos;m</span>
                    <span className="about__animation">
                        <span className="about__name">
                            <span>Vasyl Bezkorovainyi</span>
                        </span>
                        <span className="about__position">
                            <span>Frontend Developer</span>
                        </span>
                        <span className="about__technology">
                            <span>HTML/CSS/JS/React/WP</span>
                        </span>
                    </span>
                </h1>
                <div className="about__description">
                    <p>
                        Aspiring Frontend Developer with a passion for creating user-friendly and
                        visually appealing web interfaces.
                    </p>
                    <p>
                        Proficient in HTML, CSS/SCSS, Tailwind, JavaScript, TypeScript, React.js,
                        Next.js
                    </p>
                    <p>Wordpress and PHP experience. Custom themes, custom Woocommerce themes.</p>
                    <p>QA skills.</p>
                    <p>Strong problem-solving and debugging skills.</p>
                </div>
                <a
                    className="about__button"
                    href={CV_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download CV
                </a>
            </div>
        </div>
    );
};

export default About;
