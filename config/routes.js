var express = require('express'),
    router = express.Router(),
    usersController = require('../controllers/users')


// require controllers
    //for api
var {apiIndex, apiShow} = require('../controllers/apis'),
    //for users
    {index, create, update} = require('../controllers/users')

//this is for users
router.route('/')
  .get(index)
  .post(create)

<<<<<<< HEAD
router.route('/users/:id')
  .post(update)
=======
function authenticateUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  if (req.isAuthenticated()) return next();

  // Otherwise the request is always redirected to the home page
  res.redirect('/');
}

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup)

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin)

router.route("/logout")
  .get(usersController.getLogout)
>>>>>>> 369845d684340ba3cba83449d5b3b52b3427f6b1

module.exports = router
