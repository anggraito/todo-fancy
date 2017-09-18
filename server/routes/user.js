const express = require('express');
const router = express.Router();

// import controllers yang dipakai
const modelUser = require('../controllers/user');

// metode bisa get,post,put,delete jika database mongoose
router.get('/', modelUser.findAllUser)

module.exports = router;