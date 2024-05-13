import { pool } from "../db.js"

export const getUsuarios = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM usuario')
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al obtener los usuarios" })
    }
}

export const getUsuario = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM usuario WHERE idUsuario = ?', [req.params.id])
        if (result.length === 0) return res.status(404).json({ message: "usuario no encontrado" })
        res.json(result[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al obtener los usuarios" })
    }
}

export const createUsuario = async (req, res) => {
    try {
        const { idUsuario, nombre, correo, numeroCelular, contraseña } = req.body
        const [existingUsuario] = await pool.query('SELECT * FROM usuario WHERE idUsuario = ? OR correo = ?', [idUsuario, correo]);
        if (existingUsuario.length > 0) {
            return res.status(400).json({ message: "Ya existe una ciudad con el mismo id o correo"})
        }
        const [result] = await pool.query('INSERT INTO usuario(idUsuario,nombre,correo,numeroCelular,contraseña) values (?,?,?,?,?)', [idUsuario, nombre, correo, numeroCelular, contraseña])
        res.json({
            idUsuario: result.insertId,
            nombre,
            correo,
            numeroCelular,
            contraseña
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al registrar al usuario" })
    }
}

export const updateUsuario = async (req, res) => {
    try {
        const { idUsuario, nombre, correo, numeroCelular, contraseña} = req.body
        const [existingUsuario] = await pool.query('SELECT * FROM usuario WHERE (idUsuario = ? OR nombre = ? OR correo = ? OR numeroCelular = ? OR contraseña = ?) AND idUsuario <> ?', [idUsuario, nombre, correo, numeroCelular, contraseña])
        if (existingUsuario > 0) {
            return res.status(400).json({message: "Ya existe un usuario con la misma informacion"})
        } 

        const [result] = await pool.query('UPDATE usuario SET ? WHERE idUsuario = ?', [req.body,req.params.id])
        res.json(result)
        console.log(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error al actualizar el usuario" })
    }
}

export const deleteUsuario = async (req, res) => {
    try {
        const [adminResult] = await pool.query('SELECT * FROM usuario WHERE idUsuario = ? AND nombre = "administrador"', [req.params.id])
        if (adminResult.length > 0) {
            return res.status(400).json({ message: "No se puede eliminar al usuario administrador." });
        }

        const [usuarioResult] = await pool.query('SELECT * FROM boleto WHERE idUsuario = ?', [req.params.id])
        if (usuarioResult.length > 0) {
            return res.status(400).json({ message: "No se puede eliminar el usuario porque está asociado con uno o más boletos." })
        }

        const [result] = await pool.query('DELETE FROM usuario WHERE idUsuario = ?', [req.params.id])
        if (result.affectedRows === 0) return res.status(404).json({ message: "usuario no encontrado" })
        res.sendStatus(204).send()
    } catch (error) {
        console.log(error)
    }
}

export const getPasswordAndName = async (req,res) => {
    try {
        const [result] = await pool.query('SELECT nombre,contraseña FROM usuario WHERE correo = ?',[req.params.correo])
        if (result.length === 0) return res.status(404).json({ message: "password not found" })
        res.json(result[0])
    } catch (error) {
        console.log(error)
    }
}