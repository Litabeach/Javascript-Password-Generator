// Assignment Code
var generateBtn = document.querySelector("#generate");

var charType = ""
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNumeric = '0123456789';
var charSpecial = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

// Write password to the #password input
function writePassword() {
  //prompt length
  var charLength = "";

  while (charLength < 8 || charLength > 128) {
    charLength = prompt("Select a character length between 8 - 128");
    charLength = parseInt(charLength);
  }
 
  // define password and count
  var password = "";
  var count = 0;

  //confirm Uppercase
  var confirmUpper = confirm("Do you want uppercase characters?")
  if (confirmUpper === true) {
    password = password + charUpper.charAt(Math.floor(Math.random() * Math.floor(charUpper.length - 1)));
    charType = charType + charUpper
    count++
  }
  
  //confirm Lowercase
  var confirmLower = confirm("Do you want lowercase characters?")
  if (confirmLower === true) {
    password = password + charLower.charAt(Math.floor(Math.random() * Math.floor(charLower.length - 1)));
    charType = charType + charLower
    count++
  }

  //confirm Numeric
  var confirmNumeric = confirm("Do you want numeric characters?")
  if (confirmNumeric === true) {
    password = password + charNumeric.charAt(Math.floor(Math.random() * Math.floor(charNumeric.length - 1)));
    charType = charType + charNumeric
    count++
  }

  //confirm Special
  var confirmSpecial = confirm("Do you want special characters?")
  if (confirmSpecial === true) {
    password = password + charSpecial.charAt(Math.floor(Math.random() * Math.floor(charSpecial.length - 1)));
    charType = charType + charSpecial
    count++
  }

  //For loop to choose password characters
  for (var i = 0; i < charLength - count; i++) {
    password = password + charType.charAt(Math.floor(Math.random() * Math.floor(charType.length - 1)));
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

