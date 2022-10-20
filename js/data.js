import {getRandomNumber} from './util.js';
import {getRandomArrayElement} from './util.js';


//Генерация объектов

const PHOTO_DESCRIPTION_COUNT = 25;
const LIKES_COUNT = 200;
const COMMENTS_COUNT = 200;


const DESCRIPTIONS = [
  'О','П','И','С','А','Н','И','Е'
];

const getPhotoDescription = (_, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(15, LIKES_COUNT),
  comments: getRandomNumber(0, COMMENTS_COUNT),
});

const photoDescription = Array.from({length: PHOTO_DESCRIPTION_COUNT}, getPhotoDescription);

photoDescription();

