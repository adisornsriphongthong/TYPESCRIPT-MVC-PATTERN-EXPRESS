import express from 'express'
import { z } from 'zod'
import router from '../routes/route'
const app = express()
const PORT = z.coerce.number().parse(3000)
app.use('/', router)

app.listen(PORT, () => console.log('The server is running on port http://localhost:' + PORT))