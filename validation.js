var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('email');
var emailError = document.querySelector('.emailError');
var firstName=document.getElementById('firstName');
var firstNameError=document.querySelector('.firstNameError');
var lastName=document.getElementById('lastName');
var lastNameError=document.querySelector('.lastNameError');
var contactNumber=document.getElementById('contactNumber');
var contactNumberError=document.querySelector('.contactNumberError');
var roleId=document.getElementById('roleSelect');
var roleIdError=document.querySelector('.roleIdError');
var genderId=document.getElementById('genderSelect');
var genderIdError=document.querySelector('.genderIdError');

var pattern=new RegExp("[0-9]");

function resetError(){
  emailError.innerHTML="";
  emailError.className="emailError"
  firstNameError.innerHTML="";
  firstNameError.className="firstNameError"
  lastNameError.innerHTML="";
  lastNameError.className="lastNameError"
  contactNumberError.innerHTML="";
  contactNumberError.className="contactNumberError"
  genderIdError.innerHTML="";
  genderIdError.className="genderIdError";
  roleIdError.innerHTML="";
  roleIdError.className="roleIdError"
}
email.addEventListener("input", function (event) {
  resetError();
  if (email.validity.valid) {
    emailError.innerHTML = "";
    emailError.className="emailError";  
  }
}, false);
firstName.addEventListener("input", function(){
   resetError();
},false);
lastName.addEventListener("input",function(){
   resetError();
},false);
contactNumber.addEventListener("input",function(){
  resetError();
},false);
roleId.addEventListener("input",function(){
  resetError();
},false);
genderId.addEventListener("input",function(){
  resetError();
},false);
form.addEventListener("submit", function (event) {
  var flag=true;
  if (!email.validity.valid || email.value=="") {
    emailError.innerHTML = "Please Enter a valid email Address!";
    emailError.className = "emailError active";
    flag=false;
    event.preventDefault();
  }
  if(firstName.value=="" || pattern.test(firstName.value)){
    firstNameError.innerHTML="Please Enter valid name!";
    firstNameError.className="firstNameError active";
    flag=false;
    event.preventDefault();
  }
  if(lastName.value=="" || pattern.test(lastName.value)){
    lastNameError.innerHTML="please Enter valid last name!";
    lastNameError.className="lastNameError active";
    flag=false;
    event.preventDefault();
  }
  if(contactNumber.value=="" || String(contactNumber.value).length!=10){
    contactNumberError.innerHTML="Enter a valid contact number";
    contactNumberError.className="contactNumberError active"
    flag=false;
    event.preventDefault();
  }
  if(roleId.value==""){
    roleIdError.innerHTML="Please select role.";
    roleIdError.className="roleIdError active"
    flag=false;
    event.preventDefault();
  }
  if(genderId.value==""){
    genderIdError.innerHTML="Please select gender";
    genderIdError.className="genderIdError active";
    flag=false;
    event.preventDefault();
  }
  if(flag==true){
    alert("Congratulations!! user creation successful!");
  }
}, false);
