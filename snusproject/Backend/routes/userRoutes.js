const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
console.log('userController: ', userController)

router.get('/', userController.getAllUsers)
router.post('/', userController.registerUser)
router.get('/:id', userController.getUserById)
router.delete('/:email', userController.deleteUser)

router.put('/:userId', userController.updateUser)


module.exports = router