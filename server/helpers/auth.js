const jwt = require('jsonwebtoken')
const modelTodo = require('../models/Todo')
require('dotenv').config()

var isLogin = (req,res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET_JWT, (err, decoded) => {
    if(err) {
      res.send(err)
    } else{
      req.id = decoded.id
      req.fbId = decoded.facebookId
      console.log("ini decoded id", decoded.id)
      next()
    }
  })
}

var thisUser = (req, res, next) => {
  
  // if(req.id == ){
  //   return next()
  // } else {
  //   res.status(401).send({
  //     message: "Stop! ini bukan daerah kekuasaanmu"
  //   })
  // }
}

module.exports = {
  isLogin, thisUser
}