require('dotenv').config();
const mongoose = require('mongoose')

const connectToDatabase = async () => {
    try {
        const mongoUri = process.env.MONGO_URI
        await mongoose.connect(mongoUri)
        console.log('Connected to MongoDB Atlas')
    } catch (error) {
        console.error('MongoDB connection failed: ', error.message)
        process.exit(1)
    }
}

module.exports = connectToDatabase