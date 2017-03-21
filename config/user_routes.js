var express         = require('express'),
    router          = express.Router(),
    {index, show, create, update, destroy, getSignup, postSignup, getLogin, postLogin, getLogout} = require('../controllers/users'),
    passport        = require('passport'),
    bodyParser      = require('body-parser');

//this is for users
  router.route('/')
  .get(index)

  router.route('/signup')
  .get(getSignup)
  .post(postSignup)

  router.route('/login')
  .get(getLogin)
  .post(postLogin)

  router.route('/logout')
  .get(getLogout)

  router.route('/:id')
  .get(show)
  .post(update)

  router.route('/:id/delete')
  .post(destroy)


function authenticateUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  if (req.isAuthenticated()) return next();

  // Otherwise the request is always redirected to the home page
  res.redirect('/');
}

module.exports = router
