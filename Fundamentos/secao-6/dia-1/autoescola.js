const verifyStringNumb = (name, age) => {
  if (!name || !age) {
    throw new Error("Todas as informações são necessárias");
  }

  if (typeof name !== "string" || typeof age !== "number") {
  }
};

const verifyAge = (age) => {
  if (age < 18) {
    throw new Error(
      "Ops, infelizmente nesse momento você não pode fazer as aulas"
    );
  }
};

const studentRegister = (name, age) => {
  try {
    verifyStringNumb(name, age);
    verifyAge(age);
    return `${name}, seja bem-vindo(a) à AuTrybe!`;
  } catch (error) {
    return error.message;
  }
};

console.log(studentRegister('Zeca', 23));
console.log(studentRegister('', 23));
console.log(studentRegister('Zeca'));
console.log(studentRegister(23, 'Zeca'));
console.log(studentRegister('Zecalo', 17));
