var mongoose  = require('mongoose'),
    Api       = require('./api'),
    bcrypt    = require('bcrypt-nodejs')

var userSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    expLevel: String,
    local: {
    email: {type: String, required: true, unique: true},
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

userSchema.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.local.password);
}

var User = mongoose.model('User', userSchema)

module.exports = User
