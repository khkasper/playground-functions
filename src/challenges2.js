// Desafio 10
function techList(arrayTech, name) {
  
  //Setar array para conter as informações
  let array = [];
  
  //Após o reOrdenar o array final, após o retorno da função, em ordem alfabética
  arrayTech.sort();

  //Acessar as chaves do array de tecnologias informado
  for (let index in arrayTech) {
    //Inserir informações nesta chave 
    array.push({
    //Informações inseridas
    tech: arrayTech[index],
    name: name,
    });
  };
  //Condicional se vazio ou não
  if (array == 0) {
    return 'Vazio!';
  } else {
    return array;
  };
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Kristiano'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
