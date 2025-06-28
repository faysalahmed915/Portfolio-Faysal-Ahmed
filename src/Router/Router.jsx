import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";


export const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                element: <h1>Home</h1>
                // loader: async () => {
                //     const res = await fetch('https://bd-food-storage-server.vercel.app/fridge');
                //     return res.json();
                // },
                // hydrateFallbackElement: <h1>Loading...</h1>,
            }
        ]
    }
])
