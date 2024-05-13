import { useState } from "react"
import {createViajeRequest,getViajesRequest, deleteViajeRequest, updateViajeRequest} from '../api/viajes.api'

export const useViaje = () => {
    const [viajes, setViajes] = useState([])

    const fetchViajes = async () => {
        try {
            const res = await getViajesRequest()
            setViajes(res.data)
        } catch(error) {
            console.error("Error al obtener los viajes")
        }
    }
    const handleCreateViaje = async (values) => {
        try {
            await createViajeRequest(values)
            fetchViajes()
            alert("Viaje registrado correctamente")
        } catch(error) {
            console.error("Error al registrar al viaje", error)
            alert("Error al registrar el viaje")
        }
    }
    const handleDeleteViaje = async (id) => {
        try{
            await deleteViajeRequest(id)
            fetchViajes()
            alert("Viaje eliminado correctamente")
        } catch (error) {
            console.error("Error al eliminar el viaje", error)
            alert("Error al eliminar el viaje")
        }
    }
    const handleUpdateViaje = async (id,fields) => {
        try {
            const result = await updateViajeRequest(id,fields)
            if(result.status == 200 && result.data.affectedRows > 0) {
                alert("Actualizado Correctamente")
            }else{
                alert("Actualizacion Fallida")
            }
        } catch (error) {
            console.error("Error al actualizar el viaje", error)
            alert("Error al actualizar el viaje")
        }
    }

    return {
        viajes,
        fetchViajes,
        handleCreateViaje,
        handleDeleteViaje,
        handleUpdateViaje
    }
}