//Отобразить фотографии других пользователей.

const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const container = document.querySelector('.pictures');


const renderPictures = (pictures) => {
  const pictureFragment = document.createDocumentFragment();


  pictures.forEach(({url, likes, comments, description }) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__img').alt = description;
    picture.querySelector('.picture__comments').textContent = comments;

    pictureFragment.appendChild(picture);

    return picture;
  });

  container.appendChild(pictureFragment);
};

export {renderPictures};
