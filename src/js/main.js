const data = [
  {
    id: '71ce9eac-e9b9-44f0-a342-9ff0b565f3b7',
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    id: 'aa560608-a879-48a7-80b6-deff2806b250',
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    id: '1d88fefe-edf1-4cda-844a-babbf29bb2b3',
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    id: 'a2bf824d-edd8-41f0-8b70-244334086ab4',
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    id: '4024535d-a498-4274-b7cb-f01ada962971',
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    id: 'e51e71f6-6baf-4493-b3ae-25dc27cdc238',
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    id: '87d2b966-2431-43f3-8c0d-2c8723474dfc',
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    id: '190221c6-b18f-4dba-97de-e35f0e14c023',
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

const newList = document.querySelector('.homes__row');
console.log(newList);
function fourCards(arr) {
  const firstFourHotel = arr.slice(0, 4);
  for (let i = 0; i < firstFourHotel.length; i++) {
    const newElList = document.createElement('li');
    console.log(newElList);
    newElList.setAttribute('class', 'item-homes');
    newList.appendChild(newElList);

    const newImgEl = document.createElement('img');
    newImgEl.setAttribute('class', 'item-homes__icon');
    newImgEl.setAttribute('src', arr[i].imageUrl);
    console.log(newImgEl);
    newElList.appendChild(newImgEl);

    const hotelEl = document.createElement('p');
    hotelEl.setAttribute('class', 'item-name');
    hotelEl.textContent = arr[i].name;
    // const cont = document.createTextNode(arr[i].name);
    // hotelEl.appendChild(cont);
    newElList.appendChild(hotelEl);

    const countryEl = document.createElement('p');
    countryEl.setAttribute('class', 'item-homes__country');
    countryEl.textContent = `${arr[i].city}, ${arr[i].country}`;
    // countryEl.textContent = arr[i].city + ',' + arr[i].country;
    newElList.appendChild(countryEl);
  }
}

console.log(fourCards(data));

//*************************************

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
function positiveSum(arr) {
  const positivesArr = arr.filter(el => el>0);
  return positivesArr.reduce((acc, item) => acc+item,0);
}

console.log(positiveSum([1,-4,7,12]));