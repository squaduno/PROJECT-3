var mongoose  = require('mongoose'),
    Api = require('./api'),
    bcrypt    = require('bcrypt-nodejs')

var userSchema = new mongoose.Schema({
    username: String,
    expLevel: String,
    local: {
    email: String,
    password: String,
  },
  github: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  favorites: [{type: mongoose.Schema.ObjectId, ref: 'Api'}]
})


var User = mongoose.model('User', userSchema)

module.exports = User
