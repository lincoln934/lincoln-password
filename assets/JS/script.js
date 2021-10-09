// Assignment code here
//!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!#,$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// fight function (now with parameter for enemy's object holding name, health, and attack values)
var charCount = window.prompt ("How many characters between 8 and 128 would you like your password?");
  console.log(charCount);
var addLower = window.prompt ("Would you like your password to include 'lower' case letters?");
  console.log(addLower);
var addUpper = window.prompt ("Would you like your password to include 'UPPER' case letters?");
  console.log(addUpper);
var addNumbers = window.prompt ("Would you like your password to include 'numbers' letters?");
  console.log(addNumbers);
var addSymbols = window.prompt ("Would you like your password to include 'symbols' letters?");
  console.log(addSymbols);

  //while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    //var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    //if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      //var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
     // if (confirmSkip) {
       // window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        //playerInfo.money = Math.max(0, playerInfo.money - 10);
        //console.log("playerInfo.money", playerInfo.money)
        //break;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
writePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
