// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}
// console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// console.log(calcArea(10, 50))

// Desafio 3
function splitSentence(sentence) {
  let array = sentence.split(' ');
  return array;
}
// console.log(splitSentence('go Trybe'))

// Desafio 4
function concatName(array) {
  let first = array[0];
  let last = array[array.length -1];
  let concat = [last + " " + first];
  return concat;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties;
  return result;
}
// console.log(footballPoints(14, 8))

// Desafio 6
function highestCount(array) {

  //Verificar o maior número dentro do array e armazenar essa informação
  let higherNumber = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > higherNumber) {
      higherNumber = array[i];
    }
  }

  //Contador para ver quantas vezes o número armazenado anteriormente se repete
  let counter = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (higherNumber == array[i]) {
      counter += 1;
    }
  }
  return counter;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let c1M = cat1 - mouse;
  let c2M = cat2 - mouse;
  if (c1M < c2M) {
    return "cat1";
  } else if (c1M > c2M) {
    return "cat2";
  } else {
    return 'os gatos trombaram e o rato foge';
  }
}
// console.log(catAndMouse(1, 2, 3))

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
