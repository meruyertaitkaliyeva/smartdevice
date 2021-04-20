'use strict';

(function () {
  const footer = document.querySelector('.footer');
  const navList = footer.querySelector('.footer__nav-list');
  const contactsList = footer.querySelector('.footer__contacts-list');
  const navFolder = footer.querySelector('.footer__folder--nav');
  const contactsFolder = footer.querySelector('.footer__folder--contacts');
  const navOpenButton = navFolder.querySelector('.footer__open');
  const navCloseButton = navFolder.querySelector('.footer__close');
  const contactsOpenButton = contactsFolder.querySelector('.footer__open');
  const contactsCloseButton = contactsFolder.querySelector('.footer__close');

  navOpenButton.addEventListener('click', function () {
    if (navList.classList.contains('footer__folder--closed')) {
      navList.classList.remove('footer__folder--closed');
      navList.classList.add('footer__folder--opened');
      // navOpenButton.classList.remove('show');
      // navOpenButton.classList.add('hide');
      // navCloseButton.classList.remove('hide');
      // navCloseButton.classList.add('show');
      // const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      // body.style.position = 'fixed';
      // body.style.width = '100%';
      // body.style.top = `-${scrollY}`;
    }
  });

  navCloseButton.addEventListener('click', function () {
    if (contactsList.classList.contains('footer__folder--opened')) {
      contactsList.classList.remove('footer__folder--opened');
      contactsList.classList.add('footer__folder--closed');
    }
  });

  contactsOpenButton.addEventListener('click', function () {
    if (contactsList.classList.contains('footer__folder--closed')) {
      contactsList.classList.remove('footer__folder--closed');
      contactsList.classList.add('footer__folder--opened');
    }
  });

  contactsCloseButton.addEventListener('click', function () {
    if (contactsList.classList.contains('footer__folder--opened')) {
      contactsList.classList.remove('footer__folder--opened');
      contactsList.classList.add('footer__folder--closed');
    }
  });
})();
