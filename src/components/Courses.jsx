import { Link } from 'react-router-dom';
import courses from '../data/courses.json';

const Education = () => {
    return (
        <div className='courses'>
            <h2 className='courses__title title'>Courses</h2>
            <ul className='courses__list'>
                {courses.map((item,idx) =>
                    <li className='courses__item' key={idx}>
                        <div className='courses__content'>
                            <p className='courses__name'>{item.position}</p>
                            <p className='courses__school' aria-label={item.title}>{item.school}</p>
                        </div>
                        <div className='courses__info'>
                            <p className='courses__period'>{item.period}</p>
                            <Link to={item.href} className='courses__link' target={item.target} rel={item.rel}>
                                Certificate
                            </Link>
                        </div>
                    </li>)}
            </ul>
        </div>
    );
}

export default Education;