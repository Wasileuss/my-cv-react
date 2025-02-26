import Sidebar from "./Sidebar";

const Home = () => {
    return (
        <div className='about'>
            <Sidebar />
            <div className ="about__content">
                <div className ="about__title">
                    <h2 className ="about__hello">Hello I'm</h2>
                    <div className ="about__animation">
                        <div className ="about__name"><div>Vasyl Bezkorovainyi</div></div>
                        <div className ="about__position"><div>Frontend Developer</div></div>
                        <div className ="about__technology"><div>HTML/CSS/JS/React/WP</div></div>
                    </div>
                </div>
                <div className ="about__description">
                    <p>Aspiring Frontend Developer with a passion for creating
                    user-friendly and visually appealing web interfaces.</p>
                    <p>Proficient in HTML, CSS/SCSS, Tailwind, JavaScript, TypeScript, React.js, Next.js</p>
                    <p>QA skills.</p>
                    <p>Wordpress and PHP experience.</p>
                    <p>Strong problem-solving and debugging skills.</p>
                </div>
                <button
                  type="button"
                  className="about__button"
                  onClick={() => window.open('https://drive.google.com/file/d/1bb1krPJ4EBLwRDunWgb_VVBCHOOQswoF/view?usp=sharing', '_blank')}
                >
                  Download CV
                </button>
            </div>
        </div>
    );
};

export default Home;
