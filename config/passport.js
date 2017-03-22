var LocalStrategy     = require('passport-local').Strategy,
    User              = require('../models/user'),
    GitHubStrategy    = require('passport-github').Strategy,
    GitHubDevStrategy = require('passport-github').Strategy;


module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, callback) {
    User.findById(id, function(err, user) {
        callback(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, callback) {
    process.nextTick(function() {

      // Find a user with this e-mail
      User.findOne({ 'local.email' :  email }, function(err, user) {
        if (err) return callback(err);

        // If there already is a user with this email
        if (user) {
          return callback(null, false, req.flash('signupMessage', 'This email is already used.'));
        } else {
        // There is no email registered with this email

          // Create a new user
          var newUser            = new User();
          newUser.local.name     = req.body.name;
          newUser.local.email    = email;
          newUser.local.password = newUser.encrypt(password);

          newUser.save(function(err) {
            if (err) throw err;
            return callback(null, newUser);
          });
        }
      });
    });
  }));

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, callback) {

     // Search for a user with this email
     User.findOne({ 'local.email' :  email }, function(err, user) {
       if (err) return callback(err);

        // If no user is found
       if (!user) return callback(null, false, req.flash('loginMessage', 'No user found.'));

       // Wrong password
       if (!user.validPassword(password))           return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

       return callback(null, user);
     });
   }));

//////////////////////////GITHUB//////////////////////////////////
passport.use(new GitHubStrategy({
    authorizationURL: 'https://github.com/login/oauth/authorize',
    // tokenURL: 'https://github.com/login/oauth/token',
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // callbackURL: process.env.GITHUB_CALL_BACK_URL,

  },

  // CREATES A NEW USER WITH INFO FROM GITHUB
  function(accessToken, refreshToken, profile, callback) {
    User.findOrCreate({
      githubId: profile.id
    }, function(err, user) {
      if (err)
        return callback(err);
      if (user) {
        return callback(null, user);
      } else {
        var newUser = new User();

        newUser.gitHub.id = profile.id;
        newUser.gitHub.token = profile.accessToken;
        newUser.gitHub.name = profile.profile.name;
        newUser.gitHub.email = profile.email[0].value;
        newUser.save(function(err) {
          if (err)
            throw err;
          return callback(null, newUser);
        })
      }
    });
  }
));

//////////////////////////GITHUBDEV//////////////////////////////////
passport.use(new GitHubDevStrategy({
    authorizationURL: 'https://github.com/login/oauth/authorize',
    // tokenURL: 'https://github.com/login/oauth/token',
    clientID: process.env.GITHUB_DEV_CLIENT_ID,
    clientSecret: process.env.GITHUB_DEV_CLIENT_SECRET,
    // callbackURL: process.env.GITHUB_CALL_BACK_URL,

  },

  // CREATES A NEW USER WITH INFO FROM GITHUB
  function(accessToken, refreshToken, profile, callback) {
    User.findOrCreate({
      githubId: profile.id
    }, function(err, user) {
      if (err)
        return callback(err);
      if (user) {
        return callback(null, user);
      } else {
        var newUser = new User();

        newUser.gitHub.id = profile.id;
        newUser.gitHub.token = profile.accessToken;
        newUser.gitHub.name = profile.profile.name;
        newUser.gitHub.email = profile.email[0].value;
        newUser.save(function(err) {
          if (err)
            throw err;
          return callback(null, newUser);
        })
      }
    });
  }
));


//////////////////////END_OF_GITHUB//////////////////////////////

}
