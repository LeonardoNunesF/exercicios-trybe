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

// Crie uma função para adicionar o turno da noite na lesson2. 
// Essa função deve ter três parâmetros: o objeto a ser modificado, 
// a chave a ser adicionada e o valor dela.

function adicionaTurno(lesson, tipo, valor) {
    lesson[tipo] = valor;
}

adicionaTurno(lesson2, 'turno', 'noite');
console.log(lesson2);
console.log();

// Crie uma função para listar as keys de um objeto. 
// Essa função deve receber um objeto como parâmetro.

function showKeys (objeto) { 
    return Object.keys(objeto);
}
console.log(showKeys(lesson1));
console.log();

//Crie uma função para mostrar o tamanho de um objeto. 
//Essa função deve receber um objeto como parâmetro.

function showSize (objeto) {
    return Object.keys(objeto).length;
}
console.log(showSize(lesson1));
console.log();

// Crie uma função para listar os valores de um objeto. 
// Essa função deve receber um objeto como parâmetro.

function showValues (objeto) {
    return Object.values(objeto);
}
console.log(showValues(lesson1));
console.log();

// Crie um objeto de nome allLessons, que deve agrupar todas 
// as aulas por meio do Object.assign. Cada chave desse novo 
// objeto será uma aula, portanto essas chaves serão nomeadas 
// lesson1, lesson2 e lesson3.

let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
});
console.log(allLessons);
console.log();

// //Com base no objeto elaborado no tópico anterior, 
// crie uma função que retorne o número total de 
// estudantes em todas as aulas.

function countStudent (objeto) {
    let total = 0;
    let chave = Object.keys(objeto);

    for (index in chave) {
        total += objeto[chave[index]].numeroEstudantes;
    }
    return total;
}
console.log(countStudent(allLessons));

// Crie uma função que obtenha o valor da chave de 
// acordo com sua posição no objeto. 

function valPosition (objeto, valor) {
    return Object.values(objeto)[valor];
}   
console.log(valPosition(lesson1, 0));
console.log();

// Crie uma função que verifique se o par chave/valor 
// existe na função. Essa função deve possuir três parâmetros:
// o objeto, o nome da chave e o valor dela. 

function verificaChaVa (objeto, chave, valor) {
    let array = Object.entries(objeto);
    for (index in array) {
        if (array[index][0] === chave && array[index][1] === valor) {
        //if (Object.entries(objeto)[index][0] === chave && Object.entries(objeto)[index][1] === valor) {
            return true;
        }
    }
    return false;
}
console.log(verificaChaVa(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verificaChaVa(lesson3, 'materia', 'Maria Clara'));
// Output: false
