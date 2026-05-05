//*..............Задание № 1 -- "Функция для проверки длины строки"  (Четыре Варианта черновика)


//*......................Вариант № 1......


// const checkStringLength = (string, charAmount) => string.length <= charAmount;

// checkStringLength('12345', 4);
// console.log(checkStringLength('12345', 5));

//*.....................Вариант № 2.....

// const checkStringLength = (string, charAmount) => {

// 	return string.length <= charAmount ? true : false;
// }

// console.log( checkStringLength('12345', 5) );

//*......................Вариант № 3....

// const checkStringLength = (string, charAmount) => string.length < charAmount
//   ? console.log(`Строка короче ${charAmount} символов`)
//   : (string.length === charAmount)
//     ? console.log(`Длина строки ровно ${charAmount} символов`)
//     : console.log(`Строка длиннее ${charAmount} символов`);

// console.log(checkStringLength('12345', 6));

//*.....................Вариант № 4.....

// const checkStringLength = (string, charAmount) => {

//   if (string.length < charAmount) {
//     console.log(`Строка короче ${charAmount} символов`);
//     return true;

//   } else if (string.length === charAmount) {
//     console.log(`Длина строки ровно ${charAmount} символов`);
//     return true;
//   }

//   console.log(`Строка длиннее ${charAmount} символов`);
//   return false;
// };

// console.log(checkStringLength('Word', 3));

//*............Задание № 2 -- "Функция для проверки, является ли строка палиндромом" (Финальный и Два рабочих черновика)

//*.................Вариант Финальный

// const checkPalindrom = (string) => {

//   let newString = string.replaceAll(' ', '');
//   newString = newString.toUpperCase();
//   let additionalString = '';

//   for (let i = newString.length - 1; i >= 0; i--) {
//     additionalString += newString.at(i);
//   }

//   console.log(newString);
//   console.log(additionalString);

//   return additionalString === newString;
// };

// console.log(checkPalindrom('1a Bb A 1'));

//*.................Черновой Вариант № 1

// const checkPalindrom = (string) => {

//   let newString = string.replaceAll(' ', '');
//   newString = newString.toUpperCase();
//   console.log(newString);
//   console.log(newString.length);
//   console.log(newString.indexOf());
//   let additionalString = '';

//   for (let i = newString.length - 1; i > newString.indexOf(); i--) {

//     const helperString = newString.at(i);
//     additionalString += helperString;

//     console.log(helperString);
//     console.log(additionalString);
//   }

//   return additionalString === newString;
// };

// console.log(checkPalindrom('До во д'));

//*.................Черновой Вариант № 2

// const checkPalindrom = (string) => {

//   let newString = string.replaceAll(' ', '');
//   newString = newString.toUpperCase();
//   console.log(newString);
//   let additionalString = '';

//   for (let i = newString.length - 1; i >= 0; i--) {

//     additionalString += newString.at(i);
//   }
//   console.log(additionalString);

//   return additionalString === newString;
// };

// console.log(checkPalindrom('1о во  1'));

//*........Задание № 3 -- "Функция возврата целого положительного числа из строки" (Алгоритм. Выполнение задания по частям)

//*...... АЛГОРИТМ........

//*  1. Цикл -- Перебор полученной строки. Сначала "пересобрать" строку - в результирующую и отправить в неё "Все" элементы

//* РЕАЛИЗАЦИЯ: Цикл -- переборка по одному всех Эл с отправкой из тела цикла во внешнюю пустую строку

//*  2. Отправить в результирующую строку только цифры

//* 2-1. Каждый из полученных "перебором" Эл проверить "Число это или нет" - Составить "Условие"

//* 2-2. Сначала перевести полученный Эл в Число (если это число и в NaN (если это строка) -- Реализация через parseInt()

//* 2-3  Отфильтровать NaN --- Реализация через:  (Number(NaN) === Number(NaN) -- Это FALSE

//* 2-4 Отправить полученные Числа из тела цикла во внешнюю результирующую строку

//* 2-5 Перевести полученную результирующую строку в Число

//* 2-6 Если в строке нет ни одной цифры, функция должна вернуть NaN

//* 2-7  Если в качестве параметра пришло число, то использовать метод toString() для приведения данных в строку

//* FINAL

//*    1  ..........

// const getInteger = (string) => {

//   const anyString = string.replaceAll(' ', '');
//   console.log(anyString);
//   let resultString = '';

//   // console.log(parseInt(anyString, 10));

