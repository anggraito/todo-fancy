const dbModel = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
require('dotenv').config()

var signUp = (req, res) => {
  var hashPassword = bcrypt.hashSync(req.body.password, salt)
  dbModel.create({
    username: req.body.username,
    password: hashPassword,
    email: req.body.email
  })
  .then((user) => {
    res.send({
      message: 'Berhasil menambah user',
      user: user
    })
  })
  .catch(err => {
    res.send(err.errmsg)
  })
}

var signIn = (req, res) => {
  dbModel.findOne({
    username: req.body.username
  })
  .then(user => {
    var decodePassword = bcrypt.compareSync(req.body.password, user.password)
    if(decodePassword){
      var auth = jwt.sign({
        id: user._id,
        username: user.username,
        email: user.email
      }, process.env.SECRET_JWT)
      res.send(auth)
    } else {
      res.status(500).send({
        message: 'Sapa lu? Passwordnya salah'
      })
    }
  })
  .catch(err => {
    res.status(500).send({
      message: 'Username tidak tersedia, Perhatikan huruf capital'
    })
  })
}

var findAllUser = (req, res) => {
  dbModel.find()
  .then((users) => {
    res.send(users)
  })
  .catch(err => {
    res.send(err)
  })
}

var deleteUser = (req, res) => {
  dbModel.findByIdAndRemove({_id: req.params.id})
  .then(() => {
    res.send({
      message: "Berhasil mengahapus user"
    })
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  findAllUser, signUp, signIn, deleteUser
}