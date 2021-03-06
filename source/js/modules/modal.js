'use strict';

(function () {
  const body = document.querySelector('body');
  const feedbackLink = document.querySelector('.header__button');
  const modal = document.querySelector('.modal');
  const feedbackModal = document.querySelector('.modal__overlay');
  const feedbackClose = feedbackModal.querySelector('.modal__button');
  const feedbackForm = feedbackModal.querySelector('form');
  const feedbackName = feedbackModal.querySelector('#modal-name');
  const feedbackPhone = feedbackModal.querySelector('#modal-phone');
  const feedbackText = feedbackModal.querySelector('#modal-message');
  const feedbackError = feedbackModal.querySelector('.error');
  const feedbackSubmit = feedbackModal.querySelector('.button');
  let isStorageSupport = true;
  let storageName = '';
  let storagePhone = '';
  let storageMessage = '';

  try {
    storageName = localStorage.getItem('name');
    storagePhone = localStorage.getItem('phone');
    storageMessage = localStorage.getItem('message');
  } catch (err) {
    isStorageSupport = false;
  }

  // feedbackModal.classList.remove('modal__no-js');

  feedbackLink.addEventListener('click', function (evt) {
    evt.stopPropagation();
    evt.preventDefault();
    // feedbackModal.classList.remove('hide');
    feedbackModal.classList.add('modal-show');
    modal.classList.add('shade');
    feedbackName.focus();
    if (storageName) {
      feedbackName.value = storageName;
      feedbackPhone.focus();
    }
    if (storagePhone) {
      feedbackPhone.value = storagePhone;
      feedbackText.focus();
    }
    if (storageMessage) {
      feedbackMessage.value = storageMessage;
      submit.focus();
    }
    body.classList.add('fixed');
    body.style.width = '100%';
  });

  const maskOptions = {
    mask: "+{7}(000)000-00-00"
  };
  const mask = IMask(feedbackPhone, maskOptions);

  feedbackSubmit.addEventListener('click', function (evt) {
    if (feedbackPhone.value.length < 10) {
      evt.preventDefault();
      feedbackError.classList.remove('hide');
      feedbackError.classList.add('show');
      return false;
    } else {
      feedbackError.classList.remove('show');
      feedbackError.classList.add('hide');
      return true;
    }
  })

  feedbackClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (feedbackModal.classList.contains('modal-show')) {
      feedbackModal.classList.remove('modal-show');
      // feedbackModal.classList.add('hide');
      modal.classList.remove('shade');
      body.classList.remove('fixed');
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackModal.classList.contains('modal-show')) {
        evt.preventDefault();
        feedbackModal.classList.remove('modal-show');
        // feedbackModal.classList.add('hide');
        modal.classList.remove('shade');
        body.classList.remove('fixed');
      }
    }
  });

  body.onclick = function (e) {
    if (e.target.closest('.modal__window')) {
      e.stopPropagation();
    } else if (feedbackModal.classList.contains('modal-show')) {
      feedbackModal.classList.remove('modal-show');
      // feedbackModal.classList.add('hide');
      modal.classList.remove('shade');
      body.classList.remove('fixed');
    }
  };
})();
