var passport      = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User          = require('../models/user'),
    bcrypt        = require('bcrypt');



    passport.serializeUser(function(email, done) {
        done(null, user.email);
    })

    passport.deserializeUser(function(email, done) {
        User.findOne(email, function(err, user){
            done(err, user)
        })
    })

    passport.use('local-signup', new LocalStrategy({
        usernameField    : 'name',
        userEmailField   : 'email',
        passportField    : 'password',
        passReqToCallback: true
    },
    function(req, name, email, password, res, done) {
      User.findOne({'email': email}, function(req, res) {
          if (err) throw (err);
          if (user) {
            console.log('email already registered')
          } else {
          // Create a new user
          var newUser = new User()
          newUser.local.email = email,
          newUser.local.password = newUser.encrypt(password),
          newUser.local.name = name

          newUser.save(function(err) {
            if (err) throw (err)
            res.json(newUser)
          })
          console.log('signup success');
          // return cb(null, newUser)
          }
        })
      })
    )

module.exports = passport;
