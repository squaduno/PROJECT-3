var User = require('../models/user')

function index(req, res) {
  User.find({}, function(err, users){
    if (err) throw err
    res.json(users)
  })
}

function create(req, res){
  var newUser = new User(req.body)
  newUser.save(function(err, saveUser) {
    if (err) throw err
    res.json(saveUser)
  })
}

// function update(req, res) {
//   User.findOneAndUpdate({id: req.params.id}, {username: req.body.username, expLevel: req.body.expLevel}, function(err, user) {
//     if (err) throw err
//     res.json(user)
//   })
// }

function update(req, res) {
//update function
var id = req.params._id
User.findById(id, function(err, user) {
  if (err) throw err
  // change user username and expLevel
  user.username = req.body.username
  user.expLevel = req.body.expLevel
  //save the user
  User.save(function(err) {
    if (err) throw err
    res.json('User successfully saved!')
   })
 })
}


module.exports = {
  index: index,
  create: create,
  update: update
}
