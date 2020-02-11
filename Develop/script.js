// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);


// Write password to the #password input
function generatePassword() {
  var charLength = prompt("How many characters do you want in your Next-Gen password?");
    if (charLength < 8 || charLength > 128 || isNaN(charLength)){
      alert("Sorry! Password character length must be a number between 8-128.");
    } else {
      var lowerCaseQ = confirm("Want any lowercase letters?");
      var upperCaseQ = confirm("Want any uppercase letters?");
      var numChar = confirm("How about some numbers?");
      var specialChar = confirm("Do you want any special characters?")
    } 
   

    var possibleCharArray = []; //create an if based on the selection choices above, these will go into the possibleCharArray array
    var lCase = "abcdefghijklmnopqrstuvwxyz".split("");
    var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); //this split separates all my letters like an array
    var nChars = "1234567890".split("");
    var sChars = "!@#$%^&*".split("");

   if (lowerCaseQ === true) {    
      possibleCharArray = possibleCharArray.concat(lCase);
      console.log(possibleCharArray);
    }

    if (upperCaseQ === true) {
      possibleCharArray = possibleCharArray.concat(uCase);
      console.log(possibleCharArray);
    }

    if (numChar === true) {
      possibleCharArray = possibleCharArray.concat(nChars);
      console.log(possibleCharArray);
    }

    if (specialChar === true) {
      possibleCharArray = possibleCharArray.concat(sChars);
      console.log(possibleCharArray);
    }
      

   var pwd = "";

   for (var i = 0; i < charLength; i++) {  
     var idx = (Math.floor(Math.random() * possibleCharArray.length));
      pwd = pwd + (possibleCharArray[idx]);
    }
    
    console.log(pwd);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = pwd;
    
     

    
    
  }