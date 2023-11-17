//6

//function declaration + if...else
// function min (a, b) {
//     if ( a < b ) {
//         return  a;
//     } else if (a === b ){
//         return 'Значения равны';
//     } else {
//         return b;
//     }
// }
//
// const num1 = 25;
// const num2 = 15;
// console.log(min(num1, num2));

//тернарный оператор
// const numb1 = 10;
// const numb2 = 6;
// console.log( numb1 < numb2? numb1: numb2 );

//arrow function expressions + if..else
// const min = (a, b) =>{
//     if ( a < b ) {
//         return  a;
//     } else if (a === b ){
//         return 'Значения равны';
//     } else {
//         return b;
//     }
// };
//
// const num1 = 15;
// const num2 = 15;
// console.log(min(num1, num2));


//function expression +if...else
// const max = function ( x,y ){
//     if ( x>y ) {
//         return x;
//     } else{
//         return y;
//     }
// };
//
// const x = 26;
// const y = 30;
// console.log( max (x,y) );

//arrow function expression
// const max = ( x,y ) => {
//     if ( x>y ) return x;
//     else return y;
// };
//
// const n1 = 26, n2 = 30;
// console.log( max ( n1, n2 ));

//тернарный оператор
// const x = 99;
// const y = 101;
// console.log( x>y? x: y );

//7
const array = [5, 15, 10, 40, 38, 0, 65, 60, 71, 100];
replay(array);


function replay(notZero){
    for (let i =0; i<array.length; i++){
        if (notZero[i]===0){
            notZero[i]='zero';
        } else if (notZero[i]%10 ===0){
            notZero[i]=notZero[i].splice(0,1,'zero');
            console.log(notZero[i]);
        }
    }
    console.log(array);
}





