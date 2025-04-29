'use client'

import { IUserSession } from "@/types"
import { createContext, useContext, useEffect, useState } from "react"

export interface AuthContextProps {
    userData: IUserSession | null,
    setUserData: (userData: IUserSession | null) => void,
    logout: () => void
}

export const AuthContext = createContext<AuthContextProps>({
    userData: null,
    setUserData: () => { },
    logout: () => { }
})

export interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<IUserSession | null>(null);

    useEffect(() => {
        if (userData) {
            localStorage.setItem("userSession", JSON.stringify({ token: userData.token, user: userData.user }))
        }
    }, [userData]);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userSession")!)
        setUserData(userData)
    }, []);

    const logout = () => {
        localStorage.removeItem('userSession')
        setUserData(null);
    }

    return (
        <AuthContext.Provider value={{ userData, setUserData, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)