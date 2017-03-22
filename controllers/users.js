var User      = require('../models/user'),
    passport  = require('passport'),
    Api       = require('../models/api')



function getSignup(request, response) {
  response.render('authentication/signup.ejs', {message: request.flash('signupMessage')})
}

function postSignup(request, response) {
  var signupStrategy = passport.authenticate('local-signup', {
      successRedirect: '/apis',
      failureRedirect: '/users/signup',
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
    successRedirect: '/apis',
    failureRedirect: '/users/login',
    failureFlash: true
  })

  return loginProperty(request, response)
}

function getLogout(request, response) {
  request.logout();
  response.redirect('/users/login');
}


function index(req, res) {
  User.find({}, function(err, users){
    if (err) throw err
    res.render('users/index', {users: users})
  })
}

//SHOW
function show(req, res) {
  var id = req.params.id
  User.findById({_id: id})
  .populate('favorites')
  .exec( function(err, user) {
    if (err) throw err
    res.render('users/show', {user: user})
  })
}

// CREATE
function create(req, res){
  var newUser = new User(req.body)
  newUser.save(function(err, newUser) {
    if (err) throw err
    res.json(newUser)
  })
}

// EDIT
function edit(req, res){
  var id = req.params.id
  User.findById({_id: id}, function(err, user) {
    if (err) throw err
    res.render('users/edit', {user: user})
  })
}

// UPDATE
function update(req, res) {
var id = req.params.id
User.findById({_id: id}, function(err, user) {
  if (err) throw err
  // change user username and expLevel
  if(req.body.name) user.name = req.body.name
  if(req.body.email) user.email = req.body.email
  user.expLevel = req.body.expLevel
  //save the user
  user.save(function(err) {
    if (err) res.json({message: 'Something went wrong, could not save user'})
    console.log("User successfully updated");
    res.redirect('/users/' +id)
   })
 })
}

// DELETE
function destroy(request, response) {
  var id = request.params.id;

  User.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete quote b/c:' + error});

    response.json({message: 'User successfully deleted'});
  });
}


module.exports = {
  index: index,
  show: show,
  create: create,
  edit: edit,
  update: update,
  destroy: destroy,
  getLogin: getLogin,
  postLogin: postLogin,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout
}
