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

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  const dice = Math.trunc(Math.random() * 6 + 1)
  console.log(dice);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
 
  // roll 1 ? 
  if (dice !== 1) { 
    currScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent = currScore;

  } else { 
    // State Change for CurrPlayer
    finalScores[activePlayer] += currScore;
    document.querySelector(`#score--${activePlayer}`).textContent = finalScores[activePlayer]
    document.querySelector(`#current--${activePlayer}`).textContent = 0;

    // Switch Active Player
    currScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    // Toggle background active colors
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
   
   // add currScore to total 
  }
})
