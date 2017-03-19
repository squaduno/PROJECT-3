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
    if (err) throw
    res.json(api)
  })
}

module.exports = {
  index: index,
  show: show
}







//
