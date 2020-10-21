const express = require('express')
const router = express.Router()
const { usersController } = require('../controllers')

router.get('/getUsers', usersController.getData)
router.post('/addUser', usersController.addUser)

module.exports = router