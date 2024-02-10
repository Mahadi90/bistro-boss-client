import React from "react";
import { FaShoppingCart, FaCalendar, FaWallet, FaStar, FaMarker, FaHome, FaBars, FaShoppingBag } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../pages/hooks/useCart";

const DashBoard = () => {

   const [cart] = useCart()

  return (
    <div className="md:flex">
      <div className="md:w-64 bg-orange-400 md:min-h-screen p-2">
        <h2 className="text-2xl font-bold ps-4">BISTRO BOSS <br /> Restaurant</h2>
         <ul className="menu">
            <li><NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink></li>
            <li><NavLink to='/dashboard/Reservation'><FaCalendar></FaCalendar>Reservation</NavLink></li>
            <li><NavLink to='/dashboard/payment'><FaWallet/>Payment History</NavLink></li>
            <li><NavLink to='/dashboard/review'><FaStar/>Add review</NavLink></li>
            <li><NavLink to='/dashboard/myBookings'><FaMarker/>My Bookings</NavLink></li>
            <div className="divider"></div> 
            <li><NavLink to='/'><FaHome/>Home</NavLink></li>
            <li><NavLink to='/menu'><FaBars/>Menu</NavLink></li>
            <li><NavLink to='/shop/salad'><FaShoppingBag/>Shop</NavLink></li>
         </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
