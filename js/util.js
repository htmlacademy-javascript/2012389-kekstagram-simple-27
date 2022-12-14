import { hideModal } from './form.js';
import { minusButton, plusButton, onMinusButtonClick, onPlusButtonClick } from './scale.js';
import { form, onFormChange } from './effect.js';


// Закрытие по клику на область вне модального окна

const closePopupHandler = ({target})=> {
  const popup = document.querySelector('.popup');
  const isBackdropClick = !target.closest('.error__inner') && !target.closest('.success__inner');
  if(popup){
    if (popup.classList.contains('success-container') && (isBackdropClick || target.closest('.success__button'))){
      hideModal();
      popup.remove();
    }
    else if (isBackdropClick || target.closest('.error__button')){
      popup.remove();
      document.body.removeEventListener('click', closePopupHandler);
    }
  }
};

//Сообщение об ошибке отправки фото

const errorTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');

const errorContainer = document.createElement('div');
errorContainer.classList.add('popup');
errorContainer.classList.add('error-сontainer');

const showErrorAlert = () => {
  const error = errorTemplate.cloneNode(true);

  errorContainer.append(error);
  document.body.append(errorContainer);


  const hideError = () => {
    errorContainer.remove();
  };

  const onEscHideError = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      hideError();
    }
  };

  document.addEventListener('keydown', onEscHideError, { once: true });
  document.body.addEventListener('click', closePopupHandler);
};


//Соощение о успешной отправке фото
const successTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');

const successContainer = document.createElement('div');
successContainer.classList.add('popup');
successContainer.classList.add('success-container');
const showSuccessAlert = () => {
  const success = successTemplate.cloneNode(true);

  successContainer.append(success);
  document.body.append(successContainer);


  const hideSuccess = () => {
    successContainer.remove();
    hideModal();
  };

  const onEscHideSuccess = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      hideSuccess();
    }
  };

  document.addEventListener('keydown', onEscHideSuccess, { once: true });
  document.body.addEventListener('click', closePopupHandler);
};

// Добавление обработчиков событий

const addEventListeners = () => {
  minusButton.addEventListener('click', onMinusButtonClick);
  plusButton.addEventListener('click', onPlusButtonClick);
  form.addEventListener('change', onFormChange);
};


// Удаление обработчиков событий

const removeEventListeners = () => {
  minusButton.removeEventListener('click', onMinusButtonClick);
  plusButton.removeEventListener('click', onPlusButtonClick);
  form.removeEventListener('change', onFormChange);
  document.body.removeEventListener('click', closePopupHandler);
};

//Экспорт


export {showErrorAlert};
export {showSuccessAlert};
export {removeEventListeners};
export {addEventListeners};
