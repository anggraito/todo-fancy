const express = require('express')
const authorize = require('../helpers/auth')
const router = express.Router()

const controllerTodo = require('../controllers/todo')

router.get('/', controllerTodo.findAllTodo) //authorize.isLogin, authorize.thisUser
router.post('/', controllerTodo.createTodo)
router.get('/:id', controllerTodo.findOneTodo) //authorize.thisUser
router.patch('/:id', controllerTodo.updateTodo) //authorize.thisUser
router.delete('/:id', controllerTodo.deleteTodo) //authorize.thisUser

module.exports = router