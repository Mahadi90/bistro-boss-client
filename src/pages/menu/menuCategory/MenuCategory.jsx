import React from "react";
import ItemCard from "../../shared/itemCard/ItemCard";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4 mb-10 mt-20 mx-2 md:mx-0">
        {items.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
     <div className="text-center mb-8">
     <Link to={`/shop/${title}`}><button className="btn-outline p-2 text-black border-b-4 border-b-black rounded-xl">
        Order your favourite food
      </button></Link>
     </div>
    </div>
  );
};

export default MenuCategory;
