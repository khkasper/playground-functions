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
    return 'Array com tamanho incorreto.'
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores' 
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    let counter = 0;
    for (let key of array) {
      if (key === array[i]) {
        counter += 1
      }
      if (counter >= 3) {
      return 'não é possível gerar um número de telefone com esses valores'
      }
    }
  }
  return '(' + array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
}
generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs(lineA + lineB) <= lineC
      || Math.abs(lineA + lineC) <= lineB
      || Math.abs(lineB + lineC) <= lineA) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate() {
  // Z
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
