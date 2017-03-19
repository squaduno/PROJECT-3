var User = require('../models/user')




function index(req, res) {
  User.find({}, function(err, users){
    if (err) throw err
    res.json(users)
  })
}
