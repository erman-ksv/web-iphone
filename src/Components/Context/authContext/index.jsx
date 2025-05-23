import React, { useState, useEffect, Children, useContext } from "react"
import { app,auth } from "../../../firebase/firebase"
import { onAuthStateChanged } from "firebase/auth"



const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}


export function AuthProvider(){
    const [currentUser, setCurrentUser] = useState(null)
    const [userLoggedIn,setUserLoggedIn] = useState(false)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, initializeUser)
    })

    async function initializeUser(user) {
        if(user){
            setCurrentUser({...user})
            setUserLoggedIn(true)
        }else{
            setCurrentUser(null)
            setUserLoggedIn(false)
        }
        setLoading(false)
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && Children}
        </AuthContext.Provider>
    )

}