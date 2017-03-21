var express = require('express'),
    router = express.Router()

// require controllers
//for api
var {apiIndex, apiShow, apiNew, apiCreate, apiUpdate, apiDestroy} = require('../controllers/apis')

router.route('/')
  .get(apiIndex)
  .post(apiCreate)

router.route('/new')
  .get(apiNew)



router.route('/:id')
  .get(apiShow)
  .post(apiUpdate)


router.route('/:id/delete')
  .post(apiDestroy)

module.exports = router
