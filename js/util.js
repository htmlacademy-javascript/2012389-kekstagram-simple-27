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

//Функция для получения случайного элемента массива

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];


//Экспорт

export {getRandomNumber};
export {getRandomArrayElement};
