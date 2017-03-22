var mongoose = require('mongoose'),
    User = require('./user')



var userRatingSchema = new mongoose.Schema({
  starRating: Number,
  user: [{type: mongoose.Schema.ObjectId, ref: 'User'}]
})

var UserRating = mongoose.model("Rating", userRatingSchema)

var apiSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  about: String,
  url: {type: String, required: true, unique: true},
  support: {type: Boolean, default: false},
  free: {type: Boolean, default: false},
  authentication: {type: Boolean, default: false},
  deprecated: {type: Boolean, default: false},
  tools: Number,
  category: String,
  install: {type: Number, min: 1, max: 5, default: 1},
  readability: {type: Number, min: 1, max: 5, default: 1},
  technicality: {type: Number, min: 1, max: 5, default: 1},
  userRating: [userRatingSchema]
})

var Api = mongoose.model('Api', apiSchema)

module.exports = Api
