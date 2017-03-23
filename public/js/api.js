$(document).ready(function(){

  console.log("Connected to api.js")

  $('.delBtn').on('click', function(){
    var api = $(this)
    var apiDiv = api.parent()
    var id = api.attr('id')
    $.ajax({
      method: "DELETE",
      url: `/${id}`
    }).done(function(){
      apiDiv.remove()
    })
  })
  $('.favoriteButton').one('click', function(){
    var api = $(this)

    var id = api.data('target')
    console.log(id)
    $.ajax({
      type: "POST",
      url: "/favorite",
      data: {id: id}
    }).then(
      function(data){
        console.log(data)
      }
    )

  })





})
