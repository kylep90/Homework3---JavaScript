var generateBtn = document.querySelector("#generate");
var generatePassword = document.querySelector("textarea");
var lenght;
// var choices = []
var confirmNumber;
// var confirmCharacter;
// var confirmUppercase;
var confirmLowercase;
var together = "";
// var character = ["!,#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
alpha = 'abcdefghijklmnopqrstuvwxyz'.split("");
// // Space is for the Uppercase conversion
// space = [];
// // converts letters to uppercase 
// var toUpper = function (x) {
//     return x.toUpperCase();
// };
// // creates a variable for uppercase conversion
// alpha2 = alpha.map(toUpper);
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  //     passwordText.value = password;
      lenght = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
        if (!lenght) {
          alert("This needs a value");
      } else if (lenght < 8 || lenght > 128) {
          lenght = parseInt(prompt("You must choose between 8 and 128"));
    } else {
        confirmNumber = confirm("Will this contain numbers?");
        //   confirmCharacter = confirm("Will this contain special characters?");
        //   confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");{
            if (confirmLowercase && !confirmNumber){
                for (var i = 0; i < lenght; i++) {
                    var pickChoices = [Math.floor(Math.random() * alpha.length)];
                    together += alpha[pickChoices];
                }generatePassword.textContent = together
            }
        }; 
            if (confirmNumber && !confirmLowercase){
                for (var i = 0; i < lenght; i++) {
                    var pickChoices = [Math.floor(Math.random() * number.length)];
                    together += number[pickChoices];
                } generatePassword.textContent = together
            }
        if (confirmLowercase && confirmNumber){
            for (var i = 0; i < lenght; i++) {
                var pickChoices = [Math.floor(Math.random() * number.concat(alpha).length)];
                together += number.concat(alpha)[pickChoices];
        }
        generatePassword.textContent = together
        }
    }
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);