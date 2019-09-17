var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var userGuess = " ";
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = 0;
var randomLetter = " ";

function pickRandomLetter(){
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
}

document.onkeyup = function (keyPress) {

    // Determines which key was pressed.
    var userGuess = keyPress.key;
    document.getElementById("userGuess").innerHTML = userGuess;

    console.log(randomLetter);

};

function reset(){
    
    if(guess === randomLetter){
        wins++;
    } else {
        losses++;
    }

    pickRandomLetter();
    guess = " ";
    guessesLeft = 10;
    guessesSoFar = 0;
}

pickRandomLetter();
console.log(randomLetter);