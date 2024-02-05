import React, { useContext } from "react";
import img from "../../assets/others/authentication1.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {

   const { createuser } = useContext(AuthContext)

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const email = form.email.value;
    
    createuser(email, password)
    .then(result => {
        const createdUser = result.user;
        console.log(createdUser)
        toast.success('User created successfully');
    })
    .catch(error => {
        console.log(error.message)
        toast.error(error.message);
    })
  };

  return (
    <div className="hero mt-10 border-t-4 border-l-4  shadow-lg shadow-gray-700 ">
         <Toaster  />
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center  w-full lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card w-full bg-base-100">
          <h2 className="text-xl font-bold text-center mt-4">Sign Up</h2>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
            <p>
              Already have an account? please{" "}
              <Link className="link" to="/login">
                Login
              </Link>
            </p>
          </form>
          <div className="border-x-2 text-center">
            <h2 className="mb-2">OR Sign up with</h2>
            <button className="btn bg-red-500 rounded-full text-white hover:bg-white hover:border-red-500 hover:border-2 hover:text-red-500">
              Sign Up with your Google Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
