import express, { Request, Response } from 'express' 
import getValue from '../controller/getValue'
import getUsername from '../controller/getUsername'
import getValueFromMongoDB from '../controller/getValueFromMongoDB'
const router = express.Router()

router.get('/getValue', getValue)
router.get('/getUsername', getUsername)
router.get('/getValueFromMongoDB', getValueFromMongoDB)

export default router