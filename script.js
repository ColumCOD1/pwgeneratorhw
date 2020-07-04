// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  //first create the length of the password

  var selectLength = prompt ("Choose between 8 and 128 characters");
  var numberChoosen = parseInt (selectLength);
  

  var includeLowercase = confirm ("Would you like to include lowercase letters?");
  var includeUppercase = confirm ("Would you like to include Uppercase letters?");
  var includeSpecial = confirm ("Would you like to include Special Characters?");
  var includeNumbers = confirm ("Would you like to include numbers?");
  
  // certify the input length
  if(numberChoosen>=8 && numberChoosen<=128){

    // types
 
  } else{
    alert("Must choose between 8 and 128 characters in order to proceed")
  }
  // character options to create the password based on the users preferred password length 
  var UpperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var LowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var SpecialArray = "!\"#$%&\'()*+,-./:;<=>?@[]^_`{|}~".split("");
  var NumberArray = ["1","2","3","4","5","6","7","8","9","0"];
  var fullArray =[];
  var createPassword=[];
  var confirms = 0;
   
  if(includeLowercase) {
    fullArray = fullArray.concat(LowerArray);
    var lower = pickRandom(fullArray);
    createPassword.push(lower);
    confirms = confirms + 1;
  }
  if(includeUppercase) {
    fullArray = fullArray.concat(UpperArray);
    var upper = pickRandom(fullArray);
    createPassword.push(upper);
    confirms = confirms + 1;
  }
  if(includeNumbers) {
    fullArray = fullArray.concat(NumberArray);
    var number = pickRandom(fullArray);
    createPassword.push(number);
    confirms = confirms + 1;
  }
  if(includeSpecial) {
    fullArray = fullArray.concat(SpecialArray);
    var special = pickRandom(fullArray);
    createPassword.push(special);
    confirms = confirms + 1;
  }

  for (var i = 0;i < numberChoosen - confirms; i++){
      createPassword.push(pickRandom(fullArray));
  }
  console.log(fullArray);
  console.log(createPassword);
  return createPassword;
}

function pickRandom(a){
   var index = Math.floor(Math.random() * a.length);
   return a[index];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
