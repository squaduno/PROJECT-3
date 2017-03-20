var Api = require('../models/api')

function apiIndex(req, res) {
  Api.find({}, function(err, apis) {
    if (err) throw err
    res.render('apis/index', {apis: apis})
  })
}

function apiShow(req, res) {
  var id = req.params.id
  Api.findById({_id: id}, function(err, api) {
    if (err) throw err
    res.render('apis/show', {api: api})
  })
}

function apiCreate(req, res) {
var newApi = new Api(req.body)
console.log(req.body)
newApi.save(function(err, saveApi){
  if (err) throw err
  res.json(saveApi)
 })
}

// UPDATE
function apiUpdate(req, res) {
var id = req.params.id
Api.findById({_id: id}, function(err, api) {
  if (err) throw err
  // change api key values
  if(req.body.name) api.name = req.body.name
  if(req.body.about) api.about = req.body.about
  if(req.body.url) api.url = req.body.url
  //save the api
  api.save(function(err) {
    if (err) res.json({message: 'Something went wrong, could not save api'})

    res.json('Api successfully updated!')
   })
 })
}

function apiDestroy(req, res) {
  var id = req.params.id
  Api.remove({_id: id}, function(err) {
    if (err) throw err

    res.json({message: 'Api removed from Jukebox.'})
  })
}

module.exports = {
  apiIndex: apiIndex,
  apiShow: apiShow,
  apiCreate: apiCreate,
  apiUpdate: apiUpdate,
  apiDestroy: apiDestroy
}
