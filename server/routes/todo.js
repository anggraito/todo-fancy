const express = require('express')
const authorize = require('../helpers/auth')
const router = express.Router()

const controllerTodo = require('../controllers/todo')

// router.get('/', authorize.isLogin, controllerTodo.findAllTodo) //authorize.isLogin, authorize.thisUser
router.post('/', authorize.isLogin, controllerTodo.createTodo)
router.get('/', authorize.isLogin, controllerTodo.findOneTodo) //authorize.thisUser
router.patch('/:id', authorize.isLogin, controllerTodo.updateTodo) //authorize.thisUser
router.delete('/:id', authorize.isLogin, controllerTodo.deleteTodo) //authorize.thisUser

module.exports = router