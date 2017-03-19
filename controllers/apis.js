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

module.exports = {
  apiIndex: apiIndex,
  apiShow: apiShow
}







//
