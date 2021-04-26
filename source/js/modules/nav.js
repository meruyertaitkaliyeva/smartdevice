'use strict';

(function () {
  const footer = document.querySelector('.footer');
  const navFolder = footer.querySelector('.footer__folder--nav');
  const contactsFolder = footer.querySelector('.footer__folder--contacts');
  const navButton = navFolder.querySelector('.footer__button--nav');
  const contactsButton = contactsFolder.querySelector('.footer__button--contacts');

  navFolder.classList.remove('footer__no-js');
  contactsFolder.classList.remove('footer__no-js');

  navButton.addEventListener('click', function () {
    if (navFolder.classList.contains('footer__folder--closed')) {
      navFolder.classList.remove('footer__folder--closed');
      navFolder.classList.add('footer__folder--opened');
      navButton.classList.add('active');
    } else if (navFolder.classList.contains('footer__folder--opened')) {
      navFolder.classList.remove('footer__folder--opened');
      navFolder.classList.add('footer__folder--closed');
      navButton.classList.remove('active');
    }
  });

  contactsButton.addEventListener('click', function () {
    if (contactsFolder.classList.contains('footer__folder--opened')) {
      contactsFolder.classList.remove('footer__folder--opened');
      contactsFolder.classList.add('footer__folder--closed');
      contactsButton.classList.add('active');
    } else if (contactsFolder.classList.contains('footer__folder--closed')) {
      contactsFolder.classList.remove('footer__folder--closed');
      contactsFolder.classList.add('footer__folder--opened');
      contactsButton.classList.remove('active');
    }
  });
})();
