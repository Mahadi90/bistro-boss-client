import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({item}) => {
  const {image, name, price, recipe, _id} = item;

  const axiosSecure = useAxiosSecure()
  const [, refetch] = useCart()

  const  { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

 const handleAddToCart = () => {
  if(user && user.email){
    // console.log(food, user.email)
    const cartItem = {
      foodId :  _id,
      email : user.email,
      userName : user.displayname,
      name,
      price,
      image
    }

    axiosSecure.post('/carts', cartItem)
    .then(res => {
      // console.log(res.data)
      if(res.data.insertedId){
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${name} added to your cart`,
          showConfirmButton: false,
          timer: 1500
        });
        refetch()
      }
    })
  }
  else{
    Swal.fire({
      title: "You dont have logged in!",
      text: "You have to login before add to cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want to login"
    }).then((result) => {
      if (result.isConfirmed) {
       navigate('/login', {state : {from : location}})
      }
    });
  }
 }

    
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
        <p>{recipe}</p>
        <p className="absolute top-4 right-4 bg-black py-2 px-4 text-white">${price}</p>
        <div className="card-actions justify-center">
         <Link> <button onClick={handleAddToCart} className="btn-outline bg-slate-200 border-b-4 border-b-orange-400 px-4 py-2 rounded-xl text-orange-500 ">Add to Cart</button></Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
