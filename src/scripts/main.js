//homework 5. Напишите функция deepEqual, которая сможет сравнивать 2 объекта с разными
// уровнями вложенности. Например:
const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

function deepEqual(object1, object2) {
  const arrKey1 = Object.keys(object1);
  const arrKey2 = Object.keys(object2);

  if (arrKey1.length !== arrKey2.length) {
    //проверка на длинну массива
    return false;
  }

  if (typeof object1 !== 'object' || typeof object2 !== 'object') {
    //проверка на оба объекта являются объектами
    return false;
  }

  for (const key in object1){
    if (!(key in object2)){
      return false;
    }
    if (!deepEqual(object1[key], object2[key])){
       return false;
    }
    // if (!deepEqual((object1[key])[key], (object2[key])[key])){
    //   console.log((object1[key])[key]);
    //   // return false;
    // }
  }

  return true;
}
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));

//**********************************************
//Эта функция показывает что в Obj1 есть каие либо свойства********
// function isEmpty(object1){
//   for (const key in object1){
//     console.log(key);
//       return false;
//   }
//   return  true;
// }
// console.log(isEmpty(object1));
//*************************************************************
// let result1 =[];
// arr1.forEach(key => result1 +=key);
// console.log(result1);

// let result2 =[];
// arr2.forEach(key => result2 +=key);
// console.log(result2);

//найти сумму значений*****************************
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
//
// let sum = 0;
// for (let key in salaries){
//   sum += salaries[key];
// }
// console.log(sum);

//******************************************************
// let men = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
//
// function multiplyNumeric(obj) {
//   for(let key in obj){
//     if (typeof obj[key] == 'number'){
//        console.log(obj[key] *=2);
//     }
//   }
// }
// console.log(multiplyNumeric(men));
// //5******************************
// const palindrom = (str) => str.split('').reverse().join('') === str;
//
// console.log(palindrom('шалаш'));
//
// //6
// const hotels = [
//   {
//     name: 'Hotel Leopold',
//     city: 'Saint Petersburg',
//     country: 'Russia',
//   },
//   {
//     name: 'Apartment Sunshine',
//     city: 'Santa Cruz de Tenerife',
//     country: 'Spain',
//   },
//   {
//     name: 'Villa Kunerad',
//     city: 'Vysokie Tatry',
//     country: 'Slowakia',
//   },
//   {
//     name: 'Hostel Friendship',
//     city: 'Berlin',
//     country: 'Germany',
//   },
//   {
//     name: 'Steigenberger Hotel',
//     city: 'Hamburg',
//     country: 'Germany',
//   },
//   {
//     name: 'Radisson Blu Hotel',
//     city: 'Kyiv',
//     country: 'Ukraine',
//   },
//   {
//     name: 'Paradise Hotel',
//     city: 'Guadalupe',
//     country: 'Mexico',
//   },
//   {
//     name: 'Hotel Grindewald',
//     city: 'Interlaken',
//     country: 'Switzerland',
//   },
//   {
//     name: 'The Andaman Resort',
//     city: 'Port Dickson',
//     country: 'Malaysia',
//   },
//   {
//     name: 'Virgin Hotel',
//     city: 'Chicago',
//     country: 'USA',
//   },
//   {
//     name: 'Grand Beach Resort',
//     city: 'Dubai',
//     country: 'United Arab Emirates',
//   },
//   {
//     name: 'Shilla Stay',
//     city: 'Seoul',
//     country: 'South Korea',
//   },
//   {
//     name: 'San Firenze Suites',
//     city: 'Florence',
//     country: 'Italy',
//   },
//   {
//     name: 'The Andaman Resort',
//     city: 'Port Dickson',
//     country: 'Malaysia',
//   },
//   {
//     name: 'Black Penny Villas',
//     city: 'BTDC, Nuca Dua',
//     country: 'Indonesia',
//   },
//   {
//     name: 'Koko Hotel',
//     city: 'Tokyo',
//     country: 'Japan',
//   },
//   {
//     name: 'Ramada Plaza',
//     city: 'Istanbul',
//     country: 'Turkey',
//   },
//   {
//     name: 'Waikiki Resort Hotel',
//     city: 'Hawaii',
//     country: 'USA',
//   },
//   {
//     name: 'Puro Hotel',
//     city: 'Krakow',
//     country: 'Poland',
//   },
//   {
//     name: 'Asma Suites',
//     city: 'Santorini',
//     country: 'Greece',
//   },
//   {
//     name: 'Cityden Apartments',
//     city: 'Amsterdam',
//     country: 'Netherlands',
//   },
//   {
//     name: 'Mandarin Oriental',
//     city: 'Miami',
//     country: 'USA',
//   },
//   {
//     name: 'Concept Terrace Hotel',
//     city: 'Rome',
//     country: 'Italy',
//   },
//   {
//     name: 'Ponta Mar Hotel',
//     city: 'Fortaleza',
//     country: 'Brazil',
//   },
//   {
//     name: 'Four Seasons Hotel',
//     city: 'Sydney',
//     country: 'Australia',
//   },
//   {
//     name: 'Le Meridien',
//     city: 'Nice',
//     country: 'France',
//   },
//   {
//     name: 'Apart Neptun',
//     city: 'Gdansk',
//     country: 'Poland',
//   },
//   {
//     name: 'Lux Isla',
//     city: 'Ibiza',
//     country: 'Spain',
//   },
//   {
//     name: 'Nox Hostel',
//     city: 'London',
//     country: 'UK',
//   },
//   {
//     name: 'Leonardo Vienna',
//     city: 'Vienna',
//     country: 'Austria',
//   },
//   {
//     name: 'Adagio Aparthotel',
//     city: 'Edinburgh',
//     country: 'UK',
//   },
// ];
//
// //****************************************
// const search = function (array, word) {
//   const result = [];
//   hotels.forEach((i) => {
//     if (i.country === word || i.city === word || i.name === word) {
//       result.push(i.country + ' ' + i.city + ' ' + i.name + ' ');
//     }
//   });
//   return result;
// };
//
// console.log(search(hotels, 'Germany'));

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

