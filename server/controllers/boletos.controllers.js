import { pool } from "../db.js"

export const getBoletos = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM boleto')
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al obtener los boletos" })
    }
}

export const getBoleto = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM boleto WHERE idBoleto = ?', [req.params.id])
        if (result.length === 0) return res.status(404).json({ message: "boleto no encontrado" })
        res.json(result[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al obtener los boletos" })
    }
}

export const createBoleto = async (req, res) => {
    try {
        const {idBoleto, idUsuario,idViaje, asiento, fecha, hora, precio } = req.body
        cost [existingBoleto] = await pool.query('SELECT * FROM boleto WHERE idBoleto = ? OR asiento = ?')

        const [result] = await pool.query('INSERT INTO boleto(idBoleto,idUsuario,idViaje,asiento,fecha,hora,precio) values (?,?,?,?,?,?,?)', [idBoleto,idUsuario,idViaje,asiento,fecha,hora,precio])
        res.json({
            idBoleto: result.insertId,
            idUsuario,
            idViaje,
            asiento,
            fecha,
            hora,
            precio
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateBoleto = async (req, res) => {
    try {
        const [result] = await pool.query('UPDATE boleto SET ? WHERE idBoleto = ?', [req.body,req.params.id])
        res.json(result)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

export const deleteBoleto = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM boleto WHERE idBoleto = ?', [req.params.id])
        if (result.affectedRows === 0) return res.status(404).json({ message: "ruta not found" })
        return res.sendStatus(204)
    } catch (error) {
        console.log(error)
    }
}