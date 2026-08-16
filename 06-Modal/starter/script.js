'use strict';

// Modal Work
// Select and store in a variable 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// define closeModal & openModal which modify classList toggling .hidden class
const closeModal = () => { 
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
} 

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

// Add EventListener to buttons
// when clicked, button removes .hidden css class 
for (let btn of btnsOpenModal) { 
  btn.addEventListener('click', openModal);  
}

// when closeBtn click or overlay click, toggle hidden class
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Add a keypress event (keypress, keydown, keyup) 
// Key down happens INSTANTLY when we press down a key
// Any time key is pressed, object of keydown event is created 
// Global Events 
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape')
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
}) 
