const db = require('../models/user');

var findAllUser = (req, res) => {
  db.find()
  .then((users) => {
    res.send(users)
  })
  .catch(error => {
    res.send(error)
  })
}




// export method yang akan digunakan
module.exports = {
  findAllUser
}