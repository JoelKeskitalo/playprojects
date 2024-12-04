require('dotenv').config()
const User = require('../models/userModel')
const bcrypt = require('bcrypt') 
const { generateToken } = require('../middleware/auth')

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

        console.log('Checking if user already exists with email: ', email)
        
        const existingUser = await User.findOne({ email })
        console.log('Existing user: ', existingUser)
        if (existingUser) {
            return res.status(409).json({
                message: 'There is already a user with that email adress'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
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

exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id 

        if (!userId) {
            return res.status(400).json({
                message: 'Must enter a valid ID'
            })
        }

        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            })
        }

        res.status(200).json({
            message: 'User found',
            user: user
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({
                message: 'Input a correct id'
            })
        }

        const user = await User.findOne({ _id: id }) 

        if (!user) {
            return res.status(404).json({
                message: 'User not found in the database'
            })
        }

        await User.deleteOne({ _id: id }) 

        return res.status(200).json({
            message: 'User deleted successfully',
            user: user
        })

    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}


exports.updateUser = async (req, res) => {
    try {
        console.log(req.params)
        const userId = req.params.userId
        const newInfo = req.body

        if (!userId) {
            return res.status(400).json({
                message: 'Input a valid user id'
            })
        }

        if (!newInfo) {
            return res.status(400).json({
                message: 'Input the updated info'
            })
        }

        const updateUserInformation = async (userId, newInfo) => {
            if (newInfo.firstName) {
                await User.findOneAndUpdate(
                    { _id: userId }, 
                    { $set: { firstName: newInfo.firstName } },
                    { new: true }
                )
            } else if (newInfo.lastName) {
                await User.findOneAndUpdate(
                    { _id: userId },
                    { $set: { lastName: newInfo.lastName } },
                    { new: true }
                )
            } else if (newInfo.email) {
                await User.findOneAndUpdate(
                    { _id: userId },
                    { $set: { email: newInfo.email } },
                    { new: true }
                )
            } else if (newInfo.password) {
                await User.findOneAndUpdate(
                    { _id: userId },
                    { $set: { password: newInfo.password } },
                    { new: true }
                )
            }

            const user = await User.findOne({ _id: userId })

            return res.status(200).json({
                message: 'User updated successfully',
                updates: newInfo,
                user: user
            })
        }

        await updateUserInformation(userId, newInfo)

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

exports.loginUser = async (req, res) => {
    try {
        console.log(req.body)
        const { email, password } = req.body


        if (!email || !password) {
            return res.status(400).json({
                message: 'Missing required fields'
            })
        }

        const user = await User.findOne({ email })

        if(!user) {
            return res.status(404).json({
                message: 'User not found'
            })
        }


        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) {
            return res.status(400).json({
                message: 'Invalid credentials'
            })
        }

        const token = generateToken(user)

        res.status(200).json({
            message: 'Login successful',
            token: token
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}



