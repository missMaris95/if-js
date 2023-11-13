//6
let user = 'John Doe';
const student = 'Maris';

user = student;
// в переменнной юзер теперь данные стьюдентс

console.log(user);
console.log(student);

//7
let test = 1;

console.log((test += 1));

const n = '1';
console.log(test + n);
// мы просуммировали числовой и строчный оператор. в итоге они стали строчными

console.log(test);

console.log((test -= 1));
//??????

test = Boolean ( test );

console.log(test);

//8
let result = 1;
const sum = [2, 3, 5, 8];
for ( let i = 0; i < sum.length ; i++){
    result = result * sum[i] ;
    console.log( 'это ' + result);
}
console.log(result);

//9
//Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 5-ти, но меньше 10-ти.
const num = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < num.length; i++){
    if (num[i] < 10 && num[i] > 5){
        console.log(num[i] + '');
    }
}

//10
//Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. С помощью цикла for и оператора if выведите в консоль четные элементы массива.
let numb = [2, 5, 8, 15, 0, 6, 20, 3];
numb = numb.filter((n) => {return n !== 0;});
for (let i = 0; i < numb.length; i++ ) {
    if ( (numb[i] % 2) === 0 ){
        console.log(numb[i]);
    }
}

// const name = 'Якуб ';
// const surname = 'Колас';
//
// console.log(name + surname);

//дано
// const hello = 'привтсвую, ';
// const name = 'Янка ';
// const surname = 'Купала';
//
// console.log(hello + name +surname);
// //вывести в консоль 'Прывiтанне, Янка Купала!'

//дано
// const radius = 5;
//
// console.log(2 * radius * 3.14);
//вывести длину окружности (2πr)

//дано
// const a = 5;
// const b = 11;
//
// console.log( (a + b) / 2 );
//вывести среденее значение двух чисел

// let status = 140;
// if ( status >= 18 ) {
//   console.log( 'Привет' );
// }
//
//
// console.log( 'Приветствую' );
//если пользователь введет возраст до 18 - вывести: привет
//если пользователь введет возраст от 18 - вывести: здравствуйте

// const age = prompt('Ваш возраст?');
// if (age >= 18) {
//   alert ('привет');
// } else {
//   alert ('здравствуйте');
// }

// let number = 21 ;
// const status = ( number % 2)? 'Четное': 'Нечетное';
// if ( status !== 0){
//   console.log('Нечетное');
// } else {
//   console.log('Четное');
// }

// const num = prompt('Ваше число?');
// // const status = (num % 2);
//   if (num % 2 === 0) {
//     alert ('Вы ввели четное число');
//   } else {
//     alert ('Вы ввели нечетное число');
//   }

// const month = 5;
// let seasonName;
// switch (month){
//   case (12, 1, 2):
//     seasonName = 'Зима';
//     break;
//   case (3, 4, 5):
//     seasonName = 'Весна';
//     break;
//   case (6, 7, 8):
//     seasonName = 'Лето';
//     break;
//   case (9, 10, 11):
//     seasonName = 'Осень';
//     break;
//     default:
//     seasonName ='Некоректнй месяц';
// }
// console.log('Сейчас ' + seasonName);