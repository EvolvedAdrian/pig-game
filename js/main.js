
// Buttons
const rollDiceButton = document.querySelector('.button__roll-dice');

// Dice
const dice = document.querySelector('.dice-img');

// Player scores
let currentScore = 0;
let scores = [0, 0];

let activePlayer = 0;
let gameIsActive = true;

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
