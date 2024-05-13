
import { pool } from "../db.js"

export const getViajes = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM viaje')
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al obtener los viajes" })
    }
}

export const getViaje = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM viaje WHERE idViaje = ?', [req.params.id])
        if (result.length === 0) return res.status(404).json({ message: "viaje no encontrada" })
        res.json(result[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al obtener los viajes"})
    }
}

export const createViaje = async (req, res) => {
    try {
        const {idViaje, Origen, Destino, idCamion, fecha, hora } = req.body
        const [existingViaje] = await pool.query('SELECT * FROM viaje WHERE idViaje = ? OR idCamion  = ?', [idViaje, idCamion])
        if (existingViaje.length > 0) {
            return res.status(400).json({ message: "Ya existe una viaje con el mismo id o mismo camion"})
        }

        const idOrigen = origenRes[0].idCiudad
        const [origenRes] = await pool.query('SELECT idCiudad FROM ciudad WHERE estado = ?', [Origen])
        const idDestino = destinoRes[0].idCiudad
        const [destinoRes] = await pool.query('SELECT idCiudad FROM ciudad WHERE estado = ?', [Destino])

        const [result] = await pool.query('INSERT INTO viaje(idViaje,idOrigen,idDestino,idCamion,fecha,hora) values (?,?,?,?,?,?)', [idViaje,idOrigen,idDestino,idCamion,fecha,hora])
        res.json({
            idViaje: result.insertId,
            idOrigen,
            idDestino,
            idCamion,
            fecha,
            hora
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al registrar el viaje" })
    }
}

export const updateViaje = async (req, res) => {
    try {
        const {idViaje,Origen,Destino,idCamion,fecha,hora} = req.body
        const [existingViaje] = await pool.query('SELECT * FROM viaje WHERE (idViaje = ? OR idOrigen = ? OR idDestino = ? OR idCamion = ? OR fecha = ? OR hora = ?) AND idViaje <> ?', [idViaje, Origen, Destino, idCamion, fecha, hora])
        if (existingViaje > 0) {
            return res.status(400).json({message: "Ya existe un viaje con la misma informacion"})
        }

        const [origenRes] = await pool.query('SELECT idCiudad FROM ciudad WHERE estado = ?', [Origen])
        const idOrigen = origenRes[0].idCiudad
        const [destinoRes] = await pool.query('SELECT idCiudad FROM ciudad WHERE estado = ?', [Destino])
        const idDestino = destinoRes[0].idCiudad
        
        const [result] = await pool.query('UPDATE viaje SET idViaje=?,idOrigen=?,idDestino=?,idCamion=?,fecha=?,hora=? WHERE idViaje = ?', [idViaje,idOrigen,idDestino,idCamion,fecha,hora,req.params.id])
        res.json(result)
        console.log(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al actualizar el viaje" })
    }
}

export const deleteViaje = async (req, res) => {
    try {
        const [viajeResult] = await pool.query('SELECT * FROM boleto WHERE idViaje = ?', [req.params.id])
        if (viajeResult.length > 0) {
            return res.status(400).json({ message: "No se puede eliminar el viaje porque está asociado con uno o más boletos." })
        }

        const [result] = await pool.query('DELETE FROM viaje WHERE idViaje = ?', [req.params.id])
        if (result.affectedRows === 0) return res.status(404).json({ message: "viaje no encontrado" })
        return res.sendStatus(204)
    } catch (error) {
        console.log(error)
    }
}