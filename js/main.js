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


//Генерация объектов

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const PHOTO_DESCRIPTION_COUNT = 25;
const ID_COUNT = 25;
const URL_COUNT = 25;
const LIKES_COUNT = 200;
const COMMENTS_COUNT = 200;


const DESCRIPTIONS = [
  'О','П','И','С','А','Н','И','Е'
];

const getPhotoDiscription = () => ({
  id: getRandomNumber(1, ID_COUNT),
  url: `photos/${getRandomNumber(1, URL_COUNT)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(15, LIKES_COUNT),
  comments: getRandomNumber(0, COMMENTS_COUNT),
});

const photoDescription = () => Array.from({length: PHOTO_DESCRIPTION_COUNT}, getPhotoDiscription);

photoDescription();
