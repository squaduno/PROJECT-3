var express = require('express'),
    router = express.Router()

// require controllers
//for api
var {apiIndex, apiShow, apiNew, apiCreate, apiUpdate, apiDestroy} = require('../controllers/apis')

router.route('/')
  .get(apiIndex)
  .post(apiCreate)

router.route('/new')
<<<<<<< HEAD
  .post(apiCreate)
=======
.get(apiNew)
>>>>>>> 52d0f4717db4fb32ffb1c728cb8315adc977647f

router.route('/:id')
  .get(apiShow)
  .post(apiUpdate)


router.route('/:id/delete')
  .post(apiDestroy)

module.exports = router
