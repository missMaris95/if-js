// Преобразование формата даты:
//     в переменной date лежит дата в формате '2020-11-26';
// преобразуйте эту дату в формат '26.11.2020';
// функция должна быть универсальной, т.е. принимать любую дату
// и приводить ее к поставленному в задании формату.

//Вариант 1 через регулярные выражения
//   const data = '2025-11-05';
// //  const re =/[(\d)+\b-]+/; //без группы
// //   const re = /(\d+)\b-(\d+)\b-(\d+)/ //with group
//   const re = /(?<year>\d+)\D(?<month>\d+)\D(?<day>\d+)/; //with name group
//   const revers = data.replace(re,'$<day>.$<month>.$<year>');
//
// console.log(revers);


//Вариант 2 через методы строк
// const data = '2025-11-05';
// const year = data.slice(0,4);
// const month = data.slice(5,7);
// const day = data.slice(-2);
//
// const newData = day+ '.' +month+ '.' +year;
// console.log(newData);


//****************
// const array = data.split('');
// console.log(array);
// const notDefis = data.replace('-','');
// console.log(notDefis);
// const reversArray = array.reverse();
// console.log(reversArray);
// const reversArrToString = reversArray.toString();
// console.log(reversArrToString);
// const reversDate = reversArrToString.replace(',','');
// console.log(reversDate);


//Поиск объектов размещения:
// дан массив;
// напишите функцию поиска, которая будет принимать строку;
// по полученной строке найдите все совпадения в массиве;
// верните список строк в формате: страна, город, отель.

// const data = [
//   {
//     country: 'Russia',
//     city: 'Saint Petersburg',
//     hotel: 'Hotel Leopold',
//   },
//   {
//     country: 'Spain',
//     city: 'Santa Cruz de Tenerife',
//     hotel: 'Apartment Sunshine',
//   },
//   {
//     country: 'Slowakia',
//     city: 'Vysokie Tatry',
//     hotel: 'Villa Kunerad',
//   },
//   {
//     country: 'Germany',
//     city: 'Berlin',
//     hotel: 'Hostel Friendship',
//   },
//   {
//     country: 'Indonesia',
//     city: 'Bali',
//     hotel: 'Ubud Bali Resort&SPA',
//   },
//   {
//     country: 'Netherlands',
//     city: 'Rotterdam',
//     hotel: 'King Kong Hostel',
//   },
//   {
//     country: 'Marocco',
//     city: 'Ourika',
//     hotel: 'Rokoko Hotel',
//   },
//   {
//     country: 'Germany',
//     city: 'Berlin',
//     hotel: 'Hotel Rehberge Berlin Mitte',
//   },
// ];










// const re =/\D/;
// const str ='string';
// console.log(re.exec(str));


// Напишите функцию sum, которая возвращает сумму чисел следующим образом
//
// function sum(n1) {
//   if (Number.isNaN(n1)) {
//     console.log('вы ввели не число'); //не выводит
//   }
//   return (n2) => n1 + n2;
// }
//
// console.log(sum(5)(2));
// //
// // //*********************************************************************************
//
// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// const text1 = document.getElementById('text1');
// const text2 = document.getElementById('text2');
// const text3 = document.getElementById('text3');
//
// const nextColor = () => {
//   let i = 0;
//   return function (event) {
//     event.target.style.color = colors[i];
//     i++;
//     if (i > colors.length) {
//       i = 0;
//     }
//   };
// };
//
// const chengeColor1 = nextColor();
// const chengeColor2 = nextColor();
// const chengeColor3 = nextColor();
//
// text1.addEventListener('click', chengeColor1);
// text2.addEventListener('click', chengeColor2);
// text3.addEventListener('click', chengeColor3);
//
// //******************
// function getTypeNumner(num) {
//   if (num % 2 === 0) {
//     return 'Четное число:' + num;
//   }
//   return 'Nechетное число:' + num;
// }
// console.log(getTypeNumner(3));
//
// //************************
// function findSmallestInt(...nums) {
//   let smollestNum = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < smollestNum) {
//       smollestNum = nums[i];
//     }
//   }
//   return smollestNum;
// }
//
// console.log(findSmallestInt(10, 5, 4, 18, 6));
//
// //*****************
// function countVowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let glasn = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       if (str[i] === vowels[j]) {
//         glasn++;
//       }
//     }
//   }
//   console.log(glasn);
//   return glasn;
// }
//
// countVowels('street');
//
// //*****
// const summ = (n) => {
//   if (n !== 1) {
//     return n * summ(n - 1);
//   } else {
//     return 1;
//   }
// };
//
// console.log(summ(5));
