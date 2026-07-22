const express = require('express')
const app = express()
const cors = require('cors')
const DB = require('./config/db')
require('dotenv').config()

const productRouter = require('./routes/productRoutes')

const port = process.env.PORT
app.use(cors())
app.use(express.json())
app.use('/api/products',productRouter)




app.listen(port,async ()=>{
    console.log(`server running at http://localhost:${port}`)
    await DB();
})
