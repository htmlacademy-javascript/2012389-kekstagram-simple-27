import { hideModal } from './form.js';
import { minusButton, plusButton, onMinusButtonClick, onPlusButtonClick } from './scale.js';
import { form, onFormChange } from './effect.js';


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


export {errorAlert};
export {successAlert};
export {removeEventListeners};
