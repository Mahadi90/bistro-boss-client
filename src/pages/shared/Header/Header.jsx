import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Header = () => {
  const { logout, user } = useContext(AuthContext);
  const [cart] = useCart();
  // console.log(cart)

  const handleLogout = () => {
    logout()
      .then((result) => {
        // console.log(result)
      })
      .catch((error) => {
        // console.log(error.mesage)
      });
  };

  const navItems = (
    <>
      <Link className="mx-2 font-bold" to="/">
        Home
      </Link>
      <Link className="mx-2 font-bold" to="/menu">
        Our Menu
      </Link>
      <Link className="mx-2 font-bold" to="/shop/salad">
        Shop
      </Link>
      <Link className="mx-2 font-bold" to="/dashboard">
        Dashboard
      </Link>
      <Link to='/dashboard/cart'>
        <button className="mx-2 font-bold relative">
          <FaShoppingCart className="w-6 h-6"></FaShoppingCart>
          <div className="badge badge-secondary absolute -top-2 left-6">+{cart.length}</div>
        </button>
      </Link>
    </>
  );

  return (
    <div className="navbar fixed z-10  bg-black text-white bg-opacity-30 max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <h2>{user.displayName}</h2>
            <img
              className="w-12 h-12 rounded-full mx-4"
              src={user.photoURL}
              alt="photo"
            />
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
