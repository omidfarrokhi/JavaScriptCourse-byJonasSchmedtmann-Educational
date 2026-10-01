'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////////////
////////////////////////////////////////////////

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
// returns NodeList (does not update)
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
// returns HTMLCollection (updates dynamically)
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// HTMLCollection
document.getElementsByClassName('btn');

// Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div'); // creates a DOM object
message.classList.add('cookie-message');
// message.textContent =
// 'We use cookies for inproved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>';

header.prepend(message); // adds as the first child
header.append(message); // adds as teh last child
// header.append(message.cloneNode(true)); // append just move the element it doesn't copy

// header.before(message); // insert before
// header.after(message); // insert after

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); // this is quite new (before we would have to select the parent and remove from there ;()
    // message.parentElement.removeChild(message);
  });
