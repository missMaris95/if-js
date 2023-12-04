// Напишите функцию sum, которая возвращает сумму чисел следующим образом

function sum(n1) {
  if (Number.isNaN(n1)) {
    console.log('вы ввели не число'); //не выводит
  }
  return (n2) => n1 + n2;
}

console.log(sum(5)(2));

//*********************************************************************************


const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

function nextColor(){
    for (let i = 0; i<colors.length; i++){
        return event => {
            const e = event.target;
            e.style.color = colors[i];
            if (i >= colors.length){
                return i=0;
            }
            return [i++];
        };
    }
}

text1.addEventListener('click',nextColor());
text2.addEventListener('click',nextColor());
text3.addEventListener('click',nextColor());











// const text1 = document.getElementById('text1');
// const text2 = document.getElementById('text2');
// const text3 = document.getElementById('text3');
//
// text1.addEventListener('click',(event) =>{
//   event.target.style.color =chengeColor();
// });
// text2.addEventListener('click',(event) =>{
//   event.target.style.color ='magenta';
// });
// text3.addEventListener('click',(event) =>{
//   event.target.style.color ='magenta';
// });