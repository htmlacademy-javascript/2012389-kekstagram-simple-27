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

const showAlert = () => {
  const error = errorTemplate.cloneNode(true);

  errorContainer.append(error);
  document.body.append(errorContainer);

  const errorButton = document.querySelector('.error__button');

  const hideError = () => {
    errorContainer.remove();
  };

  errorButton.addEventListener('click', (hideError));
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
  };

  successButton.addEventListener('click', (hideSuccess));
};

//Экспорт

export {getRandomNumber};
export {getRandomArrayElement};
export {showAlert};
export {successAlert};
