import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/menu/Menu/Menu";
import Shop from "../pages/Shop/Shop/Shop";



const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : 'menu',
                element: <Menu></Menu>
            },
            {
                path : 'shop',
                element : <Shop></Shop>
            },
            {
                path : 'shop/:category',
                element : <Shop></Shop>
            }
        ]
    }
])

export default router;