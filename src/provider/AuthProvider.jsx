import React from 'react';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUserEP = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('https://universal-blogs-server.vercel.app/jwt', user, {
                    withCredentials: true
                })
                    .then(res => {
                        setLoading(false);
                    })
            }
            else {
                axios.post('https://universal-blogs-server.vercel.app/logout', {}, {
                    withCredentials: true,
                })
                    .then(res => {
                        setLoading(false);
                    })
            }
        });
        return unsubscribe;
    },[])

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }



    const userInfo = {
        user,
        loading,
        createUserEP,
        loginUser,
        logOut,
        logInWithGoogle,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;