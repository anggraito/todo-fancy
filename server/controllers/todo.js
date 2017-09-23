const modelTodo = require('../models/Todo')

var findAllTodo = (req, res) => {
  modelTodo.find()
  .then(todos => {
    res.send(todos)
  })
  .catch(err => {
    res.status(401).send(err)
  })
}

var findOneTodo = (req, res) => {
  modelTodo.findById(req.params.id)
  .then(todo => {
    res.send(todo)
  })
  .catch(err => {
    res.status(401).send(err)
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
    res.status(401).send(err)
  })
}

var updateTodo = (req, res) => {
  modelTodo.findById(req.params.id)
  .then(todo => {
    todo.creator = req.body.userId || todo.creator
    todo.list = req.body.list || todo.list
    todo.dueDate = req.body.dueDate || todo.dueDate
    todo.status = req.body.status || todo.status
    todo.tags = req.body.tags || todo.tags

    todo.save((err, result) => {
      if(err) {
        res.status(401).send(err)
      }
      res.send({
        message: "Data berhasil di update",
        result: result
      })
    })
  })
  .catch(err => {
    res.status(401).send(err)
  })
}

var deleteTodo = (req, res) => {
  modelTodo.findByIdAndRemove({_id: req.params.id})
  .then(() => {
    res.send({
      message: "Todo di hapus"
    })
  })
  .catch(err => {
    res.status(401).send(err)
  })
}

module.exports = {
  findAllTodo, findOneTodo,
  createTodo, updateTodo, deleteTodo
}
