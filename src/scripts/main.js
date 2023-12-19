// Преобразование формата даты:
//     в переменной date лежит дата в формате '2020-11-26';
// преобразуйте эту дату в формат '26.11.2020';
// функция должна быть универсальной, т.е. принимать любую дату
// и приводить ее к поставленному в задании формату.

//Вариант 1 через регулярные выражения
const data1 = '2025-11-05';
//  const re =/[(\d)+\b-]+/; //без группы
//   const re = /(\d+)\b-(\d+)\b-(\d+)/ //with group
const re = /(?<year>\d+)\D(?<month>\d+)\D(?<day>\d+)/; //with name group
const revers = data1.replace(re, '$<day>.$<month>.$<year>');

console.log(revers);

//Вариант 2 через методы строк
const data2 = '2025-11-05';
const reversDate = function (str) {
  return str.split('-').reverse().join('.');
};

console.log(reversDate(data2));

// //Вариант 3
const data3 = '2025-11-05';
function revDate(str) {
  const arr = str.split('-');
  const arrRevers = arr.reverse();
  return arrRevers.join('.');
}

console.log(revDate(data3));

//вариант 4
const data4 = '2025-11-05';
function reversData(str) {
  const year = str.slice(0, 4);
  const month = str.slice(5, 7);
  const day = str.slice(-2);
  return day + '.' + month + '.' + year;
}

console.log(reversData(data4));

//Поиск объектов размещения:
// дан массив;
// напишите функцию поиска, которая будет принимать строку;
// по полученной строке найдите все совпадения в массиве;
// верните список строк в формате: страна, город, отель.

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function searchStr(array, word) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (data[i].country === word || data[i].city === word || data[i].hotel === word) {
      result.push(data[i].country + ' ' + data[i].city + ' ' + data[i].hotel);
    }
  }
  return result;
}

console.log(searchStr(data, 'Ourika'));
