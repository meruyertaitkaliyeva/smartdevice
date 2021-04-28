'use strict';

(function () {
  const footer = document.querySelector('.footer');
  const folder = footer.querySelectorAll('.footer__folder');
  const button = footer.querySelectorAll('.footer__button');

  folder.forEach(function (item) {
    item.classList.remove('footer__no-js');
  });

  function hideAll() {
    button.forEach(function (acc) {
      acc.classList.remove('active');
      acc.nextElementSibling.classList.remove('show');
    });
  }

  button.forEach(function (acc) {
    acc.addEventListener('click', function () {
      if (acc != this) {
        hideAll();
      }
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('show');
    })
  });
})();
