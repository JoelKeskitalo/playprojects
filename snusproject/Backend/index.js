require('dotenv').config();
const express = require('express')
const dbConnection = require('../Backend/database/db')
const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')

const app = express()
const PORT = 3000

app.use(express.json())

dbConnection()

app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)



app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:3000`)
})