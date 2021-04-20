'use strict';

(function () {
  const feedback = document.querySelector('.feedback');
  const form = feedback.querySelector('form');
  const error = form.querySelector('.error');
  const phone = form.querySelector('#tel');
  const submit = form.querySelector('button');

  submit.addEventListener('click', function (evt) {
    if (phone.value.length < 10) {
      evt.preventDefault();
      error.classList.remove('hide');
      error.classList.add('show');
      return false;
    } else {
      error.classList.remove('show');
      error.classList.add('hide');
      return true;
    }
  })
})();
