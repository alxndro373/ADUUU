import { Router } from "express"
import {
    getViaje,
    getViajes,
    createViaje,
    updateViaje,
    deleteViaje

} from '../controllers/viajes.controllers.js'

const router = Router()

router.get('/viajes', getViajes)
router.get('/viaje/:id', getViaje)
router.post('/viaje', createViaje)
router.put('/viaje/:id', updateViaje)
router.delete('/viaje/:id', deleteViaje)


export default router