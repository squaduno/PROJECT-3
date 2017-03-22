

$(document).ready(function(){

  console.log("Connected to app.js")

  // $('#favoriteButton').on('click', function(
  //   User.favorites.push(this._id)
  // ){})

  $('.userDelBtn').on('click', function(){
    var user = $(this)
    var userDiv = user.parent()
    var id = user.attr('id')
    $.ajax({
      method: "DELETE",
      url: `/users/${id}`
    }).done(function(){
      userDiv.remove()
    })
  })







})
