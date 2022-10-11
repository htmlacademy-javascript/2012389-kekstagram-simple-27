//Функция, возвращающая случайное целое число из переданного диапазона включительно
// Источник https://schoolsw3.com/js/js_random.php

function getRandomNumber(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  }
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

getRandomNumber(20,140);

//Функция для проверки максимальной длины строки

function checkStringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

checkStringLength('fvfv',140);
