$(document).ready(function() {
  $('#signUpForm').submit(function(event) {
    event.preventDefault()
    // alert('good')
    var user = {
      username: $('form#signUpForm input#userName').val(),
      email: $('form#signUpForm input#userEmail').val(),
      password: $('form#signUpForm input#userPassword').val()
    }

    console.log(user)
    // $.ajax({
    //   type    : 'GET',
    //   url     : 'authentication/signup',
    //   data    : user,
    //   dataType: 'json',
    //   encode  : true
    // }).done(function(data) {
    //   console.log(data)
    // })

    $.ajax({
      type    : 'POST',
      url     : '/users/signup',
      data    : user,
      dataType: 'json',
      encode  : true
    }).done(function(data) {
      console.log(data)
    })
  })
});
