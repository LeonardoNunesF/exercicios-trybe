const verifyStringNumb = (name, age) => {
  if (!name || !age) {
    throw new Error("Todas as informações são necessárias");
  }

  if (typeof name !== "string" || typeof age !== "number") {
  }
};

const studentRegister = (name, age) => {
  try {
    verifyStringNumb(name, age);
  } catch (error) {
    return error.message;
  }
};
