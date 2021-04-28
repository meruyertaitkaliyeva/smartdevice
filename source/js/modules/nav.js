'use strict';

(function () {
  const footer = document.querySelector('.footer');
  const folder = footer.querySelectorAll('.footer__folder');
  const button = footer.querySelectorAll('.footer__button');

  folder.forEach(function (item) {
    item.classList.remove('footer__no-js');
  });

  button.forEach(function (acc) {
    acc.addEventListener('click', function () {
      hideAll();
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('show');
    })
  });

  function hideAll() {
    button.forEach(function (acc) {
      acc.classList.toggle('active', false);
      acc.nextElementSibling.classList.toggle('show', false);
    });
  }
})();
