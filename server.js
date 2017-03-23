var express         = require('express'),
    path            = require('path'),
    favicon         = require('serve-favicon'),
    cookieParser    = require('cookie-parser'),
    logger          = require('morgan'),
    bodyParser      = require('body-parser'),
    mongoose        = require('mongoose'),
    port            = process.env.PORT || 3000,
    app             = express(),
    LocalStrategy   = require('passport-local'),
    passport        = require('passport'),
    passportConfig  = require('./config/passport'),
    session         = require('express-session'),
    flash           = require('connect-flash'),
    apiRoutes       = require('./config/api_routes'),
    userRoutes      = require('./config/user_routes');
                      require('dotenv').config()

// connect database
var dbUri = process.env.MONGODB_URI || 'mongodb://localhost/jukebox'
mongoose.connect(dbUri)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(session({ secret: 'JUKEBOX-API' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passportConfig(passport)


app.use(function (req, res, next){
  global.user = req.user
  next()
})

// GITHUB AUTH

app.get('/auth/github',
passport.authenticate('github'));

app.get('/auth/github/callback',
passport.authenticate('github', { failureRedirect: '/login' }),
function(req, res) {
  console.log("hola")
  // Successful authentication, redirect home.
  res.redirect('/');
});

//END OF GITHUB

// root route

app.use('/', apiRoutes)

app.use('/users', userRoutes)



app.listen(port, function(req, res){
  console.log('The jukebox is playing on', port)
})
