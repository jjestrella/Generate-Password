
alert("Let's generate you a random password");

var plength = 10;
var userLow = confirm("Would you like to use: Random Lowercase Letters?");
var userUp = confirm("Would you like to use: Random Uppercase Letters?");
var userNum = confirm("Would you like to use: Random Numbers?");
var userSpec = confirm("Would you like to use: Random Special Charactors / Symobls?");

alert("Great! Thank you for submitting your preferences. Now click the Generate Button to reveal your password.")

var yourPassword = document.getElementById("password");
var generateBtn = document.getElementById("generate");
var pass = '';

var upperAlpha = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numChar = ["0123456789"];
var specialChar = ["!#$%&'()*+,-./:;<=>?@\^_`{|}~"];

generateBtn.addEventListener("click", function () {
    for (i = 0; i < plength; i++) {
        pass += (Math.floor(Math.random() * upperAlpha.length));
        return pass;
        yourPassword.textContent = pass;
    }
    
});

function yourPassword(enterLength) {
    document.yourPassword.output.value = generatePwd(enterLength);
}




