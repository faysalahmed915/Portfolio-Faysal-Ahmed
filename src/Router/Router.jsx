import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQ from "../Pages/FAQ";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";


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
                Component: FAQ
            },
            {
                path: '/skills',
                Component: Home,
            },
            {
                path: '/projects',
                Component: FAQ
            },
            {
                path: '/blogs',
                Component: Blogs,
            }
        ]
    }
])
