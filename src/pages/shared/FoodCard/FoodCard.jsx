import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({item}) => {
    const {image, name, price, recipe, _id} = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl text-center">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-center">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-center">
         <Link> <button className="btn-outline bg-slate-200 border-b-4 border-b-orange-400 px-4 py-2 rounded-xl text-orange-500 ">Add to Cart</button></Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
