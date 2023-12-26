//5
const palindrom = (str) => str.split('').reverse().join('') === str;

console.log(palindrom('шалаш'));

//6
const hotels = [
  // {
  //   name: 'Hotel Leopold',
  //   city: 'Saint Petersburg',
  //   country: 'Russia',
  // },
  // {
  //   name: 'Apartment Sunshine',
  //   city: 'Santa Cruz de Tenerife',
  //   country: 'Spain',
  // },
  // {
  //   name: 'Villa Kunerad',
  //   city: 'Vysokie Tatry',
  //   country: 'Slowakia',
  // },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  // {
  //   name: 'Radisson Blu Hotel',
  //   city: 'Kyiv',
  //   country: 'Ukraine',
  // },
  // {
  //   name: 'Paradise Hotel',
  //   city: 'Guadalupe',
  //   country: 'Mexico',
  // },
  // {
  //   name: 'Hotel Grindewald',
  //   city: 'Interlaken',
  //   country: 'Switzerland',
  // },
  // {
  //   name: 'The Andaman Resort',
  //   city: 'Port Dickson',
  //   country: 'Malaysia',
  // },
  // {
  //   name: 'Virgin Hotel',
  //   city: 'Chicago',
  //   country: 'USA',
  // },
  // {
  //   name: 'Grand Beach Resort',
  //   city: 'Dubai',
  //   country: 'United Arab Emirates',
  // },
  // {
  //   name: 'Shilla Stay',
  //   city: 'Seoul',
  //   country: 'South Korea',
  // },
  // {
  //   name: 'San Firenze Suites',
  //   city: 'Florence',
  //   country: 'Italy',
  // },
  // {
  //   name: 'The Andaman Resort',
  //   city: 'Port Dickson',
  //   country: 'Malaysia',
  // },
  // {
  //   name: 'Black Penny Villas',
  //   city: 'BTDC, Nuca Dua',
  //   country: 'Indonesia',
  // },
  // {
  //   name: 'Koko Hotel',
  //   city: 'Tokyo',
  //   country: 'Japan',
  // },
  // {
  //   name: 'Ramada Plaza',
  //   city: 'Istanbul',
  //   country: 'Turkey',
  // },
  // {
  //   name: 'Waikiki Resort Hotel',
  //   city: 'Hawaii',
  //   country: 'USA',
  // },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  // {
  //   name: 'Asma Suites',
  //   city: 'Santorini',
  //   country: 'Greece',
  // },
  // {
  //   name: 'Cityden Apartments',
  //   city: 'Amsterdam',
  //   country: 'Netherlands',
  // },
  // {
  //   name: 'Mandarin Oriental',
  //   city: 'Miami',
  //   country: 'USA',
  // },
  // {
  //   name: 'Concept Terrace Hotel',
  //   city: 'Rome',
  //   country: 'Italy',
  // },
  // {
  //   name: 'Ponta Mar Hotel',
  //   city: 'Fortaleza',
  //   country: 'Brazil',
  // },
  // {
  //   name: 'Four Seasons Hotel',
  //   city: 'Sydney',
  //   country: 'Australia',
  // },
  // {
  //   name: 'Le Meridien',
  //   city: 'Nice',
  //   country: 'France',
  // },
  // {
  //   name: 'Apart Neptun',
  //   city: 'Gdansk',
  //   country: 'Poland',
  // },
  // {
  //   name: 'Lux Isla',
  //   city: 'Ibiza',
  //   country: 'Spain',
  // },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  // {
  //   name: 'Leonardo Vienna',
  //   city: 'Vienna',
  //   country: 'Austria',
  // },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

//****************************************
const search = function (array, word) {
  const result = [];
  hotels.forEach((i) => {
    if (i.country === word || i.city === word || i.name === word) {
      result.push(i.country + ' ' + i.city + ' ' + i.name + ' ');
    }
  });
  return result;
};

console.log(search(hotels, 'Germany'));

//****************************************
// const word  = 'Germany';
// let result = [];
// hotels.forEach(i =>{
//   if (i.country===word || i.city===word || i.name===word){
//     result+= i.country + ' ' + i.city + ' ' + i.name + ',';
//   }
// });
// console.log(result);

//****************************************
// function string(array, word){
//   const result = [];
//   for (let i = 0; i<array.length; i++){
//     if (word === array[i].name || word === array[i].city || word === array[i].country){
//       result.push(array[i].country+ ' ' + array[i].city+ ' ' + array[i].name);
//     }
//   }
//   return result;
// }
//
// console.log(string(hotels,'Germany'));

// Поиск объектов размещения:
//     дан массив;
// напишите функцию поиска, которая будет принимать строку;
// по полученной строке найдите все совпадения в массиве по любому из полей;
// верните масcив строк в формате: страна, город, отель;
// зная, как работать с массивами, сократите вашу функцию, избавившись от цикла for.

//7.
// Сопоставьте страны с городами из массива:
//     дан массив;
// напишите функцию, которая выберет все уникальные страны и сопоставит с ними города;
// в консоли должен быть выведен примерно такой результат:
// {
//   Australia: ['Sydney'],
//       Germany: ['Berlin', 'Hamburg'],
//     Italy: ['Florence', 'Rome'],
//     USA: ['Chicago', 'Hawaii', 'Miami'],
//     Ukraine: ['Kyiv']
// }

const searchCountry = function (array) {
  const result = [];
  array.forEach((i) => {
    result.push(i.country + ':' + i.city);
  });
  return result;
  // const groupCountry = function (result) {
  //   const group = [];
  //   result.forEach((i) => {
  //     if (i.country === i.country) {
  //       group.push();
  //       console.log(group);
  //     }
  //   });
  //   return group;
  // };
  // console.log(groupCountry(result));
};
console.log(searchCountry(hotels));

// const serchCountry = function (array){
//   let result = [];
//   array.forEach((i) => {
//     result =i.country+ ':' +i.city;
//     console.log(result);
//   });
// };
// console.log(serchCountry(hotels));

// // Преобразование формата даты:
// //     в переменной date лежит дата в формате '2020-11-26';
// // преобразуйте эту дату в формат '26.11.2020';
// // функция должна быть универсальной, т.е. принимать любую дату
// // и приводить ее к поставленному в задании формату.
//
// //Вариант 1 через регулярные выражения
// const data1 = '2025-11-05';
// //  const re =/[(\d)+\b-]+/; //без группы
// //   const re = /(\d+)\b-(\d+)\b-(\d+)/ //with group
// const re = /(?<year>\d+)\D(?<month>\d+)\D(?<day>\d+)/; //with name group
// const revers = data1.replace(re, '$<day>.$<month>.$<year>');
//
// console.log(revers);
//
// //Вариант 2 через методы строк
// const data2 = '2025-11-05';
// const reversDate = function (str) {
//   return str.split('-').reverse().join('.');
// };
//
// console.log(reversDate(data2));
//
// // //Вариант 3
// const data3 = '2025-11-05';
// function revDate(str) {
//   const arr = str.split('-');
//   const arrRevers = arr.reverse();
//   return arrRevers.join('.');
// }
//
// console.log(revDate(data3));
//
// //вариант 4
// const data4 = '2025-11-05';
// function reversData(str) {
//   const year = str.slice(0, 4);
//   const month = str.slice(5, 7);
//   const day = str.slice(-2);
//   return day + '.' + month + '.' + year;
// }
//
// console.log(reversData(data4));
//
// //Поиск объектов размещения:
// // дан массив;
// // напишите функцию поиска, которая будет принимать строку;
// // по полученной строке найдите все совпадения в массиве;
// // верните список строк в формате: страна, город, отель.
//
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
//
// function searchStr(array, word) {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (
//       array[i].country === word ||
//       array[i].city === word ||
//       array[i].hotel === word
//     ) {
//       result.push(
//         array[i].country + ' ' + array[i].city + ' ' + array[i].hotel,
//       );
//     }
//   }
//   return result;
// }
//
// console.log(searchStr(data, 'Ourika'));

// Дополнительные задачки
function returnOne(str){
  return str[0];
}

console.log(returnOne('Mariya'));
//*****************убрать пробельные символы в начале и конце строки
function getNotBackspace(str){
  return str.trim();
}
console.log(getNotBackspace(' Hello world! '));
//*******************вернуть строку кот. повторяется 3 раза
function repeateStr(str,numb){
  return str.repeat(numb);
}
console.log(repeateStr('Mariya',3));
//******************фунц кот. удаляет первый и последний элемент
function sliceStr(str){
  return str.slice(1,-1);
}
console.log(sliceStr('Mariya'));
//*******************
function searchWord(str){
  return str.replaceAll('not','***');
}
console.log(searchWord('To be or not to be not not'));
//****************
function bigWord(str){
  return str.toUpperCase();
}

console.log(bigWord('Mariya'));
//**********************
function leveling(str){
 return str.split(',');
}

console.log(leveling('sasinovichmria@gmail.com, vladgurlenia@gmail.com, 1234567789@gmail.com'));