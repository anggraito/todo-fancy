const dbModel = require('../models/User');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10);
require('dotenv').config()

var findAllUser = (req, res) => {
  dbModel.find()
  .then((users) => {
    res.send(users)
  })
  .catch(error => {
    res.send(error)
  })
}

var signUp = (req, res) => {
  let hashPassword = bcrypt.hashSync(req.body.password, salt);
  dbModelc.create({
    username: req.body.username,
    password: hashPassword,
    email: req.body.email
  })
  .then((user) => {
    res.send({
      message: "Berhasil menambah user",
      user: user
    })
  })
  .catch(err => {
    res.send(err)
  })
}

var sigIn = (req, res) => {
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
      res.send({
        message: "Berhasil login",
        auth: auth
      })
    } else {
      res.status(500).send({
        message: 'Sapa lu? Passwordnya salah',
        err: err
      })
    }
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  findAllUser, signUp, sigIn
}




// export method yang akan digunakan
module.exports = {
  findAllUser
}