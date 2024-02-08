import React, { useContext, useEffect, useState } from "react";
import img from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate()

    const { login, googleSignIn, } = useContext(AuthContext)
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'
    // console.log(location)

    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, [])

    const handleCaptcha = e => {
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
          setDisabled(false)
        }else{
           toast.error('Captcha does not match');
        }
    }

    const handleLogin = (e) => {
 
        e.preventDefault()

        const form = e.target;
        const password = form.password.value;
        const email = form.email.value;
      
        login(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser)
            toast.success('User login sucessfully');
            navigate(from, {replace : true})
        })
        .catch(error => {
            console.log(error.message)
            toast.error(error.message);
        })
        
    }

    const handleGoogleLogin = () => {
      googleSignIn()
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser)
        toast.success('User login sucessfully');
        navigate('/')
        navigate(from, {replace : true})
    })
    .catch(error => {
        console.log(error.message)
        toast.error(error.message);
    })
    }
    
    const updatePass = () => {

    }

  return (
    <div className="hero mt-10 border-t-4 border-l-4  shadow-lg shadow-gray-700 ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center  w-full lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card w-full bg-base-100">
            <h2 className="text-xl font-bold text-center mt-4">Login</h2>
          <form onSubmit={handleLogin} className="card-body">
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
            <div className="form-control">
            <LoadCanvasTemplate />
              <input
              onBlur={handleCaptcha}
                type="text"
                placeholder="type here the abov"
                className="input input-bordered mt-2"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button disabled={disabled} className="btn btn-primary">Login</button>
            </div>
            <Toaster
            toastOptions={{
                className: '',
                style: {
                  border: '2px solid blue',
                  padding: '16px',
                  color: '#713200',
                },
              }}
             />
             <p>Are you new here? please <Link className="link" to='/signup'>Sign Up</Link></p>
          </form>
          <div className="border-x-2 text-center">
            <h2 className="mb-2">OR Logi with</h2>
            <button onClick={handleGoogleLogin} className="btn bg-red-500 rounded-full text-white hover:bg-white hover:border-red-500 hover:border-2 hover:text-red-500">Login with your Google Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
