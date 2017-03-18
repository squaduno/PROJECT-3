var mongoose  = require('mongoose'),
    bcrypt    = require('bcrypt-nodejs')

var userSchema = new mongoose.Schema({
  exp-level: String,
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
  favorites[{type: mongoose.Schema.ObjectId, ref: 'Api'}]
})


var User = mongoose.model('User', userSchema)

module.exports = User
