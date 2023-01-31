//user clicks generate password button
//prompt for password criteria
  //length
  //character types (lowercase, uppercase, numeric, and/or special)
//validate input to confirm at least one type selected
//once all prompts answered, password is generated that matches selected criteria
//password either displayed as alert or written on page

//setting variables for all possible characters
var userChoice = [];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "”", "#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

var generatePassword = function() {

  //prompts user to answer yes or no to which type of characters they want
  password = "";
  var userLength =window.prompt("How many characters would you like your password to be? (Must be between 8 and 128)");

  if (userLength < 8) {
    window.alert("Please choose a number between 8 and 128")
    return password;
  }

  if (userLength > 128) {
    window.alert("Please choose a number between 8 and 128")
    return password;
  }

  var userUpper = window.prompt("Would you like to include uppercase characters? (Yes or No)");
  var userLower = window.prompt("Would you like to include lowercase characters? (Yes or No)");
  var userNumeric = window.prompt("Would you like to include numeric characters? (Yes or No)");
  var userSpecial = window.prompt("Would you like to include special characters? (Yes or No)");
  userUpper = userUpper.toUpperCase();
  userLower = userLower.toUpperCase();
  userNumeric = userNumeric.toUpperCase();
  userSpecial = userSpecial.toUpperCase();

  //if user answers no to all prompts, alert user to answer yes to at least one
  if (userUpper === "NO" && userLower === "NO" && userNumeric === "NO" && userSpecial === "NO") {
    window.alert("Please answer yes to at least one option")
    return password;
  }

  if (userUpper === "YES") {
    userChoice = userChoice.concat(uppercase);
  }

  if (userLower === "YES") {
    userChoice = userChoice.concat(lowercase);
  }

  if (userNumeric === "YES") {
    userChoice = userChoice.concat(numeric);
  }

  if (userSpecial === "YES") {
    userChoice = userChoice.concat(special);
  }

  console.log(userChoice);

  for (var i = 1; i <= userLength; i++)  {
    var randomPosition = Math.floor(Math.random() * userChoice.length);
    var randomCharacter = userChoice[randomPosition];
    password += randomCharacter;
  }

  return password;
}

// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  userChoice = [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);