var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var randomLetter = " ";

resetGame();

function resetGame(){
    // reset initial values
    guess = " ";
    guessesLeft = 9;
    userGuess = " ";
    wins = 0;
    losses = 0;

    document.getElementById('guessesLeft').innerHTML = guessesLeft;
    pickRandomLetter();
}

function pickRandomLetter(){
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
    document.getElementById("letter").innerHTML = randomLetter;
}

document.onkeyup = function (keyPress) {

    // Determines which key was pressed.
    var userGuess = keyPress.key;
    guessesSoFar.push(userGuess);
    document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
    console.log(guessesSoFar);
};