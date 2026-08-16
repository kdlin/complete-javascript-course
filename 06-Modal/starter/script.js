'use strict';

// Modal Work
// Select and store in a variable 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Add EventListener to buttons
for (let btn of btnsOpenModal) { 
  btn.addEventListener('click', () => {
    modal.classList.remove('hidden'); // Don't use .hidden -> hidden 
    overlay.classList.remove('hidden');
  });
}

btnCloseModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
})