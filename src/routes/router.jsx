import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/menu/Menu/Menu";
import Shop from "../pages/Shop/Shop/Shop";
import Login from "../pages/Login/Login";



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
                path : 'shop/:category',
                element : <Shop></Shop>
            },
            {
                path: 'login',
                element : <Login></Login>
            }
        ]
    }
])

export default router;