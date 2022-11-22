import { renderPictures } from './picture.js';
import { showSuccessAlert } from './util.js';
import { showErrorAlert } from './util.js';


// Получение изображений из сервера

const dataSourceUpload = 'https://27.javascript.pages.academy/kekstagram-simple/data';

const getData = () => {
  fetch(dataSourceUpload)
    .then((response) => response.json())
    .then((pictures) => {
      renderPictures(pictures);
    });
};
getData();

//Отправка изображения

const dataSourceDownload = 'https://27.javascript.pages.academy/kekstagram-simple';

const sendData = (onSuccess, onFail, body) => {
  fetch(
    dataSourceDownload,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess(showSuccessAlert);
      } else {
        onFail(showErrorAlert);
      }
    })
    .catch(() => {
      onFail(showErrorAlert);
    });
};

export {getData, sendData};
