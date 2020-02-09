// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var charLength = prompt("How many characters do you want in your Next-Gen password?");
    if (charLength < 8 || charLength > 128){
      alert("Sorry! Password length must be between 8-128 characters.");
    } else {
      var lowerCaseQ = confirm("Want any lowercase letters?");
      var upperCaseQ = confirm("Want any uppercase letters?");
      var numChar = confirm("How about some numbers?");
      var specialChar = confirm("Do you want any special characters?")
    } 

    var possibleChar = []; //create an if based on the selection choices above, these will go into the possibleChar array
    var lCase = "abcdefghijklmnopqrstuvwxyz".split("");
    var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); //this split separates all my letters like an array
    var nChars = "1234567890".split("");
    var sChars = "!@#$%^&*".split("");

    if (lowerCaseQ === true) {    // create if statements for the rest of your choice vars
      possibleChar = possibleChar.concat(lCase);
      console.log(possibleChar);
    }

    var pwd = "";

    for (var i = 1; i <= charLength; i++){  //for loop will contain the math.random based on the possibleChar.length -1
    pwd = pwd + possibleChar[//random index will go here]
    }
    
    
    
    return pwd;
  } 
    

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


 

 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




