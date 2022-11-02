const form = document.querySelector('.img-upload__form');
const modal = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const commentField = document.querySelector('.text__description');


const pristine = new Pristine(form, {
  classTo: 'img-upload__wrapper',
  errorTextParent: 'img-upload__wrapper',
  errorTextClass: 'img-upload__wrapper__error',
});

const showModal = () => {
  modal.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
};

const hideModal = () => {
  form.reset();
  pristine.reset();
  modal.classList.add('hidden');
  body.classList.remove('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
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


uploadFile.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
