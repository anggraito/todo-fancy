const express = require('express')
const router = express.Router()

const controllerUser = require('../controllers/user')

router.get('/', controllerUser.findAllUser)

module.exports = router