const express = require('express')
const router = express.Router()

const controllerUser = require('../controllers/user')

router.get('/users', controllerUser.findAllUser)
router.post('/signup', controllerUser.signUp)
router.post('/signin', controllerUser.signIn)
router.delete('/users/:id', controllerUser.deleteUser)

module.exports = router