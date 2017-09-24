const express = require('express')
const router = express.Router()
const FB = require('fb')

router.get('/', (req, res) => {
  const fbtoken = req.headers.token;
  FB.setAccessToken(fbtoken);
  FB.api('/me', (response) => {
    res.send(response)
  })
})

module.exports = router