import { useState } from "react"
import {createBoletoRequest,getBoletosRequest, deleteBoletoRequest, updateBoletoRequest} from '../api/boletos.api'

export const useBoleto = () => {
    const [boletos, setBoletos] = useState([])

    const fetchBoletos = async () => {
        const res = await getBoletosRequest()
        setBoletos(res.data)
    }
    const handleCreateBoleto = async (values) => {
        await createBoletoRequest(values)
        fetchBoletos()
    }
    const handleDeleteBoleto = async (id) => {
        await deleteBoletoRequest(id)
        fetchBoletos()
    }
    const handleUpdateBoleto = async (id,fields) => {
        const result = await updateBoletoRequest(id,fields)
        if(result.status == 200 && result.data.affectedRows > 0) alert("Actualizado Correctamente")
        else alert("Actualizacion Fallida")
    }

    return {
        boletos,
        fetchBoletos,
        handleCreateBoleto,
        handleDeleteBoleto,
        handleUpdateBoleto
    }
}