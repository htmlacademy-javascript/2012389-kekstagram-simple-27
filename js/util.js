import { hideModal } from './form.js';
import { minusButton, plusButton, onMinusButtonClick, onPlusButtonClick } from './scale.js';
import { form, onFormChange } from './effect.js';

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

//Функция для проверки максимальной длины строки

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

// checkStringLength(1,140);

//Функция для получения случайного элемента массива

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];


// Закрытие по клику на область вне модального окна

const onBackdropClick = ({target})=> {
  const isBtnClick = target.closest('.error__button') || target.closest('.success__button');
  const popup = document.querySelector('.popup');
  if (popup && (!target.closest('.error__inner') && !target.closest('.success__inner')
  || isBtnClick)) {

    popup.remove();
  }
};

//Сообщение об ошибке отправки фото

const errorTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');

const errorContainer = document.createElement('div');
errorContainer.classList.add('popup');

const errorAlert = () => {
  const error = errorTemplate.cloneNode(true);

  errorContainer.append(error);
  document.body.append(errorContainer);


  const hideError = () => {
    errorContainer.remove();
  };

  function onEscHideError(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      hideError ();
    }
  }

  document.addEventListener('keydown', onEscHideError, { once: true });
  document.body.addEventListener('click', onBackdropClick);
};


//Соощение о успешной отправке фото
const successTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');

const successContainer = document.createElement('div');
successContainer.classList.add('popup');

const successAlert = () => {
  const success = successTemplate.cloneNode(true);

  successContainer.append(success);
  document.body.append(successContainer);


  const hideSuccess = () => {
    successContainer.remove();
    hideModal();
  };

  function onEscHideSuccess(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      hideSuccess ();
    }
  }

  document.addEventListener('keydown', onEscHideSuccess, { once: true });
  document.body.addEventListener('click', onBackdropClick);
};

// Удаление обработчиков событий

const removeEventListeners = () => {
  minusButton.removeEventListener('click', onMinusButtonClick);
  plusButton.removeEventListener('click', onPlusButtonClick);
  form.removeEventListener('change', onFormChange);
};

//Экспорт

export {getRandomNumber};
export {getRandomArrayElement};
export {errorAlert};
export {successAlert};
export {removeEventListeners};
