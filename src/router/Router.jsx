import { createBrowserRouter } from "react-router"
import Layout from "../pages/Layout"
import Home from "../components/About"
import Projects from "../components/Projects"
import Courses from "../components/Courses"
import Contact from "../components/Contact"
import ErrorPage from "../pages/404"

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "courses",
                element: <Courses />
            },
            {
                path: "projects",
                element: <Projects />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage />
    }
])

export default Router