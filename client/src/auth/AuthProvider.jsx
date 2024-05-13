import { useContext,createContext, useState } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
    changeAuthenticated: undefined,
    name: "",
    getName: undefined
})

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [name, setName] = useState("")
    const changeAuthenticated = (value) => {setIsAuthenticated(value)}
    const getName = (name) => setName(name)
    return (
        <AuthContext.Provider value={{isAuthenticated, changeAuthenticated, name, getName}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)