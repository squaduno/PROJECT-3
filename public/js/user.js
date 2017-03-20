////////AJAX//////////////
$(document).ready(function(){
  $('form#newUser').on('submit', sendUserViaAjax)
})

function sendUserViaAjax(e){
  e.preventDefault()
}

var user = {
  username: $('form#signUpForm input#userName').val(),
  email: $('form#signUpForm input#userEmail').val(),
  password: $('form#signUpForm input#userPassword').val()
}


$.post('/users', user)
.done(function(data){
  addUser(data)
})

function userSaved (req, res){
  if (user.save()){
  res.redirect('/apis')
}else{
  res.redirect('/getSignup')
}
}

//////END OF AJAX ////////
