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
  const isObject =(x) => x && typeof x === 'object';
  const isNull = (x)=> x ===null;

  let result = true;
  const unitedObjs = {...object1, ...object2};

  if (isNull(object1) || isNull(object2)){
    result = false;
  } else{
    for (const key in unitedObjs){
      if (isObject(object1[key]) || isObject(object2[key])) {
        result = deepEqual(object1[key] || {}, object2[key] || {});
      } else {
        result = Boolean(object1[key] === object2[key]);
      }
    }
  }
  return result;
}
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
//***************************************



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
