import { createBrowserRouter } from "react-router-dom"
import Layout from "../pages/Layout/Layout"
import SearchPage from "../pages/SearchPage/SearchPage"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <SearchPage />
            }
        ]
    }
])