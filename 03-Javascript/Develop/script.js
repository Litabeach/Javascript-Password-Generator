// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //prompt length
  var charLength = "";

  while (charLength < 8 || charLength > 128) {
    charLength = prompt("Select a character length between 8 - 128");
    charLength = parseInt(charLength);
  }
  alert("You chose " + charLength + " characters!!!");

  //confirm Uppercase
  var charUpper = confirm("Do you want uppercase characters?")
  if (charUpper === true) {
    alert("cool")
  }
  else {
    alert("bad idea")
  }

  //confirm Lowercase
  var charLower = confirm("Do you want lowercase characters?")
  if (charLower === true) {
    alert("cool")
  }
  else {
    alert("bad idea")
  }

  //confirm Numeric
  var charNumeric = confirm("Do you want numeric characters?")
  if (charNumeric === true) {
    alert("cool")
  }
  else {
    alert("bad idea")
  }

  //confirm Special
  var charSpecial = confirm("Do you want special characters?")
  if (charSpecial === true) {
    alert("cool")
  }
  else {
    alert("bad idea")
  }

  //  //Set password length
  //   let complexity=document.getElementbyID("charLength").value

  //   //possible password values
  //   let value="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  //   let password ="";

  //   //create a loop to choose password characters
  //   for(var i=0; i <= complexity; i++){
  //     password = password + value.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
  //   }
  //   alert(password)



  // //Array.push?
  // //  var charType = ["charSpecial, charNumeric, charLower, charUpper"]

  // var length = charLength
  // var charLower = "abcdefghijklmnopqrstuvwxyz"; 
  // var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // var charNumeric = '0123456789';
  // var charSpecial = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

  // //  Random character generator
  //  var randomnumber = Math.floor(Math.random()*charLength)


  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

