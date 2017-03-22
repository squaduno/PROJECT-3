$(document).ready(function(){

  console.log("Connected to api.js")

  $('.delBtn').on('click', function(){
    var api = $(this)
    var apiDiv = api.parent()
    var id = api.attr('id')
    $.ajax({
      method: "DELETE",
      url: `/apis/${id}`
    }).done(function(){
      apiDiv.remove()
    })
  })
  $('#favoriteButton').on('click', function(){
    var api = $(this)
    var apiDiv = api.parent()
    var id = api.attr('id')
    $.ajax({
      method: "POST",
      url: `/apis/favorite`
    }).done(function(){
      apiDiv.append()
    })
  })



















})
