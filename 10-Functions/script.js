'use strict';

// when we click the function (IIFE) has long been executed and popped :**
// but we still have access to the header
// because it's being held by the eventListener's callback function

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
