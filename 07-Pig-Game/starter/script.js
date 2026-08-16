'use strict';

// Selecting Score0 & Score1
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

score0El.textContent = 0;
score1El.textContent = 0; 
diceEl.classList.add('hidden');

const finalScores= [0, 0];
let currScore = 0; 
let activePlayer = 0;
let isPlaying = true;

const switchPlayer = () => { 
    // reset currScore for activePlayer
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currScore = 0;

    // Toggle background active colors
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

    // Switch Active Player
    activePlayer = activePlayer === 0 ? 1 : 0;
}

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (isPlaying) {
    // Set Dice value + state
    const dice = Math.trunc(Math.random() * 6 + 1)
    console.log(dice);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
  
    // If not 1, update score and keep rolling
    if (dice !== 1) { 
      currScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent = currScore;

    // when 1, update, then switch players
    } else { 
      // State Change for CurrPlayer
      finalScores[activePlayer] += currScore;
      document.querySelector(`#score--${activePlayer}`).textContent = finalScores[activePlayer]
      
      switchPlayer();
    }
  }
})


// for hold button, allows switching before hitting 1
btnHold.addEventListener('click', () => {
  finalScores[activePlayer] += currScore;
  document.querySelector(`#score--${activePlayer}`).textContent = finalScores[activePlayer];

  if (finalScores[activePlayer] >= 100) {
    isPlaying = false;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    
  } else {
    switchPlayer();
  } 
})