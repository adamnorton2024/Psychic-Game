var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var userGuess = " ";
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = 0;
var randomLetter = " ";

resetGame();

function resetGame(){
    // reset initial values
    guess = " ";
    guessesLeft = 9;
    guessesSoFar = 0;
    userGuess = " ";
    wins = 0;
    losses = 0;

    document.getElementById('guessesLeft').innerHTML = guessesLeft;
    document.getElementById('guessesSoFar').innerHTML = guessesSoFar;
}

function pickRandomLetter(){
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
    document.getElementById("letter").innerHTML = randomLetter;
}

document.onkeyup = function (keyPress) {

    // Determines which key was pressed.
    var userGuess = keyPress.key;
    document.getElementById("userGuess").innerHTML = userGuess;
};



pickRandomLetter();