const mongoose = require('mongoose')

const connectToDatabase = async () => {
    try {
        const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/snusproject'
        await mongoose.connect(mongoUri)
    } catch (error) {
        console.error('MongoDB connection failed: ', error.message)
        process.exit(1)
    }
}

module.exports = connectToDatabase