import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
import useAxiosPublic from '../pages/hooks/useAxiosPublic';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const ProviderGoogle = new GoogleAuthProvider()
const axiosPublic = useAxiosPublic()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createuser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = ()=> {
        setLoading(true)
     return signInWithPopup(auth, ProviderGoogle)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if(currentUser){
                const userInfo = {email : currentUser.email}
              axiosPublic.post('/jwt', userInfo)
              .then(res => {
                if(res.data.token){
                    localStorage.setItem('access-token', res.data.token)
                }
              })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return ()=> {
            return unsubscribe();
        }
    },[])

    const createProfile=(userName, photo) => {
        return updateProfile(auth.currentUser, {
            displayName : userName, photoURL : photo
        })
    }


    const authInfo = {
        user,
        loading,
        createuser,
        googleSignIn,
        logout,
        login,
        createProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;