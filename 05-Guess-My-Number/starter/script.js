'use strict';


// add a rand number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0; 

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

const displayScore = function(score) {
  document.querySelector('.score').textContent = score;
}

document.querySelector(".check").addEventListener
('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
 
  // No Input
  if (!guess) { 
    displayMessage('No Number');

  // When Player Wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#008000';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  
  // refactor
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(
      guess > secretNumber ? 'Too High!' 
      : 'Too Low');
      
      score --; 

      document.querySelector('.score').textContent = score;

    } else { 
      displayMessage('Game Over');
      document.querySelector('.score').textContent = 0; 
    }
  }
});

// State Reset
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start Guessing');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})

// implement highscore;



