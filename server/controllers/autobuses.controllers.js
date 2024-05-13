import { pool } from "../db.js";

export const getAutobuses = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM camion');
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener los autobuses" });
    }
};

export const getAutobus = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM camion WHERE idcamion = ?', [req.params.id]);
        if (result.length === 0) return res.status(404).json({ message: "Autobús no encontrado" });
        res.json(result[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener el autobús" });
    }
};

export const createAutobus = async (req, res) => {
    try {
        const { idcamion, placa, numAsientos } = req.body;
        // Verificar si ya existe un autobús con el mismo idcamion o placa
        const [existingAutobus] = await pool.query('SELECT * FROM camion WHERE idcamion = ? OR placa = ?', [idcamion, placa]);
        if (existingAutobus.length > 0) {
            return res.status(400).json({ message: "Ya existe un autobús con el mismo idcamion o placa" });
        }
        const [result] = await pool.query('INSERT INTO camion(idcamion,placa,numAsientos) values (?,?,?)', [idcamion, placa, numAsientos]);
        res.json({
            idcamion: result.insertId,
            placa,
            numAsientos
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al registrar el autobús" });
    }
};

export const updateAutobus = async (req, res) => {
    try {
        // Verificar si ya existe un autobús con el mismo idcamion o placa
        const { idcamion, placa } = req.body;
        const [existingAutobus] = await pool.query('SELECT * FROM camion WHERE (idcamion = ? OR placa = ?) AND idcamion <> ?', [idcamion, placa, req.params.id]);
        if (existingAutobus.length > 0) {
            return res.status(400).json({ message: "Ya existe un autobús con el mismo idcamion o placa" });
        }
        
        const [result] = await pool.query('UPDATE camion SET ? WHERE idcamion = ?', [req.body, req.params.id]);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al actualizar el autobús" });
    }
};

export const deleteAutobus = async (req, res) => {
    try {
        // Verificar si el autobús está asociado con algún viaje
        const [viajesResult] = await pool.query('SELECT * FROM viaje WHERE idCamion = ?', [req.params.id]);
        if (viajesResult.length > 0) {
            return res.status(400).json({ message: "No se puede eliminar el autobús porque está asociado con uno o más viajes." });
        }

        // Si no hay dependencias, proceder con la eliminación del autobús
        const [result] = await pool.query('DELETE FROM camion WHERE idcamion = ?', [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: "Autobús no encontrado" });
        
        // Enviamos un mensaje de éxito
        res.status(204).send();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al eliminar el autobús" });
    }
};
