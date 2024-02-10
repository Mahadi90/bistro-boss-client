import React from "react";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import useCart from "../../hooks/useCart";
import CartTable from "./CartTable";

const Cart = () => {
  const [cart, prefetch] = useCart();
  const totalCartPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <SectionTitle
        subHeading="My Cart"
        heading="WANNA ADD MORE?"
      ></SectionTitle>

      <div className="flex justify-evenly items-center">
        <h2 className="text-2xl font-bold">Total Orders : {cart.length}</h2>
        <h2 className="text-2xl font-bold">Total Price : ${totalCartPrice}</h2>
        <button className="btn btn-primary">PAY</button>
      </div>

      {/* table */}
      <div className="px-2 md:px-28 my-4">
        <table className="table">
          <thead>
            <tr className="bg-orange-400 text-white">
              <th>
                <h2>Serial</h2>
              </th>
              <th>Item Name</th>
              <th>Job</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <CartTable key={item._id} item={item} index={index} prefetch={prefetch}></CartTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
