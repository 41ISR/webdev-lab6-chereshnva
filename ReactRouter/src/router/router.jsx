import { createBrowserRouter } from "react-router-dom"
import Layout from "../pages/Layout/Layout"
import SearchPage from "../pages/SearchPage/SearchPage"
import Dogimages from "../pages/DogImages/Dogimages"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <SearchPage />
            },
            {
                path: "images/:breeds",
                element: <Dogimages />
            }
        ]
    }
])