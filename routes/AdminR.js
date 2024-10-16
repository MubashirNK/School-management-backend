import express from 'express'
import { createAdmin } from '../controller/Admin.js'


 const router = express.Router()
 router.post('/create',createAdmin)
 
 export default router ;