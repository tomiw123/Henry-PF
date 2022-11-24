import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../firebase/firebase.config";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context){
        throw new Error ("no pasaste el context")
    }else{
        return context;
    }

}

export function AuthProvider ({children}){
    
    const [error, setError] = useState("")
    
    const [user, setUser] = useState("")
    
    const navigate = useNevigate

    const [userName, serUserName] = useState("")

    useEffect(()=>{
        const userSession = onAuthStateChanged(auth, (currentUser)=>{
            if(!currentUser){
                setUser("")
            }else{
                setUser(currentUser.email)
                serUserName(currentUser.displayName)
            }
        })
        return()=> userSession()
    },[]);

    const register = async (email, password) =>{
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            const user = response.user.email
            console.log(user)
            setError("")
            navigate("/")
        } catch (error) {
            setError(error.menssage)
        }
    }


    return(
        <authContext.Provider value={{register, login, userName, error, user,  googleAuth,}}>{children}</authContext.Provider>
        )

}