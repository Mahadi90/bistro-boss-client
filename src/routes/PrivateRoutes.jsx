import React from 'react';
import useAuth from '../pages/hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user , loading} = useAuth()
    const location =  useLocation()

    if(loading){
       return <div className='text-center text-2xl font-bold py-52'>Loading....</div>
    }
    
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoutes;