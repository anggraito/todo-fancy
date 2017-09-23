const modelTodo = require('../models/Todo')

var findAllTodo = (req, res) => {
  modelTodo.find()
  .then(todos => {
    res.send(todos)
  })
  .catch(err => {
    res.send(err)
  })
}

var findOneTodo = (req, res) => {
  modelTodo.findById(req.params.id)
  .then(todo => {
    res.send(todo)
  })
  .catch(err => {
    res.send(err)
  })
}

var createTodo = (req, res) => {
  var tags = req.body.tags.split(',');
  tags = tags.map(tag => tag.trim());
  modelTodo.create({
    creator: req.body.userId,
    list: req.body.list,
    dueDate: req.body.dueDate,
    status: 'false',
    tags: tags
  })
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    res.send(err)
  })
}

// var updateTodo = 

module.exports = {
  findAllTodo, findOneTodo,
  createTodo
}
