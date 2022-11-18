import { resetScale } from './scale.js';
import { resetEffect } from './effect.js';
import { showErrorAlert } from './util.js';
import { showSuccessAlert } from './util.js';
import { sendData } from './api.js';
import { addEventListeners, removeEventListeners } from './util.js';

const form = document.querySelector('.img-upload__form');
const modal = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const commentField = document.querySelector('.text__description');


const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__message--loading',
});

const showModal = () => {
  modal.classList.remove('hidden');
  document.body.addEventListener('keydown', onEscKeyDown);
  body.classList.add('modal-open');
  addEventListeners();
};

const hideModal = () => {
  form.reset();
  resetScale();
  resetEffect();
  pristine.reset();
  modal.classList.add('hidden');
  document.body.removeEventListener('keydown', onEscKeyDown);
  body.classList.remove('modal-open');
  removeEventListeners();
};

const isTextFieldFocused = () =>
  document.activeElement === commentField;

function onEscKeyDown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if(isValid) {
      sendData(
        () => onSuccess(),
        () => showErrorAlert(),
        new FormData(evt.target),
      );
    }
  });
};

setUserFormSubmit(() => showSuccessAlert());


uploadFile.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);

export { hideModal };
