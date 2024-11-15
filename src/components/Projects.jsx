// import React from 'react';
// import projects from '../data/projects.json';
// import PreloadImages from './PreloadImages';
// import { Link } from 'react-router-dom';

// const getImagePath = (filename) => {
//     return require(`../assets/images/portfolio/${filename}`);
// };

// const Projects = () => {
//     const imagePaths = projects.flatMap(item => [
//         getImagePath(item.pc),
//         getImagePath(item.tablet),
//         getImagePath(item.mobile)
//     ]);
//     return (
//         <div className='projects'>
//             <h2 className='projects__title title'>My Projects</h2>
//             <ul className='projects__list'>
//                 {projects.map((item, idx) =>
//                     <li className='projects__item' key={idx}>
//                         <Link className='projects__link' to={item.href} target={item.target} rel={item.rel} aria-label={item.title}>
//                             <div className="projects__screens">
//                                 <div className="projects__pc" >
//                                     <img 
//                                         rel="preload" 
//                                         fetchpriority="high"
//                                         loading='lazy'
//                                         as="image" 
//                                         src={getImagePath(item.pc)} 
//                                         alt="PC view" 
//                                     />
//                                 </div>
//                                 <div className="projects__tablet">
//                                     <img rel="preload" 
//                                     fetchpriority="high"
//                                     loading='lazy'
//                                     as="image" 
//                                     src={getImagePath(item.tablet)} 
//                                     alt="Tablet view" 
//                                     />
//                                 </div>
//                                 <div className="projects__mobile">
//                                     <img 
//                                     rel="preload" 
//                                     fetchpriority="high"
//                                     loading='lazy'
//                                     as="image"  
//                                     src={getImagePath(item.mobile)} 
//                                     alt="Mobile view" 
//                                     />
//                                 </div>
//                             </div>
//                             <h3 className='projects__name'>{item.title}</h3>
//                             <p className='projects__technology'>{item.technology}</p>
//                         </Link>
//                     </li>
//                 )}
//             </ul>
//             <PreloadImages images={imagePaths} />
//         </div>
//     );
// };

// export default Projects;

import React, { useState } from 'react';
import projects from '../data/projects.json';
import { Link } from 'react-router-dom';

const getImagePath = (filename) => require(`../assets/images/portfolio/${filename}`);

const Projects = () => {
    const [loading, setLoading] = useState(true); // Стан завантаження
    const [loadedCount, setLoadedCount] = useState(0); // Лічильник завантажених зображень
    const totalImages = projects.length * 3; // Загальна кількість зображень (PC, tablet, mobile)

    // Оновлення лічильника при завантаженні кожного зображення
    const handleImageLoad = () => {
        setLoadedCount((prev) => prev + 1);
    };

    // Якщо всі зображення завантажені, оновлюємо стан
    if (loadedCount === totalImages && loading) {
        setLoading(false);
    }

    return (
        <div className="projects">
            <h2 className="projects__title title">My Projects</h2>
            {loading && <div id='load'>
                            <div>G</div>
                            <div>N</div>
                            <div>I</div>
                            <div>D</div>
                            <div>A</div>
                            <div>O</div>
                            <div>L</div>
                        </div>}
            <ul className={`projects__list ${loading ? 'hidden' : ''}`}>
                {projects.map((item, idx) => (
                    <li className="projects__item" key={idx}>
                        <Link
                            className="projects__link"
                            to={item.href}
                            target={item.target}
                            rel={item.rel}
                            aria-label={item.title}
                        >
                            <div className="projects__screens">
                                <img
                                    className="projects__pc"
                                    src={getImagePath(item.pc)}
                                    alt="PC view"
                                    onLoad={handleImageLoad}
                                    onError={() => console.error(`Error loading: ${item.pc}`)}
                                />
                                <img
                                    className="projects__tablet"
                                    src={getImagePath(item.tablet)}
                                    alt="Tablet view"
                                    onLoad={handleImageLoad}
                                    onError={() => console.error(`Error loading: ${item.tablet}`)}
                                />
                                <img
                                    className="projects__mobile"
                                    src={getImagePath(item.mobile)}
                                    alt="Mobile view"
                                    onLoad={handleImageLoad}
                                    onError={() => console.error(`Error loading: ${item.mobile}`)}
                                />
                            </div>
                            <h3 className="projects__name">{item.title}</h3>
                            <p className="projects__technology">{item.technology}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
