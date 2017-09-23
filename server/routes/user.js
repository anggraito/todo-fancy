const express = require('express')
const authorize = require('../helpers/auth')
const router = express.Router()

const controllerUser = require('../controllers/user')

router.post('/signup', controllerUser.signUp)
router.post('/signin', controllerUser.signIn)
router.get('/users', authorize.isLogin, controllerUser.findAllUser)
// router.post('/signFb', controllerUser.signFb)
router.delete('/users/:id', authorize.isLogin, controllerUser.deleteUser)

module.exports = router