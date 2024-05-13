import { Router } from "express"
import {
    getCiudades,
    getCiudad,
    createCiudad,
    updateCiudad,
    deleteCiudad

} from '../controllers/cuidades.controllers.js'

const router = Router()

router.get('/ciudades', getCiudades)
router.get('/ciudad/:id', getCiudad)
router.post('/ciudad', createCiudad)
router.put('/ciudad/:id', updateCiudad)
router.delete('/ciudad/:id', deleteCiudad)


export default router