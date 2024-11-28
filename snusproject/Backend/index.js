const express = require('express')
const mongoose = require('mongoose')
const dbConnection = require('../Backend/database/db')

const app = express()

app.use(express.json())

app.use('/api/users', userRoutes)

dbConnection()


app.listen(3000, () => {
    console.log(`Server running on: http://localhost:3000`)
})