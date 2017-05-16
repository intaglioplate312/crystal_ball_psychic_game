//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 13;
var guessesLeft = 13;
var guessedLetters = [];




//Computer selects letter found don't understand floor... ask Brett or Nathan
var computerChoices = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows the user 9 guesses
var updateGuessesLeft = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
  document.getElementById('guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  // Display it as letters separated by commas. 
  document.getElementById('letter').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

 // Function will be called when we reset everything
var reset = function() {
  totalGuesses = 13;
  guessesLeft = 13;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}


//When key is released it becomes the users guess
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode);

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess === computerChoices){
                wins++;
                document.getElementById('wins').innerHTML = "Wins: " + wins;
            }
        
        }else if(guessesLeft === 0){
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.getElementById('losses').innerHTML = "Losses: " + losses;
           
            // Then we'll call the reset. 
            reset();
        }

};