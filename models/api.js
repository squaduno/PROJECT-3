var mongoose = require('mongoose'),
    User = require('./user')



var userRatingSchema = new mongoose.Schema({
  starRating: Number,
  user: [{type: mongoose.Schema.ObjectId, ref: 'User'}]
})

var UserRating = mongoose.model("Rating", userRatingSchema)

var apiSchema = new mongoose.Schema({
  name: String,
  about: String,
  url: String,
  support: Boolean,
  paid: Boolean,
  authenication: Boolean,
  deprecated: Boolean,
  tools: Number,
  category: String,
  rating: {
    install: Number,
    readability: Number,
    technicality: Number,

  },
  userRating: [userRatingSchema]
})

var Api = mongoose.model('Api', apiSchema)

module.exports = Api
