//probno
fetch('https://if-student-api.onrender.com/api/hotels/popular')
  .then((response) => response.json())
  .then((arr) => {
    const newCardsEl = document.querySelector('.homes__row');
    // newCardsEl.classList.add('homes__row');

    for (let i = 0; i < 4; i++) {
      const newCardEl = document.createElement('li');
      newCardEl.setAttribute('class', 'ítem-homes');
      newCardsEl.appendChild(newCardEl);

      const imgEl = document.createElement('img');
      imgEl.setAttribute('src', arr[i].imageUrl);
      imgEl.classList.add('item-homes__icon');
      newCardEl.appendChild(imgEl);

      const nameEl = document.createElement('h3');
      nameEl.textContent = arr[i].name;
      nameEl.classList.add('item-name');
      newCardEl.appendChild(nameEl);

      const countryEl = document.createElement('div');
      countryEl.classList.add('item-homes__country');
      countryEl.textContent = `${arr[i].city} ${arr[i].country}`;
      newCardEl.appendChild(countryEl);

      newCardEl.appendChild(nameEl);
    }
    // return newCardsEl;
    console.log(newCardsEl);

    // arr.forEach(el => el===4);
  })
  .catch((err) => {
    console.log('Fetch Error :-S', err);
  });

//при нажатии выплыл счетчик
const searchPeopleEl = document.getElementById('search-people');
searchPeopleEl.addEventListener('click', () => {
  document.querySelector('.search-lists').style.display = 'block';
});
//****************************   цвет кнопок +-   ******
const counterButtonEl = document.querySelectorAll('.counters-button');
counterButtonEl.forEach((but) => {
  but.addEventListener('click', () => {
    but.style.color = 'var(--accent-blue)';
    but.style.borderTop = '1px solid var(--accent-blue)';
    but.style.borderLeft = '1px solid var(--accent-blue)';
  });
});

const positiveAdultsEl = document.querySelector('.positive-adults');
const negativeAdultsEl = document.querySelector('.negative-adults');
const adultsStringEl = document.getElementById('adults'); //строка
const adultsEl = document.getElementById('adults-count'); //всплывающий блок

let value1 = 0;

function calcAdults() {
  adultsStringEl.textContent = value1;
  adultsEl.textContent = value1;
}

//счетчик для кол-ва взрослых
positiveAdultsEl.addEventListener('click', function () {
  if (value1 < 30) {
    value1 += 1;
    calcAdults();
  }
});

negativeAdultsEl.addEventListener('click', function () {
  if (value1 > 1) {
    value1 -= 1;
    calcAdults();
  }
});
//счетчик для кол-ва детей
const positiveChildrenEl = document.querySelector('.positive-children');
const negativeChildrenEl = document.querySelector('.negative-children');
const childrenStringEl = document.getElementById('children'); //строка
const childrenEl = document.getElementById('children-count'); //всплываю

let value2 = 0;

function calcChildren() {
  childrenStringEl.textContent = value2;
  childrenEl.textContent = value2;
}

positiveChildrenEl.addEventListener('click', function () {
  if (value2 < 10) {
    value2 += 1;
    calcChildren();
  }
});

// negativeChildrenEl.addEventListener('click', function (){
//   if (value2>0) {
//     value2 -= 1;
//     calcChildren();
//   }
// });

//доп окошко для ребенка
const infoChildrenEl = document.querySelector('.more-info-children');

positiveChildrenEl.addEventListener('click', () => {
  infoChildrenEl.classList.add('show-info-children');
});

// селектор для выбора возраста ребенка
const selectAgeEl = document.querySelector('.age-children');

// let age =0;
function addSelect() {
  const selectEl = document.createElement('select');
  selectEl.style.border = '1px solid var(--accent-blue)';
  selectEl.style.margin = '12px 0';
  selectEl.style.padding = '5px';
  selectEl.style.outline = 'none';

  for (let i = 0; i < 18; i++) {
    const optionEl = document.createElement('option');
    optionEl.value = i;
    optionEl.textContent = `${i} age old`;
    selectEl.appendChild(optionEl);
  }
  selectAgeEl.appendChild(selectEl);
}

positiveChildrenEl.addEventListener('click', () => {
  if (value2 > 1) {
    value2 += 1;
    infoChildrenEl.classList.add('show-info-children'); //????
  }
  addSelect();
});
negativeChildrenEl.addEventListener('click', () => {
  // calcChildren();
  if (value2 > 0) {
    value2 -= 1;
    calcChildren();
    selectAgeEl.removeChild(selectAgeEl.lastChild);
  }
  if (value2 === 0) {
    infoChildrenEl.classList.remove('show-info-children'); //??????
    // calcChildren();
  }
});

// selectAgeEl.addEventListener('click', ()=>{
//   if (value<10){
//     value +1;
//   }
// });

//счетчик для кол-ва комнат
const positiveRoomsEl = document.querySelector('.positive-rooms');
const negativeRoomsEl = document.querySelector('.negative-rooms');
const roomsStringEl = document.getElementById('rooms'); //строка
const roomsEl = document.getElementById('rooms-count'); //всплываю

let value3 = 0;

function calcRooms() {
  roomsStringEl.textContent = value2;
  roomsEl.textContent = value2;
}

positiveRoomsEl.addEventListener('click', function () {
  if (value3 < 10) {
    value3 += 1;
    calcRooms();
  }
});

negativeRoomsEl.addEventListener('click', function () {
  if (value3 > 0) {
    value3 -= 1;
    calcRooms();
  }
});

//**************************************
// String.prototype.toJadenCase = function () {
//   return  this.split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join('');
//
//
// };
// console.log(String.prototype.toJadenCase('How can mirrors be real if our eyes real'));

//******************************
// const stringToNumber = function(str){
//   if (typeof str === 'string'){
//     return Number(str);
//   }
//   // str = Number(str);
//
//   return null;
// };
// console.log(stringToNumber('1344'));

//***********************
// function positiveSum(arr) {
//   const positivesArr = arr.filter((el) => el > 0);
//   return positivesArr.reduce((acc, item) => acc + item, 0);
// }
//
// console.log(positiveSum([1, -4, 7, 12]));
