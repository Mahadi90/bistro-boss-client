import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/menu/Menu/Menu";
import Shop from "../pages/Shop/Shop/Shop";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashBoard from "../layout/DashBoard";
import Cart from "../pages/dashboard/Cart/Cart";







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
            },
            {
                path: 'signup',
                element : <SignUp></SignUp>
            }
        ]
    },
    {
        path : 'dashboard',
        element : <DashBoard></DashBoard>,
        children : [
            {
                path : 'cart',
                element : <Cart></Cart>
            }
        ]
    }
])

export default router;