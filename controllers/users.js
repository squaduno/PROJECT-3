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
var id = req.params.id
User.findById({_id: id}, function(err, user) {
  if (err) throw err
  // change user username and expLevel
  if(req.body.username) user.username = req.body.username
  if(req.body.expLevel) user.expLevel = req.body.expLevel
  //save the user
  User.save(function(err) {
    if (err) res.json({message: 'Something went wrong, could not save user'})

    res.json('User successfully updated!')
   })
 })
}


module.exports = {
  index: index,
  create: create,
  update: update
}
