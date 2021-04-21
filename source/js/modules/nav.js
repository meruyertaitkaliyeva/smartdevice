'use strict';

(function () {
  const footer = document.querySelector('.footer');
  const navFolder = footer.querySelector('.footer__folder--nav');
  const contactsFolder = footer.querySelector('.footer__folder--contacts');
  const navOpenButton = navFolder.querySelector('.footer__open');
  const navCloseButton = navFolder.querySelector('.footer__close');
  const contactsOpenButton = contactsFolder.querySelector('.footer__open');
  const contactsCloseButton = contactsFolder.querySelector('.footer__close');

  navOpenButton.addEventListener('click', function () {
    if (navFolder.classList.contains('footer__folder--closed')) {
      navFolder.classList.remove('footer__folder--closed');
      navFolder.classList.add('footer__folder--opened');
    }
  });

  navCloseButton.addEventListener('click', function () {
    if (navFolder.classList.contains('footer__folder--opened')) {
      navFolder.classList.remove('footer__folder--opened');
      navFolder.classList.add('footer__folder--closed');
    }
  });

  contactsOpenButton.addEventListener('click', function () {
    if (contactsFolder.classList.contains('footer__folder--closed')) {
      contactsFolder.classList.remove('footer__folder--closed');
      contactsFolder.classList.add('footer__folder--opened');
    }
  });

  contactsCloseButton.addEventListener('click', function () {
    if (contactsFolder.classList.contains('footer__folder--opened')) {
      contactsFolder.classList.remove('footer__folder--opened');
      contactsFolder.classList.add('footer__folder--closed');
    }
  });
})();
