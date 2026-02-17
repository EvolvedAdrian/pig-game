
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
function setPlayerStyles(activePlayer) {
    document.querySelector(`.player--${activePlayer + 1}`).dataset.active = 'true';
    document.querySelector(`.player--${!activePlayer + 1}`).dataset.active = 'false';
}

// Change player
function changePlayer() {
    // Set last current player score to 0 (HTML)
    document.querySelector(`.player__current-score--${activePlayer + 1}`).textContent = 0;

    // Change to new player
    activePlayer = Number(!activePlayer);
    setPlayerStyles(activePlayer);
    currentScore = 0;
}

// Reset game if New Game button is pressed
function resetGame(){
    currentScore = 0;
    scores = [0, 0];
    activePlayer = 0;
    setPlayerStyles(activePlayer);
    for(let i = 0; i < scores.length; i++){ // Loop throught players 0 and 1 --> Reset player scores
        document.querySelector(`.player__current-score--${i+1}`).textContent = 0;
        document.querySelector(`.player__global-score--${i+1}`).textContent = 0;
    }
}

// Game logic

// Roll dice logic
rollDiceButton.addEventListener('click', () => {
    // Throw the dice
    const randomDiceNumber = generateRandomDiceNumber()
    dice.setAttribute('srcset', `./assets/img/dice-${randomDiceNumber}/dice-${randomDiceNumber}-300.webp 300w`);
    dice.setAttribute('src', `./assets/img/dice-${randomDiceNumber}/dice-${randomDiceNumber}-300.png`);

    // Increase active player current score if dice number is NOT 1
    if (randomDiceNumber !== 1) {
        currentScore += randomDiceNumber;
        document.querySelector(`.player__current-score--${activePlayer + 1}`).textContent = currentScore;
    } else {
        changePlayer();
    }
});

// Hold logic
holdButton.addEventListener('click', () => {
    scores[activePlayer] += currentScore;
    document.querySelector(`.player__global-score--${activePlayer + 1}`).textContent = scores[activePlayer];
    changePlayer();
});

// New game
newGameButton.addEventListener('click', () => {
    resetGame();
}); 