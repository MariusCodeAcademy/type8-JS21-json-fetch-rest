const peopleObjs = [
  {
    name: 'Arananas',
    surname: 'Baras',
    age: 7,
    height: 110,
    weight: 40,
    sex: 'male',
  },
  {
    name: 'Ugne',
    surname: 'Pugne',
    age: 17,
    height: 170,
    weight: 60,
    sex: 'female',
  },
  {
    name: 'Saulius',
    surname: 'Bezda',
    age: 77,
    height: 165,
    weight: 90,
    sex: 'male',
  },
  {
    name: 'Kentas',
    surname: 'Bentas',
    age: 27,
    height: 166,
    weight: 40,
    sex: 'male',
  },
  {
    name: 'Sauja',
    surname: 'Mauja',
    age: 37,
    height: 165,
    weight: 55,
    sex: 'female',
  },
  {
    name: 'Nojus',
    surname: 'Beda',
    age: 39,
    height: 184,
    weight: 92,
    sex: 'male',
  },
  {
    name: 'Laras',
    surname: 'Makaule',
    age: 27,
    height: 192,
    weight: 88,
    sex: 'male',
  },
  {
    name: 'Fanta',
    surname: 'Firtaite',
    age: 17,
    height: 168,
    weight: 75,
    sex: 'female',
  },
];

const user1 = {
  name: 'James',
  age: 45,
  hasCar: true,
  score: null,
};
// const user2 = {
//   name: 'James',
//   age: 45,
//   hasCar: true,
//   score: null,
// };

// JSON
// JSON.stringify() paversti kintamaji i json formata

const u1JsonFormatu = JSON.stringify(user1);

console.log('user1 ===', user1);
console.log('u1JsonFormatu ===', u1JsonFormatu);

// is Json verciam i JS objektus masyvus ir tt
// JSON.parse()
const u1BackToJs = JSON.parse(u1JsonFormatu);

console.log('ar user1 yra lygus u1BackToJs', user1 === u1BackToJs);

// paverciam peopleObjs i json ir gauta json issaugom kaip people.json
const pplJson = JSON.stringify(peopleObjs);
console.log('pplJson ===', pplJson);
// atsiversti atgal is json i js ir isitikinti kad veikia
const pplBackToJs = JSON.parse(pplJson);
console.log('pplBackToJs ===', pplBackToJs);
