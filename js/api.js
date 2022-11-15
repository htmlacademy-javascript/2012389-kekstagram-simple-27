import { renderPictures } from './picture.js';
import { successAlert } from './util.js';
import { errorAlert } from './util.js';


// Получение изображений из сервера

const getData = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((pictures) => {
      renderPictures(pictures);
    });
};
getData();

//Отправка изображения

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess(successAlert);
      } else {
        onFail(errorAlert);
      }
    })
    .catch(() => {
      onFail(errorAlert);
    });
};

export {getData, sendData};
