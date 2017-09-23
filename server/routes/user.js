const express = require('express');
const router = express.Router();

const controllerUser = require('../controllers/user');

// metode bisa get,post,put,delete jika database mongoose
router.get('/', controllerUser.findAllUser)

module.exports = router;