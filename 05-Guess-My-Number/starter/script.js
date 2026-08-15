'use strict';


// add a rand number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; 

document.querySelector('.number').textContent = secretNumber;
document.querySelector(".check").addEventListener
('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
 
  // No Input
  if (!guess) { 
    document.querySelector('.message').textContent = 'No Number'; 

  // When Player Wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 
    'Correct Num!';
    document.querySelector('body').style.backgroundColor = '#008000';

  // Guess Too high 
  } else if (guess > secretNumber) {
       if (score > 1) { 
         document.querySelector('.message').textContent = 'Too High'; 
        score--;
        document.querySelector('.score').textContent = score;
       } else {
        document.querySelector('.score').textContent = 0;
        document.querySelector('.message').textContent = 'game over';
       }
  // Too Low
  } else {
       if (score > 1) { 
         document.querySelector('.message').textContent = 'Too Low'; 
        score--;
        document.querySelector('.score').textContent = score;
       } else {
        document.querySelector('.score').textContent = 0;
        document.querySelector('.message').textContent = 'game over';
       }
   }
});







