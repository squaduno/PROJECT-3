var Api = require('../models/api')

function index(req, res) {
  Api.find({}, function(err, apis) {
    if (err) throw err
    res.json(apis)
  })
}

function show(req, res) {
  Api.find({}, function(err, user) {
    if (err) throw
    res.json(api)
  })
}
