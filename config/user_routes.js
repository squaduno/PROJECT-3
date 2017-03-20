var express = require('express'),
    router = express.Router()

// require controllers

//for users
var {index, show, create, update, destroy, getSignup, postSignup, getLogin, postLogin, getLogout} = require('../controllers/users')


//this is for users
router.route('/')
  .get(index)
  .post(create)

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


router.route('/signup')
  .get(getSignup)
  .post(postSignup)

router.route('/login')
  .get(getLogin)
  .post(postLogin)

router.route("/logout")
  .get(getLogout)

  //


  router.route('/api/:id')
  	.patch(update)

  	.delete(destroy)



module.exports = router
