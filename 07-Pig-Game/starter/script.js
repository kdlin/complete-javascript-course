'use strict';

// Selecting Score0 & Score1
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1') 
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currScore = 0;

score0El.textContent = 0;
score1El.textContent =0; 
diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  const dice = Math.trunc(Math.random() * 6 + 1)
  console.log(dice);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
 
  // roll 1 ? 
  if (dice !== 1) { 
    // add dice to current score 
  } else {
    
  }
})
