import { useState } from "react"
import {createUsuarioRequest,getUsuariosRequest, deleteUsuarioRequest, updateUsuarioRequest,getPasswordAndNameRequest} from '../api/usuarios.api'

export const useUsuario = () => {
    const [usuarios, setUsuarios] = useState([])

    const fetchUsuarios = async () => {
        try {
            const res = await getUsuariosRequest()
            setUsuarios(res.data)
        } catch (error) {
            console.error("Error al obtener las ciudades")
        }
    }
    const handleCreateUsuario = async (values) => {
        try {
            await createUsuarioRequest(values)
            fetchUsuarios()
            alert("Usuario registrado correctamente")
        } catch (error) {
            console.error("Error al registrar al usuario", error)
            alert("Error al registrar al usuario")
        }
    }
    const handleDeleteUsuario = async (id) => {
        try {
            await deleteUsuarioRequest(id)
            fetchUsuarios()
            alert("Usuario eliminado correctamente")
        } catch (error) {
            console.error("Error al eliminar al usuario", error)
            alert("Error al eliminar al usuario")
        }
    }
    const handleUpdateUsuario = async (id,fields) => {
        try {
            const result = await updateUsuarioRequest(id,fields)
            if(result.status == 200 && result.data.affectedRows > 0)  {
                alert("Actualizado Correctamente")
            } else{
                alert("Actualizacion Fallida")  
            } 
        } catch (error) {
            console.error("Error al actualizar el usuario", error)
            alert("Error al actualizar el usuario")
        }
    }
    const handleGetPasswordAndName = async (correo) => {
        const result = await getPasswordAndNameRequest(correo)
        return result
    }

    return {
        usuarios,
        fetchUsuarios,
        handleCreateUsuario,
        handleDeleteUsuario,
        handleUpdateUsuario,
        handleGetPasswordAndName
    }
}