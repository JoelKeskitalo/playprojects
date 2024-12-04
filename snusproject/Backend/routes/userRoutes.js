const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const { verifyToken } = require('../middleware/authMiddleware')
console.log('userController: ', userController)

router.get('/', userController.getAllUsers)
router.post('/', userController.registerUser)
router.get('/:id', verifyToken, userController.getUserById)
router.delete('/:email', userController.deleteUser)
router.put('/:userId', userController.updateUser)

router.post('/login', userController.loginUser)


module.exports = router