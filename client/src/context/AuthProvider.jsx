import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config";

export const UserContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //Create a user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }







    //User observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, []);



    const authInfo = {
        user,
        loading,
        createUser
    }

    return <UserContext.Provider value={authInfo}>
        {children}
    </UserContext.Provider>
}

export default AuthProvider