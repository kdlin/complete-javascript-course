'use strict';


// add a rand number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; 

document.querySelector('.number').textContent = secretNumber;
document.querySelector(".check").addEventListener
('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  
  if (!guess) { 
    document.querySelector('.message').textContent = 'No Number'; 
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 
    'Correct Num!'; 
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High'; 
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'Too Low';
    score--;
    document.querySelector('.score').textContent = score;
  } 
});







