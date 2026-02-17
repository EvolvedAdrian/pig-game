
// Buttons
const rollDiceButton = document.querySelector('.button__roll-dice');
const holdButton = document.querySelector('.button__hold');
const newGameButton = document.querySelector('.button__new-game');

// Dice
const dice = document.querySelector('.dice-img');

// Player scores
let currentScore = 0;
let scores = [0, 0];

let activePlayer = 0;

// Generate a random dice number from 1 to 6
function generateRandomDiceNumber() {
    return Math.ceil(Math.random() * 6);
}

// Activate active and non active player sytiling
function setNewPlayer(newActivePlayer) {
    activePlayer = newActivePlayer;
    document.querySelector(`.player--${newActivePlayer + 1}`).dataset.active = 'true';
    document.querySelector(`.player--${!newActivePlayer + 1}`).dataset.active = 'false';
}

// Change player
function changePlayer() {
    resetCurrentScore();
    setNewPlayer(Number(!activePlayer));
}

// Set dice image to a number
function setDice(number){
    dice.setAttribute('srcset', `./assets/img/dice-${number}/dice-${number}-300.webp 300w`);
    dice.setAttribute('src', `./assets/img/dice-${number}/dice-${number}-300.png`);
}

// Increase current active player score (HTML + variable)
function increaseCurrentScore(number){
    currentScore += number;
    document.querySelector(`.player__current-score--${activePlayer + 1}`).textContent = currentScore;
}

// Increase global active player score (HTML + variable)
function increaseGlobalScore(){
    scores[activePlayer] += currentScore;
    document.querySelector(`.player__global-score--${activePlayer + 1}`).textContent = scores[activePlayer];
}

// Reset scores
function resetCurrentScore(){
    document.querySelector(`.player__current-score--${activePlayer + 1}`).textContent = 0;
    currentScore = 0;
}

// Reset global player scores
function resetGlobalScores(){
    scores = [0, 0];
    for(let i = 0; i < scores.length; i++){
        document.querySelector(`.player__global-score--${i+1}`).textContent = 0;
    }
}

// Reset game if New Game button is pressed
function resetGame(){
    setNewPlayer(0);
    resetCurrentScore();
    resetGlobalScores();
}

// Game logic

// Roll dice logic
rollDiceButton.addEventListener('click', () => {
    // Throw the dice
    const randomDiceNumber = generateRandomDiceNumber()
    setDice(randomDiceNumber);

    // Increase active player current score if dice number is NOT 1
    if (randomDiceNumber !== 1) {
        increaseCurrentScore(randomDiceNumber);
    } else {
        changePlayer();
    }
});

// Hold logic
holdButton.addEventListener('click', () => {
    increaseGlobalScore();
    changePlayer();
});

// New game
newGameButton.addEventListener('click', () => {
    resetGame();
}); 