import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);

    //Creating User//
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Sign In User//
    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }



    //Managing User//
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log(setUser);
        });
        return ()=>{
            return unSubscribe;
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;