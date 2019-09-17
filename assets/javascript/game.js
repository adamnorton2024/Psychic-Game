var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var guess = " ";
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = 0;
var randomLetter = " ";

function pickRandomLetter(){
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
}

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