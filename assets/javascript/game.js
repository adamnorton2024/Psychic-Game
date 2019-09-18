var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var randomLetter = " ";

resetGame();

function resetGame(){
    // reset initial values
    wins = 0;
    losses = 0;
    resetGuesses();
};

function resetGuesses() {
    userGuesses = ' ';
    guessesLeft = 9;
    guessesSoFar = [];
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guessesLeft').innerHTML = guessesLeft;
    document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
    pickRandomLetter();
}

function pickRandomLetter(){
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
    //document.getElementById("letter").innerHTML = randomLetter;
};

document.getElementById("resetButton").onclick = function () { resetGame() };

document.onkeyup = function (keyPress) {

    // Determines which key was pressed.
    var userGuess = keyPress.key;
    guessesSoFar.push(userGuess);
    document.getElementById("guessesSoFar").innerHTML = guessesSoFar;
    
    if (userGuess === randomLetter) {
        win();
    } else {
        badGuess();
    }
};

function win(){
    wins++;
    document.getElementById('wins').innerHTML = wins;
    pickRandomLetter();
    resetGuesses();
};

function lose(){
    losses++;
    document.getElementById('losses').innerHTML = losses;
    pickRandomLetter();
    resetGuesses();
};

function badGuess(){
    guessesLeft--;
    document.getElementById('guessesLeft').innerHTML = guessesLeft;
    if(guessesLeft === 0){
        lose();
    }
};



