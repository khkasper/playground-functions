// Desafio 10
function techList(arrayTech, name) {
  arrayTech.sort(); // Ordenar o array em ordem alfabética
  if (arrayTech.length === 0) { // Verificar se o array informado contém algo
    return 'Vazio!';
  }
  let array = []; // Variável para receber as informações
  for (let index in arrayTech) { // Irá acessar as chaves do array das "tecnologias"
    array.push({ // Inserir informações nesta chave
      tech: arrayTech[index], // Informações do array com as tecnologias informadas
      name: name, // Informações do nome solicitado
    });
  }
  return array; // Condicional de não vazio
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],'Kristiano'));

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    let counter = 0;
    for (let key of array) {
      if (key === array[i]) {
        counter += 1;
      }
      if (counter >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs(lineA + lineB) <= lineC ||
    Math.abs(lineA + lineC) <= lineB ||
    Math.abs(lineB + lineC) <= lineA) {
    return false;
  }
  return true;
}
// console.log(triangleCheck(20, 6, 7));

// Desafio 13
function hydrate(string) {
  // https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994 - comentário do "cletus"
  // https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript - comentário do "chineseducks"
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  // parseInt irá retornar um número ou 'Not a Number' (NaN). Se o numero for igual a 0 (false), não executa o código dentro do if. 
  // Se o número for diferente de 0, o JavaScript considera esse valor true e executa o if.
  // Se o argumento do parseInt for uma string que não seja um número, retorna false (NaN).
  let x = 0;
  let array = string.match(/\d+/g);
  for (let index = 0; index < array.length; index++) {
    if (parseInt(array[index]) > 0) {
      x = x + parseInt(array[index]);
    }
  }
  if (x === 1) {
    return `${x} copo de água`;
  }
  return `${x} copos de água`;
}
console.log(hydrate("1 cerveja, 5 whisky, 1 agua"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
