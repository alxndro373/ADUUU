import { Router } from "express"
import {
    getUsuarios,
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    getPasswordAndName

} from '../controllers/usuarios.controllers.js'

const router = Router()

router.get('/usuarios', getUsuarios)
router.get('/usuario/:id', getUsuario)
router.get('/usuario/correo/:correo', getPasswordAndName)
router.post('/usuario', createUsuario)
router.put('/usuario/:id', updateUsuario)
router.delete('/usuario/:id', deleteUsuario)


export default router