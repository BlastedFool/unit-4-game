//create variable for generating a random number between 19-120 to match

var randomNumber = Math.floor(Math.random() * 120 + 19);

$("#numToGuess").html(randomNumber);
console.log (randomNumber);