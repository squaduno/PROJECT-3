var express = require('express'),
    router = express.Router()

// require controllers
//for api
var {apiIndex, apiShow, apiNew, apiCreate, apiEdit, apiUpdate, apiDestroy} = require('../controllers/apis')

router.route('/')
  .get(apiIndex)
  .post(apiCreate)

router.route('/new')
  .get(apiNew)



router.route('/:id/edit')
  .get(apiEdit)

router.route('/:id')
  .post(apiUpdate)
  .get(apiShow)

router.route('/:id/delete')
  .delete(apiDestroy)

module.exports = router
