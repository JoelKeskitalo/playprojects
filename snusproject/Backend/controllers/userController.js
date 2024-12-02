const User = require('../models/userModel') 

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()

        if (users.length === 0) {
            return res.status(200).json({
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

exports.registerUser = async (req, res) => {
    try {
        console.log('Request body: ', req.body)
        const { firstName, lastName, password, email } = req.body

        if (!firstName || !lastName || !password || !email) {
            return res.status(400).json({
                message: 'Input data missing'
            })
        }

        const existingUser = await User.findOne({ email })
        console.log('Existing user: ', existingUser)
        if (existingUser) {
            return res.status(409).json({
                message: 'There is already a user with that email adress'
            })
        }

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password
        })

        console.log('New user created: ', newUser)

        res.status(201).json({
            message: 'User registered sucessfully',
            user: newUser
        })


    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

