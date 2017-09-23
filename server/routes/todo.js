const express = require('express')
const authorize = require('../helpers/auth')
const router = express.Router()

const controllerTodo = require('../controllers/todo')

router.get('/', authorize.isLogin, authorize.thisUser, controllerTodo.findAllTodo)
router.post('/', authorize.isLogin, controllerTodo.createTodo)
router.get('/:id', authorize.isLogin, authorize.thisUser, controllerTodo.findOneTodo)
router.patch('/:id', authorize.isLogin, authorize.thisUser, controllerTodo.updateTodo)
router.delete('/:id', authorize.isLogin, authorize.thisUser, controllerTodo.deleteTodo)

module.exports = router