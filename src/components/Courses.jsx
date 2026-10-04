import courses from '../data/courses.json';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Courses = () => {
    useDocumentTitle('Courses');

    return (
        <div className="courses">
            <h1 className="courses__title title">Courses</h1>
            <ul className="courses__list">
                {courses.map((item) => (
                    <li className="courses__item" key={item.href}>
                        <div className="courses__content">
                            <h2 className="courses__name">{item.position}</h2>
                            <p className="courses__school">{item.school}</p>
                        </div>
                        <div className="courses__info">
                            <p className="courses__period">{item.period}</p>
                            <a
                                href={item.href}
                                className="courses__link"
                                target={item.target}
                                rel={item.rel}
                                aria-label={`Certificate: ${item.title}`}
                            >
                                Certificate
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;
