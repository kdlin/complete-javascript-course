'use strict';

// DOM Elements Selection
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1'); 
const curr0El = document.querySelector('#current--0');
const curr1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Initial State
let finalScores, currScore, activePlayer, isPlaying;
// initialize game
const init = () => {
  finalScores = [0, 0];
  currScore = 0; 
  activePlayer = 0;
  isPlaying = true;

  score0El.textContent = 0;
  score1El.textContent = 0; 
  curr0El.textContent = 0;
  curr1El.textContent = 0;

  // Visible changes
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}

init();

const switchPlayer = () => { 
    // reset currScore for activePlayer
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currScore = 0;
    // Switch Active Player
    activePlayer = activePlayer === 0 ? 1 : 0;
    // Toggle background active colors
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (isPlaying) {
    // Set Dice value + state
    const dice = Math.trunc(Math.random() * 6 + 1)
    console.log(dice);

    // Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
  
    // If not 1, update score and keep rolling
    if (dice !== 1) { 
      currScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent = currScore;

    // when 1, no change to score, then switch players
    } else { 
      switchPlayer();
    }
  }
});


// for hold button, allows switching before hitting 1
btnHold.addEventListener('click', () => {
  if (isPlaying) {
    finalScores[activePlayer] += currScore;
    document.querySelector(`#score--${activePlayer}`).textContent = finalScores[activePlayer];

    if (finalScores[activePlayer] >= 20) {
      isPlaying = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      
    } else {
      switchPlayer();
    }
  } 
});

// Action for New Game
btnNew.addEventListener('click', init);