var express = require('express'),
    router = express.Router()

// require controllers
    //for api
var {apiIndex, apiShow} = require('../controllers/apis'),
    //for users
    {index, create} = require('../controllers/users')

//this is for users
router.route('/')
  .get(index)
  .post(create)


module.exports = router
