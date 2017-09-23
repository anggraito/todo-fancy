const express = require('express')
const authorize = require('../helpers/auth')
const router = express.Router()

const controllerTodo = require('../controllers/todo')

router.get('/', controllerTodo.findAllTodo)
router.post('/', controllerTodo.createTodo)
router.get('/:id', controllerTodo.findOneTodo)
// router.post('/signin', controllerTodo.signIn)
// router.delete('/users/:id', controllerTodo.deleteUser)

module.exports = router