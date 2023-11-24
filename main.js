//6
function min(a, b) {
  if (a < b) {
    return a;
  } else if (a === b) {
    return 'Значения равны';
  } else {
    return b;
  }
}

const num1 = 25;
const num2 = 15;
console.log(min(num1, num2));

//тернарный оператор
const numb1 = 10;
const numb2 = 6;
console.log(numb1 < numb2 ? numb1 : numb2);

//arrow function expressions + if..else
const minim = (a, b) => {
  if (a < b) {
    return a;
  } else if (a === b) {
    return 'Значения равны';
  } else {
    return b;
  }
};

const number1 = 15;
const number2 = 15;
console.log(minim(number1, number2));

//function expression +if...else
const maxim = function (x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
};

const z = 26;
const v = 30;
console.log(maxim(z, v));

//arrow function expression
const max = (x, y) => {
  if (x > y) return x;
  else return y;
};

const n1 = 26,
  n2 = 30;
console.log(max(n1, n2));

//тернарный оператор
const x = 99;
const y = 101;
console.log(x > y ? x : y);

//7
const array = [5, 15, 10, 40, 38, 0, 65, 60, 71, 100];

function replay(notZero) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const int = notZero[i] / 10;
    if (notZero[i] === 0) {
      result.push('zero');
    } else if (Number.isInteger(int / 10)) {
      result.push(int / 10 + 'zero' + 'zero');
    } else if (Number.isInteger(int)) {
      result.push(int + 'zero');
    } else result.push(notZero[i]);
  }

  return result;
}

const arr1 = replay(array);
console.log(arr1);

//8
function palindrom(word) {
  word = word.toLowerCase();
  const reversed = word.toLowerCase().split('').reverse().join(''); //split делает массив/reverse генерирует слово справа на лево/возвращает в строку
  return word === reversed;
}

console.log(palindrom('Level'));