//7.

// const secondArr = (array) => {
//   const countries = array.reduce((acc, item) => {
//     const result = { ...acc };
//     if (!result[item.country]) {
//       result[item.country] = [];
//     }
//     if (!result[item.country].includes(item.city)){
//       result[item.country].push(item.city);
//     }
//     return result;
//   });
//   return countries;
// };
//
// console.log(secondArr(hotels));

//8
// Календарный месяц:
// создайте функцию getCalendarMonth, которая принимает количество дней в месяце, количество дней в неделе и день недели,
// на который выпадает первый день месяца;
// свободные дни (до первого дня месяца и после последнего дня месяца, пока считаем, что в каждом месяце равное количество дней)
// заполните днями предыдущего месяца или последующего;
// выбросьте ошибку, если переданный день недели больше, чем количество дней.
// пример:

//const daysInMonth = 30;
//const daysInWeek = 7;
//const dayOfWeek = 4; // в моем примере понедельник равен 0. У вас может отличаться
// const calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);

// console.log(calendarMonth);
/* result:
[
  [27, 28, 29, 30, 1, 2, 3]
  [4, 5, 6, 7, 8, 9, 10]
  [11, 12, 13, 14, 15, 16, 17]
  [18, 19, 20, 21, 22, 23, 24]
  [25, 26, 27, 28, 29, 30, 1]
]
*/

// const daysInMonth = 30;+
// const daysInWeek = 7;+
// const dayOfWeek = 4;
// function getAr(days, week, dayOfWeek){
//     const sevenDay = [];
//     const newArr = new Array(days).fill(0).map((el,i) => i+1);
//     console.log(newArr);
//     const temp =[];
//      const arrInArr = newArr.map(() => {
//          return temp.concat(newArr.splice(0,dayOfWeek));
//      });
//      console.log(arrInArr);
//
//      function temps (arr,num){
//         const copyArr =[...arr];
//          console.log(copyArr);
//         return arr.splice(0,num);
//     }
//     console.log(temps(newArr,1));
//     // const arrInArr = newArr.map((el,i) => {
//     //     if (i===0){
//     //         return newArr.slice(0,dayOfWeek);
//     //     }
//     // });
//     // console.log(arrInArr);
//     // const numbArr = newArr.map((el,i,ar)=>{
//     //     const arrAr =[];
//     //     if (){
//     //         return newArr.slice(0,7);
//     //     }
//     // });
//     // console.log(numbArr);
// }
//
// console.log(getAr(30,4, 7));

// Дополнительные задачки
// function returnOne(str) {
//   return str[0];
// }
//
// console.log(returnOne('Mariya'));
// //*****************убрать пробельные символы в начале и конце строки
// function getNotBackspace(str) {
//   return str.trim();
// }
// console.log(getNotBackspace(' Hello world! '));
// //*******************вернуть строку кот. повторяется 3 раза
// function repeateStr(str, numb) {
//   return str.repeat(numb);
// }
// console.log(repeateStr('Mariya', 3));
// //******************фунц кот. удаляет первый и последний элемент
// function sliceStr(str) {
//   return str.slice(1, -1);
// }
// console.log(sliceStr('Mariya'));
// //*******************
// function searchWord(str) {
//   return str.replaceAll('not', '***');
// }
// console.log(searchWord('To be or not to be not not'));
// //****************
// function bigWord(str) {
//   return str.toUpperCase();
// }
// console.log(bigWord('Mariya'));
// //**********************
// function leveling(str) {
//   return str.split(',');
// }
// console.log(
//   leveling(
//     'sasinovichmria@gmail.com, vladgurlenia@gmail.com, 1234567789@gmail.com',
//   ),
// );
// //***************
// function isString(str) {
//   return typeof str === 'string';
// }
// console.log(isString('Mariya'));
// //***********
// function lightMail(url) {
//   return url.replace(/#.*/, '');
// }
// console.log(lightMail('https//:google.com#nrefimdcmojl461616fw'));
//
//
// function notRepet(str){
//   const arr = str.split(' ');
//   const newArr = arr.filter((elem, index, array) =>{
//     return array.indexOf(elem)=== index;
//   });
//   return newArr.join(' ');
// }
// console.log(notRepet('alfa betta betta gamma alfa alfa gamma betta'));
//
//
// function getNickName(arr, value){
//   return arr.indexOf(value);
//
// }
// console.log(getNickName([0,1,2,7,8,7,3,4,5],5));
//
// function multiply(arr){
//   const temp = [];
//   const newArr = arr.map((el, i) => {
//     return temp.concat(new Array(i+1).fill(el));
//   });
//     console.log(newArr);
//    return newArr.flat();
// }
// console.log(multiply(['a','b','c',null]));
//
// function bigNum(arr){
//   return arr.sort((a,b) => b-a ).slice(0,3);
// }
// console.log(bigNum([7,2,10,5,4,6,1,8,9,3]));
//
// function countPositiv(arr){
//  const positivArr = arr.filter(el => el>0);
//   return positivArr.length;
//
// }
// console.log(countPositiv([null,1,'elephant',-5, 8]));
