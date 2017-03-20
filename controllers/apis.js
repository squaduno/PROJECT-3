var User = require('../models/user'),
    Api = require( '../models/api' )

function apiIndex(req, res) {
  Api.find({}, function(err, apis) {
    if (err) throw err
    res.json(apis)
  })
}

function apiShow(req, res) {
  Api.find({}, function(err, user) {
    if (err) throw err
    res.json(api)
  })
}

function apiCreate(req, res) {
var newApi = new Api(req.body)
newApi.save(function(err, saveApi){
  if (err) throw err
  res.json(saveApi)
})
}


function apiUpdate(req, res) {
  var id = req.params.id

  Todo.findById(id, function(err, api) {
    if (err || !api) throw err

    api.completed = !api.completed

    todo.save(function(err, updatedApi) {
      if (err) throw err

      res.json(updatedApi)
    })
  })
}

function apiDestroy(req, res) {
  var id = req.params.id

  Api.remove({_id: id}, function(err) {
    if (err) throw err

    res.json({message: 'destroyed.'})
  })
}
module.exports = {
  apiIndex: apiIndex,
  apiShow: apiShow,
  apiCreate: apiCreate,
  apiUpdate: apiUpdate,
  apiDestroy: apiDestroy
}







//
