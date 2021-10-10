// Assignment code here
// add variables for users options
let charCount = {
  from: 8,
  to: 128};  
  console.log(charCount)
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];
console.log(lower);
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = ["!", "#", ",", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", ",", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~", ":",];
let querySelector = [lower, upper, numbers, symbols];
console.log(querySelector);
// establish users requested password length and alert if not within range establsihed 
let charSelect = window.prompt ("How many characters between 8 and 128 would you like your password?"); {
  //while (charSelect > 7 || charSelect < 129); 
    //window.alert("You have chosen " + charSelect + " characters for your password" ); }
  //for(var i = 0; i < ; i++) 

}

// resolve for what happens if user selects number outside of 8 to 128
 // if (charCount < 8) {
   // var charSelect = window.alert ("The number you selected is less than 8, please select again.")
    // charCount = window.prompt ("How many characters between 8 and 128 would you like your password?") }
    //if (charCount === range) {
      //console.log(charSelect)
    //}  
    //for(var i = 0; i < querySelector.length; i++) {
      //console.log(querySelector[i]);
      //console.log(i);
      //console.log(querySelector[i] + " is at " + i + " index");
    //}
  
// ask user if they'd like various attributes in the password
var addLower = window.prompt ("Would you like your password to include 'lower' case letters?");
  if (addLower === "yes" || addLower === "YES") {
    for (let i = lower[0]; i <= lower[1]; i++) {
      querySelector.push(i);
      console.log(querySelector);
  }
    console.log(addLower);
  }  
var addUpper = window.prompt ("Would you like your password to include 'UPPER' case letters?");
  if (addUpper === "yes" || addUpper === "YES") {
  console.log(addUpper);
}  
var addNumbers = window.prompt ("Would you like your password to include 'numbers' letters?");
  if (addNumbers === "yes" || addNumbers === "YES") {
  console.log(addNumbers);
}
var addSymbols = window.prompt ("Would you like your password to include 'symbols' letters?");
  if (addSymbols === "yes" || addSymbols === "YES") {
  console.log(addSymbols);
}

// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

// }
// writePassword();
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);