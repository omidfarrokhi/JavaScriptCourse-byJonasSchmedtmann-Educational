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

// Style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// this does not work exept for the inline styles!!!!!!!
// console.log(message.style.height);
console.log(message.style.backgroundColor);

// this won't give us the styles hidden inside CSS clases and applied
// for that:
console.log(getComputedStyle(message).color); // huge object of CSS Styles that we can take out from it what we want
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Atributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
// for standard attributes JS automatically creates them
// but not for non-standards self-defineds
console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer'));

// we can also set
logo.alt = 'Beautiful minimalist logo';

// also for non-standards
logo.setAttribute('company', 'Bankist');

console.log(logo.src); //http://127.0.0.1:5500/img/logo.png (absolute)
console.log(logo.getAttribute('src')); //img/logo.png (relative)

const link = document.querySelector('.nav__link--btn');
console.log(link.href); //http://127.0.0.1:5500/#
console.log(link.getAttribute('href')); //#

// Data attributes
//// the attributes that starts with data-... (data-version-number="3.0")
//// are stored in a dataset property!
console.log(logo.dataset.versionNumber);

// Classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains(); // not includes as in arrays ;/

// Don't use
//// this will override all previous classes written
logo.className = 'jonas';
