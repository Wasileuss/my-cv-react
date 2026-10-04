import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import projects from '../data/projects.json';
import useDocumentTitle from '../hooks/useDocumentTitle';

const images = import.meta.glob('../assets/images/portfolio/*.webp', {
    eager: true,
    import: 'default',
});

const getImagePath = (filename) => images[`../assets/images/portfolio/${filename}`];

// 3D tilt only for mouse users who haven't asked for reduced motion
const TILT_MEDIA = '(any-hover: hover) and (prefers-reduced-motion: no-preference)';

const Projects = () => {
    useDocumentTitle('Projects');
    const listRef = useRef(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add(TILT_MEDIA, () => {
            const cleanups = [];

            listRef.current.querySelectorAll('.card-container').forEach((container) => {
                const body = container.querySelector('.card-body');
                const items = container.querySelectorAll('.card-item');

                gsap.set(container, {
                    transformStyle: 'preserve-3d',
                    perspective: 1200,
                });

                gsap.set(body, {
                    transformStyle: 'preserve-3d',
                    rotationX: 0,
                    rotationY: 0,
                });

                gsap.set(items, {
                    transformStyle: 'preserve-3d',
                    z: 0,
                });

                const onEnter = () => {
                    gsap.to(items, {
                        z: (i, el) => parseFloat(el.dataset.translateZ) || 0,
                        duration: 0.5,
                        ease: 'power2.out',
                        stagger: 0.05,
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
                        ease: 'power1.out',
                    });
                };

                const onLeave = () => {
                    gsap.to(body, {
                        rotationX: 0,
                        rotationY: 0,
                        duration: 0.5,
                        ease: 'power2.out',
                    });

                    gsap.to(items, {
                        z: 0,
                        duration: 0.5,
                        ease: 'power2.out',
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
        });

        // reverts every gsap.set/to made inside mm.add
        return () => mm.revert();
    }, []);

    return (
        <div className="projects">
            <h1 className="projects__title title">My Projects</h1>

            <ul className="projects__list" ref={listRef}>
                {projects.map((item) => (
                    <li className="projects__item card-container" key={item.href}>
                        <div className="projects__link card-body">
                            <div className="projects__screens card-item" data-translate-z="40">
                                <img
                                    className="projects__tablet card-item"
                                    src={getImagePath(item.tablet)}
                                    alt={`${item.title} — tablet view`}
                                    width="605"
                                    height="839"
                                    loading="lazy"
                                    decoding="async"
                                    data-translate-z="50"
                                />
                                <img
                                    className="projects__mobile card-item"
                                    src={getImagePath(item.mobile)}
                                    alt={`${item.title} — mobile view`}
                                    width="378"
                                    height="765"
                                    loading="lazy"
                                    decoding="async"
                                    data-translate-z="60"
                                />
                                <img
                                    className="projects__pc card-item"
                                    src={getImagePath(item.pc)}
                                    alt={`${item.title} — desktop view`}
                                    width="1318"
                                    height="757"
                                    loading="lazy"
                                    decoding="async"
                                    data-translate-z="20"
                                />
                            </div>

                            <a
                                href={item.href}
                                target={item.target}
                                rel={item.rel}
                                className="projects__name card-item"
                                data-translate-z="80"
                            >
                                <h2>{item.title}</h2>
                            </a>
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
