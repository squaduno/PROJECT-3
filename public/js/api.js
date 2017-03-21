$(document).ready(function(){

  console.log("Connected to api.js")

  $('.delBtn').on('click', function(){
    var api = $(this)
    var id = api.attr('id')
    $.ajax({
      method: "DELETE",
      url: `/apis/${id}/delete`
    }).done(function(){
      api.remove()
    })
  })

















})
