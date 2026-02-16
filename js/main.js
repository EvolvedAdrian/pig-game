
// Buttons
const rollDiceButton = document.querySelector('.button__roll-dice');

// Dice
const dice = document.querySelector('.dice-img');

// Player scores
let player1GlobalScore = 0;
let player1CurrentScore = 0;
let player2GlobalScore = 0;
let player2CurrentScore = 0;

let activePlayer = 0;
let gameIsActive = true;

// Generates dice random number from 1 to 6
function generateDiceNumber(){
    return Math.ceil(Math.random() * 6);
}

// Activate active and non active player sytiling
function setPlayerStyles(activePlayer){
    document.querySelector(`.player--${activePlayer+1}`).dataset.active = 'true';
    document.querySelector(`.player--${!activePlayer+1}`).dataset.active = 'false';
}

// Change player
function changePlayer(){
    activePlayer = !activePlayer;
    setPlayerStyles(activePlayer);
}

// Set current player 

// Game logic
// Roll dice logic
rollDiceButton.addEventListener('click',() => {
    // Throw the dice
    const randomDiceNumber = generateDiceNumber()
    dice.setAttribute('srcset', `./assets/img/dice-${randomDiceNumber}/dice-${randomDiceNumber}-300.webp 300w`);
    dice.setAttribute('src', `./assets/img/dice-${randomDiceNumber}/dice-${randomDiceNumber}-300.png`);
    
    
    
});