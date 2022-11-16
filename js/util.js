import { hideModal } from './form.js';


//Функция, возвращающая случайное целое число из переданного диапазона включительно
// Источник https://schoolsw3.com/js/js_random.php

function getRandomNumber(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  }
  if ( min < 0 || max < 0) {
    return NaN;
  }
  if (min >= max) {
    return NaN;
  }
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

getRandomNumber(20,140);


//Функция для проверки максимальной длины строки

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('fvfv',140);

//Функция для получения случайного элемента массива

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];


//Сообщение об ошибке отправки фото

const errorTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');
const errorContainer = document.createElement('div');

const errorAlert = () => {
  const error = errorTemplate.cloneNode(true);

  errorContainer.append(error);
  document.body.append(errorContainer);

  const errorButton = document.querySelector('.error__button');

  const hideError = () => {
    errorContainer.remove();
    document.addEventListener('keydown', onEscHideError);
  };

  function onEscHideError(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      hideError ();
    }
  }

  errorButton.addEventListener('click', hideError);

  const onBackdropClickError = (evt)=> {
    if ( !evt.target.closest('error')) {
      hideError();
    }
  };

  document.body.addEventListener('click', onBackdropClickError);
};


//Соощение о успешной отправке фото
const successTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');
const successContainer = document.createElement('div');

const successAlert = () => {
  const success = successTemplate.cloneNode(true);

  successContainer.append(success);
  document.body.append(successContainer);

  const successButton = document.querySelector('.success__button');

  const hideSuccess = () => {
    successContainer.remove();
    hideModal();
    document.addEventListener('keydown', onEscHideSuccess);
  };

  function onEscHideSuccess(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      hideSuccess ();
    }
  }

  successButton.addEventListener('click', hideSuccess);

  const onBackdropClickSuccess = (evt)=> {
    if ( !evt.target.closest('success')) {
      hideSuccess();
    }
  };

  document.body.addEventListener('click', onBackdropClickSuccess);

  setTimeout(() => {
    if (hideSuccess) {
      document.removeEventListener('keydown', onEscHideSuccess);
      successButton.removeEventListener('click', hideSuccess);
      document.body.removeEventListener('click', onBackdropClickSuccess);
    }
  }, 2000);
};


//Экспорт

export {getRandomNumber};
export {getRandomArrayElement};
export {errorAlert};
export {successAlert};
