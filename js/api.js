import { renderPictures } from './picture.js';
import { successAlert } from './util.js';
import { showAlert } from './util.js';


// Получение изображений из сервера

const getData = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((pictures) => {
      renderPictures(pictures);
    });
};


//Отправка изображения

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simpl',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess(successAlert());
      } else {
        onFail(showAlert());
      }
    })
    .catch(() => {
      onFail(showAlert());
    });
};

export {getData, sendData};
