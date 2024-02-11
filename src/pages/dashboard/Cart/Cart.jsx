import React from "react";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import useCart from "../../hooks/useCart";
import CartTable from "./CartTable";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalCartPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <SectionTitle
        subHeading="My Cart"
        heading="WANNA ADD MORE?"
      ></SectionTitle>

      <div className="flex justify-evenly items-center">
        <h2 className="text-2xl font-bold">Total Orders : <span className="text-orange-400">{cart.length}</span></h2>
        <h2 className="text-2xl font-bold">Total Price : <span className="text-orange-400">${totalCartPrice}</span></h2>
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
              <th>Item imge</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <CartTable key={item._id} item={item} index={index} refetch={refetch}></CartTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
