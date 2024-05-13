import { Router } from "express"
import {
    getAutobus,
    getAutobuses,
    createAutobus,
    updateAutobus,
    deleteAutobus

} from '../controllers/autobuses.controllers.js'

const router = Router()

router.get('/autobuses', getAutobuses)
router.get('/autobus/:id', getAutobus)
router.post('/autobus', createAutobus)
router.put('/autobus/:id', updateAutobus)
router.delete('/autobus/:id', deleteAutobus)


export default router