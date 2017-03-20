var User = require('../models/user')
    passport = require('passport')


function getSignup(request, response) {
  response.render('authentication/signup.ejs', {message: request.flash('signupMessage')})
}

function postSignup(request, response) {
  var signupStrategy = passport.authenticate(
    'local-signup', {
      successRedirect: '/',
      failureRedirect: '/signup',
      failureFlash: true
    }
  )

  return signupStrategy(request, response);
}

function getLogin(request, response) {
  response.render('authentication/login.ejs', {message: request.flash('loginMessage')})
}

function postLogin(request, response) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })

  return loginProperty(request, response)
}

function getLogout(request, response) {
  request.logout();
  response.redirect('/');
}

function secret(request, response){
  response.render('secret.ejs')
}


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
<<<<<<< HEAD
  create: create,
  update: update
=======
<<<<<<< HEAD
  create: create,
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  secret: secret
=======
  create: create
>>>>>>> be3ec24375db42dda39bfbe4f2e862145e0010b3
>>>>>>> 369845d684340ba3cba83449d5b3b52b3427f6b1
}
