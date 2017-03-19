var User = require('../models/user')


function index(req, res) {
  User.find({}, function(err, users){
    if (err) throw err
    res.json(users)
  })
}


function create(req, res){
  var newUser = new User(req.body)
  newUser.save(function(err, saveUser){
    if (err) throw err
    res.json(saveUser)
  })
}

module.exports = {
  index: index,
  create: create
}
