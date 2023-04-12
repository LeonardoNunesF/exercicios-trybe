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

let allLessons = Object.assign({}, {
lesson1: lesson1,
lesson2: lesson2,
lesson3: lesson3,
});

//Com o uso do objeto (allLessons) obtido nos exercícios anteriores, 
//crie uma função para contar o número de estudantes que assistiram às aulas de Matemática. 
function countMath(obj) {
    let total = 0;
    let keys = Object.keys(obj);
    for (i in keys) {
        if (obj[keys[i]].materia === 'Matemática') {
            total += obj[keys[i]].numeroEstudantes;
        }
    }
    return total;
}
console.log(countMath(allLessons));
console.log();

// Com o uso do objeto (allLessons) obtido nos exercícios anteriores, 
// crie uma função que retorne um objeto que represente o 
// relatório da pessoa instrutora, as aulas ministradas e o 
// número total de estudantes. A saída deverá ser a seguinte:
function getInfo(obj, nome){
    let allLessons = [];
    let numberStudent = 0;
    let values = Object.values(obj);
    for (i in values) {
        if (values[i].professor === nome) {
            allLessons.push(values[i].materia);
            numberStudent += values[i].numeroEstudantes;
        }
    }
    return { aulas: allLessons,
             estudantes: numberStudent
            }
}

function createReport(allLessons, nome) {
    let report = {};
    report.professor = nome;
    Object.assign(report, getInfo(allLessons, nome));
    return report;
}
console.log(createReport(allLessons, 'Maria Clara'));
