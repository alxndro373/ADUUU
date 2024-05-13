import { useState } from "react";
import { createAutobusRequest, getAutobusesRequest, deleteAutobusRequest, updateAutobusRequest } from '../api/autobuses.api';

export const useAutobus = () => {
    const [autobuses, setAutobuses] = useState([]);

    const fetchAutobuses = async () => {
        try {
            const res = await getAutobusesRequest();
            setAutobuses(res.data);
        } catch (error) {
            console.error("Error al obtener los autobuses:", error);
        }
    };

    const handleCreateAutobus = async (values) => {
        try {
            await createAutobusRequest(values);
            fetchAutobuses();
            alert("Autobús registrado correctamente.");
        } catch (error) {
            console.error("Error al registrar el autobús:", error);
            alert("Error al registrar el autobús.");
        }
    };

    const handleDeleteAutobus = async (id) => {
        try {
            await deleteAutobusRequest(id);
            fetchAutobuses();
            alert("Autobús eliminado correctamente.");
        } catch (error) {
            console.error("Error al eliminar el autobús:", error);
            alert("Error al eliminar el autobús.");
        }
    };

    const handleUpdateAutobus = async (id, fields) => {
        try {
            const result = await updateAutobusRequest(id, fields);
            if (result.status === 200 && result.data.affectedRows > 0) {
                alert("Actualizado correctamente.");
            } else {
                alert("No se pudo actualizar el autobús.");
            }
        } catch (error) {
            console.error("Error al actualizar el autobús:", error);
            alert("Error al actualizar el autobús.");
        }
    };

    return {
        autobuses,
        fetchAutobuses,
        handleCreateAutobus,
        handleDeleteAutobus,
        handleUpdateAutobus
    };
};
