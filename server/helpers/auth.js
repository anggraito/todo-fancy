const jwt = require('jsonwebtoken')
require('dotenv').config()

var isLogin = (req,res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET_JWT, (err, decoded) => {
    if(err) {
      res.send(err)
    } else{
      req.id = decoded._id
      next()
    }
  })
}

var thisUser = (req, res, next) => {
  if(req.id == req.params.id){
    next()
  } else {
    res.status(401).send({
      message: "Stop! ini bukan daerah kekuasaanmu"
    })
  }
}

module.exports = {
  isLogin, thisUser
}