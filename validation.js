var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('email');
var emailError = document.querySelector('.emailError');

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    emailError.innerHTML = ""; // Reset the content of the message
    emailError.className = "emailError"; // Reset the visual state of the message
  }
}, false);
form.addEventListener("submit", function (event) {
  if (!email.validity.valid) {
    
    // If the field is not valid, we display a custom
    // error message.
    emailError.innerHTML = "Please Enter a valid email Address!";
    emailError.className = "emailError active";
    // And we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
}, false);
