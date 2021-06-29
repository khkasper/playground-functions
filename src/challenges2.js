// Desafio 10
function techList(arrayTech, name) {
  
  //Ordenar o array final em ordem alfabética
  arrayTech.sort();
  let array = [];//Setar array para conter as informações
  for (let index in arrayTech) {//Acessar as chaves do array das "tecnologias" informado
    array.push({//Inserir informações nesta chave
    tech: arrayTech[index],//Informações do array informado
    name: name,//Informações do nome solicitado
    });
  };
  if (array === 0) { //Condicional se vazio
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
