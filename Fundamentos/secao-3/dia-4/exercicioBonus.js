// Suponha que você esteja trabalhando em uma escola e precise 
// fazer algumas atualizações no sistema. Para isso, considere o seguinte código:
let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   Crie uma função para adicionar o turno da noite na lesson2. Essa função deve 
//   ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada 
//   e o valor dela. 

function adicionaNoite(obj, key, value) {
  obj[key] = value;
}
adicionaNoite(lesson2, 'turno', 'noite');
console.log(lesson2);
console.log();

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listKeys(obj) {
  return Object.keys(obj);  
}
console.log(listKeys(lesson1));
console.log();

//Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
function objectSize(obj) {
  return Object.keys(obj).length;
}
console.log(objectSize(lesson1));
console.log();

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listValue(obj) {
  return Object.values(obj);
}
console.log(listValue(lesson1));
console.log();

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
let allLessons = Object.assign({}, {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
});

console.log(allLessons);
console.log();

// Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
function numeroDeEstudantes(obj) {
  let total = 0;
  let keys = Object.keys(obj);
  for (let i in keys) {
    total += obj[keys[i]].numeroEstudantes;
  }
  return total;
}
console.log(numeroDeEstudantes(allLessons));
// Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto. 
function getValueByNumber(obj, number) {
  return Object.values(obj)[number];
}
console.log(getValueByNumber(lesson1, 2));
console.log();

//Crie uma função que verifique se o par chave/valor existe na função. 
//Essa função deve possuir três parâmetros:o objeto, o nome da chave e o valor dela.
function verificaPar (obj, key, value) {
  let entries = Object.entries(obj);
  let isEqual = false;
  for (let i in entries) {
    if (entries[i][0] === key && entries[i][1] === value) isEqual = true;
  }
  return isEqual
}
console.log(verificaPar(lesson2,'professor','Carlos'));

