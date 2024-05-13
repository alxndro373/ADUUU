import { pool } from "../db.js"

export const getCiudades = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM ciudad')
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al obtener las ciudades" })
    }
}

export const getCiudad = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM ciudad WHERE idCiudad = ?', [req.params.id])
        if (result.length === 0) return res.status(404).json({ message: "Autobús no encontrado" })
        res.json(result[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al obtener la ciudad" })
    }
}

export const createCiudad = async (req, res) => {
    try {
        const { idCiudad, estado } = req.body
        // Verificar si ya existe una ciudad con el mismo idCiudad o estado
        const [existingCiudad] = await pool.query('SELECT * FROM ciudad WHERE idCiudad = ? OR estado = ?', [idCiudad, estado])
        if (existingCiudad.length > 0) {
            return res.status(400).json({ message: "Ya existe una ciudad con el mismo id o estado" })
        }
        const [result] = await pool.query('INSERT INTO ciudad(idCiudad,estado) values (?,?)', [idCiudad, estado])
        res.json({
            idCiudad: result.insertId,
            estado,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al registrar la ciudad" })
    }
}

export const updateCiudad = async (req, res) => {
    try {
        // Verificar si ya existe un autobús con el mismo idCiudad o estado
        const { idCiudad, estado } = req.body;
        const [existingCiudad] = await pool.query('SELECT * FROM ciudad WHERE (idCiudad = ? OR estado = ?) AND idCiudad <> ?', [idCiudad, estado, req.params.id]);
        if (existingCiudad.length > 0) {
            return res.status(400).json({ message: "Ya existe un autobús con el mismo idCiudad o estado" });
        }
        
        const [result] = await pool.query('UPDATE ciudad SET ? WHERE idCiudad = ?', [req.body, req.params.id]);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al actualizar la ciudad" });
    }
}

export const deleteCiudad = async (req, res) => {
    try {
        // Verificar si la ciudad está asociado con algún viaje
        const [viajesResult] = await pool.query('SELECT * FROM viaje WHERE idOrigen  = ? OR idDestino = ?', [req.params.id, req.params.id]);
        if (viajesResult.length > 0) {
            return res.status(400).json({ message: "No se puede eliminar la ciudad porque está asociado con uno o más viajes." });
        }

        // Si no hay dependencias, proceder con la eliminación del autobús
        const [result] = await pool.query('DELETE FROM ciudad WHERE idCiudad = ?', [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: "Ciudad no encontrada" });
        
        // Enviamos un mensaje de éxito
        res.status(204).send();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al eliminar la ciudad" });
    }
}