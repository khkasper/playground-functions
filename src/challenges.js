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
  let concat = last + "," + " " + first;
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
function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      array[index] = 'fizz';
    } else if (array[index] % 3 !== 0 && array[index] % 5 == 0) {
      array[index] = 'buzz';
    } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array[index] = 'fizzbuzz';
    } else {
      array[index] = 'bug!';
    }
  }
  return array;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9

  //https://www.w3schools.com/jsref/jsref_replace.asp
  //Substituir cada uma dos elementos selecionados ("g" pega todas dentro da string e "i" considera case sensive) por outro.

function encode(string) {

  let enc = '';
  enc = string.replace(/a/gi, 1);
  enc = enc.replace(/e/gi, "2");
  enc = enc.replace(/i/gi, "3");
  enc = enc.replace(/o/gi, "4");
  enc = enc.replace(/u/gi, "5");
  return enc;
}
// console.log(encode('hi there!'))

function decode(string) {

  let dec = '';
  dec = string.replace(/1/gi, "a");
  dec = dec.replace(/2/gi, "e");
  dec = dec.replace(/3/gi, "i");
  dec = dec.replace(/4/gi, "o");
  dec = dec.replace(/5/gi, "u");
  return dec;
  
}
// console.log(decode('h3 th2r2!'))

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
