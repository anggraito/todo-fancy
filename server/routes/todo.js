const express = require('express')
const authorize = require('../helpers/auth')
const router = express.Router()

const controllerTodo = require('../controllers/todo')

router.get('/', controllerTodo.findAllTodo)
router.post('/', controllerTodo.createTodo)
router.get('/:id', controllerTodo.findOneTodo)
router.patch('/:id', controllerTodo.updateTodo)
router.delete(':id', controllerTodo.deleteTodo)

module.exports = router