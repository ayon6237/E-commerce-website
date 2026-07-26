const express = require('express')
const app = express()
const cors = require('cors')
const DB = require('./config/db')
const router = express.Router();
require('dotenv').config()

const productRouter = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes.js');
const orderRoutes = require('./routes/orderRoutes.js');


const port = process.env.PORT
app.use(cors())
app.use(express.json())
app.use('/api/products',productRouter)
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);




app.listen(port,async ()=>{
    console.log(`server running at http://localhost:${port}`)
    await DB();
})
