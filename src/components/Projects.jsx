import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import projects from '../data/projects.json';
import { Link } from 'react-router-dom';

const getImagePath = (filename) =>
  require(`../assets/images/portfolio/${filename}`);

const Projects = () => {
    const cardsRef = useRef([]);
    const [loading, setLoading] = useState(true);
    const [loadedCount, setLoadedCount] = useState(0);
    const totalImages = projects.length * 3;

    const handleImageLoad = () => {
        setLoadedCount((prev) => prev + 1);
    };

    useEffect(() => {
        if (loadedCount === totalImages) {
            setLoading(false);
        }
    }, [loadedCount, totalImages]);

    useEffect(() => {
        if (loading) return;

        const cleanups = [];

        cardsRef.current.forEach((container) => {
            if (!container) return;

            const body = container.querySelector('.card-body');
            const items = container.querySelectorAll('.card-item');

            gsap.set(container, {
                transformStyle: 'preserve-3d',
                perspective: 1200
            });

            gsap.set(body, {
                transformStyle: 'preserve-3d',
                rotationX: 0,
                rotationY: 0
            });

            gsap.set(items, {
                transformStyle: 'preserve-3d',
                z: 0
            });

            const onEnter = () => {
                gsap.to(items, {
                z: (i, el) => parseFloat(el.dataset.translateZ) || 0,
                duration: 0.5,
                ease: 'power2.out',
                stagger: 0.05
                });
            };

            const onMove = (e) => {
                const rect = container.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const tiltX = ((e.clientY - centerY) / (rect.height / 2)) * -15;
                const tiltY = ((e.clientX - centerX) / (rect.width / 2)) * 15;

                gsap.to(body, {
                rotationX: tiltX,
                rotationY: tiltY,
                duration: 0.3,
                ease: 'power1.out'
                });
            };

            const onLeave = () => {
                gsap.to(body, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.5,
                ease: 'power2.out'
                });

                gsap.to(items, {
                z: 0,
                duration: 0.5,
                ease: 'power2.out'
                });
            };

            container.addEventListener('mouseenter', onEnter);
            container.addEventListener('mousemove', onMove);
            container.addEventListener('mouseleave', onLeave);

            cleanups.push(() => {
                container.removeEventListener('mouseenter', onEnter);
                container.removeEventListener('mousemove', onMove);
                container.removeEventListener('mouseleave', onLeave);
            });
        });

        return () => cleanups.forEach((fn) => fn());
    }, [loading]);

    return (
        <div className="projects">
            <h2 className="projects__title title">My Projects</h2>

            {loading && (
                <div id="load">
                    <div>L</div><div>O</div><div>A</div><div>D</div><div>I</div><div>N</div><div>G</div>
                </div>
            )}

            <ul className={`projects__list ${loading ? 'hidden' : ''}`}>
                {projects.map((item, idx) => (
                <li
                    className="projects__item card-container"
                    key={idx}
                    ref={(el) => (cardsRef.current[idx] = el)}
                >
                    <div className="projects__link card-body">
                        <div className="projects__screens card-item" data-translate-z="40">
                            <img
                            className="projects__tablet card-item"
                            src={getImagePath(item.tablet)}
                            alt="Tablet view"
                            onLoad={handleImageLoad}
                            data-translate-z="50"
                            />
                            <img
                            className="projects__mobile card-item"
                            src={getImagePath(item.mobile)}
                            alt="Mobile view"
                            onLoad={handleImageLoad}
                            data-translate-z="60"
                            />
                            <img
                            className="projects__pc card-item"
                            src={getImagePath(item.pc)}
                            alt="PC view"
                            onLoad={handleImageLoad}
                            data-translate-z="20"
                            />
                        </div>

                        <Link
                        to={item.href}
                        target={item.target}
                        rel={item.rel}
                        aria-label={item.title} 
                        className="projects__name card-item"
                        data-translate-z="80"
                        >
                            <h3>{item.title}</h3>
                        </Link>
                        <p className="projects__technology card-item" data-translate-z="50">
                            {item.technology}
                        </p>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
