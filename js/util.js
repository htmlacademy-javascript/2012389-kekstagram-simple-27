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
const ALERT_SHOW_TIME = 5000;

const errorTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');
const errorContainer = document.createElement('div');

const showAlert = (message) => {
  const error = errorTemplate.cloneNode(true);
  error.querySelector('.error__title').textContent = message;

  document.body.append(errorContainer);

  setTimeout(() => {
    errorContainer.remove();
  }, ALERT_SHOW_TIME);
};

//Соощение о успешной отправке фото
const successTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');
const successContainer = document.createElement('div');

const successAlert = (message) => {
  const success = successTemplate.cloneNode(true);
  success.querySelector('.success__title').textContent = message;

  document.body.append(successContainer);

  setTimeout(() => {
    successContainer.remove();
  }, ALERT_SHOW_TIME);
};

//Экспорт

export {getRandomNumber};
export {getRandomArrayElement};
export {showAlert};
export {successAlert};
