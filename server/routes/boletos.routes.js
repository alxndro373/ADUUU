import { Router } from "express"
import {
    getBoletos,
    getBoleto,
    createBoleto,
    updateBoleto,
    deleteBoleto

} from '../controllers/boletos.controllers.js'

const router = Router()

router.get('/boletos', getBoletos)
router.get('/boleto/:id', getBoleto)
router.post('/boleto', createBoleto)
router.put('/boleto/:id', updateBoleto)
router.delete('/boleto/:id', deleteBoleto)


export default router