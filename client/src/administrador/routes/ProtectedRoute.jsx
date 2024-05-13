import { Outlet,Navigate} from "react-router-dom"
import { useAuth } from "../../auth/AuthProvider"

export const ProtectedRoute = () => {
    const {isAuthenticated, name} = useAuth()

    return isAuthenticated && name === 'administrador' ? < Outlet /> : <Navigate to={"/"} />
}