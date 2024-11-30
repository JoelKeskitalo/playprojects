const User = require('../models/userModel') 

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()

        if (users.length === 0) {
            res.status(200).json({
                message: 'No users found in the database'
            })
        }
        res.status(200).json({
            message: 'All users in the database: ',
            users: users
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}