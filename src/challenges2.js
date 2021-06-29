// Desafio 10
function techList(arrayTech, name) {
  
  //Ordenar o array final em ordem alfabética
  arrayTech.sort();

  //Setar array para conter as informações
  let array = [];

  //Acessar as chaves do array das "tecnologias" informado
  for (let index in arrayTech) {
    //Inserir informações nesta chave 
    array.push({
    //Informações inseridas
          //Informações do array informado
    tech: arrayTech[index],
          //Informações do nome solicitado
    name: name,
    });
  };
  //Condicional se vazio
  if (array == 0) {
    return 'Vazio!';
  } else {
    //Condicional de não vazio
    return array;
  };
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Kristiano'));

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