//   for (let i = 0; i < anyString.length; i++) {

//     resultString += anyString.at(i);
//     console.log(resultString);
//   }
// };

// console.log(getInteger('20  EC'));

//* ........2-2.........

// const getInteger = (string) => {

//   const anyString = string.replaceAll(' ', '');
//   console.log(anyString);

//   for (let i = 0; i < anyString.length; i++) {

//     const checkForNumber = parseInt(anyString.at(i), 10);

//     if (typeof checkForNumber === 'number') {
//       console.log('NUMBER');

//     } else {
//       console.log('NOT a number');
//     }
//     console.log(checkForNumber);
//   }
// };

// console.log(getInteger('20  EC'));

// //* ........2-3.........

// const getInteger = (string) => {

//   const anyString = string.replaceAll(' ', '');
//   console.log(anyString);

//   for (let i = 0; i < anyString.length; i++) {

//     const checkForNumber = parseInt(anyString.at(i), 10);

//     if (Number(checkForNumber) === Number(checkForNumber)) {
//       console.log('NUMBER');

//     } else {
//       console.log('NOT a number');
//     }

//     console.log(checkForNumber);
//   }
// };

// console.log(getInteger('20  EC'));

//* ........2-4.........

// const getInteger = (string) => {

//   const anyString = string.replaceAll(' ', '');
//   console.log(anyString);

//   let resultString = '';

//   for (let i = 0; i < anyString.length; i++) {

//     const checkForNumber = parseInt(anyString.at(i), 10);

//     if (Number(checkForNumber) === Number(checkForNumber)) {

//       console.log('NUMBER');
//       resultString += anyString.at(i);

//     } else {
//       console.log('NOT a number');
//     }
//     console.log(checkForNumber);
//   }
//   console.log(resultString);
// };

// console.log(getInteger('20  EC'));

//* ........2-5.........

// const getInteger = (string) => {

//   const anyString = string.replaceAll(' ', '');
//   console.log(anyString);
//   let resultString = '';

//   for (let i = 0; i < anyString.length; i++) {

//     const checkForNumber = parseInt(anyString.at(i), 10);

//     if (Number(checkForNumber) === Number(checkForNumber)) {

//       console.log('NUMBER');
//       resultString += anyString.at(i);

//     } else {
//       console.log('NOT a number');
//     }
//   }
//   console.log(resultString);
//   const resultNumber = Number(resultString);
//   console.log(resultNumber);

//   return resultNumber;
// };

// console.log(getInteger('20 TC'));

//* ........2-6.........

// const getInteger = (string) => {

//   const anyString = string.replaceAll(' ', '');
//   console.log(anyString);
//   let resultString = '';

//   for (let i = 0; i < anyString.length; i++) {

//     const checkForNumber = parseInt(anyString.at(i), 10);

//     if (Number(checkForNumber) === Number(checkForNumber)) {

//       console.log('NUMBER');
//       resultString += anyString.at(i);

//     } else {
//       console.log('NOT a number');
//     }
//   }

//   console.log(resultString);

//   const resultNumber = Number(resultString);

//   if (resultNumber === 0) {
//     return NaN;
//   }

//   return resultNumber;
// };

// console.log(getInteger('ECMAScript'));

//* ........2-7.........

// const getInteger = (string) => {

//   const anyString = string.toString();
//   console.log(anyString);
//   let resultString = '';

//   for (let i = 0; i < anyString.length; i++) {

//     const checkForNumber = parseInt(anyString.at(i), 10);

//     if (Number(checkForNumber) === Number(checkForNumber)) {

//       console.log('NUMBER');
//       resultString += anyString.at(i);

//     } else {
//       console.log('NOT a number');
//     }
//   }

//   console.log(resultString);
//   const resultNumber = Number(resultString);

//   if (resultNumber === 0) {
//     return NaN;
//   }

//   return resultNumber;
// };

// console.log(getInteger('том ат 007'));

//* ........FINAL.........

// const getInteger = (string) => {

//   const additionalString = string.toString();
//   let resultString = '';

//   for (let i = 0; i < additionalString.length; i++) {

//     const checkForNumber = parseInt(additionalString.at(i), 10);

//     if (Number(checkForNumber) === Number(checkForNumber)) {

//       resultString += additionalString.at(i);
//     }
//   }

//   const resultNumber = Number(resultString);

//   if (resultNumber === 0) {
//     return NaN;
//   }

//   return resultNumber;
// };

// console.log(getInteger(7007));
