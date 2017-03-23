var Api = require('../models/api'),
    User = require('../models/user')

function apiIndex(req, res) {
  Api.find({}, function(err, apis) {
    if (err) throw err
    res.render('apis/index', {apis: apis})
  })
}

function apiShow(req, res) {
    var id = req.params.id
    Api.findById(id, function(err, api) {
      if (err) throw err
      res.render('apis/show', {api: api})
    })
}


function apiNew(req, res){
  res.render('apis/new')
}


function apiCreate(req, res) {
var newApi = new Api(req.body)

console.log(req.body)
newApi.save(function(err, saveApi){
  if (err) throw err
  res.redirect('/')
 })
}

function apiEdit(req, res){
  var id = req.params.id
  Api.findById(id, function(err, api) {
    if (err) throw err
    res.render('apis/edit', {api: api})
  })
}

// UPDATE
function apiUpdate(req, res) {
var id = req.params.id
Api.findById(id, function(err, api) {
  if (err) throw err
  // change api key values
  if(req.body.name) api.name = req.body.name
  if(req.body.about) api.about = req.body.about
  if(req.body.url) api.url = req.body.url
  // hard set for boolean values
  api.support = req.body.support
  api.free = req.body.free
  api.authentication = req.body.authentication
  api.deprecated = req.body.deprecated

  if(req.body.tools) api.tools = req.body.tools
  if(req.body.category) api.category = req.body.category

  if(req.body.install) api.install = req.body.install
  if(req.body.readability) api.readability = req.body.readability
  if(req.body.technicality) api.technicality = req.body.technicality
  //save the api
  console.log(req.body)
   api.save(function(err) {
     if (err) {
       res.json({message: 'Something went wrong, could not save api'})
     } else {
       console.log("Update successful");
       res.redirect('/' + id)
     }
    })
  })
 }

function apiDestroy(req, res) {
  var id = req.params.id
  Api.remove({_id: id}, function(err) {
    if (err) throw err

    res.json({message: "Api deleted"})
    })
  }

function apiFavorite(req, res)  {
    var id = req.body.id
    Api.findById(id, function(err, api){
      if (err) throw err
      User.findById(req.user._id, function(err, user){
        if (err) throw err
        function sameFav(){
          for(i = 0; i < user.favorites.length; i++){
            if(user.favorites[i] == id){
              return true
            }
          }
          return false
        }
        console.log(sameFav());
        if(!sameFav()){
          user.favorites.push(api)
          user.save(function (err, updatedUser){
          if (err) throw err
            res.json(updatedUser)
          })
        } else {
          res.json(user)
        }
      })
  })
}

// function search(req, res) {
//   var searchTerm = req.query.name
//   Api.find({name: searchTerm}, function(err, api) {
//     if (err) throw err
//     api.find({name: searchTerm})
//     .then(function (data) {
//       res.render('apis/show', {api: api});
//     })
//
//   })
//   .catch(function (err) {
//     console.error(err);
//   });
// }

function postSearch(req, res) {
  console.log(req.body)
  var api = req.body.searchTerm
  console.log(req.body.searchTerm)
  Api.find({name: api}, function(err, api) {
    console.log(api)
    if (err) throw err
    if (!api.length) {
      res.redirect('/')
    } else {
      res.redirect('/' + api[0]._id);
    }
  })
  .catch(function (err) {
    console.error(err);
  });
}


module.exports = {
  apiIndex: apiIndex,
  apiShow: apiShow,
  apiNew: apiNew,
  apiCreate: apiCreate,
  apiEdit: apiEdit,
  apiUpdate: apiUpdate,
  apiDestroy: apiDestroy,
  apiFavorite: apiFavorite,
  postSearch: postSearch
}
