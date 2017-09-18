const db = require('../models/user');

// method-method mongoose untuk crud find() , 
// create(), findById() then save(), 
// findByIdAndRemove()

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