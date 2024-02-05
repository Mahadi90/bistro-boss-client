import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { useLocation } from 'react-router-dom';

const Main = () => {
 
    const location = useLocation()
    const isNavFooter = location.pathname.includes('login')
    const isNavbarFooter = location.pathname.includes('signup')

    return (
        <div>
            {isNavFooter || isNavbarFooter || <Header></Header>}
            <Outlet></Outlet>
            {isNavFooter || isNavbarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;