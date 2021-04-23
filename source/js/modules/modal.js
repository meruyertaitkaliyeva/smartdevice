'use strict';

(function () {
  const body = document.querySelector('body');
  const feedbackLink = document.querySelector('.header__button');
  const feedbackModal = document.querySelector('.modal');
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

  feedbackLink.addEventListener('click', function (evt) {
    evt.stopPropagation();
    evt.preventDefault();
    feedbackModal.classList.remove('hide');
    feedbackModal.classList.add('modal-show');
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
    feedbackModal.classList.remove('modal-show');
    feedbackModal.classList.add('hide');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackModal.classList.contains('modal-show')) {
        evt.preventDefault();
        feedbackModal.classList.remove('modal-show');
        feedbackModal.classList.add('hide');
      }
    }
  });

  body.onclick = function(e) {
    if (e.target.closest('.modal')) {
      e.stopPropagation();
    } else {
      feedbackModal.classList.remove('modal-show');
      feedbackModal.classList.add('hide');
    }
  };

  window.addEventListener('scroll', (e) => {
    if (feedbackModal.classList.contains('modal-show')) {
      window.scrollTo(0,0);
    }
  });
})();
