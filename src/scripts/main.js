// Напишите функцию sum, которая возвращает сумму чисел следующим образом

function sum(n1) {
  if (Number.isNaN(n1)) {
    console.log('вы ввели не число'); //не выводит
  }
  return (n2) => n1 + n2;
}

console.log(sum(5)(2));
//
// //*********************************************************************************

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const nextColor = () => {
  let i = 0;
  return function (event) {
    event.target.style.color = colors[i];
    i++;
    if (i > colors.length) {
      i = 0;
    }
  };
};

const chengeColor1 = nextColor();
const chengeColor2 = nextColor();
const chengeColor3 = nextColor();

text1.addEventListener('click', chengeColor1);
text2.addEventListener('click', chengeColor2);
text3.addEventListener('click', chengeColor3);

//******************
function getTypeNumner(num) {
  if (num % 2 === 0) {
    return 'Четное число:' + num;
  }
  return 'Nechетное число:' + num;
}
console.log(getTypeNumner(3));

//************************
function findSmallestInt(...nums) {
  let smollestNum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smollestNum) {
      smollestNum = nums[i];
    }
  }
  return smollestNum;
}

console.log(findSmallestInt(10, 5, 4, 18, 6));

//*****************
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let glasn = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === vowels[j]) {
        glasn++;
      }
    }
  }
  console.log(glasn);
  return glasn;
}

countVowels('street');

//*****
const summ = (n) => {
  if (n !== 1) {
    return n * summ(n - 1);
  } else {
    return 1;
  }
};

console.log(summ(5));
