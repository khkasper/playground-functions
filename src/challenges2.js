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
function generatePhoneNumber() {
  
}

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
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
