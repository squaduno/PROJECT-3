var express         = require('express'),
    router          = express.Router(),
    bodyParser      = require('body-parser'),
    {index, show, create, edit, update, destroy, getSignup, postSignup, getLogin, postLogin, getLogout} = require('../controllers/users'),
    methodOverride  = require('method-override'),
    passport        = require('passport');


    function authenticateUser(req, res, next) {
      // If the user is authenticated, then we continue the execution
      if (req.isAuthenticated()) return next();

      // Otherwise the request is always redirected to the home page
      res.redirect('/');
    }

    function isAdmin(req, res, next) {
      if(user && req.user.admin){
        return next()
      } else if (user) {
        res.redirect("/users/" + req.user.id)
      } else {
        res.redirect("./")
      }
    }

//this is for users
  router.route('/')
  .get(isAdmin, index)
  .post(create)

  router.route('/signup')
  .get(getSignup)
  .post(postSignup)

  router.route('/login')
  .get(getLogin)
  .post(postLogin)

  router.route('/logout')
  .get(getLogout)

  router.route('/:id/edit')
    .get(edit)

  router.route('/:id')
  .get(show)
  .post(update)
  .delete(destroy)



module.exports = router
