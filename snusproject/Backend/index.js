const express = require('express')
const dbConnection = require('../Backend/database/db')

const app = express()

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

dbConnection()


app.listen(3000, () => {
    console.log(`Server running on: http://localhost:3000`)
})