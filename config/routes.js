const express = require('express')
const router = express.Router()
const tweetsController = require('../app/controllers/tweetsController')

router.get('/users/:id', tweetsController.list)
router.post('/users', tweetsController.create)

module.exports = router
