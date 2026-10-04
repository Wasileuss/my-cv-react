import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from '../pages/Layout';
import About from '../components/About';
import ErrorPage from '../pages/404';

const Courses = lazy(() => import('../components/Courses'));
const Projects = lazy(() => import('../components/Projects'));
const Contact = lazy(() => import('../components/Contact'));

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <About />,
            },
            {
                path: 'courses',
                element: <Courses />,
            },
            {
                path: 'projects',
                element: <Projects />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
        ],
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);

export default Router;
