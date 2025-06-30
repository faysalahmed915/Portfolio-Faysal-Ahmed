import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQ from "../Pages/FAQ";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Projects from "../Pages/Projects/Projects";
import ProjectDetails from "../Pages/Projects/ProjectDetails.jsx";
import Skills from "../Pages/Skills/Skills.jsx";
import About from "../Pages/About/About.jsx";
import ContactMe from "../Pages/Contact/ContactMe.jsx";


export const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
                // loader: async () => {
                //     const res = await fetch('https://bd-food-storage-server.vercel.app/fridge');
                //     return res.json();
                // },
                // hydrateFallbackElement: <h1>Loading...</h1>,
            },
            {
                path: '/about',
                Component: About,
            },
            {
                path: '/skills',
                Component: Skills,
            },
            {
                path: '/projects',
                Component: Projects,
            },
            {
                path: '/blogs',
                Component: Blogs,
            },
            {
                path: "/projectDetails/:id",
                Component: ProjectDetails,
            },
            {
                path: "/contactMe",
                Component: ContactMe,
            }
        ]
    }
])
