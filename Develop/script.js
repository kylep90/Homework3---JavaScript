// Assignment Code - Variables

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(""); //splits the string? or element
var number = '1234567890'.split("");
var UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
var char = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split(""); //I wanted to use " and '
var together = ""; //To join the characters together

//Assigning Elements of the HTML
var generatedPassword = document.querySelector("textarea")
var generateBtn = document.querySelector("#generate");

//Confirmations - What the user wants
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmChar;

//Function 'writePassword is ran when the button 'Generate Password' is clicked
function writePassword() {

  //Function checkLength, checks the length of password meets criteria
  function checkLength(){
    var length = prompt("Enter the length of your password you would like between 8 and 128 characters");
    if (length < 8 || length > 128){
      alert("Reminder: Length must be between 8 and 128");

      checkLength();            //re-runs the function if criteria is not met
    }

    //If the length meets criteria
    else {
      together =""         //refreshes the password everytime 'Generate Password' is clicked

      //Asks user what they wish to include in thier password
      confirmLower = confirm ("Would you like your password to contain lowercase letters?");
      confirmUpper = confirm ("Would you like your password to contain UPPERCASE letters?")
      confirmNumber = confirm("Would you like your password to contain numbers?");
      confirmChar = confirm ("Would you like your password to contain special characters?")
      
      //Possible combinations are as follows:

      //LOWER ONLY
      if(confirmLower && !confirmNumber && !confirmUpper && !confirmChar){
      for(var p = 0; p<length; p++) {
        var i = (Math.floor(Math.random()*alphabet.length));
      
        together += alphabet[i];
        }
      }

      //UPPER ONLY
      if(confirmUpper && !confirmLower && !confirmNumber && !confirmChar){
          for(var p = 0; p<length; p++) {
            var i = (Math.floor(Math.random()*UPPERCASE.length));
          
            together += UPPERCASE[i];
        }
       }
    
      //NUMBER ONLY
      if(confirmNumber && !confirmLower && !confirmUpper && !confirmChar){
        for(var p = 0; p<length; p++) {
          var i = (Math.floor(Math.random()*number.length));
        
          together += number[i];
        }
      }
    
      //CHAR ONLY
      if(confirmChar && !confirmLower && !confirmUpper && !confirmNumber){
        for(var p = 0; p<length; p++) {
          var i = (Math.floor(Math.random()*char.length));
        
          together += char[i];
        }
      }
    
    //LOWER & UPPER
      if(confirmLower && confirmUpper && !confirmNumber && !confirmChar){
        for(var p = 0; p<length; p++) {
          var i = (Math.floor(Math.random()*alphabet.concat(UPPERCASE).length));
        
          together += alphabet.concat(UPPERCASE)[i];
        }
      }
    
    //LOWER & NUMBER
    if(confirmLower && confirmNumber && !confirmUpper && !confirmChar){
      for(var p = 0; p<length; p++) {
        var i = (Math.floor(Math.random()*alphabet.concat(number).length));
      
        together += alphabet.concat(number)[i];
      }
    }
    
    //LOWER & CHAR
    if(confirmLower && confirmChar && !confirmUpper && !confirmNumber ){
      for(var p = 0; p<length; p++) {
        var i = (Math.floor(Math.random()*alphabet.concat(char).length));
      
        together += alphabet.concat(char)[i];
      }
    }
  
    //UPPER & NUMBER
    if(!confirmLower && confirmUpper && confirmNumber && !confirmChar ){
      for(var p = 0; p<length; p++) {
        var i = (Math.floor(Math.random()*UPPERCASE.concat(number).length));
      
        together += UPPERCASE.concat(number)[i];
      }
    }
  
    //UPPER & CHAR
    if(!confirmLower && confirmUpper && !confirmNumber && confirmChar ){
      for(var p = 0; p<length; p++) {
        var i = (Math.floor(Math.random()*UPPERCASE.concat(char).length));
      
        together += UPPERCASE.concat(char)[i];
      }
    }
  
    //NUMBER & CHAR
    if(!confirmLower && !confirmUpper && confirmNumber && confirmChar ){
      for(var p = 0; p<length; p++) {
        var i = (Math.floor(Math.random()*number.concat(char).length));
      
        together += number.concat(char)[i];
      }
    }
    
    //LOWER & UPPER & NUMBER
      if(confirmLower && confirmUpper && confirmNumber && !confirmChar){
        for(var p = 0; p<length; p++) {
          var i = (Math.floor(Math.random()*alphabet.concat(UPPERCASE, number).length));
        
          together += alphabet.concat(UPPERCASE, number)[i];
        }
      }
    
    //LOWER & UPPER & CHAR
    if(confirmLower && confirmUpper && !confirmNumber && confirmChar){
      for(var p = 0; p<length; p++) {
        var i = (Math.floor(Math.random()*alphabet.concat(UPPERCASE, number).length));
      
        together += alphabet.concat(UPPERCASE, number)[i];
      }
    }
    
    //LOWER & NUMBER & CHAR
    if(confirmLower && !confirmUpper && confirmNumber && confirmChar){
      for(var p = 0; p<length; p++) {
        var i = (Math.floor(Math.random()*alphabet.concat(number, char).length));
      
        together += alphabet.concat(number, char)[i];
      }
    }
    
    //UPPER & NUMBER & CHAR
    if(!confirmLower && confirmUpper && confirmNumber && confirmChar){
    for(var p = 0; p<length; p++) {
      var i = (Math.floor(Math.random()*UPPERCASE.concat(number, char).length));
    
      together += UPPERCASE.concat(number, char)[i];
    }
  }

    //LOWER & UPPER & NUMBER & CHAR
    if(confirmLower && confirmUpper && confirmNumber && confirmChar){
    for(var p = 0; p<length; p++) {
      var i = (Math.floor(Math.random()*alphabet.concat(UPPERCASE, number, char).length));
    
      together += alphabet.concat(UPPERCASE, number, char)[i];
    } 
  }

 }
}
  checkLength(); //Runs the function 'checkLength'
  generatedPassword.textContent = together
  
}

  generateBtn.addEventListener("click", writePassword);
